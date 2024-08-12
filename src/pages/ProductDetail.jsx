import React from "react";
import Container from "../components/Container";
import ProductDetailSection from "../components/ProductDetailSection";
import BreadCrumb from "../components/BreadCrumb";

const ProductDetail = () => {
  return (
    <Container>
      <BreadCrumb currentPageTitle={"Product Detail"} />
      <ProductDetailSection />
    </Container>
  );
};

export default ProductDetail;
