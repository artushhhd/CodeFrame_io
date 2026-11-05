import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Why({ t }) {
  return (
    <section id="why" className="shell section">
      <SectionHeading
        eyebrow={t.why.eyebrow}
        title={t.why.title}
        text={t.why.text}
      />

      <div className="why-grid">
        {t.why.points.map((point, index) => (
          <Reveal
            key={point.title}
            delay={index + 1}
            className="why-card"
          >
            <span className="why-card__num">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="why-card__title">{point.title}</h3>
            <p className="why-card__text">{point.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
