import { Octokit } from '@octokit/rest';
import type { JobsFile } from './types';

const TOKEN = process.env.GITHUB_TOKEN;
const OWNER = process.env.GITHUB_OWNER;
const REPO = process.env.GITHUB_REPO;
const BRANCH = process.env.GITHUB_BRANCH || 'main';

export interface CommitResult {
  committed: boolean;
  added: number;
  removed: number;
  total: number;
  sha?: string;
}

export async function commitJobsFile(
  data: JobsFile,
  prev?: JobsFile | null,
): Promise<CommitResult> {
  if (!TOKEN || !OWNER || !REPO) {
    return {
      committed: false,
      added: 0,
      removed: 0,
      total: data.count,
    };
  }
  const octokit = new Octokit({ auth: TOKEN });
  const path = 'data/jobs.json';
  const content = Buffer.from(JSON.stringify(data, null, 2) + '\n').toString('base64');

  let sha: string | undefined;
  try {
    const existing = await octokit.repos.getContent({
      owner: OWNER,
      repo: REPO,
      path,
      ref: BRANCH,
    });
    if (!Array.isArray(existing.data) && 'sha' in existing.data) sha = existing.data.sha;
  } catch (err: unknown) {
    if ((err as { status?: number }).status !== 404) throw err;
  }

  const prevIds = new Set(prev?.jobs.map((j) => j.id) ?? []);
  const newIds = new Set(data.jobs.map((j) => j.id));
  const added = data.jobs.filter((j) => !prevIds.has(j.id)).length;
  const removed = (prev?.jobs ?? []).filter((j) => !newIds.has(j.id)).length;

  const today = new Date().toISOString().slice(0, 10);
  const message = `chore(jobs): refresh ${today} (+${added} -${removed})`;

  const res = await octokit.repos.createOrUpdateFileContents({
    owner: OWNER,
    repo: REPO,
    path,
    branch: BRANCH,
    message,
    content,
    sha,
  });

  return {
    committed: true,
    added,
    removed,
    total: data.count,
    sha: res.data.commit.sha,
  };
}
