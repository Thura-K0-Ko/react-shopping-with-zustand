import React from "react";

import CategoryButton from "./CategoryButton";
import Container from "./Container";
import useCategoryStore from "../store/useCategoryStore";

const CategorySection = () => {
    const {categories}= useCategoryStore()

  return (
    <section>
      <Container>
        <p className=" text-gray-500 font-medium mb-3">Product Categories</p>
        <div className=" flex gap-3 overflow-x-scroll hidden-scrollBar ">
          {" "}
          
          {categories.map((category) => (
            <CategoryButton key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
