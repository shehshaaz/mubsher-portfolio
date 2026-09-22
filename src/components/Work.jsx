import { useState } from "react";
import { work } from "../data";
import { gsap, useScrollFx } from "../hooks";

export default function Work() {
  return (
    <section className="work wrap" id="work">
      <div className="section-head">
        <h2>Selected work</h2>
        <span className="section-num">
          REAL PROJECTS — {work.length.toString().padStart(2, "0")}
        </span>
      </div>

      {work.map((project) => (
        <WorkItem key={project.n} project={project} />
      ))}
    </section>
  );
}

function WorkItem({ project }) {
  const dir = project.align === "right" ? 1 : -1;
  const [active, setActive] = useState(0);

  const ref = useScrollFx((el) => {
    const visual = el.querySelector(".work-visual");
    const copy = el.querySelector(".work-copy");
    const img = el.querySelector(".work-visual img.is-active");

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 40, scale: 0.96 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 82%" },
      }
    );

    gsap.to(visual, {
      y: -22,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
    });
    gsap.to(copy, {
      y: 14 * dir,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
    });
    if (img) {
      // Opens top-to-bottom in 3D, like a panel hinged at the top
      // folding down flat, as the item scrolls into view.
      gsap.fromTo(
        img,
        { rotateX: -100, opacity: 0 },
        {
          rotateX: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        }
      );
      gsap.fromTo(
        img,
        { scale: 1.12 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
        }
      );
    }
  }, [project.n]);

  return (
    <article className="work-item" data-align={project.align} ref={ref}>
      <div className="work-visual">
        <span className="work-tag">{project.category.toUpperCase()}</span>
        {project.images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.caption}
            className={i === active ? "is-active" : ""}
            style={{ display: i === active ? "block" : "none" }}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <span className="work-caption">{project.images[active].caption}</span>

        <div className="gallery-thumbs">
          {project.images.map((img, i) => (
            <button
              key={img.src}
              className="gallery-thumb"
              data-active={i === active}
              data-cursor="hover"
              aria-label={"Show: " + img.caption}
              onClick={() => setActive(i)}
              style={{ backgroundImage: "url(" + img.src + ")" }}
            />
          ))}
        </div>
      </div>

      <div className="work-copy">
        <span className="work-num">{project.n}</span>
        <h3 className="work-title">{project.title}</h3>
        <p>{project.blurb}</p>
        <ul>
          {project.detail.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <div className="specs">
          <span><b>{project.category}</b></span>
          <span>{project.year}</span>
          <span>{project.tools}</span>
          <span>{project.area}</span>
        </div>
      </div>
    </article>
  );
}
