import Image from "next/image";
import shopCoffee from "@/public/shop-coffee-espresso.jpg";
import shopFilters from "@/public/shop-filters-v60.jpg";
import shopTamper from "@/public/shop-tamper-58.jpg";
import { cx } from "@/lib/cx";
import { mockupCopy } from "@/lib/site";

const productImages = {
  "shop-coffee-espresso": shopCoffee,
  "shop-filters-v60": shopFilters,
  "shop-tamper-58": shopTamper,
};

function ProductCard({ product, compact }) {
  return (
    <article className="product">
      <Image
        src={productImages[product.src]}
        alt={product.name}
        sizes={compact ? "110px" : "(min-width: 1024px) 128px, 46vw"}
        className="product__photo"
      />
      <p className="product__name">{product.name}</p>
      <div className="product__foot">
        <span className="product__price">{product.price}</span>
        <span className="stock">{product.stock}</span>
      </div>
    </article>
  );
}

function Screen({ compact = false, locale }) {
  const copy = mockupCopy[locale].shop;
  const products = compact ? copy.products.slice(0, 2) : copy.products;

  return (
    <div className={cx("shop", compact && "shop--compact")}>
      <div className="shop__bar">
        <span className="shop__brand">{copy.brand}</span>
        <span className="shop__note">{copy.brandNote}</span>
        <div className="shop__nav">
          {copy.nav.map((item) => (
            <span key={item} className="shop__nav-item">
              {item}
            </span>
          ))}
          <span className="shop__cart">{copy.cart}</span>
        </div>
      </div>

      <div className="shop__head">
        <div>
          <p className="shop__eyebrow">{copy.eyebrow}</p>
          <p className="shop__title">{copy.title}</p>
        </div>
        <p className="shop__lead">{copy.text}</p>
      </div>

      <div className="shop__chips">
        {copy.groups.map((item) => (
          <span
            key={item}
            className={cx("chip", item === copy.activeGroup && "chip--active")}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="shop__grid">
        {products.map((product) => (
          <ProductCard key={product.src} product={product} compact={compact} />
        ))}
      </div>

      <div className="shop__foot">
        <span className="shop__address">{copy.footer}</span>
        <span className="shop__more">{copy.more}</span>
      </div>
    </div>
  );
}

export default function ShopMockup({ locale }) {
  const copy = mockupCopy[locale].shop;

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
