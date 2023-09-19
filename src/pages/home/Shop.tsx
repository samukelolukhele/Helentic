import Section from "../../components/Section";
import Container from "../../components/Container";
import { BsCaretDown, BsFilter } from "react-icons/bs";
import IconText from "../../components/IconText";
import Product from "../../components/Product";

const products = [
  {
    title: "Cuban Steel Chain",
    price: 279.89,
    category: "Necklaces",
    thumbnail:
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/f21f0155-3433-46a2-acd0-1dd526df9bf5.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    tags: [""],
    images: [
      "https://ae01.alicdn.com/kf/Sa733bca0336a4593a2a4d6ca6844093f8/1-piece-Size-3-6mm-9mm-Men-s-Necklace-Stainless-Steel-Cuban-Link-Chain-Bracelet-Necklace.jpg_220x220.jpg_.webp",
      "https://ae01.alicdn.com/kf/H048d0a574864415ebb085219260068f7m/1-piece-Size-3-6mm-9mm-Men-s-Necklace-Stainless-Steel-Cuban-Link-Chain-Bracelet-Necklace.jpg_220x220.jpg_.webp",
      "https://ae01.alicdn.com/kf/Sa733bca0336a4593a2a4d6ca6844093f8/1-piece-Size-3-6mm-9mm-Men-s-Necklace-Stainless-Steel-Cuban-Link-Chain-Bracelet-Necklace.jpg_220x220.jpg_.webp",
    ],
  },
  {
    title: "Ice Cross Chain",
    price: 2132.89,
    category: "Necklaces",
    thumbnail:
      "https://ae01.alicdn.com/kf/S191d4053e7fc46189153e1b81eca3998i/Punk-Luxury-Rhinestone-Big-Cross-Pendant-Cuban-Necklace-For-Women-Hip-Hop-Iced-Out-Cuban-Link.jpg_220x220.jpg_.webp",
    tags: [""],
    images: [
      "https://ae01.alicdn.com/kf/Sbc0b172a5e614f08b360d9a137bb8875w/Punk-Luxury-Rhinestone-Big-Cross-Pendant-Cuban-Necklace-For-Women-Hip-Hop-Iced-Out-Cuban-Link.jpg_220x220.jpg_.webp",
      "https://ae01.alicdn.com/kf/Sf1766fbb0d394ffcbbacdef0aef18b956/Punk-Luxury-Rhinestone-Big-Cross-Pendant-Cuban-Necklace-For-Women-Hip-Hop-Iced-Out-Cuban-Link.jpg_220x220.jpg_.webp",
      "https://ae01.alicdn.com/kf/S095329cd154c4940b9c55cc462af8c620/Punk-Luxury-Rhinestone-Big-Cross-Pendant-Cuban-Necklace-For-Women-Hip-Hop-Iced-Out-Cuban-Link.jpg_220x220.jpg_.webp",
    ],
  },
  {
    title: "Byzantine Bracelet",
    price: 642.13,
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
          <div className="grid grid-flow-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
