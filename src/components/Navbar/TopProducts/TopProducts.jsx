import React from "react";
import Img1 from "../../../assets/shirt/shirt1.png";
import Img2 from "../../../assets/shirt/shirt2.png";
import Img3 from "../../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description: "High-quality casual wear for everyday comfort.",
    rating: 5,
  },
  {
    id: 2,
    img: Img2,
    title: "SweatShirts",
    description: "Warm and stylish sweatshirts for all seasons.",
    rating: 4,
  },
  {
    id: 3,
    img: Img3,
    title: "SweatPants",
    description: "Soft and cozy sweatpants for ultimate relaxation.",
    rating: 4.5,
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="mt-14 mb-12 flex flex-col justify-center items-center text-center">
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-10">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover high-quality products designed for your needs.
          </p>
        </div>

        {/* Body section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2
                        md:grid-cols-3 gap-10 md:gap-5 place-items-center"
        >
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 
              dark:hover:bg-primary hover:text-white relative shadow-xl 
              duration-300 group w-full max-w-[300px] flex flex-col items-center"
            >
              {/* Image section */}
              <div className="h-[220px] flex justify-center items-center">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block transform -translate-y-10
                  group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* Detail section */}
              <div className="p-4 text-center">
                {/* Star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  {Array.from({ length: Math.floor(data.rating) }).map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
                  {data.rating % 1 !== 0 && <FaStar className="text-yellow-500 opacity-50" />}
                </div>

                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-600 group-hover:text-white duration-300 text-sm">
                  {data.description}
                </p>

                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 
                  rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
