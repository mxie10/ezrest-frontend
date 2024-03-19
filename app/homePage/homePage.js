import React from 'react';
import './homePage.css'

export default function Home() {
  return (
    <>
        <div className="flex">
            {/* First div for filter options */}
                <div className="xl:w-1/6 sm:w-2/6 h-screen bg-white rounded-lg shadow-lg shadow-gray-500 p-4 mr-4 ml-4 mt-4 mb-20">
                <h1 className="text-lg font-bold mb-4">Filter Options</h1>

                <div className="mb-4">
                    <label htmlFor="category" className="block mb-2">Category:</label>
                    <select id="category" className="w-full border border-gray-300 rounded-md p-2">
                        <option value="">Select Category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="block mb-2">Location:</label>
                    <input type="text" id="location" className="w-full border border-gray-300 rounded-md p-2" placeholder="Enter Location" />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block mb-2">Price:</label>
                    <input type="text" id="price" className="w-full border border-gray-300 rounded-md p-2" placeholder="Enter Price Range" />
                </div>

                <div className="mb-4">
                    <label htmlFor="bedrooms" className="block mb-2">Bedrooms:</label>
                    <input type="number" id="bedrooms" className="w-full border border-gray-300 rounded-md p-2" placeholder="Enter Number of Bedrooms" />
                </div>

                <div className="mb-4">
                    <label htmlFor="bathrooms" className="block mb-2">Bathrooms:</label>
                    <input type="number" id="bathrooms" className="w-full border border-gray-300 rounded-md p-2" placeholder="Enter Number of Bathrooms" />
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 xl:px-8 sm:px-4 rounded-lg">
                    Apply
                </button>
        </div>

        <div className="xl:w-5/6 sm:w-4/6 bg-white rounded-lg shadow-lg shadow-gray-500 mt-4 mr-4 mb-20">
            {/* Header */}
            <h2 className="text-2xl font-bold p-4">Most Popular Listings</h2>

            {/* Third div for list items */}
            <div className="p-4">
            {/* List item 1 */}
                <div className="w-full p-4 mb-4 bg-white rounded-lg border border-gray-300">
                    <div className="flex">
                        <img src='https://via.placeholder.com/150' alt="placeholder" className="rounded-lg" />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">Listing Title</h3>
                            <p className="text-gray-700">Description of the listing</p>
                        </div>
                    </div>
                </div>

                {/* List item 2 */}
                <div className="w-full p-4 mb-4 bg-white rounded-lg border border-gray-300">
                    <div className="flex">
                    <img src="https://via.placeholder.com/150" alt="placeholder" className="rounded-lg" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">Listing Title</h3>
                        <p className="text-gray-700">Description of the listing</p>
                    </div>
                    </div>
                </div>

                {/* List item 3 */}
                <div className="w-full p-4 mb-4 bg-white rounded-lg border border-gray-300">
                    <div className="flex">
                    <img src="https://via.placeholder.com/150" alt="placeholder" className="rounded-lg" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">Listing Title</h3>
                        <p className="text-gray-700">Description of the listing</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  );
}