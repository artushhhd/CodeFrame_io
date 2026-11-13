import Brand from "@/components/Brand";
import { navIds } from "@/lib/site";

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <Brand footer />
          <p className="site-footer__tagline">{t.footer.tagline}</p>
        </div>

        <nav className="site-footer__nav">
          {navIds.map((id) => (
            <a key={id} href={`#${id}`} className="site-footer__link">
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <p className="site-footer__rights">{t.footer.rights}</p>
      </div>
    </footer>
  );
}
