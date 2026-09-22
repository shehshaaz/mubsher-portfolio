# Muhammed Mubasher — portfolio

React + Vite + GSAP (ScrollTrigger). No Three.js — the depth and motion
come from CSS 3D transforms driven by GSAP, which is lighter and was
enough to get a genuine sense of depth without a WebGL scene.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in /dist
```

## Where to change things

| What | File |
|---|---|
| Every word on the site, plus work/software/education | `src/data.js` |
| Colours, type, spacing (tokens at the top) | `src/styles.css` |
| Hero entrance + parallax | `src/components/Hero.jsx` |
| Work gallery scroll choreography | `src/components/Work.jsx` |
| Tool wall / magnetic hover | `src/components/ToolWall.jsx`, `useMagnetic` in `src/hooks.js` |
| CV preview sheet | `src/components/CV.jsx` |

## Adding the real CV file

Drop the PDF at `public/mubasher-cv.pdf` — the View/Download buttons in
the CV section already point at that path.

## Adding real projects

The `work` array in `src/data.js` is placeholder concept studies (no
real project photos exist yet). Each entry needs `title`, `category`,
`year`, `tools`, `align` ("left" or "right"), a `blurb`, and a `plan` —
rooms as `[x, y, width, height, label]` on a 100x62 grid, which draws
itself as a line-art floor plan. Swap in a real image by replacing the
`<Plan>` SVG in `Work.jsx` with an `<img>` once you have photography or
renders.

## Notes

- No job history is shown because the CV has none yet (diploma finishes
  2026) — the About/CV sections lean on the summary and education
  instead of inventing employers.
- Respects `prefers-reduced-motion` (all GSAP scroll animations are
  skipped, content shows in its final state) and hides the custom
  cursor and magnetic hover on touch devices.
- GSAP contexts are created and `.revert()`-ed per component via
  `useScrollFx`, so animations clean up correctly on unmount.
