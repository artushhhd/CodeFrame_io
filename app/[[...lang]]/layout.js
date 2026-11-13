import { Fraunces, Noto_Sans_Armenian, Noto_Serif_Armenian } from "next/font/google";
import { notFound } from "next/navigation";
import {
  defaultLocale,
  getDictionary,
  getLocale,
  localePath,
  locales,
  resolveLocale,
} from "@/lib/i18n/index";
import { siteUrl } from "@/lib/site";
import "../globals.css";

// Variable font: one file per subset instead of five static weights.
const sans = Noto_Sans_Armenian({
  variable: "--font-noto-armenian",
  subsets: ["armenian", "latin"],
  display: "swap",
});

// Only the café mockup uses these two, no need to preload them everywhere.
const serif = Noto_Serif_Armenian({
  variable: "--font-noto-serif-armenian",
  subsets: ["armenian", "latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map(({ code }) => ({
    lang: code === defaultLocale ? [] : [code],
  }));
}

export const viewport = {
  themeColor: "#ffffff",
};

export async function generateMetadata({ params }) {
  const code = resolveLocale((await params).lang);
  if (!code) return {};

  const { meta } = await getDictionary(code);

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath(code),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l.htmlLang, localePath(l.code)])),
        "x-default": localePath(defaultLocale),
      },
    },
    openGraph: {
      type: "website",
      siteName: "CodeFrame",
      title: meta.title,
      description: meta.description,
      url: localePath(code),
      locale: getLocale(code).ogLocale,
    },
  };
}

export default async function RootLayout({ children, params }) {
  const code = resolveLocale((await params).lang);
  if (!code) notFound();

  const { a11y } = await getDictionary(code);

  return (
    <html
      lang={getLocale(code).htmlLang}
      className={`${sans.variable} ${serif.variable} ${fraunces.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          {a11y.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
