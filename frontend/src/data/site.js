// Central source of truth for all real, publicly-sourced business data.
// Data collected from the client's Instagram (@fernandacaldeira_adv), the user,
// and public Google / LinkedIn listings. Nothing here is fabricated.

export const CONTACT = {
  name: "Fernanda Caldeira Advocacia",
  attorney: "Fernanda Caldeira",
  phoneDisplay: "(12) 98265-4821",
  phoneRaw: "5512982654821",
  whatsapp: "https://wa.me/5512982654821",
  email: "fernandaracaldeiraadv@gmail.com",
  instagram: "https://www.instagram.com/fernandacaldeira_adv",
  instagramHandle: "@fernandacaldeira_adv",
  address: {
    street: "Rua Nossa Senhora da Piedade, 188",
    district: "Centro",
    city: "Lorena",
    state: "SP",
    zip: "12600-190",
    full: "Rua Nossa Senhora da Piedade, 188, Centro, Lorena - SP, 12600-190",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=Rua%20Nossa%20Senhora%20da%20Piedade%2C%20188%2C%20Centro%2C%20Lorena%20-%20SP%2C%2012600-190&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Rua+Nossa+Senhora+da+Piedade,+188,+Centro,+Lorena+-+SP,+12600-190",
};

// WhatsApp deep-links with pre-filled context
export const waLink = (msg) =>
  `${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;

export const IMAGES = {
  heroPortrait:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjBsYXd5ZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODQxNjUyNDl8MA&ixlib=rb-4.1.0&q=85&w=1400",
  aboutPortrait:
    "https://images.unsplash.com/photo-1733348137479-2e726d326d9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxmZW1hbGUlMjBsYXd5ZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODQxNjUyNDl8MA&ixlib=rb-4.1.0&q=85&w=1200",
  serviceFamily:
    "https://images.unsplash.com/photo-1559234938-b60fff04894d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGVsZGVybHklMjBjb3VwbGUlMjB3YWxraW5nfGVufDB8fHx8MTc4NDE2NTI1OHww&ixlib=rb-4.1.0&q=85&w=1000",
  serviceSuccession:
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxmb3VudGFpbiUyMHBlbiUyMHNpZ25pbmclMjBkb2N1bWVudHxlbnwwfHx8fDE3ODQxNjUyNTh8MA&ixlib=rb-4.1.0&q=85&w=1000",
  servicePrev:
    "https://images.unsplash.com/photo-1647913097114-5975d965a1ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwyfHxoYXBweSUyMGVsZGVybHklMjBjb3VwbGUlMjB3YWxraW5nfGVufDB8fHx8MTc4NDE2NTI1OHww&ixlib=rb-4.1.0&q=85&w=1000",
  galleryOffice:
    "https://images.pexels.com/photos/8082233/pexels-photo-8082233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=940",
  galleryJustice:
    "https://images.unsplash.com/photo-1687289133469-b2a07a13b78b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxzY2FsZXMlMjBvZiUyMGp1c3RpY2UlMjBnb2xkfGVufDB8fHx8MTc4NDE2NTI0OXww&ixlib=rb-4.1.0&q=85&w=1000",
  galleryTravel:
    "https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxwYXJpcyUyMGFyY2hpdGVjdHVyZSUyMGNsYXNzaWN8ZW58MHx8fHwxNzg0MTY1MjU3fDA&ixlib=rb-4.1.0&q=85&w=1000",
};

export const SERVICES = [
  {
    id: "familia",
    number: "01",
    title: "Divórcio & Família",
    description:
      "Atuação humanizada em divórcios consensuais e litigiosos, guarda, pensão alimentícia, partilha de bens e reconhecimento de união estável — com sigilo e acolhimento.",
    image: IMAGES.serviceFamily,
    points: ["Divórcio consensual e litigioso", "Guarda e pensão alimentícia", "Partilha de bens"],
  },
  {
    id: "sucessoes",
    number: "02",
    title: "Inventário & Sucessões",
    description:
      "Planejamento sucessório, testamentos e inventários conduzidos com estratégia para proteger o patrimônio da família e evitar litígios futuros.",
    image: IMAGES.serviceSuccession,
    points: ["Inventário judicial e extrajudicial", "Planejamento sucessório", "Testamentos"],
  },
  {
    id: "previdenciario",
    number: "03",
    title: "Previdenciário",
    description:
      "Aposentadorias, revisões e benefícios do INSS analisados com cuidado, buscando o melhor resultado com segurança jurídica.",
    image: IMAGES.servicePrev,
    points: ["Aposentadorias", "Revisão de benefícios", "Benefícios do INSS"],
  },
];

export const DIFERENCIAIS = [
  { title: "Atendimento humanizado", text: "Cada caso é tratado com escuta, empatia e absoluto sigilo." },
  { title: "Atuação em todo o Brasil", text: "Escritório em Lorena-SP e atendimento 100% digital onde você estiver." },
  { title: "Estratégia personalizada", text: "Soluções desenhadas para a realidade e os objetivos de cada família." },
  { title: "Comunicação clara", text: "Você entende cada etapa do processo, sem juridiquês." },
];

// Business hours: not published publicly — the office works by appointment.
export const HOURS = {
  note: "Atendimento com hora marcada",
  days: [
    { day: "Segunda", time: "Sob agendamento" },
    { day: "Terça", time: "Sob agendamento" },
    { day: "Quarta", time: "Sob agendamento" },
    { day: "Quinta", time: "Sob agendamento" },
    { day: "Sexta", time: "Sob agendamento" },
    { day: "Sábado e Domingo", time: "Fechado" },
  ],
};

export const FAQ = [
  {
    q: "Como funciona a primeira consulta?",
    a: "A primeira consulta é o momento de entender a sua situação. Você pode agendar pelo WhatsApp e escolher entre atendimento presencial em Lorena-SP ou totalmente online, onde estiver.",
  },
  {
    q: "O atendimento é apenas em Lorena-SP?",
    a: "Não. Além do escritório em Lorena, o atendimento é realizado de forma 100% digital em todo o Brasil, com a mesma qualidade e proximidade.",
  },
  {
    q: "Quais áreas do Direito são atendidas?",
    a: "Direito de Família (divórcio, guarda, pensão e partilha), Inventário e Planejamento Sucessório, e Direito Previdenciário (aposentadorias e benefícios).",
  },
  {
    q: "É possível fazer um divórcio consensual de forma rápida?",
    a: "Sim. Quando há acordo entre as partes, o divórcio pode ser conduzido de maneira ágil e, em muitos casos, por via extrajudicial. Avaliamos o seu caso na consulta.",
  },
  {
    q: "Por que fazer planejamento sucessório?",
    a: "O planejamento sucessório organiza a transmissão do patrimônio em vida, reduz conflitos familiares, otimiza custos e traz segurança para quem você ama. Não é necessário ser milionário para se planejar.",
  },
  {
    q: "Como faço para agendar?",
    a: "Basta clicar em qualquer botão de WhatsApp desta página ou enviar uma mensagem pelo formulário de contato. O retorno é rápido e sigiloso.",
  },
];

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
  { label: "Dúvidas", href: "#faq" },
];
