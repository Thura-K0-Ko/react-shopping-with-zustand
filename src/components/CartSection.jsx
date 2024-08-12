import React from "react";
import carts from "../data/cart";
import Cart from "./Cart";
import Container from "./Container";

const CartSection = () => {
  return (
    <div className="  ">
      <div className="flex flex-col gap-3">
        {carts.map((cart) => (
          <Cart key={cart.id} {...cart} />
        ))}
      </div>
      <div className="  w-full absolute bottom-14 right-0">
        <Container>
          <div className="border-t flex justify-end gap-10  border-gray-500 pt-3 ">
            <div className="">
              <p>Total($)</p>
              <p>66.9</p>
            </div>
            <div className="">
              <p>Tax(10%)</p>
              <p>6.9</p>
            </div>
            <div className=" font-bold">
              <p>Net Total($)</p>
              <p>73.8</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CartSection;
