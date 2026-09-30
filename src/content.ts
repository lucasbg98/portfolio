// All site copy in both languages. Every claim here must match the candidate profile
// (C:\AI Job Search\ai-job-search\.claude\skills\job-application-assistant\01-candidate-profile.md).

export type Lang = "en" | "pt";

export const links = {
  github: "https://github.com/lucasbg98",
  linkedin: "https://www.linkedin.com/in/lucas-braganca-goncalves98",
  email: "lucasbg98@hotmail.com",
  englishLyricsRepo: "https://github.com/lucasbg98/english-lyrics",
  firesafeShowcase: "https://github.com/lucasbg98/firesafe-showcase",
  vendSite: "https://vend.app.br",
};

type Project = {
  id: string;
  name: string;
  tag: string;
  summary: string;
  problem: string;
  solution: string[];
  stack: string[];
  role: string;
  links: { label: string; href: string }[];
};

type Job = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

type Content = {
  nav: { about: string; projects: string; experience: string; skills: string; contact: string };
  hero: { greeting: string; title: string; tagline: string; location: string; cta: string; ctaSecondary: string };
  about: { heading: string; paragraphs: string[] };
  projects: { heading: string; intro: string; problem: string; solution: string; role: string; stack: string; items: Project[] };
  experience: { heading: string; items: Job[] };
  skills: { heading: string; groups: { name: string; items: string[] }[] };
  education: { heading: string; items: { title: string; place: string; period: string; note: string }[] };
  contact: { heading: string; text: string; email: string };
  footer: string;
};

