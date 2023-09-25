import { BsCart3, BsXCircleFill } from "react-icons/bs";
import Container from "./Container";
import { useEffect, useState } from "react";
import Image from "./Image";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

type CartProps = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
};

const Navbar = () => {
  // const [cartItems, setCartItems] = useState(
  //   JSON.parse(localStorage.getItem("cart_items") || "") || []
  // );

  // useEffect(() => {
  //   window.addEventListener("localstorage", async () => {
  //     return await setCartItems(
  //       JSON.parse(localStorage.getItem("cart_items") || "")
  //     );
  //   });

  //   return () => window.removeEventListener("localstorage", () => {});
  // }, []);

  const {
    cartItems,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();

  return (
    <nav className="scroll z-50 bg-black lg:bg-background lg:relative py-4 md:py-8 w-full">
      <Container
        flexType="between"
        className="container lg:nav-container relative lg:fixed"
      >
        <div className="logo">
          <img
            src="/Logo.svg"
            alt="logo"
            className="w-[170px] md:w-[300px] object-contain h-fit m-auto text-sm lg:rot90"
          />
        </div>
        <div className="relative w-full flex gap-8 ">
          <BsCart3 className="text-4xl cursor-pointer hover:scale-110 duration-300" />
          <div className="absolute p-4 left-0 bg-black flex flex-col items-center gap-6 h-[450px] overflow-y-scroll">
            <p className="text-center w-full font-logo">Your Cart</p>
            {cartItems.length != 0 && (
              <div className="flex flex-col gap-4">
                <p className="py-2 border-t-[1px] border-white font-logo">
                  Products
                </p>
                {cartItems.map((item: CartProps, key: number) => {
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
                        <p className="font-header text-lg w-3/4 mr-auto">
                          {item.title}
                        </p>
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
                })}
                <div className="w-full border-t-[1px] border-white py-2 flex justify-between gap-4 text-lg">
                  <p className="font-logo">Subtotal</p>
                  <p className="font-bold">
                    R{" "}
                    {new Intl.NumberFormat().format(
                      cartItems.reduce((total, cartItem) => {
                        const item = cartItems.find(
                          (i) => i.id === cartItem.id
                        );
                        return total + (item?.price || 0) * cartItem.quantity;
                      }, 0)
                    )}
                  </p>
                </div>
              </div>
            )}
            {cartItems.length > 0 && (
              <button className="w-full bg-none border-white border-2 rounded py-4 hover:bg-white hover:text-black font-header text-lg">
                Checkout
              </button>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
