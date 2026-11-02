import Reveal from "@/components/Reveal";

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-head">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {text && (
        <Reveal delay={1}>
          <p className="section-text">{text}</p>
        </Reveal>
      )}
    </div>
  );
}
