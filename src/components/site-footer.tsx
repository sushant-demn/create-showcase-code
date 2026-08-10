import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24">
      <div className="hairline" />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-3xl leading-none text-foreground">
              Sushant Demn
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Video editor for hire & software developer looking for a full-time
              role. One person, two crafts, one place.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-sm sm:items-end">
            <Link
              to="/video"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Video Editing →
            </Link>
            <Link
              to="/dev"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Software Development →
            </Link>
            <a
              href="https://github.com/sushant-demn"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub ↗
            </a>
            <a
              href="mailto:hello@sushantdemn.dev?subject=Project%20enquiry"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              hello@sushantdemn.dev
            </a>
          </div>
        </div>
        <div className="hairline mt-8" />
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sushant Demn. Built by hand.
        </p>
      </div>
    </footer>
  );
}
