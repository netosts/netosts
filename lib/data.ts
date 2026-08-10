// Dados fixos do portfólio. Edite aqui para atualizar o perfil e os projetos.

export const enum EProjectType {
  TRABALHO = "Trabalho",
  PESSOAL = "Pessoal",
}

export type Project = {
  id: string;
  title: string;
  description: string;
  company: string;
  type: EProjectType;
  period: string;
  stack: string[];
  image?: string;
  href?: string;
};

export type Content = {
  id: string;
  title: string;
  kind: "Vídeo" | "Artigo";
  source: string;
  date: string;
  image?: string;
  href: string;
};

export const profile = {
  name: "Silvio dos Santos Neto",
  role: "Full Stack Software Engineer | Web, APIs & AI",
  intro:
    "Construo aplicações, automações e soluções com IA para negócios, com segurança e prontas para evoluir.",
  avatar: "/photo_small.png",
  email: "netostt91@gmail.com",
  phone: "+55 79 99662-9246",
  location: "Brasil · Remoto",
  socials: {
    github: "https://github.com/netosts",
    linkedin: "https://www.linkedin.com/in/netosts",
  },
};

export const projects: Project[] = [
  {
    id: "internet-of-agents",
    title: "Internet of Agents",
    description:
      "Plataforma distribuída orientada a APIs para fluxos de agentes autônomos e integrações com ferramentas externas, com comunicação entre serviços e autenticação.",
    company: "Netstic",
    type: EProjectType.TRABALHO,
    period: "Web App · Sistema interno",
    stack: [
      "Python",
      "FastAPI",
      "asyncio",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Vue.js",
      "TypeScript",
    ],
  },
  {
    id: "wepray",
    title: "Plataforma WePray",
    description:
      "Modernização de uma plataforma social internacional em produção, incluindo APIs, autenticação, notificações, PWA, integrações e otimizações no PostgreSQL.",
    company: "WePray",
    type: EProjectType.TRABALHO,
    period: "Multiplataforma",
    stack: ["Laravel 11", "Nuxt 3", "Vue 3", "TypeScript", "PostgreSQL", "PWA"],
    href: "https://wepray.org",
  },
  {
    id: "sysadmu",
    title: "Modernização do Sysadmu",
    description:
      "Migração de um sistema governamental com dez anos de Laravel 5 para 10 e Vue 2 para 3, melhorando manutenibilidade, desempenho e experiência de desenvolvimento.",
    company: "Netstic",
    type: EProjectType.TRABALHO,
    period: "Web App · Sistema interno",
    stack: ["PHP", "Laravel", "JavaScript", "Vue.js", "PostgreSQL"],
  },
  {
    id: "eprotec",
    title: "Gestão de clientes e projetos",
    description:
      "Sistema de gestão para uma consultoria de infraestrutura, desenvolvido a partir dos requisitos dos stakeholders com foco em soluções sustentáveis e de fácil manutenção.",
    company: "Eprotec Engenharia",
    type: EProjectType.TRABALHO,
    period: "Web App · Sistema interno",
    stack: ["PHP", "Laravel", "Vue.js", "PostgreSQL", "Docker"],
  },
  {
    id: "iassist",
    title: "Plataforma de saúde com IA",
    description:
      "Evolução de observabilidade, validação, internacionalização e processamento assíncrono de emails em uma plataforma de saúde baseada em inteligência artificial.",
    company: "IAssist Tecnologia",
    type: EProjectType.TRABALHO,
    period: "Web App · Sistema interno",
    stack: ["Python", "Pydantic", "Celery", "i18n", "Logging"],
  },
  {
    id: "laravel-fcm-notifications",
    title: "Laravel FCM Notifications",
    description:
      "Pacote Laravel open source e documentado para Firebase Cloud Messaging, com limpeza de tokens, suporte a múltiplos dispositivos e diferentes tipos de mensagem.",
    company: "Projeto open source",
    type: EProjectType.PESSOAL,
    period: "Package · Laravel 10+",
    stack: ["PHP", "Laravel", "Firebase Cloud Messaging"],
    href: "https://github.com/netosts/laravel-fcm-notifications",
  },
];

// Enquanto estiver vazio, a seção exibe cartões de "Em breve".
export const contents: Content[] = [
  {
    id: "motion",
    title: "Construindo interfaces com movimento que fazem sentido",
    kind: "Vídeo",
    source: "YouTube",
    date: "Mar 2025",
    image: "/content/video-motion.png",
    href: "#",
  },
  {
    id: "state",
    title: "Por que parei de alcançar o Redux por reflexo",
    kind: "Artigo",
    source: "Blog",
    date: "Fev 2025",
    image: "/content/article-state.png",
    href: "#",
  },
  {
    id: "tokens",
    title: "Design tokens na prática: do Figma ao código",
    kind: "Artigo",
    source: "Blog",
    date: "Jan 2025",
    image: "/content/article-tokens.png",
    href: "#",
  },
  {
    id: "perf",
    title: "Onde o tempo vai: medindo performance de verdade na web",
    kind: "Vídeo",
    source: "YouTube",
    date: "Dez 2024",
    image: "/content/video-perf.png",
    href: "#",
  },
  {
    id: "css",
    title: "Layouts modernos com CSS Grid sem sofrimento",
    kind: "Artigo",
    source: "Blog",
    date: "Nov 2024",
    image: "/content/article-css.png",
    href: "#",
  },
  {
    id: "career",
    title: "De júnior a sênior: o que ninguém te conta",
    kind: "Vídeo",
    source: "YouTube",
    date: "Out 2024",
    image: "/content/video-career.png",
    href: "#",
  },
  {
    id: "ai",
    title: "IA no fluxo de trabalho: hype, realidade e o que uso hoje",
    kind: "Artigo",
    source: "Blog",
    date: "Set 2024",
    image: "/content/article-ai.png",
    href: "#",
  },
];

// Assuntos que o usuário pode escolher no chat de contato.
export const contactTopics = [
  { id: "trabalho", label: "Uma oportunidade de trabalho" },
  { id: "projeto", label: "Um projeto ou colaboração" },
  { id: "tecnico", label: "Conversar sobre tecnologia" },
  { id: "outro", label: "Outro assunto" },
];
