import React, { useEffect, useState } from "react";
// import Logo from "../assets/logo.jpg";
// import instance from "../axios";
const Product = () => {
  const [productData, setProductData] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://assessment-edvora.herokuapp.com/");
    console.log(response);
    setProductData(await response.json());
    // console.log(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className=" flex md:flex-row flex-col overflow-x-scroll ">
      <>
        <div className=" flex md:flex-row flex-col ">
          {productData.length > 0 &&
            productData.map((curElement) => {
              return (
                <div className=" ">
                  <div className="bg-[#292929]  md:m-3 m-1    rounded-md  ">
                    <div className="flex-row flex   ">
                      <div className="relative">
                        <div className="md:w-14 md:h-14 md:m-3 w-7 h-7 m-4">
                          <img
                            src={curElement.image}
                            alt="logo"
                            className=" rounded-lg "
                          />
                        </div>
                        <div className="p-3 text-sm opacity-50">
                          <h1 className="text-sm opacity-50">
                            {curElement.address.state},{" "}
                          </h1>
                          <h1>{curElement.address.city}</h1>
                        </div>
                      </div>
                      <div className="flex flex-col  p-3 ">
                        <div className=" w-36 ">
                          <h1 className="p-1 text-lg">
                            {curElement.product_name}
                          </h1>
                        </div>
                        <div className="p-1 text-sm">
                          <h1 className="opacity-50">
                            {curElement.brand_name}
                          </h1>
                        </div>
                        <div className="">
                          <h1 className="p-1 text-sm">
                            <span>$</span>
                            {curElement.price}
                          </h1>
                        </div>
                        <div className="">
                          <h1 className="p-1 text-xs opacity-50">
                            {curElement.date}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-50">
                      <h1 className="p-2 text-xs">{curElement.discription}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    </div>
  );
};

export default Product;
