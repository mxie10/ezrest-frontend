'use client'
import React, { useEffect, useState } from 'react';
import SearchBarAlt from './components/SearchBarAlt';
import CategoryFilter from './components/CategoryFilter';
import Listing from './components/Listing';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from '@/app/redux/actions/listings';

export default function Home() {

  const dispatch = useDispatch();
  const listings = useSelector(state => state.listings.data);
  const isLoading = useSelector(state => state.listings.isLoading);
  const listingArray = listings?.data || [];
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(-1);
  const [selectedBedroomIndex, setSelectedBedroomIndex] = useState(-1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [location, setLocation] = useState('');
  const [checkinDate, setCheckinDate] = useState('');
  
  const [filterOptions, setFilterOptions] = useState({
    apply:false,
    province: '',
    price: {
      min: 0,
      max: 0
    },
    bedrooms: 0,
    category: '',
    location:'',
    checkinDate:''
  });

  useEffect(() => {
    const params = {
      pageNumber:pageNumber,
      filterOptions:filterOptions
    }
    dispatch(fetchListings(params));
  }, [dispatch,pageNumber,filterOptions])

  console.log('filterOptions:', filterOptions);
  console.log('location:', location);
  console.log('checkinDate:', checkinDate);

  const handleSearchOnClick = () => {
    if(location.trim() !== '' || checkinDate.trim() !== ''){
      setFilterOptions((prev) => ({
        ...prev,
        location:location,
        checkinDate:checkinDate
      }))
    }
  }

  if (isLoading) {
    return (
      <></>
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
        <SearchBarAlt 
          setLocation = {setLocation}
          location = {location}
          setCheckinDate = {setCheckinDate}
          handleSearchOnClick = {handleSearchOnClick}
        />
      </div>
      <div className="pb-4 px-4">
        <CategoryFilter 
          setFilterOptions={setFilterOptions} 
          selectedBedroomIndex={selectedBedroomIndex}
          setSelectedBedroomIndex={setSelectedBedroomIndex}
          selectedPriceIndex={selectedPriceIndex}
          setSelectedPriceIndex = {setSelectedPriceIndex}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
              )
            })
          }
        </div>
      </div>
      <div className='flex justify-center mb-10'>
        <Stack spacing={10}>
          <Pagination count={15} color="primary" />
        </Stack>
      </div>
    </div>
  );
}
