import React, { ReactNode } from "react";

type SProps = {
  children: ReactNode;
};

const Section = ({ children }: SProps) => {
  return <section className="w-full relative py-8">{children}</section>;
};

export default Section;
