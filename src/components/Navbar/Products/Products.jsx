import React from 'react';
import Img1 from "../../../assets/women/women1.jpg";
import Img2 from "../../../assets/women/women2.jpg";
import Img3 from "../../../assets/women/women3.jpg";
import Img4 from "../../../assets/women/women4.jpg";
import Img5 from "../../../assets/women/women5.jpeg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Burn Suits",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Practice Outfit",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Men Practice Outfit",
    rating: 4.8,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Practice Shoes",
    rating: 4.5,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Practice Jackets",
    rating: 4.3,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12 flex flex-col justify-center items-center text-center">
      <div className="container">
        
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for You</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            vero maiores cumque nulla?
          </p>
        </div>

        {/* Body Section */}
        <div className="flex justify-center">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
            gap-8 place-items-center text-center"
          >
            {/* Card Section */}
            {ProductsData.map((data) => (
              <div 
                data-aos="fade-up"
                key={data.id} 
                data-aos-delay={data.aosDelay}
                className="space-y-3 flex flex-col items-center"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div className="text-center">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="w-full flex justify-center mt-16">
          <button className="bg-primary text-white py-2 px-6 rounded-md
          cursor-pointer hover:bg-primary-dark transition duration-300">
            View All Products
          </button>
        </div>

      </div>
    </div>
  );
};

export default Products;
