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

## Responsive artwork

The previous desktop and portrait artwork, lettering and layout are restored. The hero uses the original uploaded photograph (`public/mubasher-original.jpg`) with a detailed alpha mask, replacing the rough hand-drawn outline. Only the mask comes from background extraction; the displayed face and body use the original JPEG pixels. The SVG preserves the photograph's proportions while the separate backdrop fills the viewport.

Portrait screens select `hero-portrait.png`; landscape screens select `hero-desktop.png`. The lower artwork signature reads Portfolio; Interior Designer uses bold sans-serif lettering. The original cutout is anchored to the bottom at every breakpoint and sits above the background lettering. No scroll prompt is displayed.

Page order: Home, About, What I Do, Selected Work, Contact. The About section, design toolkit, education, languages, services and contact details are based on the supplied résumé.

## Selected Work

The gallery is organized into Kitchen, Bedroom, Indoor, Outdoor and Other Projects. It includes all eleven supplied render images, plus three page previews from the SketchUp and AutoCAD PDFs. The PDFs are available from the drawing cards. Images open in a full-screen gallery with keyboard arrow and Escape support.

The render files in `public/work` are direct copies of the supplied originals. Their colours have not been changed. The PDF sheet previews were rendered for display, and the original PDFs are included alongside them. Project descriptions reflect visible design features and the supplied drawing labels, without claiming the work was built.

Images reveal as they enter the viewport. Motion is disabled for visitors who prefer reduced motion. Clicking a category jumps to its section. The gallery uses responsive layouts for desktop and mobile.


## CV and motion

`public/Muhammed-Mubasher-CV.pdf` is the unmodified supplied résumé. The About button and contact download link download this file. Replace it at the same path when updating the CV.

Text fades upward once as it enters the viewport, using IntersectionObserver. Text remains visible in browsers without observer support, in print, and for visitors who prefer reduced motion. The bottom quarter of the portrait blends into the background with a gradual alpha fade.
