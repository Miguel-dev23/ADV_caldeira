import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, CalendarClock, MapPin, ArrowDown } from "lucide-react";
import { MaskedLine } from "../Motion";
import { CONTACT, IMAGES, waLink } from "../../data/site";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      ref={ref}
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] overflow-hidden bg-cream pt-28 sm:pt-32"
    >
      {/* Decorative oversized watermark */}
      <div className="pointer-events-none absolute -right-10 top-[42%] select-none font-display text-[28vw] font-light leading-none text-navy/[0.04] sm:top-1/3">
        FC
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 sm:px-12 lg:grid-cols-12 lg:gap-8">
        {/* Text column */}
        <motion.div style={{ y: textY }} className="relative z-10 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Advocacia • Lorena, SP
            </span>
          </motion.div>

          <h1 className="font-display text-5xl font-light leading-[0.95] tracking-tight text-navy sm:text-6xl lg:text-7xl xl:text-8xl">
            <MaskedLine delay={0.25}>Direito de</MaskedLine>
            <MaskedLine delay={0.38} className="italic text-gold">Família</MaskedLine>
            <MaskedLine delay={0.51}>& Sucessões</MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 max-w-xl text-base font-light leading-relaxed text-navy/70 sm:text-lg"
          >
            Protegendo o seu legado e a sua família com discrição, empatia e
            estratégia. Atendimento humanizado em Lorena-SP e em todo o Brasil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={waLink("Olá! Vim pelo site e gostaria de falar com a Dra. Fernanda Caldeira.")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-button"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-medium text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-navy-soft"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              data-testid="hero-schedule-button"
              className="inline-flex items-center gap-2 rounded-full border border-navy/25 px-7 py-4 text-sm font-medium text-navy transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold"
            >
              <CalendarClock size={18} />
              Agendar Consulta
            </a>
            <a
              href={CONTACT.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-location-button"
              className="inline-flex items-center gap-2 rounded-full px-4 py-4 text-sm font-medium text-navy/70 transition-colors duration-300 hover:text-gold"
            >
              <MapPin size={18} />
              Localização
            </a>
          </motion.div>
        </motion.div>

        {/* Image column with parallax + clipped editorial frame */}
        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[999px_999px_32px_32px] border border-gold/30 shadow-[0_30px_80px_rgba(12,45,78,0.18)]"
          >
            <motion.img
              src={IMAGES.heroPortrait}
              alt="Advogada Fernanda Caldeira"
              loading="eager"
              style={{ y: imgY, scale: imgScale }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating credential card (glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -bottom-6 -left-2 z-20 rounded-2xl border border-gold/30 bg-cream px-6 py-4 shadow-[0_16px_50px_rgba(12,45,78,0.20)] sm:-left-8"
            data-testid="hero-credential-card"
          >
            <p className="font-display text-3xl font-medium text-navy">100%</p>
            <p className="text-xs font-medium uppercase tracking-wider text-navy/60">
              Digital em todo o Brasil
            </p>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-navy/50 lg:flex"
        data-testid="hero-scroll-cue"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Explorar</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
