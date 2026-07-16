import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, waLink } from "../data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        data-testid="main-nav"
        className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-cream/80 border-b border-navy/10"
            : "bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-12">
          <a href="#top" data-testid="nav-logo-link">
            <Logo />
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`nav-link-${link.href.replace("#", "")}`}
                className="group relative text-sm font-medium text-navy/70 transition-colors duration-300 hover:text-navy"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink("Olá! Gostaria de agendar uma consulta com a Dra. Fernanda Caldeira.")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-whatsapp-button"
              className="hidden items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft sm:inline-flex"
            >
              <MessageCircle size={16} strokeWidth={2} />
              Agendar
            </a>
            <button
              onClick={() => setOpen(true)}
              data-testid="nav-mobile-open"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
        <motion.div
          className="h-[2px] origin-left bg-gold"
          style={{ scaleX: progress }}
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-navy text-cream lg:hidden"
            data-testid="mobile-menu"
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Logo light />
              <button
                onClick={() => setOpen(false)}
                data-testid="nav-mobile-close"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20"
                aria-label="Fechar menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-8 pt-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${link.href.replace("#", "")}`}
                  className="border-b border-cream/10 py-4 font-display text-4xl font-light"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={waLink("Olá! Gostaria de agendar uma consulta com a Dra. Fernanda Caldeira.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                data-testid="mobile-whatsapp-button"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-medium text-navy"
              >
                <MessageCircle size={18} /> Agendar pelo WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
