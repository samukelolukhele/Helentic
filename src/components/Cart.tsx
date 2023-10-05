import React from "react";
import { BsX } from "react-icons/bs";
import CartItem from "./CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ setIsOpen }: Props) => {
  const { cartItems, cartTotal } = useShoppingCart();

  return (
    <div className="absolute p-4 right-0 min-w-[330px] bg-black flex flex-col items-center gap-6 h-[450px] overflow-y-scroll">
      <div className="flex w-full relative">
        <p className="text-center w-full font-logo">Your Cart</p>
        <BsX
          className="text-3xl absolute top-0 right-0 hover:bg-gray-500 duration-300 rounded-full"
          onClick={() => setIsOpen(false)}
        />
      </div>
      {cartItems.length != 0 && (
        <div className="flex flex-col gap-4">
          <p className="py-2 border-t-[1px] border-white font-logo">Products</p>
          <CartItem />
          <div className="w-full border-t-[1px] border-white py-2 flex justify-between gap-4 text-lg">
            <p className="font-logo">Subtotal</p>
            <p className="font-bold">R {cartTotal}</p>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <button className="w-full bg-none border-white border-2 rounded py-4 hover:bg-white hover:text-black font-header text-lg">
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
