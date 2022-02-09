import React from "react";

const Filter = () => {
  return (
    
      <div className="bg-black rounded-xl ">
        {/* filter */}
        <div className=" w-64 max-w-xs:w-48">
            <div className=' mx-5 p-5'>
            <h1 className="text-[#a5a5a5] border-b text-xl ">Filters</h1>
            </div>
            <div className="p-5">
          <form className="flex-col flex">
              <div className="my-3">
            <select className="bg-[#292929] py-2 px-7 w-full text-lg rounded-md ">
              <option >Products</option>
              <option>All</option>
            </select>
            </div>
            <div className="my-3">
            <select className="bg-[#292929] py-2 px-7 w-full text-lg rounded-md ">
              <option>City</option>
              <option>All</option>
            </select>
            </div>
            <div className="my-3">
            <select className="bg-[#292929] py-2 px-7 w-full text-lg rounded-md ">
              <option>State</option>
              <option>All</option>
            </select>
            </div>
          </form>
        </div>
        </div>
      </div>
    
  );
};

export default Filter;
