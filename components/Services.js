import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { serviceIconMap } from "@/components/icons";
import { serviceIcons } from "@/lib/site";

export default function Services({ t }) {
  return (
    <section id="services" className="shell section">
      <SectionHeading
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        text={t.services.text}
      />

      <div className="services-grid">
        {t.services.items.map((item, index) => {
          const Icon = serviceIconMap[serviceIcons[index]];
          return (
            <Reveal key={item.title} delay={index + 1} className="service-card">
              <div className="service-card__top">
                <span className="service-card__icon">
                  <Icon />
                </span>
                <span className="service-card__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__text">{item.text}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
