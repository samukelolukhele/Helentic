import { products } from "../../utils/products";
import Product from "../../components/Product";
import Section from "../../components/Section";
import Container from "../../components/Container";

const Shop = () => {
  return (
    <>
      <Section>
        <Container className="flex-col gap-10">
          {/* <ShopFilters /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, key) => {
              const { thumbnail, images, title, price, category, tags } =
                product;
              return (
                <Product
                  link={`/shop/${product.id}`}
                  categoryLink={`/shop/category/${product.category}`}
                  thumbnail={thumbnail}
                  images={images}
                  title={title}
                  price={price}
                  category={category}
                  tags={tags}
                  key={key}
                />
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Shop;
