import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" w-full md:w-[700px] lg:w-[1000px] xl:w-[1200px]  mx-auto px-5   ">
      {children}
    </div>
  );
};

export default Container;
