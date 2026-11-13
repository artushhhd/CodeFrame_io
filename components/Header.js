import Brand from "@/components/Brand";
import LangSwitcher from "@/components/LangSwitcher";
import MobileMenu from "@/components/MobileMenu";
import { Instagram, WhatsApp } from "@/components/icons";
import { instagramUrl, navIds, whatsappLink } from "@/lib/site";

export default function Header({ t, locale }) {
  const links = navIds.map((id) => ({ id, label: t.nav[id] }));

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Brand />

        <nav className="site-nav">
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LangSwitcher locale={locale} label={t.a11y.language} />

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="direct-button"
          >
            <Instagram />
            <span className="direct-button__label">{t.header.direct}</span>
          </a>

          <a
            href={whatsappLink(t.cta.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="direct-button direct-button--whatsapp"
          >
            <WhatsApp />
            <span className="direct-button__label">{t.cta.whatsapp}</span>
          </a>

          <MobileMenu openLabel={t.a11y.menuOpen} closeLabel={t.a11y.menuClose}>
            <nav className="mobile-nav">
              {links.map(({ id, label }) => (
                <a key={id} href={`#${id}`} className="mobile-nav__link">
                  {label}
                </a>
              ))}
            </nav>
            <LangSwitcher locale={locale} label={t.a11y.language} variant="menu" />
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
