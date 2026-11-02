"use client";

import { useEffect, useSyncExternalStore } from "react";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { defaultLocale, dictionary, localeOptions } from "@/lib/i18n";
import { getLocale, setLocale, subscribeLocale } from "@/lib/localeStore";

export default function Home() {
  const locale = useSyncExternalStore(subscribeLocale, getLocale, () => defaultLocale);

  useEffect(() => {
    const option = localeOptions.find((entry) => entry.code === locale);
    document.documentElement.lang = option.htmlLang;
  }, [locale]);

  const t = dictionary[locale];

  return (
    <>
      <Header t={t} locale={locale} onLocaleChange={setLocale} />
      <main>
        <Hero t={t} locale={locale} />
        <Services t={t} />
        <Work t={t} locale={locale} />
        <Process t={t} />
        <ContactCta t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
