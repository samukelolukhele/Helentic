import { ReactNode, forwardRef } from "react";
import { motion as m } from "framer-motion";

type CProps = {
  children: ReactNode;
  flexType?: "between" | "center" | null;
  containerType?: "nav" | "base";
  className?: string;
};

const Container = forwardRef<HTMLDivElement, CProps>(
  ({ children, flexType = null, className, containerType = "base" }, ref) => {
    const flexTypes = {
      center: "items-center justify-center",
      between: "items-center justify-between",
    };

    return (
      <div
        ref={ref}
        className={`mx-[2rem] md:mx-auto ${
          containerType == "base" ? "container" : "nav-container"
        } flex ${
          flexType == "center"
            ? flexTypes.center
            : flexType == "between"
            ? flexTypes.between
            : ""
        } ${className}`}
      >
        {children}
      </div>
    );
  }
);

export const MotionContainer = m(Container);

export default Container;
