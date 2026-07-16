import { Star, MessageCircle } from "lucide-react";
import { Reveal } from "../Motion";
import { waLink, CONTACT } from "../../data/site";

// Honesty note: no public Google reviews were found for this business at build time.
// We do NOT fabricate testimonials. Instead we present an elegant, transparent block
// inviting clients to share their experience.
export default function Reviews() {
  return (
    <section id="avaliacoes" data-testid="reviews-section" className="bg-navy py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-12">
        <Reveal className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Avaliações</span>
          <span className="h-px w-10 bg-gold" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-8 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={26} className="fill-gold text-gold" />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="font-display text-3xl font-light leading-tight text-cream sm:text-4xl lg:text-5xl">
            A confiança de quem é atendido com dedicação
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-cream/70">
            As avaliações públicas no Google ainda estão sendo reunidas. Se você já foi
            atendido pela Dra. Fernanda Caldeira, sua opinião é muito bem-vinda — e ajuda
            outras famílias a encontrarem o apoio de que precisam.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <a
            href={waLink("Olá! Fui atendido(a) pela Dra. Fernanda e gostaria de deixar meu depoimento.")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="reviews-cta-button"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-medium text-navy transition-all duration-300 hover:-translate-y-1 hover:bg-gold-light"
          >
            <MessageCircle size={18} /> Deixar meu depoimento
          </a>
        </Reveal>
      </div>
    </section>
  );
}
