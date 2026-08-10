import { ProjectSlider } from "@/components/project-slider";
import { ContentSection } from "@/components/content-section";
import { ContactChat } from "@/components/contact-chat";
import { profile, projects, contents } from "@/lib/data";

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-5 md:px-8">
      {/* Cabeçalho minimalista */}
      <header className="flex items-baseline justify-between gap-4 py-8">
        <span className="font-mono text-sm tracking-tight text-foreground">
          {profile.name}
        </span>
        <nav className="flex items-center gap-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <a
            href="#projetos"
            className="transition-colors hover:text-foreground"
          >
            Projetos
          </a>
          <a
            href="#conteudos"
            className="transition-colors hover:text-foreground"
          >
            Conteúdos
          </a>
        </nav>
      </header>

      {/* Introdução curta, no lugar do hero tradicional */}
      <section className="max-w-2xl py-14 md:py-20">
        <p className="mb-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {profile.role}
        </p>
        <h1 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          {profile.intro}
        </h1>
      </section>

      {/* Projetos */}
      <section id="projetos" className="scroll-mt-8 py-8">
        <SectionLabel
          index="01"
          title="Projetos"
          hint="pessoais e profissionais"
        />
        <ProjectSlider projects={projects} />
      </section>

      {/* Conteúdos */}
      <section id="conteudos" className="scroll-mt-8 py-16 md:py-24">
        <SectionLabel
          index="02"
          title="Conteúdos recentes"
          hint="vídeos e artigos"
        />
        <ContentSection contents={contents} />
      </section>

      {/* Âncora que revela o chat de contato */}
      <div id="chat-anchor" aria-hidden className="h-px w-full" />

      {/* Rodapé */}
      <footer className="flex flex-col gap-2 border-t border-border py-10 font-mono text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Feito com atenção aos detalhes.</span>
      </footer>

      <ContactChat />
    </main>
  );
}

function SectionLabel({
  index,
  title,
  hint,
}: {
  index: string;
  title: string;
  hint: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-muted-foreground">{index}</span>
        <h2 className="text-xl font-medium tracking-tight md:text-2xl">
          {title}
        </h2>
      </div>
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {hint}
      </span>
    </div>
  );
}
