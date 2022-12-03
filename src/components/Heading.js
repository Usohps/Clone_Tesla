import React from "react";
import { FiChevronDown } from "react-icons/fi";
function Heading() {
  return (
    <div>
      <div className="absolute inset-x-0 top-[18%] text-center">
        <h1 className="text-4xl font-bold">Model 3</h1>
        <a
          href="https://tesla/drive"
          className="underline text-sm hover:underline-offset-2 hover:decoration-2"
        >
          Shedule a Test Drive
        </a>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center inset-x-0 absolute bottom-[10%]">
        <a href="https://www.tesla.com/model3/design">
        <button className="w-60 m-5 md:w-96 lg:w-64 xl:w-72 bg-[#171a20] text-[#ffffff] text-sm p-2 rounded-md ">Custom Order</button>
        </a>
        <a href="https://www.tesla.com/inventory/new/m3">
        <button className="w-60 md:w-96 lg:w-64 xl:w-72 bg-[#f4f4f4] text-[#696969] text-sm p-2 rounded-md">Existing Inventory</button>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center inset-x-0 animate-bounce absolute bottom-[3%]">
        <FiChevronDown size={24}/>
      </div>
    </div>
  );
}

export default Heading;
