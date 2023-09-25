import { BsCart3, BsX, BsXCircleFill } from "react-icons/bs";
import Container from "./Container";
import Image from "./Image";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { useState } from "react";
import Cart from "./Cart";

type CartProps = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="relative w-full flex justify-end gap-8 ">
          <BsCart3
            className="text-4xl cursor-pointer hover:scale-110 duration-300"
            onClick={() => setIsOpen(true)}
          />
          {isOpen && <Cart setIsOpen={setIsOpen} />}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
