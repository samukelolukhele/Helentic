import Card from "./Card";
import Image from "./Image";

type PProps = {
  title: string;
  thumbnail: string;
  images: string[];
  price: number;
  category: string;
  tags: string[];
};

const Product = (props: PProps) => {
  const { title, thumbnail, images, price, category, tags } = props;

  return (
    <Card
      className="!p-0 !pb-8 gap-8 text-center border-4 justify-between"
      border
    >
      <Image
        className="w-full flex-grow-0 !h-fit aspect-square"
        imgSrc={thumbnail}
      />

      <div className="flex items-center justify-center w-full gap-4">
        {images &&
          images.map((image, key) => {
            return (
              <Image
                className="!flex-grow-0 !w-[45px] !h-[45px] cursor-pointer"
                imgSrc={image}
                key={key}
              />
            );
          })}
      </div>
      <div className="flex flex-col gap-4 px-16  w-full">
        <h5 className="px-4 py-2 bg-brand font-logo">{category}</h5>
        <h4 className="font-header text-3xl">{title}</h4>
        <p className="text-xl font-semibold">R {price}</p>
      </div>
    </Card>
  );
};

export default Product;
