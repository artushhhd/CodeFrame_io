import { defaultLocale, localePath, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

const absolute = (code) => new URL(localePath(code), siteUrl).href;

export default function sitemap() {
  const languages = Object.fromEntries(locales.map((l) => [l.htmlLang, absolute(l.code)]));
  languages["x-default"] = absolute(defaultLocale);

  return locales.map(({ code }) => ({
    url: absolute(code),
    alternates: { languages },
  }));
}
