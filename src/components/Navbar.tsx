import { BsCart3 } from "react-icons/bs";
import Container from "./Container";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useShoppingCart();

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
            className="text-4xl cursor-pointer hover:scale-110 duration-300 relative"
            onClick={() => setIsOpen(true)}
          />
          {cartItems.length > 0 && (
            <div className="absolute flex items-center justify-center bottom-[-15px] right-[-15px] bg-brand w-[30px] h-[30px] text-[0.75rem] rounded-full">
              <p>{cartItems.length}</p>
            </div>
          )}
          {isOpen && <Cart setIsOpen={setIsOpen} />}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
