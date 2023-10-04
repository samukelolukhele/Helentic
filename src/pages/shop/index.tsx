import React from "react";
import ShopFilters from "../../components/ShopFilters";
import { products } from "../../utils/products";
import Product from "../../components/Product";
import Section from "../../components/Section";
import Container from "../../components/Container";

const Shop = () => {
  return (
    <>
      <Section>
        <Container className="flex-col gap-10">
          <ShopFilters />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => {
              const { thumbnail, images, title, price, category, tags } =
                product;
              return (
                <Product
                  thumbnail={thumbnail}
                  images={images}
                  title={title}
                  price={price}
                  category={category}
                  tags={tags}
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
