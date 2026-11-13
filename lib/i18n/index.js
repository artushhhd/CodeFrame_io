export const defaultLocale = "en";

export const locales = [
  { code: "en", label: "EN", htmlLang: "en", ogLocale: "en_US" },
  { code: "hy", label: "HY", htmlLang: "hy", ogLocale: "hy_AM" },
  { code: "ru", label: "RU", htmlLang: "ru", ogLocale: "ru_RU" },
];

const dictionaries = {
  en: () => import("./en").then((m) => m.default),
  hy: () => import("./hy").then((m) => m.default),
  ru: () => import("./ru").then((m) => m.default),
};

export const getDictionary = (code) => dictionaries[code]();

export const getLocale = (code) => locales.find((l) => l.code === code);

// "/" is English, the other languages live under /hy and /ru.
export const localePath = (code) => (code === defaultLocale ? "/" : `/${code}`);

// Turns the optional catch-all param into a locale code, or null for a 404.
export function resolveLocale(segments) {
  if (!segments) return defaultLocale;
  const [code] = segments;
  const known = segments.length === 1 && code !== defaultLocale && getLocale(code);
  return known ? code : null;
}
