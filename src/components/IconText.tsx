import React, { ReactNode } from "react";
import { IconType } from "react-icons";

type ITProps = {
  children: ReactNode;
  Symbol: IconType;
  className?: string;
};

const IconText = ({ Symbol, children, className = "" }: ITProps) => {
  return (
    <div className={`flex h-full items-center gap-4 ${className}`}>
      <Symbol className="text-4xl" />
      <p className="text-xl font-light">{children}</p>
    </div>
  );
};

export default IconText;
