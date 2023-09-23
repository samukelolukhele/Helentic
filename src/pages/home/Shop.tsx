import Section from "../../components/Section";
import Container from "../../components/Container";
import { BsCaretDown, BsFilter } from "react-icons/bs";
import IconText from "../../components/IconText";
import Product from "../../components/Product";
import { products } from "../../utils/products";
import { motion as m } from "framer-motion";
import { fadeIn, parentStagger } from "../../utils/variants";

const Shop = () => {
  //! This function would not be used in a real application it is made for demo purposes only
  function addToCart(
    productId: number,
    thumbnail: string,
    title: string,
    price: number
  ) {
    let products = [];
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products") || "");
    }
    products.push({
      productId: productId + 1,
      thumbnail: thumbnail,
      title: title,
      price: price,
    });
    localStorage.setItem("products", JSON.stringify(products));
  }

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
          <m.div
            variants={parentStagger}
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {products.map((product, key) => {
              return (
                <Product
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  title={product.title}
                  category={product.category}
                  thumbnail={product.thumbnail}
                  tags={product.tags}
                  images={product.images}
                  price={product.price}
                  addToCart={() =>
                    addToCart(
                      key,
                      product.thumbnail,
                      product.title,
                      product.price
                    )
                  }
                  key={key}
                />
              );
            })}
          </m.div>
        </div>
      </Container>
    </Section>
  );
};

export default Shop;
