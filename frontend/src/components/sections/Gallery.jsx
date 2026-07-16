import { motion } from "framer-motion";
import { Reveal } from "../Motion";
import { IMAGES } from "../../data/site";

const ITEMS = [
  { src: IMAGES.galleryOffice, label: "O escritório", span: "md:col-span-2 md:row-span-2", ratio: "aspect-[4/5] md:aspect-auto" },
  { src: IMAGES.galleryJustice, label: "Justiça & equilíbrio", span: "", ratio: "aspect-square" },
  { src: IMAGES.serviceSuccession, label: "Documentos & sucessões", span: "", ratio: "aspect-square" },
  { src: IMAGES.galleryTravel, label: "Perspectiva global", span: "md:col-span-2", ratio: "aspect-[16/9]" },
];

export default function Gallery() {
  return (
    <section id="galeria" data-testid="gallery-section" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Galeria</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="max-w-2xl font-display text-4xl font-light leading-tight text-navy sm:text-5xl">
                Um ambiente pensado para o seu conforto
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-5 md:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className={`group relative overflow-hidden rounded-2xl border border-navy/10 shadow-[0_12px_40px_rgba(12,45,78,0.08)] ${item.span}`}
            >
              <motion.img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className={`h-full w-full object-cover ${item.ratio}`}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-3 font-display text-xl italic text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
