import React, { ReactNode } from "react";

type CProps = {
  children: ReactNode;
  flexType?: "between" | "center" | null;
  containerType?: "nav" | "base";
  className?: string;
};

const Container = ({
  children,
  flexType = null,
  className,
  containerType = "base",
}: CProps) => {
  const flexTypes = {
    center: "items-center justify-center",
    between: "items-center justify-between",
  };

  return (
    <div
      className={`${
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
};

export default Container;
