# Pixel & Prompt

look im an hobbist video editor and IT student i want to build a creative looking friendly aesthetic looking place to showcase my edits and get client plus show my development projects and get hired at job how do i mix these two to make a good website.

Goals 
1 video editing - freelance
2 sw dev - fulltime job


consider this as a schematics from another ai chatbot:
   Yes — mixing them on one site can absolutely work, but only if you don't blend them into one generic page. A recruiter skimming for "can this person code" and a small business owner skimming for "can this person make my brand look good" read completely differently, and a single undifferentiated scroll (reel clips next to LeetCode stats) reads as unfocused to both.

The fix is a fork, not a blend: one site, one identity, but a landing page that immediately splits into two purpose-built tracks — that's what the diagram above shows. A visitor picks their lane in one click, and everything after that is styled and written for that specific audience:

Video editing track — showreel front and center, before/after clips, a short bio in a warm/personal voice, client testimonials if you have any, a simple "get in touch" form. This is where creative flourishes belong.

Dev portfolio track — clean, fast, credibility-first: 2-3 real projects with problem/approach/result write-ups (Sustify and your distributed-compute project are strong material here), GitHub links, resume download, tech stack. Recruiters spend seconds per site, so this should be scannable, not clever.

Shared footer keeps it feeling like one coherent person rather than two disconnected sites — same name, same visual language (fonts/colors), just different pacing.

Is this "good enough" as a model, or overkill? For your situation it's actually the efficient choice, not the fancy one. The alternative — one blended homepage — is the version that undersells you to both audiences. If you wanted less effort, the leaner fallback is two separate lightweight presences (a slick reel-focused one-pager for clients + GitHub/LinkedIn for dev credibility) instead of a unified site, but since you already have real dev + design chops, building the forked version yourself is worth it — it doubles as proof of frontend skill for the job hunt.

On "free": you're well positioned to skip page-builders like Wix/Squarespace (which cost money past a point and look templated) and just build it:

Next.js or Vite + React + Tailwind — you already know React from Sustify, so no new stack to learn

Host free on Vercel or Netlify (free tier is plenty for a portfolio), or GitHub Pages if you want zero backend

Don't self-host video files — embed unlisted YouTube or Vimeo links for your edits; keeps hosting free and load times fast

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a4130ddd-a7c2-4bd2-9d44-dd1d30a8131b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
