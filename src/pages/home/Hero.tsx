import { MotionContainer } from "../../components/Container";
import { MotionImage } from "../../components/Image";
import Section from "../../components/Section";
import { BsArrowRightCircle } from "react-icons/bs";
import { motion as m } from "framer-motion";
import { fadeIn, pop } from "../../utils/variants";
import { useRef } from "react";
import Reveal from "../../components/animations/Reveal";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  return (
    <Section>
      <MotionContainer
        initial={false}
        viewport={{ amount: "all" }}
        className="flex-col gap-4"
      >
        <m.div
          transition={{
            when: "beforeChildren",
            staggerChildren: 3,
          }}
          viewport={{ amount: "all" }}
          ref={containerRef}
          variants={pop}
          initial="hidden"
          whileInView={"visible"}
          exit="hidden"
          className="text-6xl md:text-[8rem] lg:text-[10rem] lg:ml-auto text-right"
        >
          <h1>
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
        </m.div>
        <m.div
          whileInView={{
            transition: {
              when: "beforeChildren",
              delayChildren: 2,
              staggerChildren: 3,
            },
          }}
          initial={false}
          viewport={{ amount: "all", root: containerRef }}
          className="w-full flex flex-col md:flex-row justify-between gap-4 lg:gap-20 h-[600px] md:h-[550px]"
        >
          <MotionImage imgSrc="/images/hero-2.jpg" border />
          <MotionImage imgSrc="/images/hero-1.jpg" border />
        </m.div>
        <div className="text-6xl flex flex-col md:flex-row justify-between items-center">
          <Reveal width="fit-content" animation={pop}>
            <h2 className="font-logo text-6xl lg:text-[10rem] w-full">Shop</h2>
          </Reveal>
          <div
            className="flex h-full items-center gap-6 cursor-pointer hover:scale-105 duration-300"
            onClick={() => navigate("/shop")}
          >
            <p className="text-2xl font-light">Explore</p>
            <BsArrowRightCircle className="text-[4rem]" />
          </div>
        </div>
      </MotionContainer>
    </Section>
  );
};

export default Hero;
