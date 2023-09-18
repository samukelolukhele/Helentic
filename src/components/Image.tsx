import React from "react";

type IProps = {
  imgSrc: string;
  className?: string;
  border?: boolean;
  parallax?: boolean;
};

const Image = ({
  imgSrc,
  className = "",
  border = false,
  parallax = false,
}: IProps) => {
  return (
    <div
      className={`h-full w-full flex-grow object-contain bg-cover bg-no-repeat ${
        border && "border-4 border-brand"
      } ${parallax && "bg-fixed"} ${className}`}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition: "center center",
      }}
    />
  );
};

export default Image;
