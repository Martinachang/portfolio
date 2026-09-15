# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Portfolio site for Chang Chu-Pei (張主佩), UI/UX designer and researcher. Built for someone learning HTML, CSS and JavaScript, so the code stays plain: no npm, no bundler, no framework, no ES modules. Classic `<script src>` tags, so `index.html` works by double-click and in VS Code Live Preview. Hosted on GitHub Pages from the repo root. Keep it that way unless the owner asks otherwise.

## Files

- `index.html`: the skeleton only. Text comes from `content.js` via `data-text="a.b.c"` (and `data-alt` for images). Lists are drawn by JS into empty elements with an id.
- `content.js`: every word on the site, in both languages side by side: `{ en: "...", zh: "..." }`. Plain strings are language-neutral. Adding a project means adding a block like `project` plus its images.
- `style.css`: tokens at the top, phone-first rules, then two `@media (min-width: …)` blocks at the end for wider screens. Site accent is blue; the `.project` section overrides `--accent` and `--accent-wash` to the project's own colour (FeetMine orange).
- `script.js`: `t()` picks the language, `render()` fills the page, then quote demo, phase tabs (ARIA tabs, arrow keys) and desk drag (pointer events, wide screens only).
- `test.html`: the runnable check. Open it through a local server; every line must say PASS.
- `img/`: web-sized figures cropped from `portfolio-example/` (the source deck, 19 slides at 7680×4320, git-ignored). Crop with `sips -c H W --cropOffset Y X`, then `sips -Z <maxpx>`.

## Checking work

```
python3 -m http.server 8123          # then open http://127.0.0.1:8123/test.html
```

Headless Chrome enforces a 500px minimum window width. To screenshot a phone layout, load `index.html` inside a 390px-wide `<iframe>` in a scratch page and screenshot that.

## Content facts to know

- Chinese copy was drafted from the English deck and is unreviewed by the owner. The deck's two "Worked" date ranges were reversed in the source and were normalised to start–end order.
- The desk objects map to sections: folder → Work, badge → About, note → Skills, postcard → Contact. On screens under 720px they become a grid with no drag.
