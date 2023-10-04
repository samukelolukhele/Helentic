import Container from "../../components/Container";
import Section from "../../components/Section";
import ShopFilters from "../../components/ShopFilters";
import { products } from "../../utils/products";
import Product from "../../components/Product";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <>
      <Section>
        <Container className="flex-col gap-10">
          <div className="text-5xl font-logo">{category}</div>
          <ShopFilters />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products
              .filter((product) => product.category == category)
              .map((product) => {
                const { thumbnail, images, title, price, category, tags } =
                  product;
                return (
                  <Product
                    link={`/shop/${product.id}`}
                    categoryLink={`/shop/categories/${product.category}`}
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

export default CategoryPage;
