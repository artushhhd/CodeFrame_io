"use client";

import { useEffect, useSyncExternalStore } from "react";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Why from "@/components/Why";
import Work from "@/components/Work";
import { defaultLocale, dictionary, localeOptions } from "@/lib/i18n";
import { getLocale, setLocale, subscribeLocale } from "@/lib/localeStore";

export default function Home() {
  const locale = useSyncExternalStore(subscribeLocale, getLocale, () => defaultLocale);

  const t = dictionary[locale];

  useEffect(() => {
    const option = localeOptions.find((entry) => entry.code === locale);
    document.documentElement.lang = option.htmlLang;
    document.title = t.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t.meta.description);
  }, [locale, t]);

  return (
    <>
      <Header t={t} locale={locale} onLocaleChange={setLocale} />
      <main>
        <Hero t={t} locale={locale} />
        <Services t={t} />
        <Work t={t} locale={locale} />
        <Why t={t} />
        <Process t={t} />
        <Technologies t={t} />
        <Pricing t={t} />
        <ContactCta t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
