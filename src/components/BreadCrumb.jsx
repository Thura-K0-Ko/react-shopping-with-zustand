import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ currentPageTitle }) => {
  return (
    <div className=" flex gap-2 mb-5">
      <Link to={"/"} className=" text-gray-500 hover:text-blue-500">
        Home
      </Link>
      /<p>{currentPageTitle}</p>
    </div>
  );
};

export default BreadCrumb;
