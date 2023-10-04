import { BsFilter, BsCaretDown } from "react-icons/bs";
import IconText from "./IconText";

type Props = {
  filterClick?: React.MouseEventHandler<HTMLDivElement>;
  sortClick?: React.MouseEventHandler<HTMLDivElement>;
};

const ShopFilters = ({ filterClick, sortClick }: Props) => {
  return (
    <div className="w-full flex justify-between items-center gap-4">
      <IconText Symbol={BsFilter} onClick={filterClick}>
        Filter
      </IconText>
      <IconText
        Symbol={BsCaretDown}
        onClick={sortClick}
        className="flex-row-reverse"
      >
        Featured
      </IconText>
    </div>
  );
};

export default ShopFilters;
