import { profile } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-2 border-t border-border py-10 font-mono text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      {/* <span>Feito com atenção aos detalhes.</span> */}
    </footer>
  );
}
