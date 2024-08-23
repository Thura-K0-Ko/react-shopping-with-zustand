import React from "react";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import toast from "react-hot-toast";

const ProductDetailSection = () => {
  const { productSlug } = useParams();
  const { products } = useProductStore();
  const { carts, addToCart } = useCartStore();
  const currentProduct = products.find((product) => product.slug == productSlug);

  const added = carts.find((el) => el.productId === currentProduct.id);

  const addCartBtn = () => {
    const newCart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };
    addToCart(newCart);
    toast.success("Item added to My Cart");
  };

  const handleAddedBtn = () => {
    toast.error("Item is already in My cart");
  };
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 border  border-black p-2 sm:p-5 ">
      <div className=" col-span-1 ">
        <img
          src={currentProduct.image}
          className="w-2/4 sm:w-2/4 sm:block sm:mx-auto mb-3 sm:mb-0"
          alt=""
        />
      </div>
      <div className=" col-span-1 flex flex-col gap-3 sm:gap-5 items-start ">
        <h1 className=" font-bold text-2xl">{currentProduct.title}</h1>
        <p className=" bg-gray-300 px-5 py-1 ">{currentProduct.category}</p>
        <p>{currentProduct.description}</p>

        <Rating rate={currentProduct.rating.rate} />
        <div className=" w-full flex justify-between items-center">
          <p>Price ( $ {currentProduct.price} )</p>

          {added ? (
            <button
              onClick={handleAddedBtn}
              className=" border border-black bg-black text-white px-4 py-1 text-sm"
            >
              Added
            </button>
          ) : (
            <button
              onClick={addCartBtn}
              className=" border border-black px-2 py-1 text-sm"
            >
              Add Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
