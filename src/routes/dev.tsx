import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
// import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/dev")({
  head: () => ({
    meta: [
      { title: "Sushant Payal — Software Developer (C++, C#, Full-Stack)" },
      {
        name: "description",
        content:
          "IT engineering student and software developer in Pune. C++ audio engine, Unity multiplayer game, IoT full-stack dashboard. Résumé, stack and GitHub inside.",
      },
      { property: "og:title", content: "Sushant Payal — Software Developer" },
      {
        property: "og:description",
        content:
          "C++ audio engine, Unity + Photon multiplayer game, IoT full-stack dashboard. Hackathon runner-up. Open to full-time roles and internships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DevTrack,
});

const EMAIL = "mail@sushantp.me";

type Project = {
  name: string;
  tag: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  url?: string;
  meta: string;
};

const projects: Project[] = [
  {
    name: "Sustify",
    tag: "Hi-res desktop audio player",
    meta: "C++ · Mar 2026",
    problem:
      "Desktop audio players are either bloated or ugly, and most mangle metadata. I wanted a lossless-capable player that stays tiny and still looks like a modern app.",
    approach:
      "Built a low-latency audio engine on the Miniaudio API handling real-time state management, precise seeking and gapless continuous playback across FLAC, WAV and MP3. Bridged the native C++ backend to a web-based UI through WebView, with Portable File Dialogs for native cross-platform file selection, TagLib for live ID3 metadata parsing, and a linear queue structure for track sequencing.",
    result:
      "A single portable executable that plays lossless audio, reads real metadata and needs no installer — a full C++ desktop app shipped end to end.",
    stack: ["C++", "Miniaudio", "TagLib", "WebView", "CMake", "vcpkg"],
    url: "https://github.com/sushant-demn/Sustify",
  },
  {
    name: "Pacman: The Hunt Protocol",
    tag: "2D multiplayer game",
    meta: "C# · Unity · Apr 2026",
    problem:
      "Single-player games hide the hard part. I wanted to actually solve real-time networking: two players, one authoritative game state, unreliable latency.",
    approach:
      "Built a Pacman-inspired 2D multiplayer game in Unity and C#, integrating Photon PUN for lobby handling and player state synchronisation. Wrote a grid-based movement system using BoxCast for precise collision and physics, scalable level architecture with Unity Tilemap, and responsive UI with real-time spatial tracking indicators for each avatar.",
    result:
      "A playable networked game built under hackathon pressure — and Runner-Up out of 50+ national teams at Hacksprint v7.0.",
    stack: ["C#", "Unity Engine", "Photon PUN", "Tilemap", "Physics"],
    url: "https://github.com/sushant-demn",
  },
  {
    name: "Residential Security System",
    tag: "IoT + full-stack dashboard",
    meta: "C++ · ReactJS · Node.js · Mar 2025",
    problem:
      "Off-the-shelf home security is subscription-locked and closed. I wanted a self-hosted system built from cheap hardware I already had.",
    approach:
      "Architected a dual-layer IoT system: Raspberry Pi as central server, Arduino UNO for sensor data acquisition. Added a real-time alert subsystem pushing instant notifications via the Telegram API on threat detection, a live surveillance feed from the Pi Camera Module plus old smartphones as remote cameras, and a full-stack Node.js + MySQL dashboard to visualise live sensor data and manage security logs.",
    result:
      "A working self-hosted security system with remote video, instant alerts and a web dashboard — hardware, backend and frontend all mine.",
    stack: ["C++", "Arduino", "Raspberry Pi", "ESP32", "Node.js", "ReactJS", "MySQL"],
  },
];

const stackGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["C++", "C#", "JavaScript", "MySQL"] },
  {
    label: "Frameworks & Libraries",
    items: ["ReactJS", "Node.js", "Photon PUN", "TagLib", "Miniaudio", "WebView"],
  },
  {
    label: "Tools & Hardware",
    items: [
      "Unity Engine",
      "Arduino",
      "Raspberry Pi",
      "ESP32",
      "Ubuntu Server",
      "Git / GitHub",
      "Microsoft Azure",
    ],
  },
];

function DevTrack() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Software Development — primary track
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] text-foreground">
          I ship things that run.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Information Technology engineering student at IIIT, SPPU (Pune) and a systems-leaning
          developer. I build things close to the metal and finish them: a lossless C++ audio engine,
          a networked Unity game, an IoT security system with its own dashboard. Open to full-time
          roles and internships.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
          <Fact k="Based in" v="Pune, MH · India" />
          <Fact k="Studying" v="B.E. Information Technology" />
          <Fact k="GPA" v="7.8 / 10" />
          <Fact k="Focus" v="Systems · C++ · Full-stack" />
        </dl>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="/Resume_Sushant_Payal.pdf"
            download="Sushant_Payal_Resume.pdf"
            className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Download résumé (PDF)
          </a>
          <a
            href={`mailto:${EMAIL}?subject=Full-time role — Sushant Payal`}
            className="rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
          >
            Email me
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
        <div className="py-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Technical skills
          </p>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
            {stackGroups.map((g) => (
              <div key={g.label}>
                <p className="text-sm font-medium text-foreground">{g.label}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border px-3.5 py-1.5 text-[13px] text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & achievements */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="hairline" />
        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Education
            </p>
            <h3 className="mt-4 font-display text-2xl leading-snug text-foreground">
              International Institute of Information Technology, SPPU
            </h3>
            <p className="mt-2 text-[15px] text-foreground">
              B.E. Information Technology · 2023 – Present
            </p>
            <p className="mt-1 text-sm text-muted-foreground">GPA 7.8 / 10</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Achievements
            </p>
            <h3 className="mt-4 font-display text-2xl leading-snug text-foreground">
              Runner-Up — Game X Innovate, Hacksprint v7.0
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              Organised by MMCOE Karvenagar and Zensar Technologies. Built a 2D multiplayer game in
              under 24 hours with Unity and Photon PUN — placed Runner-Up out of 50+ teams at
              national level.
            </p>
          </div>
        </div>
      </section>

      {/* Hire */}
      <section className="mx-auto max-w-6xl px-6 pt-4">
        <div className="hairline" />
        <div className="py-10">
          <h2 className="max-w-2xl font-display text-[clamp(2rem,5vw,3rem)] leading-[1.05] text-foreground">
            Looking for a developer who finishes what they start?
          </h2>
          <p className="mt-4 max-w-lg text-base text-muted-foreground">
            Open to full-time roles and internships. I learn stacks quickly and care about writing
            code I can defend line by line.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}?subject=Full-time role — Sushant Payal`}
              className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Email me →
            </a>
            <a
              href="/Resume_Sushant_Payal.pdf"
              download="Sushant_Payal_Resume.pdf"
              className="rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
            >
              Download résumé
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

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{k}</dt>
      <dd className="mt-1.5 text-[15px] leading-snug text-foreground">{v}</dd>
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
          <h3 className="mt-3 font-display text-4xl leading-tight text-foreground">
            {project.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-foreground">{project.tag}</p>
          <p className="mt-1 text-xs text-muted-foreground">{project.meta}</p>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="ink-underline mt-5 inline-block pb-0.5 text-sm font-medium text-foreground"
            >
              View on GitHub ↗
            </a>
          ) : null}
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
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-foreground">{text}</p>
    </div>
  );
}
