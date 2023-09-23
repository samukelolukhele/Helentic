import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const useAnimateInView = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: "all" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return { ref, controls };
};

export default useAnimateInView;
