import React from "react";
import {
  FaTrophy,
  FaStar,
  FaStarHalfAlt,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { PiTicket } from "react-icons/pi";
import { GoDotFill,GoDot  } from "react-icons/go";
const Item = () => {
  return (
    <>
      {/* <div class="size-40 rounded- bg-radial-[at_0%_0%] from-white to-[#5d1dcc] to-75%"></div>
        <div class="size-24  bg-conic-180 from-indigo-600 via-indigo-500 to-indigo-600"></div> */}
      <div>
        <div className="min-h-screen bg-gradient-to-r from-white to-[#5d1dcc] flex items-center justify-center p-4">
          <div className="w-full max-w-6xl p-2 rounded-[2rem] shadow-2xl bg-gradient-to-r from-white to-[#5d1dcc]">
            <div className="bg-white rounded-[2rem] shadow-xl flex flex-col lg:flex-row overflow-hidden">
              <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center justify-center p-6">
                <img src="./headphone.png" alt="" className="max-h-80" />
                <div className="flex gap-1 text-gray-300">
                  
                  <GoDotFill className="text-[#5d1dcc]"/>
                  <GoDotFill />
                  <GoDotFill />
                  <GoDotFill />
                  
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col  justify-between p-6">
                <div className="flex gap-3 flex-wrap">
                  <span className="rounded-xl px-4 py-1 text-[#b68ede] font-medium border-2 border-[#b68ede] flex items-center gap-2">
                    <FaTrophy /> Bestseller
                  </span>
                  <span className="rounded-xl px-4 py-1 border-2 border-red-500 text-red-500 flex items-center gap-2">
                    <PiTicket />
                    15% OFF
                  </span>
                </div>
                <h1 className="font-bold text-3xl lg:text-4xl mt-5 w-120">
                  Bose QuietComfort Bluetooth headphones- Chilled Lilac
                </h1>
                <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-600">
                  <span>187 sold this month</span>
                  <span>Free Shipping Available</span>
                </div>
                <div className="flex justify-between gap-8  mt-5 pr-10">
                  <div className="">
                    <h2 className="text-2xl font-bold">
                      $735.27{" "}
                      <span className="font-normal text-gray-400 text-base line-through">
                        $648.58
                      </span>{" "}
                    </h2>
                    <p className="text-[#79d8bd] font-bold mt-2 ">
                      In-Stock (12)
                    </p>
                    <div className="flex gap-1 mt-2 text-yellow-400 items-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                    <div className=" flex items-center gap-3 mt-4">
                      <img src="./bose.png" alt="" width={100} />
                      <h2 className="font-medium pb-2">Bose Audio Official</h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="rounded-2xl py-2 items-center border border-gray-400 px-4  flex gap-5">
                      <button className="text-[#b68ede] font-bold text-base">
                        <FaMinus />
                      </button>
                      <p className="text-lg">1</p>
                      <button className="text-[#b68ede] font-bold ">
                        <FaPlus />
                      </button>
                    </div>
                    <h2 className="text-[#b68ede] mt-5 font-medium">
                      144 Questions
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
