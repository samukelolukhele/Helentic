import Section from "../../components/Section";
import Container from "../../components/Container";
import { BsCaretDown, BsFilter } from "react-icons/bs";
import IconText from "../../components/IconText";
import Product from "../../components/Product";
import { products } from "../../utils/products";

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
