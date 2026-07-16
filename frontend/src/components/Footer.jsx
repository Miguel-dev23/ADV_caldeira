import { Instagram, MessageCircle, Phone, ArrowUp } from "lucide-react";
import Logo from "./Logo";
import { CONTACT, NAV_LINKS, waLink } from "../data/site";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative overflow-hidden bg-navy-deep text-cream">
      {/* Oversized brand type */}
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:px-12">
        <p className="select-none font-display text-[16vw] font-light leading-[0.85] tracking-tight text-cream/[0.06] sm:text-[12vw]">
          Fernanda Caldeira
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:px-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-cream/60">
            Advocacia dedicada ao Direito de Família, Sucessões e Previdenciário.
            Escritório em Lorena-SP, atendimento em todo o Brasil.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" data-testid="footer-instagram" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors duration-300 hover:border-gold hover:text-gold">
              <Instagram size={18} />
            </a>
            <a href={waLink("Olá! Vim pelo site.")} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors duration-300 hover:border-gold hover:text-gold">
              <MessageCircle size={18} />
            </a>
            <a href={`tel:+${CONTACT.phoneRaw}`} data-testid="footer-phone" aria-label="Telefone" className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors duration-300 hover:border-gold hover:text-gold">
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Navegação</p>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-light text-cream/70 transition-colors duration-300 hover:text-cream">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contato</p>
          <ul className="space-y-3 text-sm font-light text-cream/70">
            <li>{CONTACT.phoneDisplay}</li>
            <li className="break-all">{CONTACT.email}</li>
            <li className="leading-relaxed">{CONTACT.address.full}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-12">
          <p className="text-xs font-light text-cream/50">
            © {new Date().getFullYear()} {CONTACT.name}. Todos os direitos reservados.
          </p>
          <a href="#top" data-testid="footer-back-to-top" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-cream/60 transition-colors duration-300 hover:text-gold">
            Voltar ao topo <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
