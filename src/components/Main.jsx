import React from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";

const Main = () => {
  return (
    <div className=" flex flex-row flex-1 p-9 items-baseline   ">
      <div className=" ">
        <Filter />
      </div>

      <div className="md:px-5 px-2">
        <div className="opacity-90">
          <h1 className="font-bold md:text-4xl ">Edvora</h1>
        </div>
        <div className="md:mt-5">
          <h1 className="opacity-50 md:text-2xl font-medium">Products</h1>
        </div>
        <div className="md:mt-5">
          <div className="  overflow-x-scroll list ">
            <ProductList className=" text-xl" />
          </div>
          <div className=" ">
            <ProductList className=" " />
          </div>
          {/* <div className=" ">
            <ProductList className=" " />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
