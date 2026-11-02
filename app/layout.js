import {
  Fraunces,
  Noto_Sans_Armenian,
  Noto_Serif_Armenian,
} from "next/font/google";
import "./globals.css";
import { defaultLocale, dictionary } from "@/lib/i18n";

const notoSansArmenian = Noto_Sans_Armenian({
  variable: "--font-noto-armenian",
  subsets: ["armenian", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const notoSerifArmenian = Noto_Serif_Armenian({
  variable: "--font-noto-serif-armenian",
  subsets: ["armenian", "latin"],
  weight: ["400", "600"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: dictionary[defaultLocale].meta.title,
  description: dictionary[defaultLocale].meta.description,
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="hy"
      data-scroll-behavior="smooth"
      className={`${notoSansArmenian.variable} ${notoSerifArmenian.variable} ${fraunces.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
