import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { InstagramEmbed } from "@/components/instagram-embed";

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: "Video Editing — Sushant Payal" },
      {
        name: "description",
        content:
          "Freelance video editor. Showreels, social cuts and recent edits. Available for client work.",
      },
      { property: "og:title", content: "Video Editing — Sushant Payal" },
      {
        property: "og:description",
        content:
          "Freelance video editor. Showreels, social cuts and recent edits. Available for client work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VideoTrack,
});

const reels = [
  {
    url: "https://www.instagram.com/p/DbDjolypqrv/",
    caption: "Reel cut",
  },
  {
    url: "https://www.instagram.com/p/DGswQ8iJn1k/",
    caption: "Social edit",
  },
  {
    url: "https://www.instagram.com/p/C8XWhyzJa36/",
    caption: "Short-form",
  },
];

function VideoTrack() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Track 01 — Video Editing
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] text-foreground">
          I make footage feel like something.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
          Freelance video editor focused on social, short-form and brand cuts.
          Pacing, sound design and colour that fits the brand — not a template.
          Below is a slice of recent work.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
          >
            View recent edits
          </a>
        </div>
      </section>

      {/* Reels */}
      <section id="work" className="mx-auto max-w-6xl px-6 pt-20">
        <div className="hairline" />
        <div className="flex items-baseline justify-between py-5">
          <h2 className="font-display text-3xl text-foreground">Recent edits</h2>
          <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Instagram
          </span>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((r) => (
            <figure key={r.url} className="flex flex-col">
              <div className="overflow-hidden rounded-sm border border-border bg-card">
                <InstagramEmbed permalink={r.url} />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {r.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Bio */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <div className="hairline" />
        <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-[1fr_2fr]">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            About
          </p>
          <div className="max-w-2xl text-lg leading-relaxed text-foreground">
            <p>
              I’m Sushant — a hobbyist editor who got serious about rhythm. I cut
              for social and short-form, where the first second matters more than
              anything else. I care about pacing, clean audio and not wasting a
              frame.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              Available for freelance client work — reels, social packages, brand
              edits. If you have footage and a vibe, I can turn it into something
              people actually finish watching.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pt-8">
        <div className="hairline" />
        <ContactForm />
      </section>

      <SiteFooter />
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");

  const href = `mailto:mail@sushantp.me?subject=Video%20edit%20enquiry%20from%20${encodeURIComponent(
    name || "a new client",
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nProject:\n${project}`,
  )}`;

  return (
    <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-[1fr_2fr]">
      <div>
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Contact
        </p>
        <h2 className="mt-3 font-display text-4xl text-foreground">
          Got footage? Let’s cut it.
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Tell me what you’re making. I’ll reply within a day.
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = href;
        }}
        className="flex flex-col gap-5"
      >
        <Field label="Your name">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border-0 border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-foreground"
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Email">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border-0 border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-foreground"
            placeholder="jane@brand.com"
          />
        </Field>
        <Field label="What’s the project?">
          <textarea
            value={project}
            onChange={(e) => setProject(e.target.value)}
            rows={4}
            required
            className="w-full resize-none border-0 border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-foreground"
            placeholder="A 30-second reel from launch footage…"
          />
        </Field>
        <button
          type="submit"
          className="self-start rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Send enquiry →
        </button>
        <p className="text-xs text-muted-foreground">
          Prefer email?{" "}
          <a
            className="ink-underline"
            href="mailto:mail@sushantp.me?subject=Video%20edit%20enquiry"
          >
            mail@sushantp.me
          </a>
        </p>
      </form>
      <Link
        to="/dev"
        className="mt-4 text-sm text-muted-foreground transition-colors hover:text-foreground md:col-span-2"
      >
        Looking to hire a developer instead? Go to the development track →
      </Link>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
