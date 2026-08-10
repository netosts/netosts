import Link from "next/link";
import { profile } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="flex items-baseline justify-between gap-4 py-8">
      <Link
        href="/"
        className="font-mono text-sm tracking-tight text-foreground transition-opacity hover:opacity-70"
      >
        {profile.name}
      </Link>
      <nav className="flex items-center gap-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <Link
          href="/projetos"
          className="transition-colors hover:text-foreground"
        >
          Projetos
        </Link>
        <Link
          href="/conteudos"
          className="transition-colors hover:text-foreground"
        >
          Conteúdos
        </Link>
      </nav>
    </header>
  );
}
