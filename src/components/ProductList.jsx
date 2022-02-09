import React from "react";
import Product from "./Product";

const ProductList = () => {
  return (
    <div className=" flex-col hel">
      <div className="border-b">
        <h1 className=" font-normal text-xl pb-4">Product Name </h1>
      </div>
      {/* <Product/> */}
      <div className="flex rounded-xl mt-5  flex-row  bg-black p-5 ">
        <span className="m-2 rounded-xl ">
          <Product />
        </span>
        <span className="m-2 rounded-xl ">
          <Product />
        </span>
        <span className="m-2 rounded-xl ">
          <Product />
        </span>
        <span className="m-2 rounded-xl ">
          <Product />
        </span>
        <span className="m-2 rounded-xl ">
          <Product />
        </span>
        <span className="m-2 rounded-xl ">
          <Product />
        </span>
      </div>
      
    </div>
  );  
};

export default ProductList;
