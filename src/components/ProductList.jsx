import React from "react";
import Product from "./Product";

const ProductList = () => {
  return (
   
      <div className="list rounded-xl md:mt-3 mt-1 md:flex-row  flex-col fl ">
        <div className=" rounded-xl  bg-black ">
          <Product  className='w-3/4'/>
        </div>
      </div>

  );
};

export default ProductList;
