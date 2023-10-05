import { BsFacebook, BsInstagram, BsSnapchat, BsYoutube } from "react-icons/bs";
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer = () => {
  const customerServiceLinks = [
    {
      text: "Shipping & Returns",
      to: "/support/shipping",
    },
    {
      text: "FAQs",
      to: "/support/faqs",
    },
    {
      text: "Materials & Care",
      to: "/support/care",
    },
  ];

  const navigationLinks = [
    {
      text: "Shop",
      to: "/shop",
    },
    {
      text: "Contact us",
      to: "/support/contact",
    },
    {
      text: "About",
      to: "/about",
    },
  ];

  return (
    <footer className="w-full">
      <div className="bg-[#151515] py-20 flex flex-col">
        <Container className="gap-20 flex-col md:flex-row">
          <div className="flex gap-20">
            <code className="flex flex-col gap-3">
              <h1 className="mb-8 text-xl">Navigation</h1>
              {navigationLinks.map((link, key) => {
                return (
                  <Link to={link.to} key={key} className="text-white">
                    {link.text}
                  </Link>
                );
              })}
            </code>
            <code className="flex flex-col gap-3">
              <h1 className="text-xl mb-8">Customer Service</h1>
              {customerServiceLinks.map((link, key) => {
                return (
                  <Link to={link.to} key={key} className="text-white">
                    {link.text}
                  </Link>
                );
              })}
            </code>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h1 className="text-xl">Get in touch</h1>
                <p className="underline">+27 12 123 1234</p>
              </div>
              <div className="flex flex-col gap-4">
                <h1>Follow us</h1>
                <div className="flex gap-2 text-xl">
                  <BsInstagram
                    className="hover:scale-105 duration-300 cursor-pointer"
                    onClick={() =>
                      window.open("https://instagram.com", "_blank")
                    }
                  />
                  <BsFacebook
                    className="hover:scale-105 duration-300 cursor-pointer"
                    onClick={() =>
                      window.open("https://facebook.com", "_blank")
                    }
                  />
                  <BsYoutube
                    className="hover:scale-105 duration-300 cursor-pointer"
                    onClick={() => window.open("https://youtube.com", "_blank")}
                  />
                  <BsSnapchat
                    className="hover:scale-105 duration-300 cursor-pointer"
                    onClick={() =>
                      window.open("https://snapchat.com", "_blank")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full py-4 bg-black flex flex-col md:flex-row justify-between items-center px-20 font-light">
        <p>&copy; 2023 Helentic. All rights reserved</p>
        <p>Made & Designed by Samukelo L.</p>
      </div>
    </footer>
  );
};

export default Footer;
