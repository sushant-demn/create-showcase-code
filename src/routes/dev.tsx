import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/dev")({
  head: () => ({
    meta: [
      { title: "Software Development — Sushant Demn" },
      {
        name: "description",
        content:
          "Software developer portfolio. Real projects with problem, approach and result, plus tech stack and résumé. Looking for a full-time role.",
      },
      { property: "og:title", content: "Software Development — Sushant Demn" },
      {
        property: "og:description",
        content:
          "Software developer portfolio. Real projects, tech stack and résumé. Looking for a full-time role.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DevTrack,
});

type Project = {
  name: string;
  tag: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  url: string;
  meta: string;
};

const projects: Project[] = [
  {
    name: "Sustify",
    tag: "Local audio player",
    meta: "C++17 / C++20 · 5★ on GitHub",
    problem:
      "Desktop audio players are bloated. Wanted something lightweight that still felt like a modern app, with proper metadata handling.",
    approach:
      "Built a C++ audio backend handling playback and queue management, paired with an OS-native WebView rendering an HTML/CSS/JS frontend — so the UI stays web-like but the binary stays tiny. Used TagLib to read ID3 tags (artist, title) straight from files, and a CMake + vcpkg pipeline that packages the executable, DLLs and GUI assets into one portable folder.",
    result:
      "A single, standalone, fast local player that reads real metadata and runs without an installer — a full C++ project shipped end-to-end.",
    stack: ["C++17/20", "CMake", "vcpkg", "TagLib", "WebView", "HTML/CSS/JS"],
    url: "https://github.com/sushant-demn/Sustify",
  },
  {
    name: "Pacman Hunt Protocol",
    tag: "Multiplayer game",
    meta: "C# · Game networking",
    problem:
      "Wanted to learn real-time multiplayer networking, not just build a single-player game in a vacuum.",
    approach:
      "Built a PacMan multiplayer game in C#, designing the client and the network protocol so multiple players share a live game state. Focus was on synchronising movement and game rules across clients without the whole thing falling apart under latency.",
    result:
      "A working multiplayer PacMan with a hand-rolled protocol — a concrete exercise in real-time state sync, game architecture and C#.",
    stack: ["C#", "Networking", "Game architecture", "Real-time sync"],
    url: "https://github.com/sushant-demn/pacman-hunt-protocol",
  },
];

const stack = [
  "C / C++",
  "C#",
  "JavaScript / TypeScript",
  "React",
  "Python",
  "CMake / vcpkg",
  "Git",
];

function DevTrack() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Track 02 — Software Development
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] text-foreground">
          I ship things that run.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
          Software developer based in India, looking for a full-time role. I like
          systems that are small, fast and actually finished — from a C++ audio
          player to a multiplayer game with a hand-rolled protocol.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="mailto:hello@sushantdemn.dev?subject=Résumé request — Sushant Demn"
            className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request résumé
          </a>
          <a
            href="https://github.com/sushant-demn"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <div className="hairline" />
        <div className="flex items-baseline justify-between py-5">
          <h2 className="font-display text-3xl text-foreground">Selected work</h2>
          <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {projects.length} projects
          </span>
        </div>

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <ProjectRow key={p.name} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <div className="hairline" />
        <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-[1fr_2fr]">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Tech stack
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hire */}
      <section className="mx-auto max-w-6xl px-6 pt-4">
        <div className="hairline" />
        <div className="py-10">
          <h2 className="max-w-2xl font-display text-[clamp(2rem,5vw,3rem)] leading-[1.05] text-foreground">
            Looking for a junior developer who finishes what they start?
          </h2>
          <p className="mt-4 max-w-lg text-base text-muted-foreground">
            Open to full-time roles and internships. I learn stacks quickly and
            care about writing code I can defend.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:hello@sushantdemn.dev?subject=Full-time role — Sushant Demn"
              className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Email me →
            </a>
            <a
              href="https://github.com/sushant-demn"
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
            >
              GitHub ↗
            </a>
            <Link
              to="/video"
              className="self-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Need an editor instead? Video track →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <div className="border-b border-border py-10 last:border-b-0">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.1fr_2fr]">
        <div>
          <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            0{index + 1}
          </span>
          <h3 className="mt-3 font-display text-4xl text-foreground">
            {project.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-foreground">
            {project.tag}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{project.meta}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="ink-underline mt-5 inline-block pb-0.5 text-sm font-medium text-foreground"
          >
            View on GitHub ↗
          </a>
        </div>
        <div className="flex flex-col gap-5">
          <WriteUp label="Problem" text={project.problem} />
          <WriteUp label="Approach" text={project.approach} />
          <WriteUp label="Result" text={project.result} />
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WriteUp({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-foreground">{text}</p>
    </div>
  );
}
