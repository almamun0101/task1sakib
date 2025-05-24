import React from "react";
import { FaStar , FaRegStar , FaStarHalfAlt } from "react-icons/fa";


const productdata = [
  {
    img: "./product1.jpg",
    name: "RUBBERMAID",
    title: "7GAL. BLCAK REACTANGULAR WASTEBASKET",
    price: "5.54",
    rating: "3.5",
    reviews: "24",
    description: "JANITORIAL AND CLEARING SIUPPLIES", 
  },
  {
    img: "./product2.jpg",
    name: "JUSTITE",
    title: "Type || Safety can , 17 1/2 in H,Red",
    price: "64.95",
    rating: "3.8",
    reviews: "22",
    description:"STORAGE, SHELIVING , ladders  & LIFTS",
  },
  {
    img: "./product4.jpg",
    name: "JUSTITE",
    title: "Type || Safety can , 17 1/2 in H,Red",
    price: "64.95",
    rating: "2.3",
    reviews: "22",
    description:"STORAGE, SHELIVING , ladders  & LIFTS",
  },
  {
    img: "./product3.jpg",
    name: "JUSTITE",
    title: "Type || Safety can , 17 1/2 in H,Red",
    price: "64.95",
    rating: "4.6",
    reviews: "22",
    description:"STORAGE, SHELIVING , ladders  & LIFTS",
  },
  {
    img: "./product2.jpg",
    name: "JUSTITE",
    title: "Type || Safety can , 17 1/2 in H,Red",
    price: "64.95",
    rating: "3",
    reviews: "22",
    description:"STORAGE, SHELIVING , ladders  & LIFTS",
  },
  {
    img: "./product1.jpg",
    name: "JUSTITE",
    title: "Type || Safety can , 17 1/2 in H,Red",
    price: "64.95",
    rating: "3",
    reviews: "22",
    description:"STORAGE, SHELIVING , ladders  & LIFTS",
  },
  {
    img: "./product3.jpg",
    name: "STANLEY",
    title: "Rolling Tool Box ,22-3/16' x37-1/2' D",
    price: "72.66",
    rating: "4",
    reviews: "15",
    description:"HAND TOOLS ",
  },
  {
    img: "./product4.jpg",
    name: "ELKAY",
    title: "Indoor Mount Ac",
    price: "72.60",
    rating: "2",
    reviews: "10",
    description:"TOILET AND PLUMMING",
  },
];
const Product = () => {

    const ratingStar =(ratings)=>{
        const star = [];
        const fullstar = Math.floor(ratings);
        const halfStar = ratings % 1>= 0.5;

        for(let i=0; i<fullstar ; i++){
            star.push(<FaStar   key="half" className="text-yellow-300" />)
        }
        if(halfStar){
            star.push(<FaStarHalfAlt   key="half" className="text-yellow-300" />)
        }
        return star;

    }
  return (
    <div>
      <div className="">
        <div className="p-10 bg-gray-200 ">
          <h2 className="text-2xl tracking-tighter font-bold pb-10">
            RECENTLY VIEWED{" "}
          </h2>
          <div className="grid grid-cols-2 items-stretch md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
            {productdata.map((item) => (
              <div className="py-10">
                {/* Card */}
                <div className="bg-white min-h-full  py-5 flex flex-col p-10 justify-center">
                  <div className="mb-5 ">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="">
                    <h2 className="text-[#5c5c5c] text-lg pb-3">{item.name}</h2>
                    <p className="text-[#597a94] font-medium text-md pb-6">
                      {item.title}
                    </p>
                    <p className="text-2xl font-bold  ">${item.price}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-1">
                     {ratingStar(item.rating)}
                    </div>
                    <p>{item.reviews} Reviews</p>
                  </div>
                </div>
                <p className="text-[#6bacd0] text-xl px-1 font-medium tracking-tight py-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
