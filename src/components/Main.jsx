import React from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";

const Main = () => {
  return (
    <div className=" flex flex-row flex-1 p-9 justify-between ">
      <div className="xs:hidden xs:w-20">
        <Filter />
      </div>

      <div className="px-5">
        <div className="">
          <h1 className="font-bold text-4xl opacity-90">Edvora</h1>
        </div>
        <div className="mt-5">
          <h1 className="opacity-50 text-2xl font-medium">Products</h1>
        </div>
        <div className=" mt-5">
          <span className="mt-3">
            <ProductList className="" />
          </span>
          <span className="mt-3">
            <ProductList className="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
