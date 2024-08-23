import React from "react";
import Cart from "./Cart";
import Container from "./Container";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import emptyCartImg from "../assets/empty-cart.svg";
import { Link } from "react-router-dom";

const CartSection = () => {
  const { carts } = useCartStore();

  const { products } = useProductStore();
  const total = carts.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find((el) => el.id === cv.productId).price;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;
  const netTotal = total + tax;

  return (
    <div className="flex flex-col gap-5 h-full">
      {/* =============emptyCartImg and cartItem============ */}
      {carts.length === 0 ? (
        <img
          src={emptyCartImg}
          className=" w-[200px] mx-auto mt-10"
          alt="empty"
        />
      ) : (
        <div className="flex flex-col gap-3 flex-grow-3">
          {carts.map((cart) => (
            <Cart key={cart.id} {...cart} />
          ))}
        </div>
      )}
      {/* ===============total and orderNow Btn============= */}
      <div className=" absolute bottom-0 left-0 w-full bg-white mt-auto">
        <Container className="px-5 ">
          <div className=" border-t border-black flex justify-end gap-10 py-3">
            <div className=" text-right">
              <p className=" text-gray-500">Total</p>
              <p className=" font-bold">{total.toFixed(2)}</p>
            </div>
            <div className=" text-right">
              <p className=" text-gray-500">Tax(10%)</p>
              <p className=" font-bold">{tax.toFixed(2)}</p>
            </div>
            <div className=" text-right">
              <p className=" text-gray-500">Net Total</p>
              <p className=" text-2xl font-bold">{netTotal.toFixed(2)}</p>
            </div>
          </div>
          <div className=" text-end mb-5">
            <Link className=" border border-black px-4 py-2 ">Order Now</Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CartSection;
