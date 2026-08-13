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
  category: string;
  stack: string[];
  video?: {
    poster: string;
    sources: Array<{
      src: string;
      type: string;
    }>;
  };
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
    "Desenvolvo aplicações, automações e soluções para negócios, incluindo integrações com IA, sempre com segurança, eficiência e escalabilidade.",
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
    id: "agentic-workflow-platform",
    title: "Agentic Workflow Platform",
    category: "Web App · A2A · MCP · OpenAPI",
    description:
      "Plataforma distribuída orientada a APIs, A2A e MCPs para fluxos de agentes autônomos e integrações com ferramentas externas e internas, com comunicação entre serviços e autenticação.",
    company: "Netstic",
    type: EProjectType.TRABALHO,
    video: {
      poster: "/project/workflow/poster-pt.webp",
      sources: [
        { src: "/project/workflow/demo-pt.webm", type: "video/webm" },
        { src: "/project/workflow/demo-pt.mp4", type: "video/mp4" },
      ],
    },
    stack: [
      "Python",
      "FastAPI",
      "asyncio",
      "PostgreSQL",
      "A2A",
      "MCP",
      "OpenAPI/Swagger",
      "Redis",
      "Docker",
      "Vue.js",
      "TypeScript",
    ],
  },
  {
    id: "wepray",
    title: "Plataforma WePray",
    category: "Multiplataforma",
    description:
      "Modernização de uma plataforma social internacional em produção, incluindo APIs, autenticação, notificações, PWA, integrações e otimizações no PostgreSQL.",
    company: "WePray",
    type: EProjectType.TRABALHO,
    video: {
      poster: "/project/wepray/poster.webp",
      sources: [
        { src: "/project/wepray/demo.webm", type: "video/webm" },
        { src: "/project/wepray/demo.mp4", type: "video/mp4" },
      ],
    },
    stack: ["Laravel 11", "Nuxt 3", "Vue 3", "TypeScript", "PostgreSQL", "PWA"],
    href: "https://wepray.org",
  },
  {
    id: "sysadmu",
    title: "Modernização do Sysadmu",
    category: "Web App · Sistema interno",
    description:
      "Migração de um sistema governamental com dez anos de Laravel 5 para 10 e Vue 2 para 3, melhorando manutenibilidade, desempenho e experiência de desenvolvimento.",
    company: "Netstic",
    type: EProjectType.TRABALHO,
    stack: ["PHP", "Laravel", "JavaScript", "Vue.js", "PostgreSQL"],
  },
  {
    id: "eprotec",
    title: "Gestão de clientes e projetos",
    category: "Web App · Sistema interno",
    description:
      "Sistema de gestão para uma consultoria de infraestrutura, desenvolvido a partir dos requisitos dos stakeholders com foco em soluções sustentáveis e de fácil manutenção.",
    company: "Eprotec Engenharia",
    type: EProjectType.TRABALHO,
    stack: ["PHP", "Laravel", "Vue.js", "PostgreSQL", "Docker"],
  },
  {
    id: "iassist",
    title: "Plataforma de saúde com IA",
    category: "Web App · Sistema interno",
    description:
      "Evolução de observabilidade, validação, internacionalização e processamento assíncrono de emails em uma plataforma de saúde baseada em inteligência artificial.",
    company: "IAssist Tecnologia",
    type: EProjectType.TRABALHO,
    stack: ["Python", "Pydantic", "Celery", "i18n", "Logging"],
  },
  {
    id: "laravel-fcm-notifications",
    title: "Laravel FCM Notifications",
    category: "Package · Laravel 10+",
    description:
      "Pacote Laravel open source e documentado para Firebase Cloud Messaging, com limpeza de tokens, suporte a múltiplos dispositivos e diferentes tipos de mensagem.",
    company: "Projeto open source",
    type: EProjectType.PESSOAL,
    stack: ["PHP", "Laravel", "Firebase Cloud Messaging"],
    href: "https://github.com/netosts/laravel-fcm-notifications",
  },
];

