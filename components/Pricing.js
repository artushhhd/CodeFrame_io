import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Check, Instagram, WhatsApp } from "@/components/icons";
import { instagramUrl, whatsappLink, whatsappUrl } from "@/lib/site";

export default function Pricing({ t }) {
  const { pricing } = t;

  return (
    <section id="pricing" className="pricing">
      <div className="shell">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          text={pricing.text}
        />

        <div className="pricing-grid">
          {pricing.plans.map((plan, index) => {
            const featured = index === pricing.plans.length - 1;
            return (
              <Reveal
                key={plan.name}
                as="article"
                delay={index + 1}
                className={`pricing-card${featured ? " pricing-card--featured" : ""}`}
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
                    href={whatsappLink(
                      `Hello! I am interested in the ${plan.name} package. I would like to discuss my project.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--whatsapp pricing-card__cta"
                  >
                    <WhatsApp />
                    {t.cta.whatsapp}
                    <ArrowRight />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="pricing-disclaimer">{pricing.disclaimer}</p>

        <Reveal className="pricing-custom">
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
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp pricing-custom__cta"
              >
                <WhatsApp />
                {t.cta.whatsapp}
                <ArrowRight />
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
