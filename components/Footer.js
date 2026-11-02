import Brand from "@/components/Brand";
import { navItems } from "@/lib/site";

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <Brand variant="footer" />
          <p className="site-footer__tagline">{t.footer.tagline}</p>
        </div>

        <nav className="site-footer__nav">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="site-footer__link">
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <p className="site-footer__rights">{t.footer.rights}</p>
      </div>
    </footer>
  );
}
