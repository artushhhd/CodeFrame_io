import SectionHeading from "@/components/SectionHeading";

export default function Process({ t }) {
  const { process } = t;

  return (
    <section id="process" className="shell section">
      <SectionHeading eyebrow={process.eyebrow} title={process.title} />

      <ol className="process-list">
        {process.steps.map(({ title, text }, index) => (
          <li key={title} className="reveal">
            <p className="process__num">{String(index + 1).padStart(2, "0")}</p>
            <div className="process__rule">
              <span className="process__dot" />
              <span className="process__line" />
            </div>
            <h3 className="process__title">{title}</h3>
            <p className="process__text">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
