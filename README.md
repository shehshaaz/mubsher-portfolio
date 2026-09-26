# Mubasher Interior Portfolio

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The `dist` folder contains the production website.

## Minimal blue home page

The home page uses a solid blue background, live typography, and the supplied transparent portrait in `public/mubasher-portrait.png`. The decorative artwork and particles are removed. The portrait is layered over the title, with links to Selected Work, About, and the CV. The main heading reads Muhammed Mubasher; the smaller label reads Interior Designer. On phones and tablets up to 1100px, the portrait fills the available space directly below the name, preserving its original proportions. A responsive grid keeps the portrait close to the heading at different screen heights.

Page order: Home, About, What I Do, Selected Work, Contact. The About section, design toolkit, education, languages, services and contact details are based on the supplied résumé.

## Selected Work

The gallery is organized into Kitchen, Bedroom, Indoor, Outdoor and Other Projects. It includes all eleven supplied render images, plus three page previews from the SketchUp and AutoCAD PDFs. The PDFs are available from the drawing cards. Images open in a full-screen gallery with keyboard arrow and Escape support.

The render files in `public/work` are direct copies of the supplied originals. Their colours have not been changed. The PDF sheet previews were rendered for display, and the original PDFs are included alongside them. Project descriptions reflect visible design features and the supplied drawing labels, without claiming the work was built.

Images reveal as they enter the viewport. Motion is disabled for visitors who prefer reduced motion. Clicking a category jumps to its section. The gallery uses responsive layouts for desktop and mobile.


## CV and motion

`public/Muhammed-Mubasher-CV.pdf` is the unmodified supplied résumé. The About button and contact download link download this file. Replace it at the same path when updating the CV.

Text and project cards move gently upward once when they enter the viewport. Content remains visible before observation; animation never hides or clips images. Reduced-motion preferences disable the animations.

## Asset paths and deployment

Vite uses a relative base and all public image/PDF URLs use that base. This supports root and subfolder deployments. Keep the entire `public/work` directory when copying the source project. Run `npm run build` and upload the entire generated `dist` folder for deployment. Do not open `index.html` by double-clicking it; use the development or preview server.

## Verification

The production build passes. All 14 gallery image references resolve to valid image files, and original project images are unchanged. Browser visual verification was unavailable in the editing environment.
