import { profile, education } from "../data";
import { useReveal } from "../hooks";

export default function About() {
  const ref = useReveal();

  return (
    <section className="about wrap reveal" id="about" ref={ref}>
      <div className="about-grid">
        <div className="about-statement">
          <span className="eyebrow">ABOUT</span>
          <p>
            Interiors that hold up to how a space is actually used, not
            just how it photographs.
          </p>
        </div>

        <div className="about-support">
          {profile.bio.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <a className="cv-line" href="#cv" data-cursor="hover">
            See the full CV
          </a>

          <div className="about-edu">
            {education.map((item) => (
              <div className="row" key={item.title}>
                <dt>{item.years}</dt>
                <dd style={{ margin: 0 }}>
                  <strong>{item.title}</strong>
                  <span>{item.place}</span>
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
