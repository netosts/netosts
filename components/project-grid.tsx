"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

const filters = ["Todos", "Pessoal", "Trabalho"] as const;
type Filter = (typeof filters)[number];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("Todos");

  const visible = useMemo(
    () =>
      filter === "Todos" ? projects : projects.filter((p) => p.type === filter),
    [filter, projects],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {filters.map((f) => {
          const count =
            f === "Todos"
              ? projects.length
              : projects.filter((p) => p.type === f).length;
          const active = f === filter;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors"
              style={{
                borderColor: active ? "var(--accent-solid)" : "var(--border)",
                color: active
                  ? "var(--accent-solid)"
                  : "var(--muted-foreground)",
                backgroundColor: active
                  ? "color-mix(in oklch, var(--accent-solid) 12%, transparent)"
                  : "transparent",
              }}
            >
              {f}
              <span className="font-mono text-xs opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="grid gap-6 sm:grid-cols-2">
        {visible.map((project) => (
          <li key={project.id}>
            <a
              href={project.href ?? "#"}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border transition-colors hover:bg-accent"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`Prévia do projeto ${project.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  crossOrigin="anonymous"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
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
                  <span>{project.period}</span>
                </div>

                <h3 className="text-pretty text-xl font-medium tracking-tight">
                  {project.title}
                </h3>

                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-opacity group-hover:opacity-70">
                  Ver projeto
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
