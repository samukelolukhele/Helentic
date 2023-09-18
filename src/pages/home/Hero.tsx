import Container from "../../components/Container";
import Image from "../../components/Image";
import Section from "../../components/Section";

const Hero = () => {
  return (
    <Section>
      <Container className="flex-col">
        <div className="text-[8rem] l ml-auto text-right">
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
        <div className="w-full flex justify-between gap-40 h-[600px]">
          <Image imgSrc="/images/hero-2.jpg" border />
          <Image imgSrc="/images/hero-1.jpg" border />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
