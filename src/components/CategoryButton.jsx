import React from "react";

const CategoryButton = ({ category,current }) => {
  return (
    <button className={`border border-black  px-5 py-2 text-nowrap text-sm ${current && " bg-black text-white"}`}>{category}</button>
  );
};

export default CategoryButton;
