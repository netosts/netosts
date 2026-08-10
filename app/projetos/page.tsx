import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectGrid } from "@/components/project-grid";
import { ContactChat } from "@/components/contact-chat";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projetos — Seu Nome",
  description: "Todos os projetos pessoais e profissionais.",
};

export default function ProjetosPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-5 md:px-8">
      <SiteHeader />

      <section className="py-10 md:py-16">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Arquivo · {projects.length} projetos
        </p>
        <h1 className="max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          Tudo que construí, entre experimentos pessoais e trabalhos reais.
        </h1>
      </section>

      <section className="pb-20">
        <ProjectGrid projects={projects} />
      </section>

      <SiteFooter />

      <ContactChat />
    </main>
  );
}
