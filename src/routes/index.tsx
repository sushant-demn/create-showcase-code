import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sushant Demn — Video Editor & Software Developer" },
      {
        name: "description",
        content:
          "One identity, two crafts. Pick a track: video editing for freelance clients, or software development for full-time roles.",
      },
      { property: "og:title", content: "Sushant Demn — Video Editor & Software Developer" },
      {
        property: "og:description",
        content:
          "One identity, two crafts. Video editing for freelance clients, software development for full-time roles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Fork,
});

function Fork() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Intro statement */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-14 sm:pt-28">
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Pick a track
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] text-foreground">
          I edit video <em className="italic text-muted-foreground">and</em> I build
          software. Choose what you came for.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
          One site, one person, two purpose-built paths. If you’re here to hire an
          editor, go left. If you’re here to hire a developer, go right. Either
          way, it’s the same hands.
        </p>
      </section>

      {/* The fork */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="fork-divider grid grid-cols-1 overflow-hidden rounded-sm border border-border md:grid-cols-2">
          {/* Video track */}
          <ForkPanel
            to="/video"
            kind="video"
            index="01"
            label="Video Editing"
            line="For brands & clients who want to look good"
            body="Showreels, social cuts, before/after edits. Warm, creative, a little loud — the way a reel page should feel."
            cta="See the reel"
          />
          {/* Dev track */}
          <ForkPanel
            to="/dev"
            kind="dev"
            index="02"
            label="Software Development"
            line="For recruiters & teams hiring a developer"
            body="Real projects, problem → approach → result write-ups, tech stack, and a résumé. Clean, fast, scannable."
            cta="See the work"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ForkPanel({
  to,
  kind,
  index,
  label,
  line,
  body,
  cta,
}: {
  to: "/video" | "/dev";
  kind: "video" | "dev";
  index: string;
  label: string;
  line: string;
  body: string;
  cta: string;
}) {
  const tint = kind === "video" ? "bg-track-video" : "bg-track-dev";
  return (
    <Link
      to={to}
      className={
        "group relative flex min-h-[24rem] flex-col justify-between p-8 transition-colors sm:min-h-[30rem] sm:p-12 " +
        tint +
        " hover:bg-background"
      }
    >
      <div className="flex items-start justify-between">
        <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {index}
        </span>
        <span className="translate-x-0 text-2xl text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground">
          →
        </span>
      </div>

      <div className="mt-auto">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1] text-foreground">
          {label}
        </h2>
        <p className="mt-3 text-sm font-medium text-foreground">{line}</p>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
        <p className="ink-underline mt-6 inline-block pb-0.5 text-[13px] font-medium text-foreground">
          {cta}
        </p>
      </div>
    </Link>
  );
}
