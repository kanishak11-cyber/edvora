import React from "react";
import Product from "./Product";

const ProductList = () => {
  return (
    <div className="  ">
      <div className="border-b">
        <h1 className=" font-normal md:text-xl text-sm pb-4">Product Name </h1>
      </div>
      
      <div className="flex rounded-xl md:mt-3 mt-1 md:flex-row flex-col  bg-black ">
        <div className=" rounded-xl ">
          <Product />
          
        </div>
       
      </div>
      
    </div>
  );  
};

export default ProductList;
