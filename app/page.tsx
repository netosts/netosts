import { ProjectSlider } from "@/components/project-slider";
import { ContentSection } from "@/components/content-section";
import { ContactChat } from "@/components/contact-chat";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { profile, projects, contents } from "@/lib/data";

const FEATURED_PROJECTS = 5;
const RECENT_CONTENTS = 6;

export default function Page() {
  const featuredProjects = projects.slice(0, FEATURED_PROJECTS);
  const recentContents = contents.slice(0, RECENT_CONTENTS);

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-5 md:px-8">
      <SiteHeader />

      {/* Introdução curta, no lugar do hero tradicional */}
      <section className="max-w-2xl py-14 md:py-20">
        <p className="mb-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {profile.role}
        </p>
        <h1 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          {profile.intro}
        </h1>
      </section>

      {/* Projetos em destaque */}
      <section id="projetos" className="scroll-mt-8 py-8">
        <SectionHeading
          index="01"
          title="Projetos em destaque"
          action={
            projects.length > FEATURED_PROJECTS
              ? { label: `Ver todos (${projects.length})`, href: "/projetos" }
              : undefined
          }
        />
        <ProjectSlider projects={featuredProjects} />
      </section>

      {/* Conteúdos recentes */}
      <section id="conteudos" className="scroll-mt-8 py-16 md:py-24">
        <SectionHeading
          index="02"
          title="Conteúdos recentes"
          action={
            contents.length > RECENT_CONTENTS
              ? { label: `Ver todos (${contents.length})`, href: "/conteudos" }
              : undefined
          }
        />
        <ContentSection contents={recentContents} />
      </section>

      {/* Âncora que revela o chat de contato */}
      <div id="chat-anchor" aria-hidden className="h-px w-full" />

      <SiteFooter />

      <ContactChat />
    </main>
  );
}
