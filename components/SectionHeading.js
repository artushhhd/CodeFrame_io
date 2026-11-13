export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-head reveal">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {text && <p className="section-text">{text}</p>}
    </div>
  );
}
