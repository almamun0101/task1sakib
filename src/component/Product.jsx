import React from 'react'

const Product = () => {
  return (
    <div>
        <div className="">
            <div className="p-10 bg-gray-200 ">
                <h2 className='text-2xl font-bold pb-10'>Recent Products </h2>
                <div className="bg-white w-60 py-5 px-4 ">
                    <div className="mb-5">
                        <img src="./product1.jpg" alt="" />
                    </div>
                    <div className="">
                        <h2 className='text-gray-500 pb-3'>Rubbermaid</h2>
                        <p className='text-blue-300 pb-8'>7gal. Blcak Reactangular Wastebasket</p>
                        <p>$5.85</p>
                    </div>
                    <div className="">
                        <div className="">
                            
                        </div>
                        <p>@4 Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product