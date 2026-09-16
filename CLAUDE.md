# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Portfolio site for Chang Chu-Pei (張主佩), UI/UX designer and researcher. Built for someone learning HTML, CSS and JavaScript, so the code stays plain: no npm, no bundler, no framework, no ES modules. Classic `<script src>` tags, so `index.html` works by double-click and in VS Code Live Preview. Hosted on GitHub Pages from the repo root. Keep it that way unless the owner asks otherwise.

## Files

- `index.html`: the home page. The desk, one Work panel per project, then About, How I work (three steps, `#skills`), Contact.
- `feetmine.html`: a case-study page. `<body data-project="feetmine">` names its entry in `content.js`. To add a project: copy this file, change `data-project`, add an entry to `content.projects` (newest first; the first one is featured on the desk) and its images.
- `content.js`: every word on the site, in both languages side by side: `{ en: "...", zh: "..." }`. Plain strings are language-neutral. Each project carries its own `accent` and `accentWash` colours, plus `headline`, `blurb` and `stats` for its panel on the home page. Only `desk.headline` may contain HTML (`<em>`); it is filled through `data-html` instead of `data-text`. `content.logos` maps a tool name to its SVG; any tool with an entry shows the logo.
- `site.js` (shared: language, `t()`, `fill()`, `render()`, the one-second glide to `#section` links), `home.js` (project cards, profile lists, desk drag), `project.js` (phase sections). Each page script defines `renderPage()`, which `site.js` calls on load and on every language switch.
- `style.css`: tokens at the top, phone-first rules, then two `@media (min-width: …)` blocks at the end for wider screens. Site accent is blue; `.project`, the folder and the work cards get a project's colours from JS.
- `test.html`: the runnable check. Open it through a local server; every line must say PASS.
- `img/`: tool logos (`*.svg`, from simple-icons and Wikimedia Commons), `profile.jpg`, `mascot.png`, and the deck's slides as `<project>-NN.jpg`, 2000px wide, exported from `portfolio-example/` (the source deck, 19 slides at 7680×4320, git-ignored) with `sips -Z 2000 -s format jpeg -s formatOptions 80 in.jpg --out out.jpg`. Slide 5 is the cover; the case-study page shows the rest whole, one per row, and a click opens the slide full size.

## Checking work

```
python3 -m http.server 8123          # then open http://127.0.0.1:8123/test.html
```

Headless Chrome with `--virtual-time-budget` fails the glide check (no real animation frames); the rest passes. Headless Chrome enforces a 500px minimum window width. To screenshot a phone layout, load `index.html` inside a 390px-wide `<iframe>` in a scratch page and screenshot that.

## Content facts to know

- Chinese copy was drafted from the English deck and is unreviewed by the owner. The deck's two "Worked" date ranges were reversed in the source and were normalised to start–end order.
- The desk objects map to sections: folder → Work, badge → About, note → Skills, postcard → Contact. On screens under 720px they become a grid with no drag.
