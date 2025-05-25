import React from "react";
import {
  FaTrophy,
  FaStar,
  FaStarHalfAlt,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { PiTicket } from "react-icons/pi";

const Item = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-[#5d1dcc] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl p-6 rounded-[2rem] shadow-2xl bg-gradient-to-r from-white to-[#5d1dcc]">
        <div className="bg-white rounded-[2rem] shadow-xl flex flex-col lg:flex-row overflow-hidden">
          {/* Image */}
          <div className="w-full lg:w-1/2 p-6 flex items-center justify-center">
            <img src="./headphone.png" alt="Headphones" className="max-h-80" />
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 text-sm border-2 border-[#b68ede] text-[#b68ede] rounded-xl px-3 py-1 font-medium">
                <FaTrophy /> Bestseller
              </span>
              <span className="flex items-center gap-2 text-sm border-2 border-red-500 text-red-500 rounded-xl px-3 py-1 font-medium">
                <PiTicket /> 15% OFF
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold mt-6">
              Bose QuietComfort Bluetooth headphones - Chilled Lilac
            </h1>

            {/* Highlights */}
            <div className="flex flex-wrap gap-6 text-sm mt-4 text-gray-600">
              <span>187 sold this month</span>
              <span>Free Shipping Available</span>
            </div>

            {/* Pricing and Ratings */}
            <div className="flex flex-col lg:flex-row justify-between mt-6 gap-8">
              {/* Left: Price and rating */}
              <div>
                <div className="text-2xl font-bold">
                  $648.58{" "}
                  <span className="text-base text-gray-400 line-through font-normal">
                    $735.27
                  </span>
                </div>
                <p className="text-[#79d8bd] font-bold mt-2">In-Stock (12)</p>
                <div className="flex items-center gap-1 mt-2 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <img src="./bose.png" alt="Bose Logo" className="w-24" />
                  <p className="font-medium">Bose Audio Official</p>
                </div>
              </div>

              {/* Right: Quantity & QA */}
              <div className="flex flex-col items-start justify-between">
                <div className="flex items-center gap-5 border border-gray-300 rounded-xl px-4 py-2">
                  <button className="text-[#b68ede] text-lg">
                    <FaMinus />
                  </button>
                  <p className="text-lg">1</p>
                  <button className="text-[#b68ede] text-lg">
                    <FaPlus />
                  </button>
                </div>
                <p className="text-[#b68ede] mt-5 font-medium">
                  144 Questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
