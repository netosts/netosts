import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContentSection } from "@/components/content-section";
import { ContactChat } from "@/components/contact-chat";
import { contents } from "@/lib/data";

export const metadata: Metadata = {
  title: "Conteúdos — Seu Nome",
  description: "Todos os vídeos e artigos que publiquei.",
};

export default function ConteudosPage() {
  const videos = contents.filter((c) => c.kind === "Vídeo").length;
  const artigos = contents.filter((c) => c.kind === "Artigo").length;

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-5 md:px-8">
      <SiteHeader />

      <section className="py-10 md:py-16">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Arquivo · {videos} vídeos · {artigos} artigos
        </p>
        <h1 className="max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          Tudo que escrevi e gravei, do mais recente ao mais antigo.
        </h1>
      </section>

      <section className="pb-20">
        <ContentSection contents={contents} />
      </section>

      <SiteFooter />

      <ContactChat />
    </main>
  );
}
