import { Reveal } from "../Motion";
import { FAQ as FAQ_DATA } from "../../data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Faq() {
  return (
    <section id="faq" data-testid="faq-section" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-12">
        <Reveal className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Dúvidas Frequentes</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-12 max-w-2xl font-display text-4xl font-light leading-tight text-navy sm:text-5xl">
            Perguntas que talvez você tenha
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {FAQ_DATA.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-navy/15"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="py-6 text-left font-display text-xl font-medium text-navy hover:text-gold hover:no-underline sm:text-2xl">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base font-light leading-relaxed text-navy/70">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
