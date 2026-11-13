import SectionHeading from "@/components/SectionHeading";

export default function Why({ t }) {
  const { why } = t;

  return (
    <section id="why" className="shell section">
      <SectionHeading eyebrow={why.eyebrow} title={why.title} text={why.text} />

      <div className="why-grid">
        {why.points.map(({ title, text }, index) => (
          <div key={title} className="why-card reveal">
            <span className="why-card__num">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="why-card__title">{title}</h3>
            <p className="why-card__text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
