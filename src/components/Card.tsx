import React, { ReactNode } from "react";

type CProps = {
  className?: string;
  border?: boolean;
  children: ReactNode;
};

const Card = ({ className, border = false, children }: CProps) => {
  return (
    <div
      className={`flex flex-col gap-4 p-10 items-center justify-center ${
        border && "border-8 border-brand"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
