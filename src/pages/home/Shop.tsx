import Section from "../../components/Section";
import Container from "../../components/Container";
import Product from "../../components/Product";
import { products } from "../../utils/products";
import { motion as m } from "framer-motion";
import { fadeIn, parentStagger } from "../../utils/variants";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Shop = () => {
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <Section>
      <Container>
        <div className="w-full flex flex-col justify-between items-center gap-12">
          <m.div
            variants={parentStagger}
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {products.map((product, key) => {
              return (
                <Product
                  link={`/shop/${product.id}`}
                  categoryLink={`/shop/categories/${product.category}`}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  title={product.title}
                  category={product.category}
                  thumbnail={product.thumbnail}
                  tags={product.tags}
                  images={product.images}
                  price={product.price}
                  addToCart={() => {
                    increaseCartQuantity(
                      product.id,
                      product.thumbnail,
                      product.title,
                      product.price
                    );
                    window.dispatchEvent(new Event("localstorage"));
                  }}
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
