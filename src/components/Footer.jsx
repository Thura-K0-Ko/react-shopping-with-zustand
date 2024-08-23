import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className=" mt-auto mb-1">
      <Container>
        <div className=" bg-black text-white px-4 py-2 text-center">
          @{currentYear}
          <a href="" className=" text-gray-400 ms-2 underline">
            {" "}
            MMS IT
          </a>{" "}
          . All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
