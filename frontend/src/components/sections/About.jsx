import { motion } from "framer-motion";
import { Reveal } from "../Motion";
import { DIFERENCIAIS, IMAGES } from "../../data/site";

const CHAPTERS = [
  {
    n: "01",
    title: "A trajetória",
    text: "Fernanda Caldeira construiu sua atuação no Direito de Família com um propósito claro: transformar momentos delicados em passagens seguras. Do escritório em Lorena, no interior de São Paulo, sua atuação alcança clientes em todo o país.",
  },
  {
    n: "02",
    title: "Quem somos",
    text: "Uma advocacia dedicada às pessoas e às famílias. Aqui, cada história é ouvida com atenção e conduzida com técnica — divórcios, inventários, planejamento sucessório e questões previdenciárias tratados com sigilo absoluto.",
  },
  {
    n: "03",
    title: "A forma de trabalhar",
    text: "Comunicação clara, sem juridiquês. Estratégia desenhada para os seus objetivos. Presença próxima, mesmo à distância. Este é o compromisso que orienta cada caso.",
  },
];

export default function About() {
  return (
    <section id="sobre" data-testid="about-section" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <Reveal className="mb-16 flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Sobre</span>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Chapters */}
          <div className="lg:col-span-7">
            <div className="space-y-14">
              {CHAPTERS.map((c, i) => (
                <Reveal key={c.n} delay={i * 0.1} className="group grid grid-cols-[auto_1fr] gap-6 sm:gap-10">
                  <span className="font-display text-6xl font-light text-navy/15 transition-colors duration-500 group-hover:text-gold sm:text-7xl">
                    {c.n}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-display text-3xl font-medium text-navy sm:text-4xl">{c.title}</h3>
                    <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-navy/70">
                      {c.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Portrait + differentiators */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-[32px_32px_999px_999px] border border-gold/25 shadow-[0_24px_60px_rgba(12,45,78,0.14)]">
                <motion.img
                  src={IMAGES.aboutPortrait}
                  alt="Fernanda Caldeira, advogada"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map((d, i) => (
            <Reveal
              key={d.title}
              delay={i * 0.08}
              className="bg-cream p-8 transition-colors duration-500 hover:bg-cream-soft"
            >
              <p className="font-display text-2xl font-medium text-navy">{d.title}</p>
              <p className="mt-3 text-sm font-light leading-relaxed text-navy/65">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
