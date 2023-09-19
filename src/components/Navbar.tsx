import { BsCart3 } from "react-icons/bs";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="relative bg-black md:bg-background md:fixed py-4 md:py-8 w-full">
      <Container
        flexType="between"
        className="container md:nav-container relative md:fixed"
      >
        <div className="logo">
          <img
            src="/Logo.svg"
            alt="logo"
            className="w-[170px] md:w-[300px] object-contain h-fit m-auto text-sm md:rot90"
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
