import React, { ReactNode } from "react";

type SProps = {
  children: ReactNode;
  className?: string;
};

const Section = React.forwardRef<HTMLElement, SProps>((props, ref) => {
  return (
    <section
      ref={ref}
      className={`w-full min-h-screen relative py-8 ${props.className}`}
    >
      {props.children}
    </section>
  );
});

export default Section;
