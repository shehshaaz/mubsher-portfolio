import { useEffect, useState } from "react";
import { profile } from "../data";

const ITEMS = [
  { label: "House", href: "#house" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Software", href: "#software" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({ progress }) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="nav" data-stuck={stuck}>
        <div className="nav-in wrap">
          <a href="#top" className="nav-mark" data-cursor="hover">
            {profile.first[0]}
            {profile.last[0]}
          </a>
          <button
            className="nav-toggle"
            data-open={open}
            data-cursor="hover"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
            <span className="bars">
              <span /><span /><span />
            </span>
          </button>
        </div>
        <div className="progress" style={{ transform: "scaleX(" + progress + ")" }} />
      </div>

      <nav className="menu" data-open={open} aria-hidden={!open}>
        {ITEMS.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            data-cursor="hover"
            style={{ transitionDelay: open ? 80 + i * 60 + "ms" : "0ms" }}
            onClick={(e) => {
              e.preventDefault();
              go(item.href);
            }}
          >
            {item.label}
          </a>
        ))}
        <div className="menu-foot">
          <span>{profile.base}</span>
          <a href={"mailto:" + profile.email}>{profile.email}</a>
        </div>
      </nav>
    </>
  );
}
