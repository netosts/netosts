"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectSlider({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const count = projects.length;
  const trackRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (next: number) => {
      setIndex(() => {
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
    if (e.pointerType === "mouse" && e.button !== 0) return;
    drag.current = { startX: e.clientX, active: true };
    e.currentTarget.setPointerCapture(e.pointerId);
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
  const onPointerCancel = () => {
    drag.current.active = false;
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
          className="flex cursor-grab touch-pan-y select-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] active:cursor-grabbing"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
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
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent cursor-pointer"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            onClick={next}
            aria-label="Próximo projeto"
            className="cursor-pointer flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent"
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
    <div
      className="grid min-w-full gap-0 lg:grid-cols-[3fr_2fr]"
      aria-hidden={!active}
    >
      {/* Imagem / identidade visual */}
      <div
        className={`relative overflow-hidden ${
          project.video
            ? "w-full self-start bg-black"
            : "aspect-[4/3] bg-muted lg:h-full lg:aspect-auto"
        }`}
        style={
          project.video
            ? { aspectRatio: project.video.aspectRatio }
            : undefined
        }
      >
        {project.video ? (
          <ProjectVideo project={project} active={active} />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={`Prévia do projeto ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            crossOrigin="anonymous"
            draggable={false}
            priority={active}
          />
        ) : (
          <div className="flex h-full min-h-72 flex-col justify-between p-8 md:min-h-0 md:p-10">
            <Code2 className="size-8 text-[var(--accent-solid)]" />
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {project.company}
              </p>
              <p className="max-w-sm text-3xl font-medium leading-tight md:text-4xl">
                {project.title}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Resumo */}
      <div className="space-y-5 bg-background p-8 md:p-10 lg:p-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
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
          <span>{project.category}</span>
        </div>

        <h3 className="text-pretty text-3xl font-medium tracking-tight">
          {project.title}
        </h3>

        <p className="max-w-prose text-pretty leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>

      {/* Tecnologias e link */}
      <div className="flex flex-col gap-5 border-t border-border bg-background p-8 md:p-10 lg:col-span-2 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-6">
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
            target="_blank"
            rel="noopener noreferrer"
            draggable={false}
            onPointerDown={(event) => event.stopPropagation()}
            onPointerUp={(event) => event.stopPropagation()}
            className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
          >
            Ver projeto
            <ArrowUpRight className="size-4" />
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectVideo({
  project,
  active,
}: {
  project: Project;
  active: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (active) {
      void video.play().catch(() => {
        // Browsers may still block autoplay depending on user preferences.
      });
    } else {
      video.pause();
    }
  }, [active]);

  if (!project.video) return null;

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload={active ? "metadata" : "none"}
      poster={project.video.poster}
      aria-label={`Demonstração do projeto ${project.title}`}
      className="pointer-events-none h-full w-full object-contain"
    >
      {project.video.sources.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
      Seu navegador não oferece suporte à reprodução de vídeo.
    </video>
  );
}
