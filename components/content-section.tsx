import Image from "next/image";
import { ArrowUpRight, FileText, Play } from "lucide-react";
import type { Content } from "@/lib/data";

const placeholders: Content["kind"][] = ["Artigo", "Vídeo", "Artigo"];

export function ContentSection({ contents }: { contents: Content[] }) {
  if (contents.length === 0) {
    return (
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((kind, index) => {
          const Icon = kind === "Vídeo" ? Play : FileText;

          return (
            <li key={`${kind}-${index}`} className="bg-background p-5">
              <div className="flex aspect-video items-center justify-center rounded-lg bg-muted">
                <Icon className="size-7 text-muted-foreground" />
              </div>
              <div className="mt-5 space-y-3">
                <p className="font-mono text-xs text-muted-foreground">
                  {kind} · Em breve
                </p>
                <h3 className="text-lg font-medium leading-snug">
                  Conteúdo em preparação
                </h3>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {contents.map((content) => {
        const Icon = content.kind === "Vídeo" ? Play : FileText;

        return (
          <li key={content.id} className="bg-background">
            <a
              href={content.href}
              className="group flex h-full flex-col gap-5 p-5 transition-colors hover:bg-accent"
            >
              <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-muted">
                {content.image ? (
                  <Image
                    src={content.image}
                    alt={`Miniatura de ${content.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    crossOrigin="anonymous"
                  />
                ) : (
                  <Icon className="size-7 text-muted-foreground" />
                )}
                <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-foreground backdrop-blur">
                  <Icon className="size-3" />
                  {content.kind}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span>{content.source}</span>
                  <span aria-hidden>·</span>
                  <span>{content.date}</span>
                </div>
                <h3 className="text-pretty text-lg font-medium leading-snug tracking-tight">
                  {content.title}
                </h3>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {content.kind === "Vídeo" ? "Assistir" : "Ler"}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
