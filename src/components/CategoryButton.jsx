import React, { useState } from "react";
import useCategoryStore from "../store/useCategoryStore";
import useProductStore from "../store/useProductStore";

const CategoryButton = ({ category: { id, name, isActive } }) => {
  const { activeCategory } = useCategoryStore();
  const { showActiveProduct, products } = useProductStore();


 

  const handleClick = () => {
    activeCategory(id);

    // showActiveProduct(name);
  };
  return (
    <button
      onClick={handleClick}
      className={`border border-black  px-5 py-2 text-nowrap text-sm ${
        isActive && " bg-black text-white"
      }`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
