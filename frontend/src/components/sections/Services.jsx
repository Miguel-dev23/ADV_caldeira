import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "../Motion";
import { SERVICES, waLink } from "../../data/site";

export default function Services() {
  return (
    <section id="servicos" data-testid="services-section" className="relative bg-navy py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Áreas de Atuação</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="max-w-2xl font-display text-4xl font-light leading-tight text-cream sm:text-5xl lg:text-6xl">
                Soluções jurídicas para cada etapa da sua vida
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.12}>
              <motion.div
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cream/10 bg-cream/[0.03] backdrop-blur-sm"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`service-card-${s.id}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                  <span className="absolute left-5 top-5 font-display text-4xl font-light text-gold">
                    {s.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-medium text-cream">{s.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-cream/70">{s.description}</p>

                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm font-light text-cream/80">
                        <Check size={15} className="text-gold" strokeWidth={2.5} />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(`Olá! Tenho interesse na área de ${s.title}. Gostaria de agendar uma consulta.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`service-schedule-${s.id}`}
                    className="mt-7 inline-flex items-center justify-between gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-medium text-gold transition-all duration-300 hover:bg-gold hover:text-navy"
                  >
                    Agendar Consulta
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
