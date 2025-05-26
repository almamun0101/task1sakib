import React, { useState, useEffect } from "react";
import {
  FaTrophy,
  FaStar,
  FaStarHalfAlt,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { PiTicket } from "react-icons/pi";
import { GoDotFill, GoDot } from "react-icons/go";
import { SlOptionsVertical } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

const images = ["./headphone.png", "./headphone3.jpg", "./headphone2.jpg"];
const Item = () => {
  const [count, setCount] = useState(1);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(timer);
  }, []);

  const handleIncrese = () => {
    setCount(count + 1);
  };
  const handleDecrese = () => {
    setCount(count - 1);
  };

  return (
    <>
      {/* <div class="size-40 rounded- bg-radial-[at_0%_0%] from-white to-[#5d1dcc] to-75%"></div>
        <div class="size-24  bg-conic-180 from-indigo-600 via-indigo-500 to-indigo-600"></div> */}
      <div>
        <div className="min-h-screen bg-gradient-to-r from-white to-[#5d1dcc] flex items-center justify-center p-4">
          <div className="w-full  max-w-6xl p-2 rounded-[2rem] shadow-2xl bg-gradient-to-r from-white to-[#5d1dcc]">
            <div className="bg-white py-5 rounded-[2rem] shadow-xl flex flex-col lg:flex-row overflow-hidden">
              <div className="relative w-full lg:w-1/2 mx-auto flex flex-col items-center justify-center p-6">
                <span className="border top-5  left-10 absolute border-gray-400 rounded-xl px-2   ">
                  {current+1 }/{images.length}
                </span>
                <span className=" top-5 right-10 absolute text-[#5d1dcc] rounded-full p-2 hover:bg-gray-400 hover:text-white">
                  <SlOptionsVertical />
                </span>
                <div className="relative h-64 sm:h-80 md:h-96 w-full max-w-4xl mx-auto overflow-hidden">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className={`absolute w-full h-full object-contain transition-opacity duration-1000 ${
                        index === current ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>

                <span className=" bottom-20 right-35 absolute text-white bg-gray-300 hover:bg-gray-400 p-2 rounded-full text-3xl">
                  <IoShareSocialOutline />
                </span>
                <span className=" bottom-20 right-20 absolute text-white bg-gray-300 hover:bg-gray-400 p-2 rounded-full text-3xl">
                  <MdFavoriteBorder />
                </span>

                <div className="flex gap-1 ">
              {
                images.map((item, index)=>(
                  <GoDotFill className={(index==current)? "text-[#5d1dcc]": "text-gray-300"}/>
                ))
              }
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
                <h1 className="font-bold text-3xl lg:text-4xl mt-5 ">
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
                    <div className="flex items-center gap-5">
                      <div className="flex gap-1 mt-2 text-yellow-400 items-center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                      </div>
                      <div>
                        <span className="font-medium ">4.4</span>
                        <span>(2,120)</span>
                      </div>
                    </div>
                    <div className=" flex items-center gap-3 mt-4">
                      <img src="./bose.png" alt="" width={100} />
                      <h2 className="font-medium pb-2">Bose Audio Official</h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="rounded-2xl py-2 items-center border border-gray-400 px-4  flex gap-5">
                      <button
                        onClick={handleDecrese}
                        className="text-[#b68ede] font-bold text-base"
                      >
                        <FaMinus />
                      </button>
                      <p className="text-lg">{count}</p>
                      <button
                        onClick={handleIncrese}
                        className="text-[#b68ede] font-bold "
                      >
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
