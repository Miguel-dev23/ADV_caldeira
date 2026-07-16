import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "../data/site";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={waLink("Olá! Vim pelo site da Fernanda Caldeira Advocacia e gostaria de atendimento.")}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.6, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle size={26} className="relative" />
    </motion.a>
  );
}
