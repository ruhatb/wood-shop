import { Filters, PageonContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";
export const loader = async ({ Request }) => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <div>
      <Filters />
      <ProductsContainer />
      <PageonContainer />
    </div>
  );
};

export default Products;
