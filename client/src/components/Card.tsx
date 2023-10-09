import { ReactNode, forwardRef } from "react";

type Props = {
  className?: string;
  border?: boolean;
  children: ReactNode;
};

const Card = forwardRef<HTMLDivElement, Props>(
  ({ className, border = false, children }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col gap-4 p-10 items-center justify-center ${
          border && "border-8 border-brand"
        } ${className}`}
      >
        {children}
      </div>
    );
  }
);

export default Card;
