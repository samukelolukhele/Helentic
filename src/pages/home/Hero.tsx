import Container from "../../components/Container";
import Image from "../../components/Image";
import Section from "../../components/Section";
import { BsArrowRightCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <Section>
      <Container className="flex-col gap-4">
        <div className="text-[10rem] l ml-auto text-right">
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
        <div className="w-full flex justify-between gap-20 h-[550px]">
          <Image imgSrc="/images/hero-2.jpg" border />
          <Image imgSrc="/images/hero-1.jpg" border />
        </div>
        <div className="text-6xl flex justify-between items-center">
          <h2 className="font-logo text-[10rem] w-full">Shop</h2>
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
