// Slow editorial marquee acting as a divider between hero and about.
const ITEMS = [
  "Direito de Família",
  "Divórcio",
  "Inventário",
  "Planejamento Sucessório",
  "Guarda & Pensão",
  "Previdenciário",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div
      data-testid="marquee-strip"
      className="relative flex overflow-hidden border-y border-gold/20 bg-navy py-6"
    >
      <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-display text-2xl font-light italic text-cream sm:text-3xl">
              {item}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap" aria-hidden="true">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-display text-2xl font-light italic text-cream sm:text-3xl">
              {item}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
