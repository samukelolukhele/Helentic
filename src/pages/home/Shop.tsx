import Section from "../../components/Section";
import Container from "../../components/Container";
import { BsCaretDown, BsFilter } from "react-icons/bs";
import IconText from "../../components/IconText";
import Product from "../../components/Product";

const products = [
  {
    title: "Cuban Steel Chain",
    price: 279,
    category: "Necklaces",
    thumbnail:
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/f21f0155-3433-46a2-acd0-1dd526df9bf5.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    tags: [""],
    images: [
      "https://ae01.alicdn.com/kf/Sa733bca0336a4593a2a4d6ca6844093f8/1-piece-Size-3-6mm-9mm-Men-s-Necklace-Stainless-Steel-Cuban-Link-Chain-Bracelet-Necklace.jpg_220x220.jpg_.webp",
      "https://ae01.alicdn.com/kf/H048d0a574864415ebb085219260068f7m/1-piece-Size-3-6mm-9mm-Men-s-Necklace-Stainless-Steel-Cuban-Link-Chain-Bracelet-Necklace.jpg_220x220.jpg_.webp",
    ],
  },
  {
    title: "Gold Cuban Bracelet",
    price: 2132,
    category: "Necklaces",
    thumbnail:
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/203202/291139512497.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    tags: [""],
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/203202/261474713179.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/203202/721402042323.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
  },
  {
    title: "Byzantine Bracelet",
    price: 642,
    category: "Bracelets",
    thumbnail:
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/1622775416422.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    tags: [""],
    images: [
      "https://ae01.alicdn.com/kf/S828719785c3146bcb6de5e41bcbe3065C/Vnox-Stylish-Byzantine-Chain-Bracelet-for-Men-Women-Boys-Waterproof-Stainless-Steel-Link-Wristband-4-5.jpg_220x220.jpg_.webp",
      "https://ae01.alicdn.com/kf/S2060922d10124af8b70de0579755b240i/Vnox-Stylish-Byzantine-Chain-Bracelet-for-Men-Women-Boys-Waterproof-Stainless-Steel-Link-Wristband-4-5.jpg_220x220.jpg_.webp",
      "https://ae01.alicdn.com/kf/S01dac046ae6a4599936df6ec1d82669dm/Vnox-Stylish-Byzantine-Chain-Bracelet-for-Men-Women-Boys-Waterproof-Stainless-Steel-Link-Wristband-4-5.jpg_220x220.jpg_.webp",
    ],
  },
  {
    title: "Rose Gold Cuban Chain",
    price: 4119,
    category: "Necklace",
    thumbnail:
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/15569856/550169610426.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    tags: [""],
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/15569856/3189966970561.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/15569856/1299335372240.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/15569856/5100503356080.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
  },
  {
    title: "Gold Bead Necklace",
    price: 542,
    category: "Necklace",
    thumbnail:
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/19805839-1523-451b-b63a-cd9641ccc09e.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    tags: [""],
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/999e2dc8-e816-4db4-ba4b-98eea79b8619.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/4a9248fb-c579-4fc4-8ace-c128db901d5e.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/quick/product/ba8939a2-57f1-446a-acb0-8b3f1e53a241.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
  },
  {
    title: "CZ Cross Pendant",
    price: 311,
    category: "Necklace",
    thumbnail:
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/b877aa92-1e3a-422a-91f3-0744a62bba91.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    tags: [""],
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/5aa2dc78-6cb9-4164-8a92-7578788feb84.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
  },
];

const Shop = () => {
  return (
    <Section>
      <Container>
        <div className="w-full flex flex-col justify-between items-center gap-12">
          <div className="w-full flex justify-between items-center gap-4">
            <IconText Symbol={BsFilter}>Filter</IconText>
            <IconText Symbol={BsCaretDown} className="flex-row-reverse">
              Featured
            </IconText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => {
              return (
                <Product
                  title={product.title}
                  category={product.category}
                  thumbnail={product.thumbnail}
                  tags={product.tags}
                  images={product.images}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Shop;
