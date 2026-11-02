import Reveal from "@/components/Reveal";
import { ArrowRight, Instagram } from "@/components/icons";
import { instagramUrl } from "@/lib/site";

export default function ContactCta({ t }) {
  return (
    <section className="cta">
      <Reveal className="cta__panel">
        <div className="cta__ring cta__ring--bl" />
        <div className="cta__ring cta__ring--tr" />

        <div className="cta__body">
          <p className="eyebrow">{t.cta.eyebrow}</p>
          <h2 className="cta__title">{t.cta.title}</h2>
          <p className="cta__text">{t.cta.text}</p>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ink"
          >
            <Instagram />
            {t.cta.button}
            <ArrowRight />
          </a>

          <p className="cta__note">{t.cta.note}</p>
        </div>
      </Reveal>
    </section>
  );
}
