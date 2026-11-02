import { useState } from "react";
import Brand from "@/components/Brand";
import { Instagram, Menu, Close } from "@/components/icons";
import { cx } from "@/lib/cx";
import { instagramUrl, navItems } from "@/lib/site";
import { localeOptions } from "@/lib/i18n";

function LangSwitcher({ locale, onLocaleChange, variant = "header" }) {
  return (
    <div
      role="group"
      aria-label="Language"
      className={cx(
        "lang-switch",
        variant === "menu" ? "lang-switch--menu" : "lang-switch--header"
      )}
    >
      {localeOptions.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => onLocaleChange(option.code)}
          aria-pressed={locale === option.code}
          className={cx(
            "lang-switch__option",
            locale === option.code
              ? "lang-switch__option--active"
              : "lang-switch__option--idle"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default function Header({ t, locale, onLocaleChange }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Brand />

        <nav className="site-nav">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LangSwitcher locale={locale} onLocaleChange={onLocaleChange} />
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Direct"
            className="direct-button"
          >
            <Instagram />
            {t.header.direct}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="menu-button"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="mobile-nav__link"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>
          <LangSwitcher
            locale={locale}
            onLocaleChange={onLocaleChange}
            variant="menu"
          />
        </div>
      )}
    </header>
  );
}
