import React from "react";
import { FaTrophy } from "react-icons/fa";
import { PiTicket } from "react-icons/pi";


const Item = () => {
  return (
    <>
      {/* <div class="size-40 rounded- bg-radial-[at_0%_0%] from-white to-[#5d1dcc] to-75%"></div>
        <div class="size-24  bg-conic-180 from-indigo-600 via-indigo-500 to-indigo-600"></div> */}
      <div>
        <div className="p-10 w-full h-screen bg-gradient-to-r from-white to-[#5d1dcc]">
          <div className="p-2 rounded-4xl shadow-2xs bg-gradient-to-r from-white to-[#5d1dcc]">
            <div className="bg-white rounded-4xl mx-auto shadow-2xl flex justify-between w-250">
              <div className="w-120 mx-auto">
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
                <div className="">
                    <p>187 sold this month</p>
                    <p>Free Shipping Available</p>
                </div>
                <div className="flex ">
                    <div className="">
                        <h2>$735.27  <span>$648.58</span> </h2>
                        <p>In Stock (12)</p>
                        <div className="rating">

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
