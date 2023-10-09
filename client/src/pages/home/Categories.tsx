import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import Image from "../../components/Image";
import Section from "../../components/Section";
import Reveal from "../../components/animations/Reveal";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <Container className="flex-col gap-8">
        <div className="flex justify-between items-center">
          <Reveal>
            <h2 className="font-logo text-6xl lg:text-[10rem] w-full">
              Categories
            </h2>
          </Reveal>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div
            className="flex flex-col flex-grow gap-4 cursor-pointer hover:scale-105 duration-300"
            onClick={() => navigate(`/shop/categories/Necklaces`)}
          >
            <Image
              className="!h-[350px]"
              border
              imgSrc="https://cc-west-usa.oss-accelerate.aliyuncs.com/f21f0155-3433-46a2-acd0-1dd526df9bf5.jpg?x-oss-process=image/resize,m_pad,w_400,h_400"
            />
            <h1 className="font-logo text-4xl">Necklaces</h1>
          </div>
          <div
            className="flex flex-col flex-grow gap-4 cursor-pointer hover:scale-105 duration-300"
            onClick={() => navigate(`/shop/categories/Bracelets`)}
          >
            <Image
              className="!h-[350px]"
              border
              imgSrc="https://cc-west-usa.oss-accelerate.aliyuncs.com/1622185845785.jpg?x-oss-process=image/resize,m_pad,w_400,h_400"
            />
            <h1 className="font-logo text-4xl">Bracelets</h1>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Categories;
