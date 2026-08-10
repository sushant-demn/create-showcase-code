import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { label: "Video", to: "/video" },
  { label: "Development", to: "/dev" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-sm">
      <div className="hairline" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-xl leading-none tracking-tight text-foreground">
            Sushant Payal
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            Developer & Editor
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((l) => {
            const active = pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={
                  "px-3 py-1.5 text-[13px] font-medium transition-colors " +
                  (active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href="https://github.com/sushant-demn"
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
      </div>
      <div className="hairline" />
    </header>
  );
}
