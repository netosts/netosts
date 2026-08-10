"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectSlider({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const count = projects.length;
  const trackRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (next: number) => {
      setIndex((prev) => {
        const total = count;
        return ((next % total) + total) % total;
      });
    },
    [count],
  );

  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  // Navegação por teclado quando o slider está focado
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  // Suporte a arrastar (drag) e swipe touch
  const drag = useRef<{ startX: number; active: boolean }>({
    startX: 0,
    active: false,
  });

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { startX: e.clientX, active: true };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const delta = e.clientX - drag.current.startX;
    drag.current.active = false;
    if (Math.abs(delta) > 60) {
      if (delta < 0) next();
      else prev();
    }
  };

  return (
    <div
      className="relative outline-none"
      tabIndex={0}
      role="group"
      aria-roledescription="carrossel"
      aria-label="Projetos em destaque"
      onKeyDown={onKeyDown}
    >
      <div className="overflow-hidden rounded-2xl border border-border">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          {projects.map((project, i) => (
            <ProjectSlide
              key={project.id}
              project={project}
              active={i === index}
            />
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="mt-6 flex items-center justify-between">
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Selecionar projeto"
        >
          {projects.map((project, i) => (
            <button
              key={project.id}
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir para ${project.title}`}
              onClick={() => go(i)}
              className="group relative h-2 rounded-full transition-all duration-500"
              style={{
                width: i === index ? 28 : 8,
                backgroundColor:
                  i === index ? "var(--accent-solid)" : "var(--border)",
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Projeto anterior"
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            onClick={next}
            aria-label="Próximo projeto"
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectSlide({
  project,
  active,
}: {
  project: Project;
  active: boolean;
}) {
  return (
    <div className="min-w-full" aria-hidden={!active}>
      <div className="grid gap-0 md:grid-cols-2">
        {/* Imagem / preview */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted md:aspect-auto md:min-h-[26rem]">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`Prévia do projeto ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            crossOrigin="anonymous"
            draggable={false}
            priority={active}
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col justify-between gap-8 p-8 md:p-10">
          <div className="space-y-5">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span
                className="inline-flex items-center rounded-full px-2.5 py-1"
                style={{
                  color: "var(--accent-solid)",
                  backgroundColor:
                    "color-mix(in oklch, var(--accent-solid) 12%, transparent)",
                }}
              >
                {project.type}
              </span>
              <span aria-hidden>·</span>
              <span>{project.year}</span>
            </div>

            <h3 className="text-pretty text-3xl font-medium tracking-tight md:text-4xl">
              {project.title}
            </h3>

            <p className="max-w-prose text-pretty leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="space-y-5">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {project.href && (
              <a
                href={project.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
              >
                Ver projeto
                <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
