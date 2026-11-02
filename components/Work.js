import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CoffeeMockup from "@/components/mockups/CoffeeMockup";
import ProductMockup from "@/components/mockups/ProductMockup";
import ShopMockup from "@/components/mockups/ShopMockup";
import { cx } from "@/lib/cx";
import { works } from "@/lib/site";

const mockupMap = {
  coffee: { Component: CoffeeMockup, stage: "work-card__stage--cafe" },
  shop: { Component: ShopMockup, stage: "work-card__stage--shop" },
  product: { Component: ProductMockup, stage: "work-card__stage--product" },
};

function WorkCard({ project, index, tag, featured, locale }) {
  const { Component, stage } = mockupMap[project.mockup];

  return (
    <Reveal delay={index + 1} className="work-card">
      <div
        className={cx(
          "work-card__head",
          featured && "work-card__head--featured"
        )}
      >
        <div>
          <p className="work-card__tag">{tag}</p>
          <h3
            className={cx(
              "work-card__title",
              featured && "work-card__title--featured"
            )}
          >
            {project.name}
          </h3>
        </div>
        <p className="work-card__type">{project.type}</p>
      </div>
      <div className={cx("work-card__stage", stage)}>
        <Component locale={locale} />
      </div>
    </Reveal>
  );
}

export default function Work({ t, locale }) {
  const [featured, ...rest] = t.work.projects;

  return (
    <section id="work" className="work">
      <div className="shell">
        <SectionHeading
          eyebrow={t.work.eyebrow}
          title={t.work.title}
          text={t.work.text}
        />

        <div className="work__featured">
          <WorkCard
            project={{ ...works[0], ...featured }}
            index={0}
            tag={t.work.tag}
            locale={locale}
            featured
          />
        </div>
        <a
          href="https://aroma-cafe.base44.app/"
          className="btn btn--project"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000000" }}
        >
          {t.work.cta}
          <span className="btn__icon">↗ view Aroma Café</span>
        </a>

        <div className="work__grid">
          {rest.map((project, index) => (
            <WorkCard
              key={project.name}
              project={{ ...works[index + 1], ...project }}
              index={index + 1}
              tag={t.work.tag}
              locale={locale}
            />
          ))}
        </div>
        <a
          href="https://cafeweb-tau.vercel.app/en/shop"
          className="btn btn--project"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000000" }}
        >
          {t.work.cta}
          <span className="btn__icon">↗ view Bean & Steam</span>
        </a>
      </div>
    </section>
  );
}