export const content: Record<Lang, Content> = {
  en: {
    nav: { about: "About", projects: "Projects", experience: "Experience", skills: "Skills", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm Lucas",
      title: "Full Stack Developer",
      tagline:
        "I build production products end to end with TypeScript, React, Next.js and Node.js, and I integrate LLMs into features people actually use.",
      location: "Based in Brazil · Open to remote roles",
      cta: "See my projects",
      ctaSecondary: "Get in touch",
    },
    about: {
      heading: "About",
      paragraphs: [
        "I'm a full stack developer with nearly two years of experience on a production multi-tenant SaaS for WhatsApp-based customer service and debt collection at Vend, working from NestJS APIs and PostgreSQL to Next.js interfaces, and shipping two LLM-powered features.",
        "Since 2026 I also work as a freelancer: I built FireSafe on my own, a platform that replaced a fire-safety consultancy's spreadsheets, with a Firebase serverless backend and a finance module on Cloudflare Workers.",
        "I use Claude Code every day as part of how I build. I'm finishing a Bachelor's in Information Systems at the Federal University of Uberlândia (coursework complete, thesis in progress).",
      ],
    },
    projects: {
      heading: "Projects",
      intro: "Case studies of work I built and shipped.",
      problem: "Problem",
      solution: "What I built",
      role: "My role",
      stack: "Stack",
      items: [
        {
          id: "firesafe",
          name: "FireSafe",
          tag: "Freelance · Firecorp · 2026",
          summary:
            "A PWA that replaced a fire-safety consultancy's Excel spreadsheet for tracking permits (alvarás) and licensing processes.",
          problem:
            "Firecorp tracked its clients' properties, permits and licensing processes in a large Excel spreadsheet, with no automatic alert before a permit expired and no shared, multi-device view for the team.",
          solution: [
            "Proposals, properties, inspections with photos, PDF documents and configurable process steps, with roles for admins, technicians, managers and viewers. An accepted proposal automatically creates the property record.",
            "Automatic permit status (regular, irregular, no permit) computed from the validity date, with a configurable expiry alert that flags properties needing a new inspection.",
            "Migrated from a localStorage prototype to Firebase: Authentication with invite and approval flow, Firestore, Storage for photos and PDFs, Hosting, and Cloud Functions for email (Nodemailer, token-verified requests), push notifications (FCM) and an image proxy. Installable and works offline.",
            "A finance module with cash flow, a management income statement (DRE), CSV and OFX bank statement import and duplicate detection, built on Next.js 16, Cloudflare Workers, D1 and Drizzle ORM, now being integrated into the platform.",
          ],
          stack: ["React 19", "TypeScript", "Vite", "MUI", "Firebase", "Cloud Functions", "FCM", "PWA", "Next.js 16", "Cloudflare Workers", "D1", "Drizzle ORM"],
          role: "Built everything on my own, from requirements with the client to deployment.",
          links: [{ label: "Case study on GitHub", href: links.firesafeShowcase }],
        },
        {
          id: "vend-ai",
          name: "LLM features at Vend",
          tag: "Vend · 2024-2026",
          summary:
            "Two AI features inside a production SaaS for WhatsApp customer service and debt collection.",
          problem:
            "Operators needed quick answers from their operational data, and customer-service agents needed help replying fast during live conversations.",
          solution: [
            "A conversational analytics assistant: users ask questions in natural language about their operational data and get answers with dynamically generated charts.",
            "A real-time reply-suggestion assistant for agents during customer conversations.",
            "Both built on DeepSeek through an OpenAI-compatible SDK, inside a NestJS + Prisma + PostgreSQL platform with 25+ domains, BullMQ/Redis queues and Socket.io real-time updates.",
          ],
          stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "DeepSeek / OpenAI SDK", "Next.js", "React", "Recharts", "Socket.io"],
          role: "Built and maintained both features as part of the development team.",
          links: [],
        },
        {
          id: "english-lyrics",
          name: "English Lyrics",
          tag: "Personal project · 2026",
          summary: "Learn English by filling in the missing words of real song lyrics.",
          problem:
            "Practicing English vocabulary is more engaging with music you already like than with textbook sentences.",
          solution: [
            "Song search with autocomplete through the free lrclib.net API.",
            "Browser-side NLP with compromise.js picks verbs, adjectives and nouns to blank out at three difficulty levels (30%, 60%, 80%), re-randomized on every attempt.",
            "Color-coded feedback with the correct answers and a score, plus an embedded YouTube player to listen along.",
          ],
          stack: ["React 19", "TypeScript", "Vite", "compromise.js", "lrclib API"],
          role: "Planned and built on my own with Claude Code.",
          links: [{ label: "Source code", href: links.englishLyricsRepo }],
        },
      ],
    },
    experience: {
      heading: "Experience",
      items: [
        {
          title: "Freelance Full Stack Developer",
          company: "Firecorp",
          period: "2026 - Present",
          location: "Remote",
          bullets: [
            "Built FireSafe alone: a React/TypeScript PWA with a Firebase backend (Auth, Firestore, Storage, Hosting, Cloud Functions, FCM) that replaced the client's permit-tracking spreadsheet.",
            "Built a finance module (Next.js 16, Cloudflare Workers, D1, Drizzle ORM) with cash flow, DRE and CSV/OFX bank statement import.",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Vend",
          period: "Dec 2024 - Sep 2026",
          location: "Marília, SP (remote)",
          bullets: [
            "Worked across a production multi-tenant SaaS for WhatsApp customer service and debt collection: real-time service, bulk campaigns of up to 100k recipients, automation workflows, analytics dashboards and Stripe billing.",
            "Built and maintained two LLM features: a conversational analytics assistant with dynamic charts and a real-time reply-suggestion assistant.",
            "Contributed to a modular NestJS + Prisma + PostgreSQL architecture with 25+ domains, JWT, 30+ granular permissions, AES-256-GCM credential encryption, BullMQ/Redis queues and Socket.io; interfaces in Next.js 16 and React 19.",
            "Took part in deployment and production support with Docker and GitHub Actions, led client requirements meetings and built the company landing page end to end.",
          ],
        },
      ],
    },
    skills: {
      heading: "Skills",
      groups: [
        { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MUI", "React Query", "Recharts", "PWA"] },
        { name: "Backend", items: ["Node.js", "NestJS", "Express", "REST APIs", "WebSockets", "BullMQ", "Redis"] },
        { name: "Data", items: ["PostgreSQL", "Prisma", "Sequelize", "MySQL", "MongoDB", "Firestore", "Cloudflare D1", "Drizzle ORM"] },
        { name: "Cloud & DevOps", items: ["Firebase", "Cloud Functions", "Cloudflare Workers", "Docker", "GitHub Actions", "Stripe"] },
        { name: "AI", items: ["LLM integration (OpenAI-compatible SDKs)", "Claude Code", "Python for data science", "NLP (compromise.js)"] },
      ],
    },
    education: {
      heading: "Education",
      items: [
        {
          title: "Bachelor's in Information Systems",
          place: "Federal University of Uberlândia (UFU)",
          period: "2017 - present",
          note: "Coursework complete (8/8 semesters); thesis in progress: a facial recognition API.",
        },
        { title: "English course", place: "CCAA", period: "2013 - 2016", note: "About 320 hours of study." },
      ],
    },
    contact: {
      heading: "Let's talk",
      text: "I'm looking for a full-time remote role as a full stack or AI product engineer. The fastest way to reach me is by email or LinkedIn.",
      email: "Email me",
    },
    footer: "Built with Next.js and Tailwind CSS.",
  },
  pt: {
    nav: { about: "Sobre", projects: "Projetos", experience: "Experiência", skills: "Habilidades", contact: "Contato" },
    hero: {
      greeting: "Olá, eu sou o Lucas",
      title: "Desenvolvedor Full Stack",
      tagline:
        "Construo produtos em produção de ponta a ponta com TypeScript, React, Next.js e Node.js, e integro LLMs a funcionalidades que as pessoas realmente usam.",
      location: "No Brasil · Aberto a vagas remotas",
      cta: "Ver meus projetos",
      ctaSecondary: "Falar comigo",
    },
    about: {
      heading: "Sobre",
      paragraphs: [
        "Sou desenvolvedor full stack com quase dois anos de experiência em um SaaS multi-tenant de atendimento e cobrança via WhatsApp em produção na Vend, atuando de APIs em NestJS e PostgreSQL até interfaces em Next.js, e entregando duas funcionalidades com LLM.",
        "Desde 2026 também atuo como freelancer: construí sozinho o FireSafe, uma plataforma que substituiu as planilhas de uma assessoria em segurança contra incêndio, com backend serverless em Firebase e um módulo financeiro em Cloudflare Workers.",
        "Uso o Claude Code diariamente no desenvolvimento. Estou concluindo o Bacharelado em Sistemas de Informação na Universidade Federal de Uberlândia (disciplinas concluídas, TCC em andamento).",
      ],
    },
    projects: {
      heading: "Projetos",
      intro: "Estudos de caso de trabalhos que construí e coloquei no ar.",
      problem: "Problema",
      solution: "O que construí",
      role: "Meu papel",
      stack: "Stack",
      items: [
        {
          id: "firesafe",
          name: "FireSafe",
          tag: "Freelance · Firecorp · 2026",
          summary:
            "Um PWA que substituiu a planilha Excel de uma assessoria em segurança contra incêndio no controle de alvarás e processos de licenciamento.",
          problem:
            "A Firecorp controlava imóveis, alvarás e processos de licenciamento dos clientes em uma planilha Excel grande, sem alerta automático antes do vencimento de um alvará e sem uma visão compartilhada e multi-dispositivo para a equipe.",
          solution: [
            "Propostas, imóveis, vistorias com fotos, documentos em PDF e etapas do processo configuráveis, com papéis para administradores, técnicos, gerentes e visualizadores. Uma proposta aceita cria o imóvel automaticamente.",
            "Situação do alvará (regular, irregular, sem alvará) calculada automaticamente pela data de validade, com alerta de vencimento configurável que sinaliza os imóveis que precisam de nova vistoria.",
            "Migração de um protótipo em localStorage para o Firebase: Authentication com convite e aprovação, Firestore, Storage para fotos e PDFs, Hosting e Cloud Functions para e-mail (Nodemailer, requisições verificadas por token), notificações push (FCM) e proxy de imagens. Instalável e funciona offline.",
            "Um módulo financeiro com fluxo de caixa, DRE gerencial, importação de extratos CSV e OFX e detecção de duplicidades, feito com Next.js 16, Cloudflare Workers, D1 e Drizzle ORM, em integração à plataforma.",
          ],
          stack: ["React 19", "TypeScript", "Vite", "MUI", "Firebase", "Cloud Functions", "FCM", "PWA", "Next.js 16", "Cloudflare Workers", "D1", "Drizzle ORM"],
          role: "Construí tudo sozinho, do levantamento de requisitos com o cliente ao deploy.",
          links: [{ label: "Estudo de caso no GitHub", href: links.firesafeShowcase }],
        },
        {
          id: "vend-ai",
          name: "Funcionalidades com LLM na Vend",
          tag: "Vend · 2024-2026",
          summary:
            "Duas funcionalidades de IA dentro de um SaaS em produção de atendimento e cobrança via WhatsApp.",
          problem:
            "Os gestores precisavam de respostas rápidas sobre seus dados operacionais, e os atendentes precisavam de ajuda para responder rápido durante as conversas.",
          solution: [
            "Um assistente analítico conversacional: o usuário pergunta em linguagem natural sobre os dados operacionais e recebe respostas com gráficos gerados dinamicamente.",
            "Um assistente de sugestão de respostas em tempo real para os atendentes durante o atendimento.",
            "Ambos com DeepSeek via SDK compatível com OpenAI, dentro de uma plataforma NestJS + Prisma + PostgreSQL com mais de 25 domínios, filas BullMQ/Redis e tempo real com Socket.io.",
          ],
          stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "DeepSeek / OpenAI SDK", "Next.js", "React", "Recharts", "Socket.io"],
          role: "Desenvolvi e mantive as duas funcionalidades como parte do time de desenvolvimento.",
          links: [],
        },
        {
          id: "english-lyrics",
          name: "English Lyrics",
          tag: "Projeto pessoal · 2026",
          summary: "Aprenda inglês preenchendo as palavras que faltam em letras de músicas reais.",
          problem:
            "Praticar vocabulário em inglês é mais envolvente com músicas que você já gosta do que com frases de livro.",
          solution: [
            "Busca de músicas com autocomplete pela API gratuita lrclib.net.",
            "NLP no navegador com compromise.js escolhe verbos, adjetivos e substantivos para virar lacunas em três níveis de dificuldade (30%, 60%, 80%), sorteados de novo a cada tentativa.",
            "Correção em cores com as respostas certas e pontuação, além de um player do YouTube para ouvir junto.",
          ],
          stack: ["React 19", "TypeScript", "Vite", "compromise.js", "lrclib API"],
          role: "Planejei e construí sozinho com o Claude Code.",
          links: [{ label: "Código-fonte", href: links.englishLyricsRepo }],
        },
      ],
    },
    experience: {
      heading: "Experiência",
      items: [
        {
          title: "Desenvolvedor Full Stack Freelancer",
          company: "Firecorp",
          period: "2026 - Atual",
          location: "Remoto",
          bullets: [
            "Construí sozinho o FireSafe: um PWA em React/TypeScript com backend em Firebase (Auth, Firestore, Storage, Hosting, Cloud Functions, FCM) que substituiu a planilha de controle de alvarás do cliente.",
            "Construí um módulo financeiro (Next.js 16, Cloudflare Workers, D1, Drizzle ORM) com fluxo de caixa, DRE e importação de extratos CSV/OFX.",
          ],
        },
        {
          title: "Desenvolvedor Full Stack",
          company: "Vend",
          period: "Dez 2024 - Set 2026",
          location: "Marília, SP (remoto)",
          bullets: [
            "Atuei em um SaaS multi-tenant de atendimento e cobrança via WhatsApp em produção: atendimento em tempo real, campanhas em massa de até 100 mil destinatários, automações, dashboards analíticos e faturamento com Stripe.",
            "Desenvolvi e mantive duas funcionalidades com LLM: um assistente analítico conversacional com gráficos dinâmicos e um assistente de sugestão de respostas em tempo real.",
            "Contribuí para uma arquitetura modular em NestJS + Prisma + PostgreSQL com mais de 25 domínios, JWT, mais de 30 permissões granulares, criptografia AES-256-GCM, filas BullMQ/Redis e Socket.io; interfaces em Next.js 16 e React 19.",
            "Participei do deploy e da sustentação em produção com Docker e GitHub Actions, conduzi reuniões de requisitos com clientes e desenvolvi a landing page da empresa de ponta a ponta.",
          ],
        },
      ],
    },
    skills: {
      heading: "Habilidades",
      groups: [
        { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MUI", "React Query", "Recharts", "PWA"] },
        { name: "Backend", items: ["Node.js", "NestJS", "Express", "APIs REST", "WebSockets", "BullMQ", "Redis"] },
        { name: "Dados", items: ["PostgreSQL", "Prisma", "Sequelize", "MySQL", "MongoDB", "Firestore", "Cloudflare D1", "Drizzle ORM"] },
        { name: "Cloud & DevOps", items: ["Firebase", "Cloud Functions", "Cloudflare Workers", "Docker", "GitHub Actions", "Stripe"] },
        { name: "IA", items: ["Integração de LLMs (SDKs compatíveis com OpenAI)", "Claude Code", "Python para ciência de dados", "NLP (compromise.js)"] },
      ],
    },
    education: {
      heading: "Formação",
      items: [
        {
          title: "Bacharelado em Sistemas de Informação",
          place: "Universidade Federal de Uberlândia (UFU)",
          period: "2017 - atual",
          note: "Disciplinas concluídas (8 de 8 períodos); TCC em andamento: uma API de reconhecimento facial.",
        },
        { title: "Curso de inglês", place: "CCAA", period: "2013 - 2016", note: "Cerca de 320 horas de estudo." },
      ],
    },
    contact: {
      heading: "Vamos conversar",
      text: "Estou buscando uma vaga remota em tempo integral como desenvolvedor full stack ou engenheiro de produto com IA. O jeito mais rápido de falar comigo é por e-mail ou LinkedIn.",
      email: "Enviar e-mail",
    },
    footer: "Feito com Next.js e Tailwind CSS.",
  },
};
