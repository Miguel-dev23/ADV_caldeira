import { Clock, Navigation } from "lucide-react";
import { Reveal } from "../Motion";
import { HOURS, CONTACT } from "../../data/site";

export default function HoursLocation() {
  return (
    <section id="localizacao" data-testid="hours-location-section" className="bg-cream-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Hours */}
          <div className="lg:col-span-5">
            <Reveal className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Atendimento</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl font-light leading-tight text-navy sm:text-5xl">
                Horário de atendimento
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-2 text-sm font-medium text-navy/70">
                <Clock size={15} className="text-gold" /> {HOURS.note}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-8 divide-y divide-navy/10 border-y border-navy/10">
                {HOURS.days.map((d) => (
                  <li key={d.day} className="flex items-center justify-between py-4">
                    <span className="text-base font-medium text-navy">{d.day}</span>
                    <span className={`text-sm font-light ${d.time === "Fechado" ? "text-navy/40" : "text-gold"}`}>
                      {d.time}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 rounded-2xl border border-navy/10 bg-cream p-6">
                <p className="text-sm font-light leading-relaxed text-navy/70">
                  <span className="font-medium text-navy">Endereço:</span> {CONTACT.address.full}
                </p>
                <a
                  href={CONTACT.mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="hours-directions-button"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft"
                >
                  <Navigation size={16} /> Como chegar
                </a>
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15} className="h-full">
              <div className="h-full min-h-[420px] overflow-hidden rounded-3xl border border-navy/10 shadow-[0_20px_60px_rgba(12,45,78,0.12)]">
                <iframe
                  title="Localização Fernanda Caldeira Advocacia"
                  src={CONTACT.mapsEmbed}
                  className="h-full min-h-[420px] w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  data-testid="google-maps-embed"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
