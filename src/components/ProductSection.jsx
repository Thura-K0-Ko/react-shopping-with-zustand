import React from "react";

import ProductCart from "./ProductCart";
import Container from "./Container";
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/useCategoryStore";

const ProductSection = () => {
  const { products } = useProductStore();
  const { categories } = useCategoryStore();
  const currentCategory = categories.find((el) => el.isActive === true);
  console.log(currentCategory);
  return (
    <section>
      <Container>
        <p className=" text-gray-500 font-medium mb-3">
          Available Product Lists
        </p>

        <div className=" grid w-full  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.filter(el=>el.category===currentCategory.name || currentCategory.name==="All").map((product) => (
            <ProductCart key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
