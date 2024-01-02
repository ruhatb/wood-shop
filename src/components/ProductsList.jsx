import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className="mt-10 grid gap-y-8 ">
      {products.map((urun) => {
        const { title, price, image, company } = urun.attributes;
        const priceTag = formatPrice(price);
        return (
          <Link
            key={products.id}
            to={`/products/${urun.id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300 "
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h4 className="capitalize text-md text-neutral-content mr-5">
                {company}
              </h4>
              <p className="font-medium text-lg ml-auto">{priceTag}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
