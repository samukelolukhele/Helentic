import { BsCart3 } from "react-icons/bs";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="scroll bg-black lg:bg-background lg:relative py-4 md:py-8 w-full">
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
        <div className="flex gap-8">
          <BsCart3 className="text-4xl" />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
