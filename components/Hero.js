import Reveal from "@/components/Reveal";
import CoffeeMockup from "@/components/mockups/CoffeeMockup";
import { ArrowRight } from "@/components/icons";
import { instagramUrl } from "@/lib/site";

export default function Hero({ t, locale }) {
  return (
    <section id="top" className="hero">
      <div className="hero__grid">
        <div>
          <Reveal>
            <p className="eyebrow">{t.hero.eyebrow}</p>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="hero__title">
              {t.hero.titleLead}{" "}
              <span className="hero__accent">{t.hero.titleAccent}</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="hero__text">{t.hero.text}</p>
          </Reveal>

          <Reveal delay={3}>
            <div className="hero__actions">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--accent"
              >
                {t.hero.cta}
                <ArrowRight />
              </a>
              <a href="#work" className="btn btn--ghost">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <p className="hero__note">
              <span className="hero__dot" />
              {t.hero.note}
            </p>
          </Reveal>
        </div>

        <Reveal delay={2} className="hero__stage">
          <CoffeeMockup locale={locale} />
        </Reveal>
      </div>
    </section>
  );
}
