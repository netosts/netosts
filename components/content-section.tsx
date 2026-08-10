import Image from "next/image";
import { ArrowUpRight, Play, FileText } from "lucide-react";
import type { Content } from "@/lib/data";

export function ContentSection({ contents }: { contents: Content[] }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {contents.map((content) => (
        <li key={content.id} className="bg-background">
          <a
            href={content.href}
            className="group flex h-full flex-col gap-5 p-5 transition-colors hover:bg-accent"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
              <Image
                src={content.image || "/placeholder.svg"}
                alt={`Miniatura de ${content.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                crossOrigin="anonymous"
              />
              <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-foreground backdrop-blur">
                {content.kind === "Vídeo" ? (
                  <Play className="size-3" />
                ) : (
                  <FileText className="size-3" />
                )}
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
      ))}
    </ul>
  );
}
