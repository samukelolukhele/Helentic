import { ReactNode } from "react";
import useAnimateInView from "../../utils/hooks/useAnimateInView";
import { motion as m } from "framer-motion";
import { fadeIn } from "../../utils/variants";

type Props = {
  children: ReactNode;
  width: "100%" | "fit-content";
  className?: string;
};

const Reveal = ({ children, width = "100%", className }: Props) => {
  const { ref, controls } = useAnimateInView();

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <m.div
        variants={fadeIn}
        initial="hidden"
        animate={controls}
        transition={{ delay: 0.25 }}
        className={className}
      >
        {children}
      </m.div>
    </div>
  );
};

export default Reveal;
