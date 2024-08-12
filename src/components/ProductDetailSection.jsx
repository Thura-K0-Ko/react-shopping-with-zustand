import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/product";
import Rating from "./Rating";

const ProductDetailSection = () => {
  const { productId } = useParams();
  console.log(productId);
  const currentProduct = products.find((product) => product.id == productId);
  return (
    <div className=" grid grid-cols-3 border  border-black p-5">
      <div className=" col-span-1">
        <img
          src={currentProduct.image}
          className=" w-3/4 block mx-auto"
          alt=""
        />
      </div>
      <div className=" col-span-2 flex flex-col gap-5 items-start ">
        <h1 className=" font-bold text-2xl">{currentProduct.title}</h1>
        <p className=" bg-gray-300 px-5 py-1 ">{currentProduct.category}</p>
        <p>{currentProduct.description}</p>

        <Rating rate={currentProduct.rating.rate} />
        <div className=" w-full flex justify-between items-center">
          <p>Price ( $ {currentProduct.price} )</p>
          <button className=" border border-black px-2 py-1 text-sm">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
