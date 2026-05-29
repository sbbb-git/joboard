import type { Locale } from './types';

export type AffiliateCopy = {
  badge: string;
  disclaimer: string;
  essentialsTitle: string;
  essentialsIntro: (city?: string) => string;
  bankingTitle: string;
  bankingIntro: (context?: string) => string;
  toolsTitle: string;
  toolsIntro: string;
  earnTitle: string;
  earnIntro: string;
};

export const AFFILIATE_COPY: Record<Locale, AffiliateCopy> = {
  en: {
    badge: 'Affiliate · disclosure below',
    disclaimer:
      'We may earn a small commission if you sign up via these links. Pricing and features are unchanged.',
    essentialsTitle: 'Essentials for working from anywhere',
    essentialsIntro: (city) =>
      city
        ? `Two things to sort before you start working from ${city}: health insurance that follows you, and a VPN that handles public Wi-Fi.`
        : 'Two things to sort when you work from anywhere: portable insurance and a reliable VPN.',
    bankingTitle: 'Banking for remote workers',
    bankingIntro: (ctx) =>
      ctx
        ? `Multi-currency tools that work well if you are moving to or earning from ${ctx}.`
        : 'Multi-currency tools for receiving payments across borders.',
    toolsTitle: 'Tools remote workers actually use',
    toolsIntro:
      'Software we run our own stack on, plus the better picks we recommend to remote engineers around us.',
    earnTitle: 'Earn with AI (or build with it)',
    earnIntro:
      'Two options if AI is in the loop: get paid by Mercor to evaluate model outputs, or work alongside Claude on your own product.',
  },
  fr: {
    badge: 'Affilié · divulgation ci-dessous',
    disclaimer:
      'Nous pouvons percevoir une petite commission si vous vous inscrivez via ces liens. Les prix et fonctionnalités restent inchangés.',
    essentialsTitle: "L'essentiel pour travailler de partout",
    essentialsIntro: (city) =>
      city
        ? `Deux choses à régler avant de commencer à travailler depuis ${city} : une assurance santé qui vous suit et un VPN pour le Wi-Fi public.`
        : 'Deux choses à régler quand vous travaillez de partout : une assurance portable et un VPN fiable.',
    bankingTitle: 'Banque pour travailleurs remote',
    bankingIntro: (ctx) =>
      ctx
        ? `Des outils multi-devises pratiques si vous déménagez vers ${ctx} ou y gagnez votre vie.`
        : "Des outils multi-devises pour recevoir des paiements à l'international.",
    toolsTitle: 'Les outils que les remote utilisent vraiment',
    toolsIntro:
      'Les logiciels qui font tourner notre propre stack, plus les meilleurs choix que nous recommandons aux ingénieurs remote.',
    earnTitle: "Gagner avec l'IA (ou construire avec)",
    earnIntro:
      "Deux options si l'IA entre en jeu : être payé par Mercor pour évaluer des sorties de modèles, ou travailler avec Claude sur votre propre produit.",
  },
  es: {
    badge: 'Afiliado · divulgación abajo',
    disclaimer:
      'Podemos ganar una pequeña comisión si te registras a través de estos enlaces. Los precios y funciones no cambian.',
    essentialsTitle: 'Lo esencial para trabajar desde cualquier lugar',
    essentialsIntro: (city) =>
      city
        ? `Dos cosas que conviene resolver antes de empezar a trabajar desde ${city}: un seguro de salud que te acompañe y una VPN para el Wi-Fi público.`
        : 'Dos cosas que resolver cuando trabajas desde cualquier lugar: un seguro portátil y una VPN fiable.',
    bankingTitle: 'Banca para trabajadores remotos',
    bankingIntro: (ctx) =>
      ctx
        ? `Herramientas multidivisa útiles si te mudas a ${ctx} o ganas dinero desde allí.`
        : 'Herramientas multidivisa para recibir pagos a través de fronteras.',
    toolsTitle: 'Herramientas que los remotos usan de verdad',
    toolsIntro:
      'El software con el que montamos nuestro propio stack, más las mejores opciones que recomendamos a los ingenieros remotos.',
    earnTitle: 'Gana con IA (o construye con ella)',
    earnIntro:
      'Dos opciones si la IA está presente: cobra de Mercor por evaluar salidas de modelos, o trabaja junto a Claude en tu propio producto.',
  },
  de: {
    badge: 'Affiliate · Offenlegung unten',
    disclaimer:
      'Wir erhalten möglicherweise eine kleine Provision, wenn du dich über diese Links anmeldest. Preise und Funktionen bleiben unverändert.',
    essentialsTitle: 'Das Wichtigste fürs Arbeiten von überall',
    essentialsIntro: (city) =>
      city
        ? `Zwei Dinge solltest du regeln, bevor du von ${city} aus arbeitest: eine Krankenversicherung, die mitreist, und ein VPN für öffentliches WLAN.`
        : 'Zwei Dinge, die du regeln solltest, wenn du von überall arbeitest: eine mobile Versicherung und ein zuverlässiges VPN.',
    bankingTitle: 'Banking für Remote-Arbeiter',
    bankingIntro: (ctx) =>
      ctx
        ? `Multi-Währungs-Tools, die gut funktionieren, wenn du nach ${ctx} ziehst oder dort verdienst.`
        : 'Multi-Währungs-Tools für grenzüberschreitende Zahlungen.',
    toolsTitle: 'Tools, die Remote-Arbeiter wirklich nutzen',
    toolsIntro:
      'Software, mit der wir unseren eigenen Stack betreiben, plus die besseren Empfehlungen für Remote-Ingenieure.',
    earnTitle: 'Mit KI verdienen (oder damit bauen)',
    earnIntro:
      'Zwei Optionen, wenn KI im Spiel ist: lass dich von Mercor fürs Bewerten von Modellausgaben bezahlen oder arbeite mit Claude an deinem eigenen Produkt.',
  },
  pt: {
    badge: 'Afiliado · divulgação abaixo',
    disclaimer:
      'Podemos receber uma pequena comissão se você se inscrever por estes links. Preços e recursos permanecem inalterados.',
    essentialsTitle: 'O essencial para trabalhar de qualquer lugar',
    essentialsIntro: (city) =>
      city
        ? `Duas coisas para resolver antes de começar a trabalhar de ${city}: um seguro de saúde que te acompanha e uma VPN para o Wi-Fi público.`
        : 'Duas coisas para resolver quando você trabalha de qualquer lugar: um seguro portátil e uma VPN confiável.',
    bankingTitle: 'Banco para trabalhadores remotos',
    bankingIntro: (ctx) =>
      ctx
        ? `Ferramentas multimoeda úteis se você está se mudando para ${ctx} ou ganhando de lá.`
        : 'Ferramentas multimoeda para receber pagamentos entre países.',
    toolsTitle: 'Ferramentas que os remotos realmente usam',
    toolsIntro:
      'O software com que rodamos nosso próprio stack, mais as melhores escolhas que recomendamos a engenheiros remotos.',
    earnTitle: 'Ganhe com IA (ou construa com ela)',
    earnIntro:
      'Duas opções se a IA estiver no jogo: seja pago pela Mercor para avaliar saídas de modelos, ou trabalhe ao lado do Claude no seu próprio produto.',
  },
  it: {
    badge: 'Affiliato · divulgazione sotto',
    disclaimer:
      'Potremmo ricevere una piccola commissione se ti registri tramite questi link. Prezzi e funzionalità restano invariati.',
    essentialsTitle: "L'essenziale per lavorare da ovunque",
    essentialsIntro: (city) =>
      city
        ? `Due cose da sistemare prima di iniziare a lavorare da ${city}: un'assicurazione sanitaria che ti segue e una VPN per il Wi-Fi pubblico.`
        : "Due cose da sistemare quando lavori da ovunque: un'assicurazione portatile e una VPN affidabile.",
    bankingTitle: 'Banca per lavoratori remote',
    bankingIntro: (ctx) =>
      ctx
        ? `Strumenti multivaluta utili se ti trasferisci a ${ctx} o guadagni da lì.`
        : 'Strumenti multivaluta per ricevere pagamenti tra paesi.',
    toolsTitle: 'Strumenti che i remote usano davvero',
    toolsIntro:
      'Il software con cui gestiamo il nostro stack, più le scelte migliori che consigliamo agli ingegneri remote.',
    earnTitle: "Guadagna con l'IA (o costruisci con essa)",
    earnIntro:
      "Due opzioni se l'IA è coinvolta: farti pagare da Mercor per valutare gli output dei modelli, o lavorare con Claude sul tuo prodotto.",
  },
  pl: {
    badge: 'Afiliacja · informacja poniżej',
    disclaimer:
      'Możemy otrzymać niewielką prowizję, jeśli zarejestrujesz się przez te linki. Ceny i funkcje pozostają bez zmian.',
    essentialsTitle: 'Niezbędnik do pracy z dowolnego miejsca',
    essentialsIntro: (city) =>
      city
        ? `Dwie rzeczy do ogarnięcia, zanim zaczniesz pracować z ${city}: ubezpieczenie zdrowotne, które podróżuje z tobą, i VPN do publicznego Wi-Fi.`
        : 'Dwie rzeczy do ogarnięcia, gdy pracujesz z dowolnego miejsca: przenośne ubezpieczenie i niezawodny VPN.',
    bankingTitle: 'Bankowość dla pracowników zdalnych',
    bankingIntro: (ctx) =>
      ctx
        ? `Narzędzia wielowalutowe przydatne, gdy przeprowadzasz się do ${ctx} lub tam zarabiasz.`
        : 'Narzędzia wielowalutowe do odbierania płatności między krajami.',
    toolsTitle: 'Narzędzia, których naprawdę używają pracownicy zdalni',
    toolsIntro:
      'Oprogramowanie, na którym opieramy własny stack, plus lepsze rekomendacje dla zdalnych inżynierów.',
    earnTitle: 'Zarabiaj z AI (lub buduj z nią)',
    earnIntro:
      'Dwie opcje, gdy w grę wchodzi AI: otrzymuj zapłatę od Mercor za ocenę wyników modeli lub pracuj z Claude nad własnym produktem.',
  },
};
