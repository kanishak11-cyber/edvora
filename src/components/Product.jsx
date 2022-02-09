import React from "react";
import Logo from "../assets/logo.jpg";
import instance from "../axios";
const Product = () => {



  return (
    <div className="bg-[#292929]   rounded-md  ">
      <div className="flex-row flex w-64 justify-center">
        <div className="">
          <div className="">
            <img src={Logo} alt="logo" className="w-16 rounded-lg h-18 m-3" />
          </div>
          <div className="p-3">
            <h1 className="text-sm opacity-50">Location</h1>
          </div>
          {/* <div>Description</div> */}
        </div>
        <div className="flex flex-col justify-center p-3 ">
          <div className=" inline-flex">
            <h1 className="p-1 text-lg">Product Name</h1>
          </div>
          <div className="p-1 text-sm">
            <h1 className="opacity-50">Brand Name</h1>
          </div>{" "}
          <div className="">
            <h1 className="p-1 text-sm">$ 29.99</h1>
          </div>{" "}
          <div className="">
            <h1 className="p-1 text-xs opacity-50">Date: 09-02-2022</h1>
          </div>
        </div>
      </div>
      <div className="opacity-50">
        <h1 className="p-2 text-xs">Description of the product / Item</h1>
      </div>
    </div>
  );
};

export default Product;
