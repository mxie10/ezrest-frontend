'use client'
import React, { useState } from 'react';
import SearchBarAlt from './components/SearchBarAlt';
import CategoryFilter from './components/CategoryFilter';
import Listings from './components/Listings';

export default function Home() {

  const [selectedProvince, setSelectedProvince] = useState('');
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
      max: 99999,
    },
    bedrooms: 0,
    category: '',
    location:'',
    checkinDate:'',
  });

  const handleSearchOnClick = () => {
    if(location.trim() !== '' || checkinDate !== ''){
      setFilterOptions((prev) => ({
        ...prev,
        apply:true,
        price: {
          min:0,
          max: 99999 
        },
        location:location.trim(),
        checkinDate:checkinDate
      }))
    }else if(!location.trim().length){
      setFilterOptions((prev)=>({
        ...prev,
        apply:false
      }))
    }
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
          checkinDate = {checkinDate}
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
          setSelectedProvince={setSelectedProvince}
          selectedProvince={selectedProvince}
          setCheckinDate={setCheckinDate}
        />
      </div>

      <hr />

      <div className='flex items-center justify-center'>
        <Listings
          filterOptions = {filterOptions}
        />
      </div>
    </div>
  );
}
