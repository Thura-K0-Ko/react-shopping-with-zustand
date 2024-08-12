import React from "react";
import products from "../data/product";
import ProductCart from "./ProductCart";
import Container from "./Container";

const ProductSection = () => {
  return (
    <section>
      <Container>
        <p className=" text-gray-500 font-medium mb-3">Available Product Lists</p>

        <div className=" grid w-full  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCart key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
