import Link from "next/link";
import { localePath, locales } from "@/lib/i18n/index";
import { cx } from "@/lib/cx";

export default function LangSwitcher({ locale, label, variant = "header" }) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cx("lang-switch", `lang-switch--${variant}`)}
    >
      {locales.map(({ code, label: text, htmlLang }) => (
        <Link
          key={code}
          href={localePath(code)}
          hrefLang={htmlLang}
          lang={htmlLang}
          aria-current={code === locale ? "true" : undefined}
          className={cx(
            "lang-switch__option",
            code === locale ? "lang-switch__option--active" : "lang-switch__option--idle"
          )}
        >
          {text}
        </Link>
      ))}
    </div>
  );
}
