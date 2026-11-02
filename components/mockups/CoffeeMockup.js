import Image from "next/image";
import cafeBarista from "@/public/cafe-barista.jpg";
import cafeEspresso from "@/public/cafe-espresso.jpg";
import cafeGata from "@/public/cafe-gata.jpg";
import { cx } from "@/lib/cx";
import { mockupCopy } from "@/lib/site";

const galleryImages = {
  "cafe-gata": cafeGata,
  "cafe-barista": cafeBarista,
};

function Screen({ compact = false, locale }) {
  const copy = mockupCopy[locale].coffee;

  return (
    <div className={cx("cafe", compact && "cafe--compact")}>
      <div className="cafe__bar">
        <div className="cafe__brandline">
          <span className="cafe__brand">{copy.brand}</span>
          <span className="cafe__note">{copy.brandNote}</span>
        </div>
        <div className="cafe__nav">
          {copy.nav.map((item) => (
            <span key={item} className="cafe__nav-item">
              {item}
            </span>
          ))}
          <span className="pill pill--dark pill--nav">{copy.primaryShort}</span>
        </div>
      </div>

      <div className="cafe__hero">
        <div className="cafe__col">
          <span className="cafe__eyebrow">{copy.eyebrow}</span>
          <span className="cafe__title">
            <span className="cafe__title-lead">{copy.title}</span>
            <span className="cafe__title-accent">{copy.titleAccent}</span>
          </span>
          <span className="cafe__text">{copy.text}</span>
          <div className="cafe__actions">
            <span className="pill pill--dark pill--cta cafe__pill">
              {copy.primary}
            </span>
            <span className="pill pill--outline pill--cta">
              {copy.secondary}
            </span>
          </div>
          <span className="cafe__hours">{copy.hours}</span>
        </div>

        <div className="cafe__media">
          <Image
            src={cafeEspresso}
            alt={copy.heroAlt}
            sizes="(min-width: 1024px) 420px, 90vw"
            className="cafe__photo"
          />
          <div className="cafe__cup">
            <p className="cafe__cup-label">{copy.cupLabel}</p>
            <p className="cafe__cup-list">{copy.cupList}</p>
          </div>
        </div>
      </div>

      <div className="cafe__gallery">
        {copy.gallery.map((item) => (
          <div key={item.src} className="cafe__gallery-item">
            <Image
              src={galleryImages[item.src]}
              alt={item.alt}
              sizes="200px"
              className="cafe__thumb"
            />
            <span className="cafe__caption">{item.caption}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CoffeeMockup({ locale }) {
  const copy = mockupCopy[locale].coffee;

  return (
    <div className="mock">
      <div className="mock-devices">
        <div className="mock-devices__laptop">
          <div className="mock-frame">
            <div className="mock-frame__screen">
              <Screen locale={locale} />
            </div>
          </div>
          <div className="mock-frame__base" />
        </div>

        <div className="mock-phone">
          <div className="mock-phone__screen">
            <Screen compact locale={locale} />
          </div>
        </div>
      </div>

      <div className="mock-sticker">
        <p className="mock-sticker__badge">{copy.badge}</p>
        <p className="mock-sticker__name">{copy.name}</p>
      </div>
    </div>
  );
}
