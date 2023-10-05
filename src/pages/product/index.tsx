import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../utils/products";
import Section from "../../components/Section";
import Container from "../../components/Container";
import Image from "../../components/Image";
import IconText from "../../components/IconText";
import { BsAirplane, BsGlobe, BsLock, BsTruck } from "react-icons/bs";
import useChangeThumbnali from "../../utils/hooks/useChangeThumbnali";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const ProductPage = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));
  const { handleThumbnail, currentThumbnail } = useChangeThumbnali(
    product?.thumbnail || ""
  );
  const { increaseCartQuantity } = useShoppingCart();
  const navigate = useNavigate();

  return (
    <Section>
      <Container className="gap-20">
        <div className="flex flex-col gap-8">
          <Image
            className="flex-grow-0 h-[400px] w-[400px]"
            imgSrc={currentThumbnail}
          />
          <div className="flex gap-4">
            {product?.images.map((image, key) => {
              return (
                <Image
                  className={`!flex-grow-0 !w-[65px] !h-[65px] cursor-pointer rounded-sm ease-in duration-300 hover:scale-110 ${
                    image == currentThumbnail &&
                    "scale-110 border-brand border-4"
                  }`}
                  imgSrc={image}
                  key={key}
                  onClick={() => handleThumbnail(image)}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center gap-4 text-2xl">
          <h1 className="font-logo text-3xl">{product?.title}</h1>
          <div className=" flex flex-col">
            <h3>Price</h3>
            <h1>R {product?.price}</h1>
          </div>
          <div className="flex flex-col text-sm gap-4">
            <IconText
              Symbol={BsTruck}
              textStyle="!text-base"
              symbolStyle="!text-3xl"
            >
              Free returns.
            </IconText>
            <IconText
              Symbol={BsGlobe}
              textStyle="!text-base"
              symbolStyle="!text-3xl"
            >
              Free worldwide shipping.
            </IconText>
            <IconText
              Symbol={BsAirplane}
              textStyle="!text-base"
              symbolStyle="!text-3xl"
            >
              3-5 day express shipping.
            </IconText>
            <IconText
              Symbol={BsLock}
              textStyle="!text-base"
              symbolStyle="!text-3xl"
            >
              Secure Checkout.
            </IconText>
          </div>
          <div className="flex flex-col gap-4 ">
            <button
              className="border-2 border-brand w-full py-2 hover:bg-brand rounded hover:text-white hover:scale-105 duration-300"
              onClick={() =>
                increaseCartQuantity(
                  Number(product?.id),
                  product?.thumbnail || "",
                  product?.title || "",
                  Number(product?.price)
                )
              }
            >
              Add to cart
            </button>
            <button
              className="border-0 bg-brand text-white w-full py-2 rounded hover:scale-105 duration-300"
              onClick={() => navigate("/shop/checkout")}
            >
              Buy now
            </button>
          </div>
          <p className="font-light text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, quo
            est corporis at corrupti fugiat obcaecati soluta odit deserunt
            beatae atque praesentium quasi molestias aperiam unde facilis magnam
            deleniti dolor.
            <br />
            <br />
            Return Policy: Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Magni cumque doloribus aut sed provident natus officia
            praesentium libero commodi. Quae provident maiores beatae labore quo
            consectetur dignissimos impedit adipisci temporibus!
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default ProductPage;
