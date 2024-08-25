import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full  md:w-[700px] lg:w-[1000px] xl:w-[1200px] px-3 md:px-0  md:mx-auto  ">
      {children}
    </div>
  );
};

export default Container;
