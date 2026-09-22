import { profile } from "../data";
import { gsap, useScrollFx, calm } from "../hooks";

// Pure typographic opening — the house render now lives on "page two"
// (HouseReveal.jsx), where it pulls out to full-bleed on scroll.
export default function Hero() {
  const ref = useScrollFx((el) => {
    const rows = el.querySelectorAll(".hero-name .row span");
    const sub = el.querySelector(".hero-sub");
    const cue = el.querySelector(".scroll-cue");

    const tl = gsap.timeline({ delay: 0.15 });
    tl.to(rows, {
      y: "0%",
      duration: 1.1,
      ease: "power4.out",
      stagger: 0.09,
    })
      .to(sub, { opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.5")
      .fromTo(cue, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3");

    gsap.to(el.querySelector(".hero-inner"), {
      yPercent: -8,
      opacity: 0.35,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });
  }, []);

  return (
    <header className="hero stage3d" id="top" ref={ref}>
      <div className="hero-inner">
        <h1 className="hero-name" aria-label={profile.first + " " + profile.last}>
          <span className="row">
            <span>{profile.first}</span>
          </span>
          <span className="row">
            <span>{profile.last}</span>
          </span>
        </h1>

        <div className="hero-tags">
          <span>{profile.tags[0]}</span>
          <span>{profile.tags[1]}</span>
          <span>{profile.tags[2]}</span>
          <span>{profile.base.toUpperCase()}</span>
        </div>

        <p className="hero-sub" style={calm ? { opacity: 1 } : undefined}>
          {profile.summary}
        </p>
      </div>

      <div className="scroll-cue" style={calm ? { opacity: 1 } : undefined}>
        <span>SCROLL</span>
        <i />
      </div>
    </header>
  );
}
