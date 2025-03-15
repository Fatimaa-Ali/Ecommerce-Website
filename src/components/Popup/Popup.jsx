import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({ orderPopup, setOrderPopup }) => {
    if (!orderPopup) return null; // ✅ Prevents rendering when `orderPopup` is false

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white dark:bg-gray-900 p-6 shadow-md rounded-md w-[300px]">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-bold">Order Now</h1>
                    <IoCloseOutline 
                        className="text-2xl cursor-pointer hover:text-gray-500 transition"
                        onClick={() => setOrderPopup(false)}
                    />
                </div>

                {/* Form Section */}
                <div className="mt-4 space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2"
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2"
                    />

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition duration-200 text-white py-2 px-6 rounded-full">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
