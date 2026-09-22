import { profile, education, skillGroups, software } from "../data";
import { useReveal } from "../hooks";

export default function CV() {
  const ref = useReveal();

  return (
    <section className="cv-section wrap" id="cv">
      <div className="section-head">
        <h2>Curriculum</h2>
        <span className="section-num">UPDATED 2026</span>
      </div>

      <div className="cv-stage">
        <div className={"sheet reveal"} ref={ref}>
          <div className="sheet-head">
            <div>
              <h3>{profile.first} {profile.last}</h3>
              <span>{profile.role.toUpperCase()}</span>
            </div>
            <span>{profile.base}</span>
          </div>

          <p className="sheet-summary">{profile.summary}</p>

          <div className="sheet-cols">
            <div>
              <h4>EDUCATION</h4>
              <ul>
                {education.map((item) => (
                  <li key={item.title}>
                    {item.title} — {item.place} ({item.years})
                  </li>
                ))}
              </ul>

              <h4>SOFTWARE</h4>
              <ul>
                {software.map((tool) => (
                  <li key={tool.name}>{tool.name}</li>
                ))}
              </ul>
            </div>

            <div>
              {skillGroups.map((group) => (
                <div key={group.kind}>
                  <h4>{group.kind.toUpperCase()}</h4>
                  <ul>
                    {group.items.slice(0, 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="sheet-contact">
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
          </div>

          <div className="sheet-actions">
            <a href={profile.cvFile} target="_blank" rel="noreferrer" data-cursor="hover">
              VIEW CV
            </a>
            <a href={profile.cvFile} download className="solid" data-cursor="hover">
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
