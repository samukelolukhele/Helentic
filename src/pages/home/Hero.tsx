import Container from "../../components/Container";
import Image from "../../components/Image";
import Section from "../../components/Section";
import { BsArrowRightCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <Section>
      <Container className="flex-col gap-4">
        <div className="text-6xl md:text-[8rem] lg:text-[10rem] lg:ml-auto text-right">
          <h1 className="">
            Elevate Your <br />
            <span>
              Game<span className="text-brand">.</span>
            </span>
            <span className="font-header text-4xl h-fit inline-block">
              COLL.
              <br />
              2023
            </span>
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between gap-4 lg:gap-20 h-[600px] md:h-[550px]">
          <Image imgSrc="/images/hero-2.jpg" border />
          <Image imgSrc="/images/hero-1.jpg" border />
        </div>
        <div className="text-6xl flex flex-col md:flex-row justify-between items-center">
          <h2 className="font-logo text-6xl lg:text-[10rem] w-full">Shop</h2>
          <div className="flex h-full items-center gap-6">
            <p className="text-2xl font-light">Explore</p>
            <BsArrowRightCircle className="text-[4rem]" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
