'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import useFetchListings from './hooks/requests/useFetchListings';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCoffeeMaker, MdPaid, MdLocalLaundryService } from "react-icons/md";
import { GiHotSurface, GiHanger, GiDesk } from "react-icons/gi";
import { BiSolidFridge, BiSolidBlanket } from "react-icons/bi";
import { FaWifi, FaParking } from "react-icons/fa";
import { FaHotjar, FaKitchenSet } from "react-icons/fa6";
import { TbAirConditioning, TbToolsKitchen3 } from "react-icons/tb";
import { PiTelevisionBold } from "react-icons/pi";
import { FaHotTub, FaWater, FaChair, FaMountain } from "react-icons/fa";
import { MdOutdoorGrill, MdOutlineFireplace, MdDinnerDining } from "react-icons/md";
import { FaWaterLadder } from "react-icons/fa6";
import { GiPoolTableCorner, GiHeatHaze } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { WiSmoke } from "react-icons/wi";
import { Tb24Hours, TbLadder } from "react-icons/tb";
import { FaFirstAid, FaFireExtinguisher } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import SearchBarAlt from './components/SearchBarAlt';
import CategoryFilter from './components/CategoryFilter';
import Listing from './components/Listing';

const iconsMap = [
  { name: "Wifi", icon: <FaWifi /> },
  { name: "Free Parking", icon: <FaParking /> },
  { name: "Laundry Facilities", icon: <MdLocalLaundryService /> },
  { name: "Heating", icon: <FaHotjar /> },
  { name: "AC", icon: <TbAirConditioning /> },
  { name: "Paid Parking", icon: <MdPaid /> },
  { name: "Coffee Maker", icon: <MdOutlineCoffeeMaker /> },
  { name: "Stove", icon: <GiHotSurface /> },
  { name: "Fridge", icon: <BiSolidFridge /> },
  { name: "Essential Kitchen Applicances", icon: <FaKitchenSet /> },
  { name: "Kitchen Utensils", icon: <TbToolsKitchen3 /> },
  { name: "Tvs", icon: <PiTelevisionBold /> },
  { name: "Beddings", icon: <BiSolidBlanket /> },
  { name: "Hangers", icon: <GiHanger /> },
  { name: "Work Space", icon: <GiDesk /> },
  { name: "Hot Tub", icon: <FaHotTub /> },
  { name: "BBQ Grill", icon: <MdOutdoorGrill /> },
  { name: "Patio", icon: <FaChair /> },
  { name: "Outdoor/ Backyard Dinning Area", icon: <MdDinnerDining /> },
  { name: "Lake Access", icon: <FaWater /> },
  { name: "Mountain View", icon: <FaMountain /> },
  { name: "GYM", icon: <CgGym /> },
  { name: "Pool Table", icon: <GiPoolTableCorner /> },
  { name: "Fireplace", icon: <MdOutlineFireplace /> },
  { name: "Swimming Pool", icon: <FaWaterLadder /> },
  { name: "Sauna", icon: <GiHeatHaze /> },
  { name: "Smoke Alarm", icon: <WiSmoke /> },
  { name: "24/7 Security", icon: <Tb24Hours /> },
  { name: "First Aid Kit", icon: <FaFirstAid /> },
  { name: "Fire Extinguisher", icon: <FaFireExtinguisher /> },
  { name: "Emergency Exit", icon: <IoIosExit /> },
  { name: "Security System", icon: <MdOutlineSecurity /> },
  { name: "Fire Escape Ladder", icon: <TbLadder /> }
];

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

      {/* <Listing/> */}
      {/*  const {address,startDate,weekdayPrice,weekendPrice} = props; */}
      <div
        className="
                    grid 
                    grid-cols-2
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    gap-4 
                    px-10
                    mb-10
                    mt-10
                "
      >
        {
          listingArray.map((listing, index) => {
            return (
              <Listing
                address={listing.address}
                startDate={listing.startDate}
                weekdayPrice={listing.weekdayPrice}
                weekendPrice={listing.weekendPrice}
                imageSrc={listing.imageSrc}
              />
            )
          })
        }
      </div>
    </div>
  );
}
