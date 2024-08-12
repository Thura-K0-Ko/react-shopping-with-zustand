import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import carts from "../data/cart";

const ProductCart = ({ id, title, image, price, rating: { rate } }) => {
  const addCart = carts.find((cart) => cart.id == id);
  //   console.log(id, title, image);
  return (
    <Link
      to={`product-detail/${id}`}
      className=" flex flex-col gap-5 border border-black p-5 items-start "
    >
      <img src={image} className=" h-32  block" alt="" />
      <h3 className=" mt-auto  line-clamp-2 font-bold ">{title}</h3>
      <Rating rate={rate} />
      <div className="flex justify-between items-end w-full">
        <p> Price ($ {price})</p>

        {addCart ? (
          <button className=" border border-black bg-black text-white px-2 py-1">Add Cart</button>
        ) : (
          <button className=" border border-black px-2 py-1">Add Cart</button>
        )}
      </div>
    </Link>
  );
};

export default ProductCart;