// Enquanto estiver vazio, a seção exibe cartões de "Em breve".
export const contents: Content[] = [
  {
    id: "rest-apis-5",
    title: "REST APIs in Practice #5 — API Versioning and Breaking Changes",
    kind: "Artigo",
    source: "Blog",
    date: "Mar 2025",
    image: "/content/rest-api-5_api-versioning_and_breaking-changes.png",
    href: "https://www.linkedin.com/posts/netosts_apidesign-backend-softwareengineering-share-7492546273544294400-qeZg/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-sTloB7Gjhx5NWuG7iNpB-y36GIj9bAwU                     ",
  },
  {
    id: "rest-apis-4",
    title: "REST APIs in Practice #4 — API Pagination: Offset vs Cursor",
    kind: "Artigo",
    source: "Blog",
    date: "Mar 2025",
    image: "/content/rest-api-4_api-pagination_offset-vs-cursor.png",
    href: "https://www.linkedin.com/posts/netosts_database-apidesign-backend-share-7490069102447874049-5Ab3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-sTloB7Gjhx5NWuG7iNpB-y36GIj9bAwU                                ",
  },
  {
    id: "rest-apis-3",
    title: "REST APIs in Practice #3 — Idempotency Keys",
    kind: "Artigo",
    source: "Blog",
    date: "Mar 2025",
    image: "/content/rest-api-3_safe-vs-idempotency.png",
    href: "https://www.linkedin.com/posts/netosts_systemdesign-apidesign-backend-share-7487533478671175681-Zj23/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-sTloB7Gjhx5NWuG7iNpB-y36GIj9bAwU                            ",
  },
  {
    id: "rest-apis-2",
    title:
      "REST APIs in Practice #2 — HTTP Status Codes Are More Than Just Numbers",
    kind: "Artigo",
    source: "Blog",
    date: "Mar 2025",
    image: "/content/rest-api-2_http-status-codes.png",
    href: "https://www.linkedin.com/posts/netosts_webdevelopment-apidesign-backend-share-7486412677993369600-y3fq/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-sTloB7Gjhx5NWuG7iNpB-y36GIj9bAwU                          ",
  },
  {
    id: "rest-apis-1",
    title: "REST APIs in Practice #1 — HTTP Methods",
    kind: "Artigo",
    source: "Blog",
    date: "Mar 2025",
    image: "/content/rest-api-1_http-methods.png",
    href: "https://www.linkedin.com/posts/netosts_webdevelopment-systemdesign-apidesign-share-7485675444814430208-WT9s/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-sTloB7Gjhx5NWuG7iNpB-y36GIj9bAwU                     ",
  },
  {
    id: "audit",
    title: "Audit logs versus authorization",
    kind: "Artigo",
    source: "Blog",
    date: "Mar 2025",
    image: "/content/audit-vs-authorization.png",
    href: "https://www.linkedin.com/posts/netosts_softwarearchitecture-cybersecurity-authorization-share-7485132486247604224-JV-F/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-sTloB7Gjhx5NWuG7iNpB-y36GIj9bAwU          ",
  },
  // {
  //   id: "motion",
  //   title: "Construindo interfaces com movimento que fazem sentido",
  //   kind: "Vídeo",
  //   source: "YouTube",
  //   date: "Mar 2025",
  //   image: "/content/video-motion.png",
  //   href: "#",
  // },
  // {
  //   id: "state",
  //   title: "Por que parei de alcançar o Redux por reflexo",
  //   kind: "Artigo",
  //   source: "Blog",
  //   date: "Fev 2025",
  //   image: "/content/article-state.png",
  //   href: "#",
  // },
  // {
  //   id: "tokens",
  //   title: "Design tokens na prática: do Figma ao código",
  //   kind: "Artigo",
  //   source: "Blog",
  //   date: "Jan 2025",
  //   image: "/content/article-tokens.png",
  //   href: "#",
  // },
  // {
  //   id: "perf",
  //   title: "Onde o tempo vai: medindo performance de verdade na web",
  //   kind: "Vídeo",
  //   source: "YouTube",
  //   date: "Dez 2024",
  //   image: "/content/video-perf.png",
  //   href: "#",
  // },
  // {
  //   id: "css",
  //   title: "Layouts modernos com CSS Grid sem sofrimento",
  //   kind: "Artigo",
  //   source: "Blog",
  //   date: "Nov 2024",
  //   image: "/content/article-css.png",
  //   href: "#",
  // },
  // {
  //   id: "career",
  //   title: "De júnior a sênior: o que ninguém te conta",
  //   kind: "Vídeo",
  //   source: "YouTube",
  //   date: "Out 2024",
  //   image: "/content/video-career.png",
  //   href: "#",
  // },
  // {
  //   id: "ai",
  //   title: "IA no fluxo de trabalho: hype, realidade e o que uso hoje",
  //   kind: "Artigo",
  //   source: "Blog",
  //   date: "Set 2024",
  //   image: "/content/article-ai.png",
  //   href: "#",
  // },
];

// Assuntos que o usuário pode escolher no chat de contato.
export const contactTopics = [
  { id: "trabalho", label: "Uma oportunidade de trabalho" },
  { id: "projeto", label: "Um projeto ou colaboração" },
  { id: "tecnico", label: "Conversar sobre tecnologia" },
  { id: "outro", label: "Outro assunto" },
];
