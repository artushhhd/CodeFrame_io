import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Technologies({ t }) {
  return (
    <section id="tech" className="tech">
      <div className="shell">
        <SectionHeading
          eyebrow={t.tech.eyebrow}
          title={t.tech.title}
          text={t.tech.text}
        />

        <div className="tech-groups">
          {t.tech.groups.map((group, index) => (
            <Reveal
              key={group.label}
              delay={index + 1}
              className="tech-group"
            >
              <h3 className="tech-group__label">{group.label}</h3>
              <ul className="tech-group__list">
                {group.items.map((item) => (
                  <li key={item} className="tech-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
