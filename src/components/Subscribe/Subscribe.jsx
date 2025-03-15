import React from 'react';
import Banner from "../../assets/websites/gray-pattern.jpg";

const BannerImg = {
    backgroundImage: `url(${Banner})`, // ✅ Corrected syntax
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
};

const Subscribe = () => {
  return (
    <div 
      data-aos="zoom-in"
      className="mb-20 bg-gray-500 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10 flex justify-center items-center">
        <div className="space-y-6 max-w-xl text-center">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input 
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md text-black text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
