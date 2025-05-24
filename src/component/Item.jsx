import React from "react";
import { FaTrophy ,FaStar ,FaStarHalfAlt  } from "react-icons/fa";
import { PiTicket } from "react-icons/pi";


const Item = () => {
  return (
    <>
      {/* <div class="size-40 rounded- bg-radial-[at_0%_0%] from-white to-[#5d1dcc] to-75%"></div>
        <div class="size-24  bg-conic-180 from-indigo-600 via-indigo-500 to-indigo-600"></div> */}
      <div>
        <div className="p-10 w-full h-screen bg-gradient-to-r from-white to-[#5d1dcc]">
          <div className="p-2 rounded-4xl shadow-2xs bg-gradient-to-r from-white to-[#5d1dcc]">
            <div className="bg-white rounded-4xl mx-auto shadow-2xl flex justify-between lg:w-250">
              <div className="lg:w-120 mx-auto">
                <img src="./headphone.png" alt="" />
              </div>
              <div className=" mt-20 ">
                <div className="flex gap-2 items-center">
                  <h2 className="rounded-2xl px-4 py-2 border-2 border-[#61517d] flex items-center gap-2">
                    <FaTrophy /> Bestseller
                  </h2>
                  <h2 className="rounded-2xl px-4 py-2 border-2 border-[#bb2a4a] flex items-center gap-2">
                    <PiTicket />
                    15% OFF
                  </h2>
                </div>
                <h1 className="font-bold text-4xl mt-5 w-120">
                  Bose QuietComfort Bluetooth headphones- Chilled Lilac
                </h1>
                <div className="flex gap-4 mt-4 text-sm">
                    <p>187 sold this month</p>
                    <p>Free Shipping Available</p>
                </div>
                <div className="flex mt-5">
                    <div className="">
                        <h2 className="text-2xl font-bold">$735.27  <span className="font-light text-base line-through">$648.58</span> </h2>
                        <p className="text-[#79d8bd] font-bold mt-2 ">In-Stock (12)</p>
                        <div className="flex gap-1 mt-2">
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStarHalfAlt className="text-yellow-400"/>
                        </div>
                        <div className="w-20">
                            <img src="./bose.png" alt="" />
                        </div>
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
