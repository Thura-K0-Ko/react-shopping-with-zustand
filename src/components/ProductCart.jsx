import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductCart = ({ id, title, image, price,slug, rating: { rate } }) => {
  const { carts, addToCart } = useCartStore();
  const navigate = useNavigate();
  const addCart = carts.find((cart) => cart.productId === id);
  //   console.log(id, title, image);
  const addCartBtn = (event) => {
    event.stopPropagation();

    const newCart = { id: Date.now(), productId: id, quantity: 1 };
    addToCart(newCart);
    toast.success("Item added to My Cart")
  };

  const linkToDetail = () => {
    navigate(`product-detail/${slug}`);
  };

  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.error("Item is already in My cart")
  };

  return (
    <div
      onClick={linkToDetail}
      className=" flex flex-col gap-5 border border-black p-5 items-start "
    >
      <img src={image} className=" h-32  block" alt="" />
      <h3 className=" mt-auto  line-clamp-2 font-bold ">{title}</h3>
      <Rating rate={rate} />
      <div className="flex justify-between items-end w-full">
        <p> Price ($ {price})</p>

        {addCart ? (
          <button
            onClick={handleAddedBtn}
            className=" border border-black bg-black text-white px-4 py-1"
          >
            Added
          </button>
        ) : (
          <button
            onClick={addCartBtn}
            className=" border border-black px-2 py-1"
          >
        Add Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
