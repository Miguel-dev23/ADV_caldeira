import { motion } from "framer-motion";

// Masked line-by-line reveal used for the signature hero on-load moment.
export const MaskedLine = ({ children, delay = 0, className = "" }) => (
  <span className="block overflow-hidden">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

// Generic scroll-triggered reveal for sections.
export const Reveal = ({ children, delay = 0, y = 40, className = "", as = "div" }) => {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
};

// Staggered container
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
