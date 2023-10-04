import React, { forwardRef } from "react";
import { motion as m } from "framer-motion";

type IProps = {
  imgSrc: string;
  className?: string;
  border?: boolean;
  parallax?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Image = forwardRef<HTMLDivElement, IProps>(
  (
    { imgSrc, className = "", border = false, parallax = false, onClick },
    ref
  ) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={`${className} h-full w-full flex-grow object-contain bg-cover bg-no-repeat ${
          border && "border-8 border-brand"
        } ${parallax && "bg-fixed"} `}
        style={{
          backgroundImage: `url(${imgSrc || "/images/hero-1.jpg"})`,
          backgroundPosition: "center center",
        }}
      />
    );
  }
);

export const MotionImage = m(Image);

export default Image;
