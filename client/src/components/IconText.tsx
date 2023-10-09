import { ReactNode } from "react";
import { IconType } from "react-icons";

type ITProps = {
  children: ReactNode;
  Symbol: IconType;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  symbolStyle?: string;
  textStyle?: string;
};

const IconText = ({
  Symbol,
  children,
  className = "",
  onClick,
  symbolStyle,
  textStyle,
}: ITProps) => {
  return (
    <div
      className={`flex h-full items-center gap-4 ${className}`}
      onClick={onClick}
    >
      <Symbol className={`${symbolStyle} text-4xl `} />
      <p className={`${textStyle} text-xl font-light `}>{children}</p>
    </div>
  );
};

export default IconText;
