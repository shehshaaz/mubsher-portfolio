import { profile, software, work } from "../data";
import { gsap, useScrollFx, useReveal } from "../hooks";

// "Page two" of the homepage: a short statement about the work as a
// whole on the left, and one signature shot from every project on the
// right — a small, splashed-out spread rather than a long scroll.
const spotlight = work.map((project) => ({
  src: project.images[0].src,
  caption: project.title.replace("Kunnamyath House — ", ""),
}));

export default function HouseReveal() {
  const copyRef = useReveal();

  const collageRef = useScrollFx((el) => {
    const items = el.querySelectorAll(".collage-item");
    gsap.from(items, {
      opacity: 0,
      y: 40,
      scale: 0.86,
      duration: 0.75,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: el, start: "top 80%" },
    });
  }, []);

  return (
    <section className="reveal-wrap wrap" id="house">
      <div className="reveal-grid">
        <div className="reveal-copy reveal" ref={copyRef}>
          <span className="eyebrow">PROJECT EXPERIENCE</span>
          <h2 className="reveal-heading">Five projects, one process</h2>
          <span className="eyebrow reveal-category">RESIDENTIAL · COMMERCIAL · CONCEPT STUDIES</span>
          <p className="reveal-intro">
            Every project here moves the same way — space planning and layout worked out
            first, then carried through SketchUp massing and photorealistic renders, and
            finished with working drawings ready to build from.
          </p>
          <div className="reveal-meta">
            <span>{work.length} PROJECTS</span>
            <span>{software.length} TOOLS</span>
            <span>{profile.base.toUpperCase()}</span>
          </div>
          <a href="#work" className="reveal-link" data-cursor="hover">
            Browse the full body of work below ↓
          </a>
        </div>

        <div className="reveal-collage" ref={collageRef}>
          {spotlight.map((img, i) => (
            <figure className="collage-item" key={img.src}>
              <img src={img.src} alt={img.caption} loading={i < 2 ? "eager" : "lazy"} />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
