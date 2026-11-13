import SectionHeading from "@/components/SectionHeading";

export default function Technologies({ t }) {
  const { tech } = t;

  return (
    <section id="tech" className="tech">
      <div className="shell">
        <SectionHeading eyebrow={tech.eyebrow} title={tech.title} text={tech.text} />

        <div className="tech-groups">
          {tech.groups.map(({ label, items }) => (
            <div key={label} className="tech-group reveal">
              <h3 className="tech-group__label">{label}</h3>
              <ul className="tech-group__list">
                {items.map((item) => (
                  <li key={item} className="tech-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
