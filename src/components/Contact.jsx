import { useRef } from "react";
import { profile } from "../data";
import { useReveal, calm, isCoarse } from "../hooks";

export default function Contact() {
  const ref = useReveal();
  const bigRef = useRef(null);

  const onMove = (e) => {
    if (calm || isCoarse || !bigRef.current) return;
    const r = bigRef.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / r.width;
    const y = (e.clientY - (r.top + r.height / 2)) / r.height;
    bigRef.current.style.transform =
      "translate(" + x * 10 + "px," + y * 8 + "px) skew(" + x * -1.2 + "deg)";
  };
  const onLeave = () => {
    if (bigRef.current) bigRef.current.style.transform = "none";
  };

  return (
    <section className="contact wrap reveal" id="contact" ref={ref}>
      <h2
        className="contact-big"
        ref={bigRef}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        LET'S
        <br />
        MAKE
        <br />
        SOMETHING.
      </h2>

      <div className="lines">
        <div>
          <h3>EMAIL</h3>
          <a href={"mailto:" + profile.email} data-cursor="hover">{profile.email}</a>
        </div>
        <div>
          <h3>PHONE</h3>
          <a href={"tel:" + profile.phone.replace(/\s/g, "")} data-cursor="hover">{profile.phone}</a>
        </div>
        <div>
          <h3>ELSEWHERE</h3>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} data-cursor="hover">{link.label}</a>
            ))}
          </div>
        </div>
        <div>
          <h3>BASED IN</h3>
          <span>{profile.base}</span>
        </div>
      </div>

      <div className="foot">
        <span>{profile.first} {profile.last} — {profile.role}</span>
        <a href="#top" style={{ textDecoration: "none" }} data-cursor="hover">Back to top</a>
      </div>
    </section>
  );
}
