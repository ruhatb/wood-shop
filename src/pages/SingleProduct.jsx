import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);

  return { product: response.data.data };
};
const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/products">Products </Link>
          </li>
        </ul>
      </div>
      {/* Products */}
      <div className="mt-6 grid lg:grid-cols-2 lg:gap-x-16">
        {/*Images*/}
        <img
          src={image}
          alt={title}
          className="w-90 h-90 object-cover rounded-lg lg:w-full"
        />
        {/*Products Info */}
        <div>
          <h1 className="capitalize text-3xl font bold">{title}</h1>
          <h3 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h3>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
