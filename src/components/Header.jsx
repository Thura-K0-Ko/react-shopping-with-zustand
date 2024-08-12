import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" pt-5">
      <Container>
        <div className=" flex justify-between items-center">
          <Link to={"/"} className=" font-bold text-3xl ">Online Shop</Link>
          <Link to={"my-cart"} className=" border border-black px-5 py-2 relative">My Cart 
            <span className=" bg-red-500 absolute translate-x-1/2 top-0 right-0 px-2 -translate-y-1/2">1</span></Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
