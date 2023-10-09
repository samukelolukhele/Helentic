import { ReactNode } from "react";
import useAnimateInView from "../../utils/hooks/useAnimateInView";
import { Variants, motion as m } from "framer-motion";
import { fadeIn } from "../../utils/variants";

type Props = {
  children: ReactNode;
  width?: "100%" | "fit-content";
  className?: string;
  animation?: Variants;
};

const Reveal = ({
  children,
  width = "100%",
  className,
  animation = fadeIn,
}: Props) => {
  const { ref, controls } = useAnimateInView();

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <m.div
        variants={animation}
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
