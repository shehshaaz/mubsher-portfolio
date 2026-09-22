import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HouseReveal from "./components/HouseReveal";
import About from "./components/About";
import Work from "./components/Work";
import ToolWall from "./components/ToolWall";
import CV from "./components/CV";
import Contact from "./components/Contact";
import { ScrollTrigger, gsap, useScrollFx } from "./hooks";

// Wraps a whole section so it pushes into view (scale + tilt up out of
// the page) as it arrives, and pushes back out (scale + tilt away) as
// it's scrolled past — a 3D depth effect that runs on every page of
// the site, tied to scroll rather than time.
function Panel({ children, entrance = true }) {
  const ref = useScrollFx((el) => {
    if (entrance) {
      gsap.fromTo(
        el,
        { autoAlpha: 0, scale: 0.9, rotateX: 12 },
        {
          autoAlpha: 1,
          scale: 1,
          rotateX: 0,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 95%", end: "top 40%", scrub: 0.6 },
        }
      );
    }
    gsap.fromTo(
      el,
      { scale: 1, rotateX: 0, autoAlpha: 1 },
      {
        scale: 0.92,
        rotateX: -10,
        autoAlpha: 0.5,
        ease: "none",
        scrollTrigger: { trigger: el, start: "bottom 55%", end: "bottom -5%", scrub: 0.6 },
      }
    );
  }, []);
  return (
    <div className="panel-3d" ref={ref}>
      {children}
    </div>
  );
}

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <Cursor />
      <Nav progress={progress} />
      <main>
        <Panel entrance={false}>
          <Hero />
        </Panel>
        <Panel>
          <HouseReveal />
        </Panel>
        <Panel>
          <About />
        </Panel>
        <Panel>
          <Work />
        </Panel>
        <Panel>
          <ToolWall />
        </Panel>
        <Panel>
          <CV />
        </Panel>
        <Panel>
          <Contact />
        </Panel>
      </main>
    </>
  );
}
