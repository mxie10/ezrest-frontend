'use client'
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import useFetchListings from './hooks/requests/useFetchListings';
import SearchBarAlt from './components/SearchBarAlt';
import CategoryFilter from './components/CategoryFilter';
import Listing from './components/Listing';

export default function Home() {

  useFetchListings();
  const listings = useSelector(state => state.listings.data);
  const isLoading = useSelector(state => state.listings.isLoading);
  const listingArray = listings?.data || [];
  const [filterOptions, setFilterOptions] = useState(
    {
      province:'',
      price:{
        min: 0,
        max:0
      },
      bedrooms:0,
      category:''
    }
  );
  
  console.log('filterOptions:',filterOptions);

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
        <CategoryFilter setFilterOptions = {setFilterOptions}/>
      </div>

      <hr />

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
                  listing={listing}
                  key={index}
                />
              )})
          }
        </div>
      </div>
    </div>
  );
}
