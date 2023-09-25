import { BsXCircleFill } from "react-icons/bs";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import Image from "./Image";
import { ReactNode } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

type CartItemsProps = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
};

type Props = {
  cartItems: CartItemsProps[];
  removeFromCart: (
    id: number
  ) => React.MouseEventHandler<HTMLButtonElement> | undefined;
  increaseCartQuantity: (
    id: number,
    title: string,
    thumbnail: string,
    price: number
  ) => React.MouseEventHandler<HTMLButtonElement> | undefined;
  decreaseCartQuantity: (
    id: number
  ) => React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const CartItem = (): ReactNode => {
  const {
    cartItems,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();

  return cartItems.map((item: CartItemsProps, key: number) => {
    return (
      <div className="relative flex gap-4" key={key}>
        <button
          className="absolute right-0 top-0 duration-300 hover:scale-110 text-xl"
          onClick={() => removeFromCart(item.id)}
        >
          <BsXCircleFill />
        </button>
        <Image
          imgSrc={item.thumbnail}
          className="!w-[150px] !h-[150px] !flex-grow-0 rounded"
        />
        <div className="flex flex-col h-full items-center justify-center gap-4">
          <p className="font-header text-lg w-3/4 mr-auto">{item.title}</p>
          <div className="flex w-full text-3xl items-center justify-start gap-4">
            <CiSquareMinus
              className="cursor-pointer hover:scale-110 duration-300"
              onClick={() => decreaseCartQuantity(item.id)}
            />
            <p className=" font-light text-xs">{item.quantity}</p>
            <CiSquarePlus
              className="cursor-pointer hover:scale-110 duration-300"
              onClick={() =>
                increaseCartQuantity(
                  item.id,
                  item.thumbnail,
                  item.title,
                  item.price
                )
              }
            />
          </div>
          <p className="w-full font-light">R {item.price}</p>
        </div>
      </div>
    );
  });
};

export default CartItem;
