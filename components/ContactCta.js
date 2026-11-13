import { ArrowRight, Instagram, Telegram, WhatsApp } from "@/components/icons";
import { instagramUrl, phoneUrl, telegramUrl, whatsappLink } from "@/lib/site";

export default function ContactCta({ t }) {
  const { cta } = t;

  const channels = [
    { href: whatsappLink(cta.whatsappMessage), label: cta.whatsapp, Icon: WhatsApp },
    telegramUrl && { href: telegramUrl, label: cta.telegram, Icon: Telegram },
    phoneUrl && { href: phoneUrl, label: cta.phone },
  ].filter(Boolean);

  return (
    <section id="contact" className="cta">
      <div className="cta__panel reveal">
        <p className="eyebrow">{cta.eyebrow}</p>
        <h2 className="cta__title">{cta.title}</h2>
        <p className="cta__text">{cta.text}</p>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ink"
        >
          <Instagram />
          {cta.button}
          <ArrowRight />
        </a>

        <div className="cta__channels">
          <p className="cta__channels-label">{cta.channelsLabel}</p>
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

        <p className="cta__note">{cta.note}</p>
      </div>
    </section>
  );
}
