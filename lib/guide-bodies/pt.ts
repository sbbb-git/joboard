export const pt: Record<string, { body: string; faqs?: Array<{ q: string; a: string }> }> = {
  'finding-a-remote-tech-job': {
    body: `A contratação remota em tecnologia amadureceu. As empresas que ainda publicam vagas verdadeiramente distribuídas em 2026 formam um conjunto menor e mais seletivo do que no pico de 2021, mas a barreira para se candidatar caiu: a maioria aceita candidatos de qualquer lugar dentro de fusos horários compatíveis.

## Onde procurar primeiro
Comece pelos agregadores que extraem dados diretamente dos sistemas de rastreamento de candidatos das empresas. A relação sinal-ruído é muito melhor em vagas originadas de Greenhouse, Lever ou Workday do que em quadros de vagas genéricos. As oito APIs que alimentam este site cobrem a maior parte desse catálogo.

## Personalizando a candidatura
Os gestores de contratação avaliam duas coisas em candidaturas remotas: comunicação escrita e julgamento assíncrono. Uma carta de apresentação curta e bem estruturada, que cite o trabalho recém-entregue pela equipe, supera em uma ordem de grandeza o envio em massa de um CV genérico.

## Expectativas de salário
Remoto não significa desconto. As empresas pagam de acordo com o mercado local do candidato ou com uma faixa fixa; as faixas em scale-ups bem financiadas permanecem entre 10 e 15 por cento dos equivalentes presenciais para engenheiros seniores.

## Fusos horários
O critério mais filtrado em 2026 é a sobreposição de fuso horário. Quatro horas de sobreposição com o hub central da empresa é o mínimo de trabalho para vagas de engenharia, e duas horas para vagas de dados como contribuidor individual.

## Preparação para a entrevista
Os processos de entrevista remota se estabilizaram em quatro a seis etapas. Espere uma triagem com recrutador, uma conversa com o gestor de contratação, duas a três etapas técnicas e uma etapa final de valores ou adequação à equipe. As avaliações de código deixaram de ser quebra-cabeças no estilo leetcode e passaram a sessões de pareamento sobre problemas realistas.

## Fechando a oferta
A conversa sobre remuneração em vagas remotas exige mais pesquisa do que em vagas presenciais. Peça a faixa antes de revelar seu alvo e verifique se a oferta é ajustada por localização.`,
    faqs: [
      { q: "Quanto tempo leva uma busca por emprego remoto em tecnologia em 2026?", a: "O tempo mediano até a oferta para um engenheiro experiente que conduz uma busca focada é de seis a dez semanas. Buscas em nível sênior e staff podem se estender a quatro meses dado o processo de entrevistas mais longo." },
      { q: "Empregos remotos em tecnologia pagam menos do que os equivalentes presenciais?", a: "Em scale-ups bem financiadas, as faixas totalmente remotas ficam entre 10 e 15 por cento dos equivalentes presenciais na mesma senioridade. Algumas empresas ainda aplicam descontos geográficos; muitas não." },
      { q: "Um portfólio é obrigatório para empregos remotos de engenharia?", a: "Não é estritamente obrigatório, mas um perfil público no GitHub com pelo menos um projeto substancial eleva a taxa de resposta de forma mensurável, particularmente em candidaturas de nível intermediário." },
    ],
  },
  'remote-developer-salary-guide': {
    body: `A maioria das vagas remotas agora publica uma faixa salarial. Lê-las corretamente importa mais do que negociar contra elas.

## O que os números significam
A faixa publicada é quase sempre o intervalo de contribuidor individual para um único nível. Uma vaga em 150 a 190 significa que a empresa contrata aquele nível dentro daquele intervalo, não que você pode negociar até 250 com alavancagem suficiente.

## Faixas de senioridade
Engenheiros juniores em empresas remote-first se concentram entre 70 e 110 mil USD. Engenheiros de nível intermediário ficam em 110 a 150. As faixas seniores vão de 150 a 220, com staff e principal chegando a 280 e além nos empregadores mais bem financiados.

## Participação acionária
As concessões de equity em ofertas remotas se comprimiram. Empresas em Série B e posteriores agora concedem 0,05 a 0,2 por cento para engenheiros seniores, com vesting ao longo de quatro anos.

## Moeda
As empresas pagam na moeda de sua sede por padrão. Ofertas em USD de empresas sediadas nos EUA são as mais comuns, em EUR de empresas da UE, em GBP do Reino Unido. A conversão acontece no nível do contratante ou do employer-of-record.

## Ajuste por localização
Cerca de metade das empresas remote-first dos EUA ainda aplica algum ajuste geográfico. Os níveis são tipicamente agrupados: cidades de nível 1 (SF, NYC) a 100 por cento, nível 2 (Austin, Seattle, Boston) a 90 a 95, nível 3 (a maioria das outras regiões metropolitanas dos EUA) a 80 a 90.`,
  },
  'how-to-become-a-remote-developer': {
    body: `Tornar-se um desenvolvedor empregável remotamente é um caminho diferente de tornar-se um desenvolvedor em geral. As habilidades que o mercado recompensa em vagas remotas enfatizam comunicação escrita e propriedade assíncrona, além de profundidade técnica.

## Fundação
Passe os primeiros seis a doze meses em um ecossistema com profundidade, em vez de experimentar vários. Os caminhos de conversão mais rápida para emprego remoto em 2026 são JavaScript ou TypeScript full-stack (com React e Node), Python com Django ou FastAPI para backend, ou Go para vagas com viés de plataforma.

## Construindo portfólio
Três projetos substanciais publicados de forma pública superam dez tutoriais concluídos. Cada um deve resolver um problema real, ter documentação clara e demonstrar prática de testes e deploy.

## Código aberto
Mesmo três pull requests aceitos em um projeto de código aberto reconhecido mudam materialmente a textura de uma candidatura.

## Primeiro emprego versus primeiro emprego remoto
O caminho mais rápido para um primeiro emprego remoto é, muitas vezes, um primeiro emprego não remoto. Seis a doze meses em qualquer ambiente de engenharia entregam o requisito não dito que a maioria das vagas remotas codifica: experiência prévia em produção.`,
  },
  'how-to-become-a-data-engineer': {
    body: `As vagas remotas de engenharia de dados se estabilizaram em torno de um conjunto claro de habilidades. O caminho para o emprego é mais curto do que para a engenharia de ML porque a função cruza com trabalho consolidado de analytics e engenharia de plataforma que existe há anos.

## Habilidades centrais
Fluência em SQL em nível avançado (funções de janela, CTEs, otimização de consultas). Python para scripting de pipelines e orquestração. Uma grande nuvem (AWS, GCP ou Azure) e um data warehouse (Snowflake ou BigQuery na maioria das vagas). dbt para transformação. Airflow ou Dagster para orquestração.

## Habilidades que diferenciam
Experiência com modelagem de dados, particularmente modelagem dimensional e dimensões que mudam lentamente, é o sinal sênior. A otimização de custos em data warehouses na nuvem está crescendo rapidamente em importância.

## Caminho
Muitos engenheiros de dados remotos vêm de backgrounds em analytics ou backend. Demonstrar propriedade de pipeline em produção, mesmo em um único projeto significativo, acelera a transição.`,
  },
  'how-to-become-an-ml-engineer': {
    body: `As vagas remotas de engenharia de ML estreitaram suas expectativas de habilidade desde 2023. A maioria das vagas espera experiência de implantação em produção, não credenciais de pesquisa.

## Habilidades centrais
Python e PyTorch são o básico. O conhecimento de implantação em produção (conteinerização, serving de modelos, monitoramento) importa mais do que a profundidade de pesquisa que dominava as rodadas de contratação anteriores.

## Especialização em LLM
As vagas em engenharia de LLM cresceram fortemente. Familiaridade com geração aumentada por recuperação, frameworks de avaliação, fluxos de fine-tuning e otimização de inferência separa as candidaturas de engenharia de LLM das candidaturas generalistas de ML.

## Caminho
Uma parcela significativa dos candidatos a engenharia de ML remota em 2026 veio de backgrounds de engenharia de software, e não de ciência de dados. O inverso também é comum, mas exige demonstrar profundidade em software de produção.`,
  },
  'how-to-become-a-devops-engineer': {
    body: `As vagas remotas de DevOps e SRE se concentram em torno de um stack técnico claro e de um número menor de preocupações filosóficas (cultura de resposta a incidentes, saúde da escala de plantão, disciplina de automação).

## Stack técnico
Kubernetes e uma grande nuvem (AWS é a mais comum, GCP e Azure ambas relevantes). Terraform para infraestrutura como código. Experiência com pipelines de CI/CD (GitHub Actions é o mais listado). Ferramentas de observabilidade (Prometheus, Grafana, Datadog).

## Programação
Go é a linguagem mais listada em vagas remotas de SRE, seguida por Python.

## Caminho
O caminho mais comum vem da engenharia de backend através da participação em times de plataforma. Backgrounds puramente operacionais cada vez mais exigem um componente substancial de engenharia de software para competir por vagas remotas seniores.`,
  },
  'how-to-become-a-frontend-developer': {
    body: `As vagas remotas de front-end continuam sendo a maior categoria de contratação na tecnologia remota. O caminho é bem documentado, mas competitivo no nível júnior.

## Stack central
TypeScript, React, Next.js, Tailwind. Fundamentos de CSS em nível acima do que a maioria dos currículos de bootcamp entrega. Familiaridade com acessibilidade agora é um requisito explícito na maioria das vagas seniores.

## Diferenciais
Contribuição para design systems e autoria no Storybook. Histórico de otimização de performance. Experiência de colaboração direta com designers.

## Caminho
Implantações públicas substanciais superam tutoriais concluídos tanto para taxa de resposta quanto para desempenho em entrevistas.`,
  },
  'how-to-become-a-backend-developer': {
    body: `As vagas remotas de backend têm grande volume, mas são mais fragmentadas entre ecossistemas de linguagem do que as de front-end. Escolher um único ecossistema e uma especialização em profundidade é a estratégia que funciona.

## Stacks
TypeScript com Node ou NestJS. Python com FastAPI ou Django. Go para backends com viés de plataforma. Java com Spring para o setor corporativo. Cada ecossistema tem vagas remotas suficientes para sustentar uma carreira.

## Habilidades além do framework
Design de banco de dados em nível além do uso de ORM. Conhecimento de sistemas distribuídos. Prática de design e versionamento de APIs. Experiência com observabilidade e plantão.

## Caminho
Um primeiro emprego de backend não remoto por um a dois anos continua sendo o conversor mais rápido para uma vaga remota sênior de backend.`,
  },
  'how-to-become-a-fullstack-developer': {
    body: `Full-stack continua sendo a categoria de vaga mais comum em empresas remote-first menores. A função exige amplitude, e o mercado de contratação recompensa a propriedade demonstrada de ponta a ponta.

## Habilidades centrais
React ou um grande framework de front-end. Node, Python ou Go no backend. SQL. Uma grande nuvem. À vontade para entregar uma funcionalidade da especificação ao deploy sem ajuda.

## O que os empregadores procuram
Histórias de propriedade completa, não listas de funcionalidades. Vagas seniores de full-stack selecionam por amplitude de propriedade em vez de especialização profunda em qualquer camada isolada.`,
  },
  'how-to-become-a-mobile-developer': {
    body: `As vagas remotas de mobile se dividem em iOS nativo, Android nativo e multiplataforma. Cada uma tem um mercado de contratação distinto.

## iOS nativo
Swift e SwiftUI. Familiaridade com UIKit para manutenção de código legado. Combine ou async/await para concorrência.

## Android nativo
Kotlin com Jetpack Compose. Coroutines para concorrência. Fluência em Material 3.

## Multiplataforma
Flutter domina as novas vagas multiplataforma desde 2023. React Native permanece forte em empresas com stacks web em React.

## Experiência com lojas de aplicativos
A publicação demonstrada em loja de aplicativos é o sinal isolado mais forte em uma candidatura de mobile.`,
  },
  'how-to-become-a-product-manager': {
    body: `A contratação remota de PM é seletiva, com a maioria das vagas exigindo experiência prévia como PM. O caminho de conversão a partir de backgrounds de engenharia ou design é bem trilhado.

## Habilidades centrais
Prática de entrevistas com clientes. Frameworks de roadmap e priorização. Comunicação escrita assíncrona em nível acima da maioria das funções de engenharia e design.

## Sinal sênior
Histórico de entregas. Resultados de negócio demonstrados e atrelados a decisões de produto.

## Caminho
As transições mais bem-sucedidas para o primeiro cargo de PM em 2026 vieram de funções seniores de engenharia ou design na mesma empresa.`,
  },
  'how-to-become-a-designer': {
    body: `As vagas remotas de design se concentram em design de produto, e não em design visual ou de marca. Fluência em Figma é universalmente esperada.

## Habilidades centrais
Figma em nível avançado (auto-layout, variantes, design tokens). Fluência em prototipagem. Experiência com design systems. Prática de pesquisa com usuários.

## Sinal sênior
Propriedade de design system. Habilidades de parceria multifuncional. Histórico de resultados de produto mensuráveis.`,
  },
  'digital-nomad-visa-portugal': {
    body: `O visto D8 de Portugal, lançado no final de 2022, é o caminho de nômade digital mais utilizado por trabalhadores remotos de tecnologia na Europa.

## Elegibilidade
Comprovação de trabalho remoto para um empregador não português ou como freelancer. Renda mensal mínima de cerca de quatro vezes o salário mínimo português (aproximadamente 3 280 EUR em 2026).

## Candidatura
Candidate-se no consulado português do seu país de residência. O processamento normalmente leva de 60 a 90 dias.

## Implicações fiscais
O regime fiscal NHR (Residente Não Habitual) foi substancialmente reformado em 2024. Novos candidatos agora se enquadram em um programa sucessor mais restrito que ainda oferece tratamento preferencial para atividades específicas de alto valor, incluindo a maior parte do trabalho de engenharia de software.

## Após a chegada
O visto se converte em autorização de residência na chegada. Os ciclos de renovação são de dois anos inicialmente, depois três.`,
    faqs: [
      { q: "Qual é a renda mínima para o visto D8?", a: "A partir de 2026, os candidatos devem comprovar renda mensal de aproximadamente quatro vezes o salário mínimo português, cerca de 3 280 EUR por mês." },
      { q: "Um contratante freelancer pode se qualificar para o D8?", a: "Sim. Contratos freelance com clientes não portugueses se qualificam, com a documentação adequada de renda recorrente." },
    ],
  },
  'digital-nomad-visa-spain': {
    body: `O Visto de Nômade Digital da Espanha foi lançado em janeiro de 2023 sob a Lei de Startups. Tornou-se um dos caminhos de nômade mais populares da Europa.

## Elegibilidade
Trabalho remoto para um empregador estrangeiro que opere há pelo menos um ano, ou trabalho freelance para clientes estrangeiros (a renda estrangeira deve ser de pelo menos 80 por cento do total). Renda mínima de cerca de 200 por cento do salário mínimo espanhol.

## Benefícios fiscais
Os titulares podem optar por um imposto fixo reduzido de 24 por cento sobre a renda de origem espanhola até 600 000 EUR pelos primeiros seis anos (a extensão da Lei Beckham para nômades).

## Candidatura
Candidate-se de dentro da Espanha em uma entrada de turista ou em um consulado espanhol no exterior. A aprovação normalmente chega em até 20 dias para candidaturas feitas no país.

## Família
Cônjuges e dependentes podem ser incluídos na mesma candidatura.`,
  },
  'digital-nomad-visa-germany': {
    body: `A Alemanha não possui um visto dedicado para nômades digitais em 2026. Dois caminhos adjacentes atendem aos trabalhadores remotos de tecnologia.

## Visto Freiberufler
Para engenheiros autônomos. Exige demonstrar demanda de clientes na Alemanha, conta bancária alemã e presença fiscal registrada.

## Blue Card
Para engenheiros empregados com uma oferta de emprego de uma empresa alemã. Processamento mais rápido e um caminho de 21 meses para a residência permanente, se os requisitos de idioma alemão forem cumpridos.

## Imposto
A Alemanha tributa a renda mundial dos residentes. A alíquota progressiva chega a 42 por cento em níveis de renda modestos para os padrões dos EUA, além do adicional de solidariedade e das contribuições de seguro de saúde.`,
  },
  'digital-nomad-visa-mexico': {
    body: `O México não possui um visto de nômade digital com marca própria, mas o visto de Residente Temporário cumpre o mesmo propósito e é amplamente usado por trabalhadores remotos de tecnologia baseados nos EUA.

## Elegibilidade
Comprovar renda mensal acima de aproximadamente 4 500 USD ou economias de aproximadamente 75 000 USD. Ambas devem ser sustentadas ao longo dos seis a doze meses anteriores em extratos bancários.

## Processo
Candidate-se em um consulado mexicano fora do México. Aprovação normalmente em duas a quatro semanas. Dentro de 30 dias após a chegada, troque pelo cartão de residência.

## Imposto
O visto de Residente Temporário não cria, por si só, residência fiscal. A residência fiscal exige passar mais de 183 dias por ano no México.`,
  },
  'digital-nomad-visa-georgia': {
    body: `A Geórgia oferece entrada sem visto por até um ano para cidadãos de cerca de 100 países, incluindo a maioria dos passaportes da UE e dos EUA. Isso fez de Tbilisi uma base de tecnologia remota de longa data.

## Status de Empreendedor Individual
Registrar-se como Empreendedor Individual com Status de Pequena Empresa qualifica a maior parte da renda freelance para uma alíquota de imposto de 1 por cento sobre o faturamento de até 500 000 GEL por ano.

## Serviços bancários
A abertura de conta em banco local é simples para residentes sem visto com comprovante de endereço.`,
  },
  'remote-work-taxes-eu': {
    body: `A residência fiscal na UE é determinada país a país, mas a maioria dos Estados-membros aplica testes semelhantes centrados na regra dos 183 dias e na localização da residência permanente e dos interesses pessoais.

## Emprego de uma empresa não pertencente à UE
Se o empregador não tem presença na UE, o trabalhador normalmente deve se registrar como autônomo ou usar um serviço de employer-of-record. A abordagem de employer-of-record simplifica os encargos sociais, mas reduz o líquido.

## Seguridade social
Os acordos bilaterais da UE/EEE coordenam a seguridade social entre fronteiras. O certificado A1 documenta para qual sistema de país o trabalhador contribui.

## Regimes especiais
Vários países da UE (Espanha, Itália, Portugal em forma mais restrita) oferecem regimes fiscais reduzidos para trabalhadores remotos que chegam ao país. Esses regimes podem reduzir materialmente o imposto efetivo nos primeiros cinco a dez anos de residência.`,
  },
  'remote-work-taxes-us': {
    body: `O imposto federal dos EUA trata o trabalho remoto como qualquer outro emprego: a renda do W-2 cai no mesmo balde independentemente do local de trabalho.

## Imposto estadual
A complicação é o imposto estadual. Trabalhar remotamente de um estado diferente do local do empregador pode criar obrigações fiscais em ambos, dependendo das regras de nexo de cada estado.

## Regra da conveniência do empregador
Alguns estados (Nova York, Pensilvânia, Delaware) aplicam a regra da conveniência do empregador, tributando trabalhadores remotos como se eles trabalhassem no local do empregador. Isso pode produzir dupla tributação que exige pedidos de crédito para ser resolvida.

## Cidadãos dos EUA residentes no exterior
Cidadãos dos EUA que trabalham remotamente do exterior ainda devem imposto dos EUA sobre a renda mundial. A Exclusão de Renda Auferida no Exterior (cerca de 130 000 USD em 2026) e o Crédito de Imposto Estrangeiro reduzem a dupla tributação.`,
  },
  'remote-work-equipment-deduction': {
    body: `O tratamento de equipamentos depende da estrutura de emprego.

## Funcionários W-2 nos EUA
As deduções federais de home office e de despesas de funcionário não reembolsadas permanecem indisponíveis até 2025 sob a TCJA. Alguns estados (Califórnia, Nova York) as permitem. A maioria dos empregadores favoráveis ao trabalho remoto reembolsa os equipamentos diretamente.

## Autônomos e freelancers
O equipamento é dedutível como despesa de negócio. Computadores e monitores normalmente depreciam ao longo de cinco anos ou se qualificam para a despesa imediata da Seção 179, dependendo da jurisdição.

## UE
A maioria das jurisdições da UE permite reembolso pelo empregador ou dedução para autônomos, com regras semelhantes.`,
  },
  'remote-work-timezone-strategies': {
    body: `Uma engenharia remota bem-sucedida entre fusos horários tem menos a ver com ferramentas do que com disciplina de agenda.

## A regra das quatro horas de sobreposição
Quatro horas de sobreposição com o fuso horário central da equipe é o mínimo de trabalho para funções de engenharia. Duas horas funcionam para contribuidores individuais que operam em grande parte de forma assíncrona; abaixo disso, a produtividade e a integração com a equipe degradam de forma mensurável.

## Reuniões âncora
Duas ou três reuniões âncora semanais na janela de sobreposição absorvem quase todas as necessidades síncronas na maioria das equipes remotas que funcionam bem.

## Documentação assíncrona
As decisões tomadas em reuniões síncronas devem ser registradas por escrito em até 24 horas. Essa única disciplina responde por boa parte da diferença entre equipes remotas que funcionam e as que se desgastam.

## Limites de agenda
Limites rígidos de agenda são mais fáceis de defender do que preferências flexíveis. A maioria das equipes maduras em trabalho remoto aceita reuniões recusadas sem negociação.`,
  },
  'remote-work-home-office-setup': {
    body: `Os retornos decrescentes começam mais cedo do que a maioria dos guias de gastos sugere.

## O que mais importa
Cadeira confortável (o gasto de maior alavancagem). Monitor na altura dos olhos. Câmera na altura dos olhos. Microfone próximo à boca. Banda larga estável.

## O que importa em segundo lugar
Sala silenciosa ou tratamento acústico. Controle de climatização. Mesa ajustável se você alterna entre sentar e ficar de pé.

## O que importa menos do que as pessoas pensam
Múltiplos monitores além do segundo. Teclados mecânicos. Periféricos RGB. Webcams de ponta acima do nível intermediário de 1080p.`,
  },
  'remote-work-async-communication': {
    body: `A comunicação assíncrona é uma habilidade que se aprende, tanto no nível individual quanto no de equipe.

## Escrever primeiro
Use por padrão um artefato escrito antes de agendar uma reunião. A maioria das decisões pode ser tomada sem reunião se o texto for claro.

## Documentos de decisão
Um documento de decisão curto com contexto, opções, recomendação e decisão converge discussões que, de outra forma, se arrastariam pelo chat por dias.

## Status, não daily
Um breve status escrito postado no início do dia substitui a maioria das dailies sem perda de produtividade mensurável.

## Expectativas de tempo de resposta
Definir normas de equipe sobre janelas de tempo de resposta (por exemplo, mesmo dia para chat, 24 horas para pedidos de revisão) reduz o imposto de interrupção constante do chat sempre ativo.`,
  },
  'best-laptops-for-remote-developers': {
    body: `A escolha de laptop para engenheiros remotos depende do stack e do padrão de viagem mais do que das especificações de benchmark.

## Macbook Pro 14 M4 Pro
O padrão para a maioria dos engenheiros de front-end, full-stack e produto em 2026. Duração de bateria, qualidade de construção e ferramental de desenvolvedor nativo em ARM já se estabilizaram.

## Macbook Air M4
O caminho mais rápido para uma configuração de desenvolvimento remoto competente. Adequado para a maior parte do trabalho web e de scripting. Fica aquém para builds locais pesados ou inferência local de LLM.

## Framework Laptop 13
A escolha mais forte com Linux nativo para engenheiros que querem reparabilidade e ferramental Linux-first.

## Lenovo Thinkpad X1 Carbon
O laptop corporativo mais recomendado para engenheiros que usam Windows ou fazem dual-boot com Linux.

## Dell XPS 14
Uma máquina capaz com Windows-first, comum em empregadores corporativos que distribuem frotas corporativas de Windows.`,
  },
  'best-tools-for-remote-developers': {
    body: `A convergência de ferramentas se estreitou em 2026. A maioria das equipes de engenharia remota bem-sucedidas se acomoda em um conjunto pequeno e previsível.

## Editor
VS Code ou Cursor para fluxos assistidos por IA. IDEs da JetBrains em equipes corporativas e para JVM e Python.

## Terminal
Warp, iTerm2 ou Ghostty. Tmux para sessões persistentes com múltiplos painéis.

## Notas
Obsidian, Notion ou Logseq. O cérebro compartilhado da equipe em muitas equipes remote-first fica no Notion.

## Comunicação
O Slack permanece dominante. Discord em empresas menores de ferramentas para desenvolvedores. Zoom e Google Meet para chamadas síncronas.

## Controle de versão
Git via GitHub para a maioria das equipes de engenharia remota.`,
  },
  'best-countries-for-remote-tech-workers': {
    body: `A escolha de país para um trabalhador remoto de tecnologia raramente é uma otimização de variável única. Os principais destinos negociam de forma diferente entre fricção de visto, carga tributária, custo de vida, qualidade da internet e fatores de estilo de vida.

## Portugal
Melhor para o caminho de residência na UE com uma rota fiscal de longo prazo crível. Lisboa e Porto oferecem ecossistemas de tecnologia reais.

## Espanha
Melhor para a extensão fiscal da Lei Beckham e o estilo de vida mediterrâneo. Madri e Barcelona têm os mercados locais de tecnologia mais profundos.

## México
Melhor para o alinhamento com o fuso horário dos EUA a um custo substancialmente menor. O caminho de Residente Temporário é simples.

## Estônia
Melhor para a configuração totalmente digital de negócios. A E-Residency simplifica o faturamento de clientes globais.

## Geórgia
Melhor para minimização de impostos e entrada de baixa fricção. Um ano sem visto, imposto de 1 por cento sobre o faturamento de pequenas empresas.

## Emirados Árabes Unidos
Melhor para um ambiente livre de impostos a um alto custo de vida. O Remote Work Visa simplifica estadias mais longas.

## Tailândia
Melhor para baixo custo de vida com fricção de visto modesta. O visto DTV de 2024 simplifica estadias mais longas.`,
  },
  'remote-job-cover-letter-templates': {
    body: `Cartas de apresentação genéricas elevam o volume de candidaturas, mas não a taxa de resposta. Os padrões que movem a taxa de resposta são curtos, específicos e atrelados a trabalho demonstrável.

## Estrutura
Abra com uma frase sobre por que esta empresa. Um parágrafo sobre trabalho relevante já entregue, com um resultado mensurável. Um parágrafo sobre a função específica e o que você abordaria primeiro. Encerre com disponibilidade e um link para um portfólio.

## Tamanho
Menos de 200 palavras. Recrutadores fazem leitura dinâmica, não leem por completo.

## O que evitar
Linguagem de entusiasmo genérico. Repetir o currículo. Afirmações de encaixe único sem especificidades.

## Personalização mínima
Citar o lançamento recente de produto da empresa, um post de blog ou um anúncio de contratação sinaliza atenção sem exigir conhecimento profundo de quem está dentro.`,
  },
  'remote-tech-interview-preparation': {
    body: `Os processos de entrevista remota em tecnologia convergiram para um padrão de quatro a seis etapas.

## Etapa 1: Triagem com recrutador
30 minutos. Confirmar o encaixe nos pontos básicos: expectativas de salário, localização, autorização de trabalho.

## Etapa 2: Gestor de contratação
45 minutos. Conversacional. Projetos passados, motivações e a função específica.

## Etapas 3 a 5: Técnicas
Mistura de design de sistemas, código e aprofundamentos específicos da equipe. O código ao vivo se deslocou para problemas no estilo de pareamento, em vez de quebra-cabeças de leetcode, na maioria das equipes remotas bem geridas.

## Etapa 6: Final
Frequentemente chamada de valores, cultura ou executiva. Cada vez mais é uma verificação de julgamento assíncrono e comunicação escrita para funções totalmente remotas.`,
  },
  'remote-job-salary-negotiation': {
    body: `A negociação salarial em ofertas remotas exige uma preparação diferente da de ofertas presenciais.

## Pesquisa de âncora
Use as faixas publicadas em empresas comparáveis. As oito APIs que alimentam este site cobrem a maior parte das faixas publicadas.

## Divulgação de localização
Algumas empresas ajustam ofertas com base na localização. Divulgue apenas quando perguntado e verifique se a oferta é ajustada por localização antes de fazer uma contraproposta.

## Remuneração total
O valor da concessão de equity em empresas privadas é altamente incerto. Desconte de acordo ao comparar ofertas entre diferentes estágios de financiamento.

## Padrão de contraproposta
Faça uma contraproposta uma vez, com raciocínio específico, e aceite a segunda oferta se ela estiver materialmente acima do seu mínimo. Múltiplas contrapropostas no mesmo nível tendem a endurecer o recrutador, em vez de mover a oferta.`,
  },
  'freelance-vs-employee-remote': {
    body: `A decisão entre freelance e funcionário mudou em 2026 para uma divisão mais equilibrada, depois da dominância do emprego entre 2018 e 2022 e da dominância dos contratantes em 2023.

## Renda
As diárias de freelance se estabilizaram em torno de 1,5 a 2 vezes a taxa anual equivalente como funcionário dividida pelos dias úteis. As taxas de contrato sênior permanecem mais altas em relação ao tempo integral em empresas que antes dependiam excessivamente de contratantes.

## Estabilidade
O emprego proporciona suavização de renda. A renda freelance tem variância materialmente maior.

## Benefícios
Seguro de saúde pago pelo empregador, contribuições para aposentadoria e equity tornam a remuneração total mais próxima do que os números de manchete sugerem.

## Imposto
O freelance permite mais deduções de despesas, mas normalmente paga mais em encargos sociais.

## Ferramental e processo
Algumas equipes não permitem que contratantes tenham acesso a determinados sistemas ou decisões. Isso pode afetar materialmente o desenvolvimento de carreira.`,
  },
  'remote-work-mental-health': {
    body: `O trabalho remoto isola por padrão. As pessoas que o sustentam por cinco ou dez anos tendem a compartilhar um pequeno conjunto de práticas.

## Estrutura diária
Um horário de início consistente e um horário de término rígido. Almoço feito longe da mesa.

## Movimento físico
Caminhadas ou exercícios diários em horários fixos.

## Âncoras sociais
Interações presenciais recorrentes fora do trabalho, agendadas com a mesma prioridade das reuniões.

## Viagens trimestrais ou tempo no escritório
A maioria das equipes maduras em trabalho remoto agora reserva orçamento para encontros periódicos da equipe. Os engenheiros que sustentam o trabalho remoto tendem a aproveitar esses encontros.`,
  },
  'ai-engineer-salary-2026': {
    body: `Os salários de engenharia de IA permaneceram em níveis premium ao longo de 2026, apesar do enfraquecimento mais amplo do mercado de tecnologia.

## Faixas seniores
Engenheiros seniores de IA em empresas remotas bem financiadas com sede nos EUA ficam em 220 a 320 mil USD de base, com remuneração total entre 300 e 500 mil incluindo equity.

## Nível intermediário
Engenheiros de IA de nível intermediário se concentram entre 150 e 220 mil USD de base em ofertas remotas. A diferença salarial para a engenharia de backend geral na mesma senioridade é de 30 a 50 por cento.

## Especialização em LLM
Funções dedicadas de engenharia de LLM comandam um adicional de 10 a 20 por cento acima da engenharia de IA generalista. Experiência com fine-tuning em produção e otimização de inferência impulsiona o prêmio.

## Faixas na UE
Empregadores europeus pagam de 130 a 200 mil EUR para engenharia de IA sênior, com a diferença em relação às faixas dos EUA persistente.`,
    faqs: [
      { q: "Qual é o salário mediano de um engenheiro de IA remoto em 2026?", a: "A remuneração total mediana entre as vagas remotas de engenharia de IA em 2026 é de aproximadamente 195 mil USD de base para níveis intermediário a sênior em empresas dos EUA bem financiadas." },
    ],
  },
  'remote-junior-developer-jobs': {
    body: `A contratação remota de desenvolvedores juniores apertou desde 2022. As empresas que ainda contratam totalmente remoto em nível júnior são um subconjunto menor do mercado mais amplo favorável ao trabalho remoto, mas elas existem.

## Onde elas contratam
Scale-ups maduras em trabalho remoto com programas formais de mentoria. Empresas próximas ao código aberto (ferramentas para desenvolvedores, infraestrutura, plataformas). Algumas startups com menos de 50 engenheiros.

## Habilidades que importam
Comunicação assíncrona demonstrável. Portfólio público com pelo menos três projetos substanciais publicados. Trabalho escrito (posts de blog, READMEs técnicos, PRs aceitos).

## Caminho
Muitos engenheiros que acabam trabalhando remotamente em nível júnior chegam lá por meio de uma temporada de seis a doze meses em uma empresa local, e depois fazem a transição. A fricção de talento em vagas totalmente remotas no nível júnior é alta o suficiente para que começar híbrido seja, muitas vezes, mais rápido.`,
  },
  'no-degree-remote-tech-jobs': {
    body: `A tendência de "diploma não obrigatório" na contratação em tecnologia suavizou ligeiramente desde 2022, mas o mercado subjacente permanece acessível.

## Funções onde não importa
Engenharia de front-end, full-stack em empresas menores, design, gestão de produto em startups. O histórico substitui as credenciais na maioria dessas funções.

## Funções onde ainda importa
Funções de pesquisa em ML e IA. Muitas grandes empresas corporativas mantêm requisitos de diploma.

## Substitutos
Contribuições demonstradas em código aberto. Projetos públicos substanciais publicados. Presença em escrita técnica ou palestras.

## Verificação
Muitas empresas passaram a usar explicitamente a linguagem "ou experiência equivalente". Isso é real, não um clichê.`,
  },
  'best-cities-digital-nomad-2026': {
    body: `Os rankings de cidades para nômades digitais se estabilizaram um pouco desde a reorganização pós-pandemia. Os principais destinos agora oferecem infraestrutura bem testada para trabalhadores remotos de tecnologia.

## Nível 1 (bem estabelecidos, serviço completo)
Lisboa, Cidade do México, Bali, Chiang Mai, Medellín. Cada um tem comunidades densas de expatriados de tecnologia remota, cenas de coworking estabelecidas e caminhos de visto bem documentados.

## Nível 2 (crescendo rápido)
Tbilisi, Buenos Aires, Cidade do Cabo, Tallinn, Budapeste. Custos mais baixos, comunidades menores, infraestrutura menos madura.

## Escolhendo
Faça a correspondência por fuso horário (a maioria dos trabalhadores remotos ancorados nos EUA prefere a América Latina; os ancorados na UE preferem a Europa mediterrânea). Depois, por custo de vida e fricção de visto.`,
  },
  'remote-work-visa-comparison-2026': {
    body: `Dezenas de países agora oferecem vistos dedicados de trabalho remoto. As compensações entre eles raramente se resumem a uma única variável.

## Limiares de renda
Portugal D8: ~3 280 EUR/mês. Espanha DNV: ~2 760 EUR/mês. México Residente Temporário: ~4 500 USD/mês. Estônia DNV: ~3 504 EUR/mês. Emirados Árabes Unidos Remote: 3 500 USD/mês. Grécia DNV: ~3 500 EUR/mês.

## Duração
Portugal D8: 2 anos renováveis até 5, depois permanente. Espanha DNV: 3 anos renováveis. México TR: 1 ano renovável até 4. Estônia DNV: 1 ano, sem renovação. Emirados Árabes Unidos Remote: 1 ano renovável.

## Caminho fiscal
Portugal tem o regime fiscal preferencial mais forte para o longo prazo. A extensão da Lei Beckham da Espanha dura 6 anos. O México exige residência de 183 dias para efeitos fiscais.

## Família
A maioria permite cônjuge e dependentes. México, Espanha e Portugal são os mais favoráveis à família.`,
  },
  'best-time-to-look-for-remote-jobs': {
    body: `A contratação remota segue o ciclo mais amplo de contratação em engenharia, com pequenas diferenças.

## Meses mais fortes
Janeiro e fevereiro. As empresas atingem novos orçamentos de headcount. A maioria das novas requisições abre nessa janela.

## Segundo pico
Setembro e outubro. Ciclo de volta aos negócios após o verão. Forte para contratação sênior.

## Meses lentos
Meados de julho a meados de agosto (desaceleração do verão). Meados de dezembro ao início de janeiro (feriados).

## A contratação assíncrona continua o ano todo
Diferentemente da contratação tradicional de escritório, a contratação totalmente remota tem menos sazonalidade. Vagas remotas seniores são preenchidas de forma mais uniforme ao longo do ano porque, de qualquer forma, exigem buscas mais longas.`,
  },
  'remote-tech-job-rejection-recovery': {
    body: `A maioria das buscas por emprego remoto envolve múltiplas rejeições. O diferencial entre buscas bem-sucedidas e malsucedidas é a velocidade de recuperação, não o encaixe inicial.

## Os números
Uma busca típica de engenharia remota por um profissional experiente envolve de 80 a 150 candidaturas, 10 a 25 entrevistas de primeira etapa, 4 a 8 processos completos, 1 a 3 ofertas.

## Após uma rejeição
Peça feedback específico. A maioria das empresas oferece pouco, mas as que oferecem dão os pontos de dados de maior sinal na busca.

## Reconhecimento de padrões
A cada 10 rejeições, faça uma auditoria. As triagens com recrutadores estão convertendo? E as etapas técnicas? E as etapas finais? O gargalo se desloca.

## Disciplina mental
A taxa de rejeição é alta o suficiente para que levar cada uma para o lado pessoal se acumule em uma fadiga que encerra a busca. Trate cada uma como dado, não como veredito.`,
  },
  'remote-tech-jobs-with-stock-options': {
    body: `As concessões de equity em ofertas remotas se comprimiram em 2023 e 2024 e se recuperaram parcialmente desde então. As empresas que ainda concedem equity significativa remotamente se concentram em categorias identificáveis.

## Scale-ups pré-IPO
Empresas de Série B a F continuam sendo a fonte mais forte de concessões significativas de equity para engenheiros remotos. As concessões seniores de equity nesse estágio normalmente fazem vesting ao longo de quatro anos.

## Empresas de capital aberto
As concessões de RSU em empresas de capital aberto favoráveis ao trabalho remoto são renda real. As concessões seniores comumente se concentram entre 100 e 400 mil USD por ano com vesting ao longo de quatro anos.

## Startups
As concessões de equity em pré-seed e seed para funcionários remotos normalmente são pequenas demais para serem avaliadas de forma significativa, apesar dos números percentuais.

## Verificação
Sempre verifique o preço de exercício, o total de opções em circulação e o preço atual das ações preferenciais antes de tratar uma concessão de equity como remuneração material.`,
  },
  'best-resume-format-remote-tech': {
    body: `As convenções de currículo para candidaturas remotas em tecnologia convergiram para um conjunto claro de práticas.

## Tamanho
Uma página para engenheiros com menos de cinco anos de experiência. Duas páginas no máximo para candidatos sênior e staff.

## Estrutura
Histórico de trabalho em ordem cronológica inversa. Seção de habilidades no topo ou na coluna direita. Educação na parte inferior.

## O que incluir
Linhas de impacto quantificado em cada função. Tecnologias concretas utilizadas. Links públicos (GitHub, portfólio).

## O que remover
Declarações de objetivo. Referências. Fotos pessoais. Funções iniciais de carreira não relacionadas para candidatos seniores.

## Formato
PDF, não Word. Tipografia simples, escuro sobre claro. Legível por ATS (sem gráficos, colunas que são lidas corretamente).`,
  },
  'remote-tech-recruiter-outreach': {
    body: `O volume de contato de recrutadores permaneceu alto ao longo de 2026 para engenheiros remotos de nível intermediário e sênior. Filtre e converta de forma eficiente.

## Primeiro filtro
Verificação de cinco segundos: isto é uma empresa real, uma função real e um encaixe real?

## Padrões de resposta
Para encaixes reais: uma resposta curta de interesse com disponibilidade. Para encaixes incertos: faça três perguntas (faixa de remuneração, tamanho da equipe, política de trabalho remoto) antes de se comprometer.

## Quando não responder
Clichês genéricos de "ótima oportunidade" sem especificidades da função. Recrutadores que se recusam a nomear o cliente. Contatos em massa sem personalização.

## Construindo um pipeline de recrutadores
Um pequeno número de recrutadores especializados no seu stack e senioridade se tornam relacionamentos de alto valor. Invista em 3 a 5 desses relacionamentos ao longo de um horizonte de 12 meses.`,
  },
  'best-time-zones-for-remote-tech-workers': {
    body: `A escolha de fuso horário para engenheiros remotos é mais limitada do que os candidatos costumam imaginar.

## Empresas ancoradas nos EUA
A maioria das empresas remote-first com sede nos EUA exige pelo menos quatro horas de sobreposição com o horário do Pacífico ou do Leste dos EUA. Isso corresponde a horários de trabalho de aproximadamente UTC-8 até UTC+3 no máximo.

## Empresas ancoradas na UE
Empresas com sede na UE normalmente esperam sobreposição com o CET. UTC-4 a UTC+5 é a faixa de trabalho.

## Empresas ancoradas na Ásia
Conjunto menor. Empresas baseadas em Singapura frequentemente aceitam candidatos de UTC+5 a UTC+11.

## Escolhendo uma base
Se o alvo são empregadores dos EUA: fique a oeste de UTC+3. Se o alvo é a UE: qualquer lugar de UTC-4 a UTC+5 funciona. Contratações verdadeiramente globais (de qualquer lugar do mundo) continuam sendo uma minoria das vagas remotas.`,
  },
  'remote-tech-portfolio-projects': {
    body: `Projetos de portfólio funcionam como filtros. Os que elevam a taxa de resposta compartilham características que muitas vezes não são as que os candidatos intuem.

## O que converte
Implantações substanciais resolvendo problemas reais, com documentação que mostra as decisões e seus tradeoffs. Contribuições de código aberto a projetos reconhecidos. Textos técnicos explicando trabalho entregue em funções anteriores (dentro dos limites de NDA).

## O que não converte
Clones de tutoriais (apps de tarefas, apps de clima). Blog pessoal com conteúdo raso. Projetos paralelos sem usuários.

## Volume versus profundidade
Um projeto substancial (seis meses de trabalho, usuários reais) supera consistentemente cinco clones de tutorial nos dados de triagem.

## Visibilidade pública
O benefício de um portfólio é, em parte, que ele é lido. Projetos enterrados no GitHub sem tráfego geram menos sinal do que os mesmos projetos com visibilidade até modesta (algumas centenas de estrelas no GitHub ou usuários ativos).`,
  },
  'remote-developer-interview-prep': {
    body: `Os processos de entrevista de engenharia remota se estabilizaram em torno de um padrão claro. A preparação compensa mais nas etapas que têm o maior poder preditivo para a decisão de contratação.

## A etapa que decide
A terceira ou quarta etapa (o pareamento técnico profundo) carrega aproximadamente metade do sinal de contratação. Gaste o maior tempo de preparação nesse formato.

## O que mudou em 2026
O código ao vivo passou de quebra-cabeças no estilo leetcode para sessões realistas de pareamento. A maioria das entrevistas seniores agora usa um problema deliberadamente ambíguo, com a conversa como o sinal principal.

## Etapas de design de sistemas
Candidatos sênior e staff quase sempre recebem uma. Prepare-se em dois eixos: desenhar tradeoffs com clareza e fazer perguntas esclarecedoras incisivas antes de desenhar qualquer coisa.

## Sinal comportamental
Empresas favoráveis ao assíncrono investigam a fundo a colaboração passada por meio de exemplos específicos. Prepare três histórias por tema comum (conflito, ambiguidade, propriedade) atreladas a trabalho entregue.

## Etapa final
Cada vez mais uma verificação da comunicação escrita. Espere um exercício de resposta escrita ou um relato verbal de como você documentaria uma decisão técnica recente.`,
  },
  'remote-job-counter-offer-playbook': {
    body: `A contraproposta é um ponto de decisão com impacto desproporcional na remuneração total ao longo de um horizonte de vários anos. Trate-a como uma única interação de alta alavancagem.

## Faça a contraproposta uma vez
Faça a contraproposta uma vez com raciocínio específico, e então aceite a segunda oferta se ela estiver materialmente acima do seu mínimo. Contrapropostas repetidas tendem a endurecer o recrutador, em vez de mover a oferta.

## Sobre o que fazer a contraproposta
O dinheiro é a alavanca mais fácil de o recrutador mover. As concessões de equity em empresas privadas se movem com menos frequência, mas de forma mais significativa quando o fazem. Benefícios (férias, orçamento de equipamentos, orçamento de aprendizado) costumam sair de um balde diferente e podem se somar ao dinheiro.

## Pesquisa de ancoragem
Use as faixas publicadas em empresas comparáveis. Cite claramente a faixa de origem. Afirmações vagas de "taxa de mercado" não movem ofertas.

## Quando recusar
Se a diferença entre a oferta e o seu mínimo for de mais de 15 a 20 por cento e o recrutador não conseguir fechá-la, a oferta está genuinamente abaixo do mercado e a empresa provavelmente não consegue ajustar. Recusar com elegância preserva o relacionamento.`,
  },
  'async-vs-sync-standup': {
    body: `A maioria das equipes de engenharia remota que funcionam bem se acomodou em dailies assíncronas e escritas. As equipes que ainda mantêm dailies síncronas diárias se dividem em dois grupos: as que realmente precisam delas e as que não questionaram o hábito.

## Quando o síncrono ganha
Equipes com muitos juniores. Equipes com incidentes ativos. Equipes cuja sobreposição de fuso horário é ampla o suficiente para que a reunião seja barata.

## Quando o assíncrono ganha
Equipes de contribuidores individuais seniores. Equipes em mais de quatro fusos horários. Equipes cujo trabalho é em sua maior parte de profundidade como contribuidor individual, em vez de coordenação.

## O formato assíncrono que funciona
Uma mensagem curta em um canal compartilhado: o que entreguei ontem, o que vou entregar hoje, bloqueios. Lida dentro do horário de trabalho por quem precisar lê-la. Comentários inline, se relevante.

## O que não funciona
Daily assíncrona que ninguém lê. Daily síncrona que existe por hábito. Ambas são sorvedouros silenciosos de produtividade.`,
  },
  'how-to-pitch-remote-to-employer': {
    body: `Para muitos trabalhadores de tecnologia, o caminho mais rápido para o remoto é a empresa em que já trabalham. A conversão tem sucesso ou fracasso muito mais pelo enquadramento do que pelo pedido em si.

## Comece pela produtividade, não pela preferência
Enquadre a mudança como uma decisão de produtividade (tempo de foco, menos deslocamento, mais trabalho profundo) antes de qualquer razão de estilo de vida. Razões de estilo de vida caem mal com a maioria dos gestores.

## Escolha o momento
Peça depois de uma vitória clara. No momento da avaliação de desempenho, após entregar uma funcionalidade importante ou logo após uma promoção. Evite pedir durante períodos de estresse ou enquanto mudanças organizacionais estão pendentes.

## Proponha um período de teste
Um período de teste de três meses converte com mais frequência do que um pedido permanente. O teste reduz o risco percebido pelo gestor em 90 por cento.

## Tenha um plano alternativo
Híbrido (um a dois dias remotos por semana) é um meio-termo comum que ainda muda significativamente a vida diária. Entrar na conversa com isso em mente ajuda na negociação.`,
  },
  'remote-mental-health-isolation': {
    body: `O trabalho totalmente remoto isola por padrão. Os engenheiros que o sustentam por cinco e dez anos tendem a compartilhar um pequeno conjunto de hábitos que parecem pouco impressionantes isoladamente, mas que se acumulam com força.

## Âncoras diárias
Um horário de início consistente. Um horário de término consistente. Almoço feito longe da mesa. Nada disso é opcional depois do primeiro ano de trabalho remoto.

## Âncoras semanais
Duas ou três interações presenciais recorrentes fora do trabalho. Uma chamada semanal com um amigo que não seja colega de trabalho. Uma atividade física compartilhada (academia, esporte, hobby) com horários definidos.

## Detecte cedo
O burnout por isolamento não se parece com o burnout por excesso de trabalho. Parece um declínio de produtividade ao longo de semanas, pavor de reuniões que antes pareciam neutras, ansiedade social se infiltrando até nas reações do Slack. Nomeá-lo cedo importa.

## Encontros de equipe
A maioria das empresas maduras em trabalho remoto reserva orçamento para semanas presenciais periódicas com a equipe. Os engenheiros que sustentam o trabalho remoto tendem a comparecer a esses encontros mesmo quando é inconveniente. A relação sinal-ruído de três dias presenciais é excepcional.`,
  },
  'remote-equipment-stipend-negotiation': {
    body: `A maioria das empresas maduras em trabalho remoto reserva orçamento para a configuração do home office. As faixas e estruturas variam muito, e perguntar explicitamente no momento da assinatura rende um valor adicional significativo.

## Baldes comuns em 2026
Orçamento único de equipamentos no início: 1 500 a 3 500 USD. Orçamento anual de reposição: 500 a 1 500. Auxílio mensal de internet ou coworking: 50 a 150. Orçamento anual de aprendizado: 1 000 a 3 000. Orçamento anual de encontros de equipe: separado, frequentemente 2 000 a 4 000 por engenheiro.

## O que pedir
Peça na fase da oferta, não depois de começar. Traga números específicos de ofertas publicamente documentadas em empresas comparáveis. A maioria dos recrutadores consegue esticar em pelo menos um desses baldes, mesmo quando o dinheiro está limitado.

## O que pular
Benefícios com código tributário em países onde o reembolso do empregador é tributável (W-2 nos EUA, parte da UE). Estes acrescentam complexidade por um líquido limitado.`,
  },
  'remote-job-search-from-abroad': {
    body: `Procurar um emprego remoto a partir de um país com presença local limitada de empregadores de tecnologia exige uma abordagem deliberadamente diferente da busca equivalente a partir de um grande hub de tecnologia.

## Divulgação de fuso horário
Traga seu fuso horário à tona na primeira mensagem aos recrutadores. Escondê-lo leva a entrevistas desperdiçadas quando a empresa acaba precisando de uma sobreposição maior do que você pode oferecer.

## Empregadores dos EUA a partir de locais fora dos EUA
A maioria dos empregadores remotos com sede nos EUA só pode legalmente empregar contratantes ou usar um serviço de employer-of-record. Entenda qual deles se aplica a uma vaga antes de investir tempo.

## Empregadores da UE a partir de locais fora da UE
As empresas da UE têm mais flexibilidade para contratantes não pertencentes à UE, mas normalmente preferem residentes da UE. Os caminhos de nômade da Espanha, Portugal e Alemanha e o Blue Card lhe dão residência na UE sem exigir emprego local.

## Sinal de rede
Recomendações de alguém em quem o empregador confia superam preocupações de localização na maioria das empresas. Invista em duas a três apresentações calorosas por mês, em vez de 20 candidaturas a frio.`,
  },
  'second-passport-residency-remote-workers': {
    body: `Uma segunda residência ou passaporte compra opcionalidade. As opções realistas para um trabalhador remoto de tecnologia se enquadram em um pequeno número de categorias.

## Residência rápida (menos de 2 anos)
Visto D8 de Portugal (caminho para residência em 5 anos). DNV da Espanha (caminho em 5 anos). DNV da Grécia (caminho em 7 anos). Residência de nômade de Malta (renovável anualmente).

## Mais rápido, mas mais caro
Golden Visa dos Emirados Árabes Unidos (residência de 10 anos a partir de investimento de 540 000 AED). Golden Visa de Portugal (ainda possível por rotas selecionadas de investimento após as reformas de 2024).

## Caminhos de cidadania
A maioria dos vistos de nômade da UE leva à cidadania em 5 a 10 anos (Portugal 5, Espanha 10, Alemanha 8 com alemão C1). As cidadanias por investimento de St. Kitts e Granada custam de 150 a 250 000 USD e concedem um passaporte em 4 a 6 meses.

## Considerações fiscais
Manter uma segunda residência não altera, por si só, a residência fiscal. A residência fiscal depende do teste dos 183 dias mais o teste substantivo de residência na maioria das jurisdições.`,
  },
  'remote-onboarding-first-90-days': {
    body: `Os primeiros 90 dias em uma função de engenharia remota determinam se você se encaixa na equipe ou deriva para o isolamento. O padrão que funciona para a maioria dos engenheiros é estruturado e ligeiramente extrovertido.

## Primeiras duas semanas
Agende uma chamada de 30 minutos com cada colega direto e cada parceiro de interface. Faça as mesmas três perguntas: o que está quebrado, do que você se orgulha de ter entregado recentemente, o que você gostaria que um novo engenheiro fizesse de forma diferente.

## Primeiro mês
Entregue algo pequeno, mas visível. Um PR de polimento, uma pequena funcionalidade, uma melhoria de documentação. O ponto é demonstrar velocidade de trabalho e conquistar confiança cedo.

## Segundo mês
Assuma a propriedade de uma fatia de escopo moderada. Conduza-a de ponta a ponta. Comunique o progresso publicamente mais do que parece natural.

## Terceiro mês
Tenha uma opinião documentada sobre pelo menos uma decisão de arquitetura no escopo da equipe. Sem uma opinião, você é lido como um contribuidor individual sênior sem convicção.

## O que evitar
Longos períodos de trabalho solitário sem check-ins. Sugerir grandes mudanças antes de dois meses de casa. Sumir por qualquer motivo.`,
  },
  'remote-worker-tax-by-country': {
    body: `As alíquotas de manchete diferem menos do que as alíquotas efetivas que os trabalhadores remotos realmente pagam, que dependem de regimes preferenciais, encargos sociais e do que conta como tributável.

## Faixas de alíquota efetiva em renda de ~100 mil EUR
Regime sucessor do NHR de Portugal: ~20 a 25 por cento. Extensão Beckham da Espanha: 24 por cento sobre origem espanhola até 600 mil EUR. Regime de impatriados da Itália: ~25 a 30 por cento. Regime DNV da Grécia: ~25 por cento. Alemanha (sem regime especial): 38 a 42 por cento. França (sem regime especial): 35 a 40 por cento. Regra dos 30 por cento dos Países Baixos: ~36 por cento líquido.

## Opções fora da Europa
Dubai: 0 por cento sobre renda pessoal, 9 por cento corporativo acima de 375 mil AED. Singapura: 15 a 22 por cento dependendo da residência. Estados dos EUA sem imposto: 22 a 32 por cento federal, 0 estadual (TX, FL, WA, NV, TN, NH).

## Custos ocultos a modelar
Contribuições de seguro de saúde. Contribuições previdenciárias. Adicionais de solidariedade. Estes acrescentam de 5 a 12 pontos percentuais ao imposto de renda nominal na maioria dos países da UE.`,
  },
};
