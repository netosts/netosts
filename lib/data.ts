// Dados fixos do portfólio. Edite aqui para atualizar projetos e conteúdos.

export type Project = {
  id: string;
  title: string;
  description: string;
  type: "Pessoal" | "Trabalho";
  year: string;
  stack: string[];
  image: string;
  href?: string;
};

export type Content = {
  id: string;
  title: string;
  kind: "Vídeo" | "Artigo";
  source: string;
  date: string;
  image: string;
  href: string;
};

export const profile = {
  name: "Seu Nome",
  role: "Product Engineer & Designer",
  intro:
    "Construo produtos digitais com foco em interface, movimento e detalhe. Aqui ficam meus projetos e o que ando escrevendo e gravando.",
  avatar: "/avatar.png",
  email: "voce@exemplo.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    x: "https://x.com",
  },
};

export const projects: Project[] = [
  {
    id: "fluxo",
    title: "Fluxo",
    description:
      "Painel de finanças pessoais com categorização automática e metas. Um projeto pessoal para repensar como visualizamos dinheiro no dia a dia.",
    type: "Pessoal",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind", "Postgres"],
    image: "/projects/fluxo.png",
    href: "#",
  },
  {
    id: "northwind",
    title: "Northwind Commerce",
    description:
      "Plataforma de e-commerce headless para uma marca de moda, com checkout otimizado e catálogo em tempo real. Trabalho real em produção.",
    type: "Trabalho",
    year: "2024",
    stack: ["React", "Node.js", "GraphQL", "Stripe"],
    image: "/projects/northwind.png",
    href: "#",
  },
  {
    id: "pulse",
    title: "Pulse",
    description:
      "Dashboard de analytics em tempo real com WebSockets. Explorei visualização de dados ao vivo e performance de renderização.",
    type: "Pessoal",
    year: "2024",
    stack: ["Next.js", "WebSockets", "Redis", "D3"],
    image: "/projects/pulse.png",
    href: "#",
  },
  {
    id: "atlas",
    title: "Atlas Design System",
    description:
      "Design system e biblioteca de componentes usada por múltiplos times. Documentação viva, tokens e acessibilidade como base.",
    type: "Trabalho",
    year: "2023",
    stack: ["React", "Storybook", "TypeScript", "Radix"],
    image: "/projects/atlas.png",
    href: "#",
  },
];

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
];

// Assuntos que o usuário pode escolher no chat de contato.
export const contactTopics = [
  { id: "trabalho", label: "Uma oportunidade de trabalho" },
  { id: "projeto", label: "Um projeto ou colaboração" },
  { id: "conteudo", label: "Falar sobre um conteúdo" },
  { id: "outro", label: "Outro assunto" },
];
