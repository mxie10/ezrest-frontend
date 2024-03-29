'use client'
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import useFetchListings from './hooks/requests/useFetchListings';
import SearchBarAlt from './components/SearchBarAlt';
import CategoryFilter from './components/CategoryFilter';
import Listing from './components/Listing';



const features = ["Wifi", "Free Parking", "Laundry Facilities", "Heating", "AC", "Paid Parking", "Coffee Maker", "Essential Kitchen Applicances", "Stove", "Kitchen Utensils", "Fridge", "Tvs", "Beddings", "Hangers"];
const amenities = ["Hot Tub", "BBQ Grill", "Patio", "Outdoor/ Backyard Dinning Area", "Lake Access", "Mountain View", "GYM", "Pool Table", "Fireplace", "Swimming Pool", "Sauna"];
const safetyFeatures = ["Smoke Alarm", "24/7 Security", "First Aid Kit", "Fire Extinguisher", "Emergency Exit", "Security System", "Fire Escape Ladder"];


export default function Home() {

  useFetchListings();
  const listings = useSelector(state => state.listings.data);
  const isLoading = useSelector(state => state.listings.isLoading)
  const listingArray = listings?.data || [];
  console.log("listing type:", typeof listings)
  console.log("listings:", listings);

  if (isLoading) {
    return (
      <div>Loading....</div>
    )
  }

  return (
    <div
      className='
          min-h-screen
          mx-auto
        '
    >
      <div className="flex flex-row justify-center">
        <SearchBarAlt />
      </div>
      <div className="pb-4 px-4">
        <CategoryFilter />
      </div>

      <hr/>

      <div className='flex items-center justify-center'>
        <div
          className="
              grid 
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3 
              lg:grid-cols-4 
              gap-12
              px-10
              mb-10
              mt-7
          "
        >
          {
            listingArray.map((listing, index) => {
              return (
                <Listing
                  listing = {listing}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
