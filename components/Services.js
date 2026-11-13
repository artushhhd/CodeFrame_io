import SectionHeading from "@/components/SectionHeading";
import { serviceIconMap } from "@/components/icons";

export default function Services({ t }) {
  const { services } = t;

  return (
    <section id="services" className="shell section">
      <SectionHeading eyebrow={services.eyebrow} title={services.title} text={services.text} />

      <div className="services-grid">
        {services.items.map(({ icon, title, text }, index) => {
          const Icon = serviceIconMap[icon];
          return (
            <div key={icon} className="service-card reveal">
              <div className="service-card__top">
                <span className="service-card__icon">
                  <Icon />
                </span>
                <span className="service-card__num">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__text">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
