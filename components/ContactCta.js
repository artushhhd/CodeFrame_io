import Reveal from "@/components/Reveal";
import {
  ArrowRight,
  Instagram,
  Telegram,
  WhatsApp,
} from "@/components/icons";
import { instagramUrl, telegramUrl, whatsappUrl, phoneUrl } from "@/lib/site";

export default function ContactCta({ t }) {
  const channels = [
    whatsappUrl && { href: whatsappUrl, label: t.cta.whatsapp, Icon: WhatsApp },
    telegramUrl && { href: telegramUrl, label: t.cta.telegram, Icon: Telegram },
    phoneUrl && { href: phoneUrl, label: t.cta.phone, Icon: null },
  ].filter(Boolean);

  return (
    <section id="contact" className="cta">
      <Reveal className="cta__panel">
        <div className="cta__body">
          <p className="eyebrow">{t.cta.eyebrow}</p>
          <h2 className="cta__title">{t.cta.title}</h2>
          <p className="cta__text">{t.cta.text}</p>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ink"
          >
            <Instagram />
            {t.cta.button}
            <ArrowRight />
          </a>

          {channels.length > 0 && (
            <div className="cta__channels">
              <p className="cta__channels-label">{t.cta.channelsLabel}</p>
              <ul className="cta__channel-list">
                {channels.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta__channel"
                    >
                      {Icon && <Icon />}
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="cta__note">{t.cta.note}</p>
        </div>
      </Reveal>
    </section>
  );
}
