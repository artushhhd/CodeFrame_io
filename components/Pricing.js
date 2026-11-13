import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Check, Instagram, WhatsApp } from "@/components/icons";
import { cx } from "@/lib/cx";
import { instagramUrl, whatsappLink } from "@/lib/site";

export default function Pricing({ t }) {
  const { pricing } = t;

  return (
    <section id="pricing" className="pricing">
      <div className="shell">
        <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} text={pricing.text} />

        <div className="pricing-grid">
          {pricing.plans.map((plan) => (
            <article
              key={plan.name}
              className={cx("pricing-card reveal", plan.featured && "pricing-card--featured")}
            >
              <h3 className="pricing-card__name">{plan.name}</h3>

              <div className="pricing-card__price">
                <span className="pricing-card__from">{pricing.from}</span>
                <span className="pricing-card__amount">{plan.price}</span>
                <span className="pricing-card__currency">AMD</span>
              </div>

              <p className="pricing-card__desc">{plan.desc}</p>

              <ul className="pricing-card__features">
                {plan.features.map((feature) => (
                  <li key={feature} className="pricing-card__feature">
                    <span className="pricing-card__check">
                      <Check />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pricing-card__actions">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--accent pricing-card__cta"
                >
                  <Instagram />
                  {plan.cta}
                  <ArrowRight />
                </a>
                <a
                  href={whatsappLink(pricing.whatsappMessage.replace("{plan}", plan.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp pricing-card__cta"
                >
                  <WhatsApp />
                  {t.cta.whatsapp}
                  <ArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="pricing-disclaimer">{pricing.disclaimer}</p>

        <div className="pricing-custom reveal">
          <p className="pricing-custom__text">{pricing.custom.text}</p>
          <div className="pricing-custom__actions">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ink pricing-custom__cta"
            >
              <Instagram />
              {pricing.custom.cta}
              <ArrowRight />
            </a>
            <a
              href={whatsappLink(t.cta.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp pricing-custom__cta"
            >
              <WhatsApp />
              {t.cta.whatsapp}
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
