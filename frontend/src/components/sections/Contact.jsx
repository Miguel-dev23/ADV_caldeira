import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, MapPin, Mail, Send, Loader2 } from "lucide-react";
import { toast } from "../ui/sonner";
import { Reveal } from "../Motion";
import { CONTACT, waLink } from "../../data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT.phoneDisplay,
    href: waLink("Olá! Vim pelo site e gostaria de mais informações."),
    testid: "contact-whatsapp",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: CONTACT.phoneDisplay,
    href: `tel:+${CONTACT.phoneRaw}`,
    testid: "contact-phone",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    testid: "contact-email",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagram,
    testid: "contact-instagram",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error("Preencha nome, telefone e mensagem.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, {
        name: form.name,
        phone: form.phone,
        email: form.email || null,
        subject: "Contato pelo site",
        message: form.message,
      });
      toast.success("Mensagem enviada! Em breve entraremos em contato.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      toast.error("Não foi possível enviar. Tente pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" data-testid="contact-section" className="bg-cream-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <Reveal className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Contato</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl font-light leading-tight text-navy sm:text-5xl lg:text-6xl">
                Vamos conversar sobre o seu caso
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-navy/70">
                O primeiro passo é uma conversa. Escolha o canal que preferir — o
                atendimento é sigiloso e sem compromisso.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CHANNELS.map((c, i) => (
                <Reveal key={c.label} delay={0.2 + i * 0.06}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={c.testid}
                    className="group flex items-center gap-4 rounded-2xl border border-navy/10 bg-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-cream transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                      <c.icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-navy/50">{c.label}</span>
                      <span className="block truncate text-sm font-medium text-navy">{c.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <a
                href={CONTACT.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-directions"
                className="mt-6 flex items-start gap-3 rounded-2xl border border-navy/10 bg-cream p-5 transition-colors duration-300 hover:border-gold"
              >
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span className="text-sm font-light text-navy/75">{CONTACT.address.full}</span>
              </a>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <form
                onSubmit={submit}
                data-testid="contact-form"
                className="rounded-3xl border border-navy/10 bg-cream p-8 shadow-[0_20px_60px_rgba(12,45,78,0.10)] sm:p-10"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Nome" name="name" value={form.name} onChange={update} placeholder="Seu nome completo" testid="contact-input-name" />
                  <Field label="Telefone / WhatsApp" name="phone" value={form.phone} onChange={update} placeholder="(00) 00000-0000" testid="contact-input-phone" />
                </div>
                <div className="mt-6">
                  <Field label="E-mail (opcional)" name="email" type="email" value={form.email} onChange={update} placeholder="voce@email.com" testid="contact-input-email" />
                </div>
                <div className="mt-6">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy/60">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    rows={5}
                    placeholder="Conte um pouco sobre a sua situação..."
                    data-testid="contact-input-message"
                    className="w-full resize-none rounded-2xl border border-navy/15 bg-cream-soft px-5 py-4 text-sm text-navy outline-none transition-colors duration-300 placeholder:text-navy/35 focus:border-gold"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-submit"
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-medium text-cream transition-all duration-300 hover:bg-navy-soft disabled:opacity-60 sm:w-auto"
                >
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  {loading ? "Enviando..." : "Enviar mensagem"}
                </motion.button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const Field = ({ label, name, value, onChange, placeholder, type = "text", testid }) => (
  <div>
    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy/60">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      data-testid={testid}
      className="w-full rounded-2xl border border-navy/15 bg-cream-soft px-5 py-4 text-sm text-navy outline-none transition-colors duration-300 placeholder:text-navy/35 focus:border-gold"
    />
  </div>
);
