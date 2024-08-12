import React from "react";

const Cart = ({ id, product, quantity, cost }) => {
  return (
    <div className=" grid grid-cols-6 gap-2 border border-black p-3 ">
      <div className=" col-span-1">
        <img src={product.image} className=" h-16" alt="" />
      </div>
      <div className=" col-span-3">
        <p>{product.title}</p>
        <p className=" text-gray-500">Price ( $ {product.price})</p>
      </div>
      <div className=" col-span-1">
        <p className=" mb-2">Quantity</p>
        <div className=" flex  gap-2">
            <button className=" bg-black px-2 text-white">-</button>
            {quantity}
            <button className=" bg-black px-2 text-white">-</button>
        </div>
      </div>
      <div className=" col-span-1 ">
        <p className=" text-end font-bold text-xl mt-3 "> $ {cost}</p>
      </div>
    </div>
  );
};

export default Cart;
