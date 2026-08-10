import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeading({
  index,
  title,
  hint,
  action,
}: {
  index: string;
  title: string;
  hint?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-muted-foreground">{index}</span>
        <h2 className="text-xl font-medium tracking-tight md:text-2xl">
          {title}
        </h2>
      </div>
      {action ? (
        <Link
          href={action.href}
          className="group inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          {action.label}
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      ) : hint ? (
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {hint}
        </span>
      ) : null}
    </div>
  );
}
