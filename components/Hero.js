import CoffeeMockup from "@/components/mockups/CoffeeMockup";
import { ArrowRight } from "@/components/icons";
import { instagramUrl } from "@/lib/site";

export default function Hero({ t }) {
  const { hero } = t;

  return (
    <section id="top" className="hero">
      <div className="hero__grid">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">
            {hero.titleLead} <span className="hero__accent">{hero.titleAccent}</span>
          </h1>
          <p className="hero__text">{hero.text}</p>

          <div className="hero__actions">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--accent"
            >
              {hero.cta}
              <ArrowRight />
            </a>
            <a href="#work" className="btn btn--ghost">
              {hero.ctaSecondary}
            </a>
          </div>

          <p className="hero__note">
            <span className="hero__dot" />
            {hero.note}
          </p>
        </div>

        <div className="hero__stage">
          <CoffeeMockup copy={t.mockups.coffee} eager />
        </div>
      </div>
    </section>
  );
}
