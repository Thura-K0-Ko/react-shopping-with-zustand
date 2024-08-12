import React from "react";
import categories from "../data/categories";
import CategoryButton from "./CategoryButton";
import Container from "./Container";

const CategorySection = () => {
  return (
    <section>
      <Container>
        <p className=" text-gray-500 font-medium mb-3">Product Categories</p>
        <div className=" flex gap-3 overflow-x-scroll hidden-scrollBar ">
          {" "}
          <CategoryButton category={"All"} current={true} />
          {categories.map((category) => (
            <CategoryButton key={category} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
