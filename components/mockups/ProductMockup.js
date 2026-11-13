import Image from "next/image";
import shopCoffee from "@/public/shop-coffee-espresso.jpg";
import shopFilters from "@/public/shop-filters-v60.jpg";
import shopGrinder from "@/public/shop-grinder-64.jpg";
import shopTamper from "@/public/shop-tamper-58.jpg";
import { cx } from "@/lib/cx";

const productImages = {
  "shop-coffee-espresso": shopCoffee,
  "shop-filters-v60": shopFilters,
  "shop-grinder-64": shopGrinder,
  "shop-tamper-58": shopTamper,
};

const thumbs = ["shop-filters-v60", "shop-grinder-64", "shop-tamper-58"];

export default function ProductMockup({ copy }) {
  return (
    <div className="win-wrap" aria-hidden="true">
      <div className="win">
        <div className="win__screen">
          <div className="win__bar">
            <div className="win__dots">
              <span className="win__dot win__dot--red" />
              <span className="win__dot win__dot--amber" />
              <span className="win__dot win__dot--green" />
            </div>
            <span className="win__url">{copy.url}</span>
            <span className="win__brand">{copy.brand}</span>
          </div>

          <div className="win__body">
            <div className="win__media">
              <Image
                src={productImages["shop-coffee-espresso"]}
                alt=""
                sizes="(min-width: 640px) 200px, 60vw"
                className="win__hero"
              />
              <div className="win__thumbs">
                {thumbs.map((src, index) => (
                  <Image
                    key={src}
                    src={productImages[src]}
                    alt=""
                    sizes="60px"
                    className={cx(
                      "win__thumb",
                      index === 0 && "win__thumb--active"
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="win__info">
              <p className="win__eyebrow">{copy.eyebrow}</p>
              <p className="win__name">{copy.name}</p>
              <p className="win__weight">{copy.weight}</p>

              <div className="win__notes">
                {copy.notes.map((note) => (
                  <span key={note} className="win__note">
                    {note}
                  </span>
                ))}
              </div>

              <p className="win__desc">{copy.desc}</p>

              <div className="win__buy">
                <span className="win__price">{copy.price}</span>
                <span className="stock">{copy.stock}</span>
              </div>

              <div className="win__cta">
                <span className="win__button">{copy.cta}</span>
                <span className="win__button win__button--ghost">
                  {copy.secondary}
                </span>
              </div>

              <p className="win__rating">{copy.rating}</p>
            </div>
          </div>

          <div className="win__related">
            <p className="win__related-title">{copy.relatedTitle}</p>
            <div className="win__related-grid">
              {copy.related.map((item) => (
                <div key={item.label} className="win__related-item">
                  <Image
                    src={productImages[item.src]}
                    alt=""
                    sizes="60px"
                    className="win__related-photo"
                  />
                  <div className="win__related-text">
                    <p className="win__related-name">{item.label}</p>
                    <p className="win__related-price">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
