import { forwardRef } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import Image from "./Image";
import { motion as m } from "framer-motion";
import useChangeThumbnali from "../utils/hooks/useChangeThumbnali";

type Props = {
  title: string;
  thumbnail: string;
  images: string[];
  price: number;
  category: string;
  tags: string[];
  addToCart?: React.MouseEventHandler<HTMLButtonElement>;
  link: string;
  categoryLink: string;
};

const ProductComponent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    title,
    thumbnail,
    images,
    price,
    category,

    addToCart,
    link,
    categoryLink,
  } = props;
  const { handleThumbnail, currentThumbnail } = useChangeThumbnali(thumbnail);

  const navigate = useNavigate();

  return (
    <Card
      ref={ref}
      className="!p-0 !pb-8 gap-8 text-center border-4 justify-between"
      border
    >
      <Image
        className="w-full flex-grow-0 !h-fit aspect-square cursor-pointer"
        imgSrc={currentThumbnail}
        onClick={() => navigate(link)}
      />

      <div className="flex items-center justify-center w-full gap-4">
        {images &&
          images.map((image, key) => {
            return (
              <Image
                className={`!flex-grow-0 !w-[65px] !h-[65px] cursor-pointer rounded-sm ease-in duration-300 hover:scale-110 ${
                  image == currentThumbnail && "scale-110 border-brand border-4"
                }`}
                imgSrc={image}
                key={key}
                onClick={() => handleThumbnail(images[key])}
              />
            );
          })}
      </div>
      <div className="flex flex-col gap-4 px-16  w-full">
        <h5
          className="px-4 py-2 bg-brand font-logo cursor-pointer"
          onClick={() => navigate(categoryLink)}
        >
          {category}
        </h5>
        <h4
          className="font-header text-3xl cursor-pointer hover:text-brand duration-300"
          onClick={() => navigate(link)}
        >
          {title}
        </h4>
        <p className="text-xl font-semibold">R {price}</p>
      </div>
      <button
        onClick={addToCart}
        className="py-2 px-8 border-b-2 border-white text-lg font-light duration-300 ease-in-out hover:bg-white hover:text-black"
      >
        <p>Quick add</p>
      </button>
    </Card>
  );
});

const Product = m(ProductComponent);

export default Product;
