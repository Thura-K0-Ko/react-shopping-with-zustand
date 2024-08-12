import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CartSection from "../components/CartSection";

const MyCart = () => {
  return (
    <Container>
      <div>
        <BreadCrumb currentPageTitle={"My Cart"} />
        <CartSection />
      </div>
    </Container>
  );
};

export default MyCart;
