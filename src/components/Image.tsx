import React from "react";

type IProps = {
  imgSrc: string;
  className?: string;
  border?: boolean;
  parallax?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Image = ({
  imgSrc,
  className = "",
  border = false,
  parallax = false,
  onClick,
}: IProps) => {
  return (
    <div
      onClick={onClick}
      className={`h-full w-full flex-grow object-contain bg-cover bg-no-repeat ${
        border && "border-8 border-brand"
      } ${parallax && "bg-fixed"} ${className}`}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition: "center center",
      }}
    />
  );
};

export default Image;
