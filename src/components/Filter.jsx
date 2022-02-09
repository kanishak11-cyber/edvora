import { useEffect, useState } from "react";

const Filter = () => {
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
    <div className="bg-black rounded-xl ">
      {/* filter */}
      <div className=" md:w-52 w-36  ">
        <div className=" md:mx-5 md:p-5 mx-2 p-2">
          <h1 className="text-[#a5a5a5] border-b md:text-xl text-sm ">
            Filters
          </h1>
        </div>

        <div className=" p-3">
          <form className="flex-col flex">
            <div className="md:my-3 my-1">
              <select className="bg-[#292929] md:py-2 md:px-7 px-3 py-1 text-xs md:text-lg rounded-md w-full">
                <option>Products</option>
                {productData.length > 0 &&
                  productData.map((curElement) => (
                    <option>{curElement.product_name}</option>
                  ))}
              </select>
            </div>
            <div className="md:my-3 my-1">
              <select className="bg-[#292929] md:py-2 md:px-7 px-3 py-1 text-xs md:text-lg rounded-md w-full">
                <option>City</option>
                {productData.length > 0 &&
                  productData.map((curElement) => (
                    <option>{curElement.address.city}</option>
                  ))}
              </select>
            </div>
            <div className="md:my-3 my-1">
              <select className="bg-[#292929] md:py-2 md:px-7 px-3 py-1 text-xs md:text-lg rounded-md w-full">
                <option>State</option>
                {productData.length > 0 &&
                  productData.map((curElement) => (
                    <option>{curElement.address.state}</option>
                  ))}
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
