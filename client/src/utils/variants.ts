import { Variants } from "framer-motion";

export const pop: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, type: "spring" },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { type: "tween", duration: 0.6 } },
};

export const parentStagger: Variants = {
  visible: { transition: { staggerChildren: 0.4 } },
};
