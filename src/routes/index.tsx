import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sushant Payal — Software Developer & Video Editor" },
      {
        name: "description",
        content:
          "Software developer (C++, C#, full-stack) and IT engineering student in Pune — plus a freelance video editing track. Projects, résumé and reel inside.",
      },
      { property: "og:title", content: "Sushant Payal — Software Developer & Video Editor" },
      {
        property: "og:description",
        content:
          "Software developer first: C++ audio engine, Unity multiplayer game, IoT dashboard. Also editing video for clients.",
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
          Pune, India — open to full-time developer roles
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] text-foreground">
          I build software.{" "}
          <em className="italic text-muted-foreground">
            I also edit video.
          </em>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
          IT engineering student at IIIT, SPPU. C++ audio engine, a networked
          Unity game, an IoT security system with its own dashboard — shipped,
          not sketched. Video editing is the other half of the same hands.
        </p>
      </section>

      {/* The fork */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="fork-divider grid grid-cols-1 overflow-hidden rounded-sm border border-border md:grid-cols-[1.7fr_1fr]">
          {/* Dev track — primary */}
          <ForkPanel
            to="/dev"
            kind="dev"
            index="01 — Primary"
            label="Software Development"
            line="For recruiters & teams hiring a developer"
            body="Three real projects written up as problem → approach → result, a full technical stack, education, hackathon award and a downloadable résumé."
            cta="See the work"
            primary
          />
          {/* Video track — secondary */}
          <ForkPanel
            to="/video"
            kind="video"
            index="02"
            label="Video Editing"
            line="For brands & clients who want to look good"
            body="Showreels, social cuts and before/after edits — freelance."
            cta="See the reel"
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
