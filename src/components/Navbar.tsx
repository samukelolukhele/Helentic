import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="fixed py-8 w-full">
      <div className="flex justify-between items-center nav-container">
        <div className="logo">
          <img
            src="/Logo.svg"
            alt="logo"
            className="w-[300px] object-contain h-fit m-auto text-sm rot90"
          />
        </div>
        <div className="flex gap-8">
          <BsCart3 className="text-4xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
