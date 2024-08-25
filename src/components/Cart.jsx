import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Cart = ({ id, productId, quantity }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();
  const product = products.find((el) => el.id === productId);
  const cost = product.price * quantity;

  const handleIncreaseBtn = () => {
    increaseQuantity(id);
  };
  const handleDecreaseBtn = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success("Item remove successful");
         
        }
      });
      
    }
  };
  return (
    <div className=" grid grid-cols-5 sm:grid-cols-6 gap-2 sm:gap-2 border border-black p-3  ">
      <div className=" col-span-1">
        <img src={product.image} className=" h-16" alt="" />
      </div>
      <div className=" col-span-2 sm:col-span-3">
        <p>{product.title}</p>
        <p className=" text-gray-500">Price ( $ {product.price})</p>
      </div>
      <div className=" col-span-1">
        <p className=" mb-2  text-center">Quantity</p>
        <div className=" flex flex-col sm:flex-row gap-1 sm:justify-center  items-center text-center sm:gap-2">
          <button
            onClick={handleDecreaseBtn}
            className=" bg-black px-2.5 text-white"
          >
            -
          </button>
          {quantity}
          <button
            onClick={handleIncreaseBtn}
            className=" bg-black px-2 text-white"
          >
            +
          </button>
        </div>
      </div>
      <div className=" col-span-1 ">
        <p className=" text-end font-bold text-xl  mt-10 sm:mt-3 ">
          {" "}
          $ {cost.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
