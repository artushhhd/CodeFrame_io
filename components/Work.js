import SectionHeading from "@/components/SectionHeading";
import CoffeeMockup from "@/components/mockups/CoffeeMockup";
import ProductMockup from "@/components/mockups/ProductMockup";
import ShopMockup from "@/components/mockups/ShopMockup";
import { ArrowRight } from "@/components/icons";
import { cx } from "@/lib/cx";
import { works } from "@/lib/site";

const mockups = {
  coffee: { Mockup: CoffeeMockup, stage: "work-card__stage--cafe" },
  shop: { Mockup: ShopMockup, stage: "work-card__stage--shop" },
  product: { Mockup: ProductMockup, stage: "work-card__stage--product" },
};

function WorkCard({ project, copy, tag, ctaLabel, featured = false }) {
  const { Mockup, stage } = mockups[project.mockup];

  return (
    <article className="work-card reveal">
      <div className={cx("work-card__head", featured && "work-card__head--featured")}>
        <div>
          <p className="work-card__tag">{tag}</p>
          <h3 className={cx("work-card__title", featured && "work-card__title--featured")}>
            {project.name}
          </h3>
        </div>
        <p className="work-card__type">{project.type}</p>
      </div>

      <div className={cx("work-card__stage", stage)}>
        <Mockup copy={copy} />
      </div>

      {project.url && (
        <div className="work-card__foot">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card__demo"
          >
            {ctaLabel}
            <ArrowRight />
          </a>
        </div>
      )}
    </article>
  );
}

export default function Work({ t }) {
  const { work } = t;

  const projects = works.map((item) => ({
    ...item,
    ...work.projects.find((project) => project.id === item.id),
  }));
  const [featured, ...rest] = projects;

  const card = (project, extra) => (
    <WorkCard
      key={project.id}
      project={project}
      copy={t.mockups[project.mockup]}
      tag={work.tag}
      ctaLabel={work.cta}
      {...extra}
    />
  );

  return (
    <section id="work" className="work">
      <div className="shell">
        <SectionHeading eyebrow={work.eyebrow} title={work.title} text={work.text} />

        <div className="work__featured">{card(featured, { featured: true })}</div>
        <div className="work__grid">{rest.map((project) => card(project))}</div>
      </div>
    </section>
  );
}
