import { software, skillGroups, languages } from "../data";
import { useReveal, useMagnetic } from "../hooks";

export default function ToolWall() {
  const ref = useReveal();

  return (
    <section className="wall" id="software">
      <div className="wrap reveal" ref={ref}>
        <div className="section-head">
          <h2>Tools & skills</h2>
          <span className="section-num">{software.length} TOOLS IN USE</span>
        </div>

        <div className="wall-field">
          {software.map((tool) => (
            <Tool key={tool.name} tool={tool} />
          ))}
        </div>

        <div
          style={{
            marginTop: "clamp(56px, 8vw, 100px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "28px",
            borderTop: "1px solid rgba(245,242,236,0.16)",
            paddingTop: "36px",
          }}
        >
          {skillGroups.map((group) => (
            <div key={group.kind}>
              <h4 style={{ margin: "0 0 10px", fontSize: 10.5, letterSpacing: "0.2em", color: "var(--stone)" }}>
                {group.kind.toUpperCase()}
              </h4>
              <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.9, color: "#d8d3c8" }}>
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
          <div>
            <h4 style={{ margin: "0 0 10px", fontSize: 10.5, letterSpacing: "0.2em", color: "var(--stone)" }}>
              LANGUAGES
            </h4>
            <p style={{ margin: 0, fontSize: 12.5, color: "#d8d3c8" }}>{languages.join(" · ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tool({ tool }) {
  const ref = useMagnetic(16);
  return (
    <div className="tool" data-depth={tool.depth} ref={ref} data-cursor="hover" tabIndex={0}>
      <span className="tool-name">{tool.name}</span>
      <span className="tool-use">{tool.use.toUpperCase()}</span>
    </div>
  );
}
