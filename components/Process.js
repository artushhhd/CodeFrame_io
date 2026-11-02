import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Process({ t }) {
  return (
    <section id="process" className="shell section">
      <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />

      <ol className="process-list">
        {t.process.steps.map((step, index) => (
          <Reveal key={step.title} as="li" delay={index + 1}>
            <p className="process__num">{String(index + 1).padStart(2, "0")}</p>
            <div className="process__rule">
              <span className="process__dot" />
              <span className="process__line" />
            </div>
            <h3 className="process__title">{step.title}</h3>
            <p className="process__text">{step.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
