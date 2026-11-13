import { notFound } from "next/navigation";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import RevealObserver from "@/components/RevealObserver";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Why from "@/components/Why";
import Work from "@/components/Work";
import { getDictionary, resolveLocale } from "@/lib/i18n/index";

export default async function Page({ params }) {
  const locale = resolveLocale((await params).lang);
  if (!locale) notFound();

  const t = await getDictionary(locale);

  return (
    <>
      <Header t={t} locale={locale} />
      <main id="main">
        <Hero t={t} />
        <Services t={t} />
        <Work t={t} />
        <Why t={t} />
        <Process t={t} />
        <Technologies t={t} />
        <Pricing t={t} />
        <ContactCta t={t} />
      </main>
      <Footer t={t} />
      <RevealObserver />
    </>
  );
}
