import React, { ReactNode } from "react";

type SProps = {
  children: ReactNode;
};

const Section = React.forwardRef<HTMLElement, SProps>((props, ref) => {
  return (
    <section ref={ref} className="w-full relative py-8">
      {props.children}
    </section>
  );
});

export default Section;
