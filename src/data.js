// ---------------------------------------------------------------
// Everything written on the site lives here. Edit this file only.
// Sourced from Muhammed Mubasher's CV — replace the placeholder
// concept studies in `work` with real project material when ready.
// ---------------------------------------------------------------

export const profile = {
  first: "MUHAMMED",
  last: "MUBASHER",
  role: "Interior Designer",
  base: "Kasaragod, Kerala",
  tags: ["INTERIOR DESIGNER", "SPACE PLANNING", "3D VISUALIZATION"],
  summary:
    "Creative and detail-oriented Interior Designer with expertise in transforming spaces into functional, aesthetically pleasing environments.",
  bio: [
    "Skilled in space planning, furniture selection, colour coordination, material specification and 3D visualisation, with a focus on developing residential and commercial interior concepts that hold up against real project requirements.",
    "Currently completing an Expert Diploma in Interior Design at Cadd Centre, Kasaragod — the work below is concept and study material while the first client projects come in.",
  ],
  email: "mohammedmubasher111@gmail.com",
  phone: "+91 96334 36731",
  links: [
    { label: "Instagram", href: "#" },
    { label: "Behance", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  // Put the real file at /public/mubasher-cv.pdf and this will resolve.
  cvFile: "/mubasher-cv.pdf",
};

export const education = [
  {
    years: "2026",
    title: "Expert Diploma in Interior Design",
    place: "Cadd Centre — Kasaragod, Kerala",
  },
  {
    years: "2022 — 24",
    title: "+2, Commerce",
    place: "National Institute of Open Schooling",
  },
  {
    years: "2019",
    title: "SSLC",
    place: "Iqbal Higher Secondary School — Kanhangad, Kerala",
  },
];

export const skillGroups = [
  {
    kind: "Design",
    items: [
      "Space Planning",
      "Residential Interior Design",
      "Commercial Concepts",
      "Furniture Layout Planning",
      "Lighting Design",
      "Colour Theory",
      "Interior Styling",
      "Sustainable Design",
      "Custom Furniture Design",
    ],
  },
  {
    kind: "Technical",
    items: ["3D Modeling", "Photorealistic Rendering"],
  },
  {
    kind: "Working with clients",
    items: [
      "Problem Solving",
      "Team Collaboration",
      "Creative Thinking",
      "Critical Thinking",
      "Client Relationship Management",
    ],
  },
];

// Tool wall — real software from the CV, one line on how it's used.
export const software = [
  { name: "AutoCAD", use: "Drawings & documentation", depth: 1 },
  { name: "SketchUp", use: "3D modelling", depth: 2 },
  { name: "3ds Max", use: "3D modelling & rendering", depth: 0 },
  { name: "Lumion", use: "Photorealistic rendering", depth: 2 },
  { name: "Photoshop", use: "Post-production & boards", depth: 1 },
];

export const languages = ["English", "Malayalam"];

// The Kunnamyath House gets its own "page two" moment on the homepage —
// a full-bleed pull-out reveal that fades to reveal the page background,
// with a short intro. The room-by-room material lives in `work` below.
export const houseProject = {
  title: "Kunnamyath House",
  category: "Residential — full design & working drawings",
  year: "2026",
  tools: "SketchUp · AutoCAD · Lumion",
  area: "1,974 sq ft",
  heroImage: "/work/house-hero.jpg",
  heroCaption: "Kunnamyath House — concept render",
  blurb:
    "A two-storey home built around a cantilevered brick-and-white envelope and an oval brick carport arch, taken from SketchUp massing through to full AutoCAD working drawings with a complete interior pass.",
};

// Real project material only — the house is broken into its own areas
// (outdoor, bedroom, kitchen, drawings) so each gets its own blurb and
// gallery rather than being buried in one big project card.
export const work = [
  {
    n: "01",
    title: "Kunnamyath House — Outdoor",
    category: "Residential — exterior",
    year: "2026",
    tools: "SketchUp · Lumion",
    align: "left",
    blurb:
      "The exterior take on Kunnamyath House — a cantilevered brick-and-white envelope with an oval brick archway over the carport, shown across the SketchUp massing model and both a daytime and a twilight render.",
    detail: [
      "Ground + first floor, 1,974 sq ft total (GF 976 sq ft · FF 998 sq ft).",
      "The angled cantilever roof doubles as covered parking without extra columns.",
    ],
    area: "1,974 sq ft",
    images: [
      { src: "/work/house-hero.jpg", caption: "Exterior — day" },
      { src: "/work/house-twilight.jpg", caption: "Exterior — twilight" },
      { src: "/work/house-sketchup-render.jpg", caption: "SketchUp massing model" },
    ],
  },
  {
    n: "02",
    title: "Kunnamyath House — Bedroom",
    category: "Residential — interior, main bedroom",
    year: "2026",
    tools: "SketchUp · Lumion",
    align: "right",
    blurb:
      "The main bedroom suite — a backlit wall behind the bed frame, and a full wardrobe wall in warm wood with concealed lighting inside each compartment.",
    detail: [
      "Wardrobe interior lighting sits on its own circuit, separate from the room's general lighting.",
      "The curtain track runs continuous across both windows to read as one line.",
    ],
    area: "Bedroom suite",
    images: [
      { src: "/work/house-bedroom-1.jpg", caption: "Main bedroom" },
      { src: "/work/house-bedroom-2.jpg", caption: "Main bedroom — alternate view" },
      { src: "/work/house-wardrobe.jpg", caption: "Backlit wardrobe wall" },
    ],
  },
  {
    n: "03",
    title: "Kunnamyath House — Kitchen",
    category: "Residential — interior, kitchen",
    year: "2026",
    tools: "SketchUp · Lumion",
    align: "left",
    blurb:
      "A galley kitchen that opens onto a breakfast counter — dark hardware and a stone-effect counter against warm walls, with the hob kept in its own vented nook.",
    detail: [
      "Sink and hob sit on opposite walls to keep the galley run clear.",
      "The breakfast counter seats two and screens the kitchen from the dining side.",
    ],
    area: "Kitchen",
    images: [
      { src: "/work/house-kitchen-1.jpg", caption: "Kitchen" },
      { src: "/work/house-kitchen-2.jpg", caption: "Kitchen — sink counter" },
      { src: "/work/house-kitchen-3.jpg", caption: "Kitchen — hob & hood" },
      { src: "/work/house-kitchen-4.jpg", caption: "Kitchen — breakfast counter" },
    ],
  },
  {
    n: "04",
    title: "Kunnamyath House — Working Drawings",
    category: "Residential — working drawings",
    year: "2026",
    tools: "SketchUp · AutoCAD",
    align: "right",
    blurb:
      "The technical side of the same project — a SketchUp elevation, section and plan sheet, followed through to full AutoCAD working drawings with the door and window schedule.",
    detail: [
      "Ground + first floor, 1,974 sq ft total (GF 976 sq ft · FF 998 sq ft).",
      "Working drawings checked by Ayshath Zunafa, Cadd Centre.",
    ],
    area: "1,974 sq ft",
    images: [
      { src: "/work/house-sketchup-drawings.jpg", caption: "SketchUp elevation, section & plans" },
      { src: "/work/house-acad-drawings.jpg", caption: "AutoCAD working drawings & room schedule" },
    ],
  },
  {
    n: "05",
    title: "Dunkspire",
    category: "Commercial — retail concept",
    year: "2026",
    tools: "SketchUp · Photoshop",
    align: "left",
    blurb:
      "A streetwear and sneaker store concept: polished concrete and oak veneer against an exposed black grid ceiling, with one full wall given over to shoe display and a screen behind the counter for the store's own content.",
    detail: [
      "Modular floating shelving keeps the shoe wall reconfigurable by drop.",
      "Track lighting on the exposed grid does double duty as structure and display light.",
    ],
    area: "Concept — area TBC",
    images: [
      { src: "/work/dunkspire-2.jpg", caption: "Entrance & counter" },
      { src: "/work/dunkspire-1.jpg", caption: "Shoe wall & rail" },
    ],
  },
];
