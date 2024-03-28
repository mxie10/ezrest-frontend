'use client'

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/navigation';
import 'react-datepicker/dist/react-datepicker.css';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdOutlineCoffeeMaker, MdPaid, MdLocalLaundryService} from "react-icons/md";
import { GiHotSurface,GiHanger,GiDesk} from "react-icons/gi";
import { BiSolidFridge, BiSolidBlanket} from "react-icons/bi";
import { FaWifi,FaParking } from "react-icons/fa";
import { FaHotjar,FaKitchenSet } from "react-icons/fa6";
import { TbAirConditioning,TbToolsKitchen3 } from "react-icons/tb";
import { PiTelevisionBold } from "react-icons/pi";
import { FaHotTub, FaWater, FaChair, FaMountain} from "react-icons/fa";
import { MdOutdoorGrill,MdOutlineFireplace, MdDinnerDining} from "react-icons/md";
import { FaWaterLadder } from "react-icons/fa6";
import { GiPoolTableCorner,GiHeatHaze} from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { WiSmoke } from "react-icons/wi";
import { Tb24Hours,TbLadder } from "react-icons/tb";
import { FaFirstAid, FaFireExtinguisher} from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";

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

const Page = () => {
  const router = useRouter();

  const navigateToCheckout = () => {
    if (totalGuests === 0 || guests.adults === 0) {
      alert("Please select at least one adult guest.");
      return;
    }
    router.push('/payment'); 
  };


  const [startDate, setStartDate] = useState(null); 
  const [endDate, setEndDate] = useState(null); 

  const handleStartDateChange = (date) => {
    if (endDate && date > endDate) {
      setEndDate(date); 
    }
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0
  });

  const totalGuests = guests.adults + guests.children + guests.infants + guests.pets;

  const [showDropdown, setShowDropdown] = useState(false); 
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const decreaseGuestCount = (type) => {
    if (guests[type] > 0) {
      setGuests({ ...guests, [type]: guests[type] - 1 });
    }
  };

  const increaseGuestCount = (type) => {
    setGuests({ ...guests, [type]: guests[type] + 1 });
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseFullScreen = () => {
    setSelectedImage(null);
  };

  const [showMore, setShowMore] = useState(false);

  const description = "Escape to Rock 'n' House, a marvel featured in Architectural Digest, nestled on a 14-acre estate down a secluded road - 2 hrs from NYC. This architectural wonder with panoramic views and circular design offers seamless integration with nature. Inside, the main level offers open concept living, sunken lounge and dining for 10, with radiant heat & central air to ensure your comfort. Outdoors enjoy stunning vistas from the outdoor firepit and porch table.";

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const [showAmenities, setShowAmenities] = useState(false);

  const toggleShowAmenities = () => {
    setShowAmenities(!showAmenities);
  };



  return (
    <div className='flex justify-center min-h-screen'>
      <div className='justify-center 2xl:w-[60%] xl:w-3/4 sm:w-[90%] my-12 rounded-lg'>
        <div className='relative justify-start mt-4'>
          <h1 className='text-2xl font-semibold'>Lakefront detached house on the little lake</h1>
        </div>
        <div className="flex mt-4">
          <div className="relative w-full">
            <div className="flex justify-center">
              <div className="flex flex-row 2xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm">
                <div className="flex w-full">
                  <img
                    className="object-cover cursor-pointer rounded-tl-xl rounded-bl-xl"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/b9c4b62f-c00b-474f-a0cf-82b8203ad890.jpeg?im_w=1200"
                    onClick={() =>
                      handleImageClick(
                        'https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/b9c4b62f-c00b-474f-a0cf-82b8203ad890.jpeg?im_w=1200'
                      )
                    }
                    alt="Image"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row w-full mb-2">
                    <img
                      className="object-cover w-1/2 h-auto mx-2 cursor-pointer"
                      src="https://a0.muscache.com/im/pictures/08ee4447-ee3d-4076-8d8a-337f651efacc.jpg?im_w=1440"
                      onClick={() =>
                        handleImageClick(
                          'https://a0.muscache.com/im/pictures/08ee4447-ee3d-4076-8d8a-337f651efacc.jpg?im_w=1440'
                        )
                      }
                      alt="Image"
                    />
                    <img
                      className="object-cover w-1/2 h-auto cursor-pointer rounded-tr-xl"
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/a0c9ac36-8a0e-4bfa-b7c8-c4aba4747f1e.jpeg?im_w=1440"
                      onClick={() =>
                        handleImageClick(
                          'https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/a0c9ac36-8a0e-4bfa-b7c8-c4aba4747f1e.jpeg?im_w=1440'
                        )
                      }
                      alt="Image"
                    />
                  </div>
                  <div className="flex flex-row">
                    <img
                      className="object-cover w-1/2 h-auto mx-2 cursor-pointer"
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/f0fbda97-8672-4b94-acad-ba0a62912547.jpeg?im_w=1440"
                      onClick={() =>
                        handleImageClick(
                          'https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/f0fbda97-8672-4b94-acad-ba0a62912547.jpeg?im_w=1440'
                        )
                      }
                      alt="Image"
                    />
                    <img
                      className="object-cover w-1/2 h-auto cursor-pointer rounded-br-xl"
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/3c190247-d564-4f3f-a169-5bc4ac1d98cc.jpeg?im_w=1440"
                      onClick={() =>
                        handleImageClick(
                          'https://a0.muscache.com/im/pictures/miso/Hosting-48125607/original/3c190247-d564-4f3f-a169-5bc4ac1d98cc.jpeg?im_w=1440'
                        )
                      }
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={handleCloseFullScreen}>
              <div className="flex justify-center w-full max-w-screen-xl" onClick={(e) => e.stopPropagation()}>
                <button className="absolute text-white underline cursor-pointer top-4 right-4" onClick={handleCloseFullScreen}>Close X</button>
                <img src={selectedImage} alt="Full Screen" className="max-w-full max-h-screen" />
              </div>
            </div>
          )}
        </div>


        <div className='flex flex-row justify-between mt-6'>
          <div className='flex flex-col w-2/3'>
            <h1 className='text-2xl font-semibold'>Entire home in Barrie, Canada</h1>
            <div className='flex flex-row justify-between mr-2 border-b border-gray-300'>
              <div className='flex flex-row mt-2'>
                <p className='mr-2'>8 Guests |</p>
                <p className='mr-2'>3 Bedrooms |</p>
                <p className='mr-2'>4 Beds |</p>
                <p className=''>1 Bath</p>
              </div>
            </div>

            <div className='flex flex-row mt-4 '>
              <Avatar className='mt-2'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className='flex flex-col ml-4'>
                <h1 className='font-semibold'>Hosted By User</h1>

                <div className='flex flex-row'>
                  <p className='text-sm text-gray-500'>Host Rating:</p>
                  <p className='ml-2 text-sm text-gray-500'>
                    4.8
                  </p>
                  <svg className='mt-1 ml-2'width="12px" height="12px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path clip-rule="evenodd" d="M12.1904 2.64611C12.9026 1.09713 15.0974 1.09713 15.8096 2.64611L18.607 8.72957L25.2394 9.51836C26.9281 9.71921 27.6063 11.813 26.3578 12.9711L21.4543 17.5197L22.7559 24.0907C23.0874 25.7638 21.3118 27.0578 19.8279 26.2246L14 22.9523L8.17211 26.2246C6.6882 27.0578 4.91264 25.7638 5.24406 24.0907L6.54569 17.5197L1.64223 12.9711C0.3937 11.813 1.07191 9.71921 2.76065 9.51836L9.39298 8.72957L12.1904 2.64611ZM14.4543 4.4713C14.2758 4.08315 13.7242 4.08315 13.5457 4.4713L11.2026 9.56685C10.9123 10.1981 10.3159 10.6328 9.62762 10.7147L4.06902 11.3758C3.64578 11.4261 3.47555 11.949 3.78803 12.2388L7.89874 16.0521C8.40759 16.5241 8.63541 17.2274 8.50034 17.9093L7.40955 23.4159C7.32661 23.8346 7.77263 24.158 8.14481 23.949L13.0266 21.208C13.6314 20.8684 14.3686 20.8684 14.9734 21.208L19.8552 23.949C20.2274 24.158 20.6734 23.8346 20.5905 23.4159L19.4997 17.9093C19.3646 17.2274 19.5924 16.5241 20.1013 16.0521L24.212 12.2388C24.5244 11.949 24.3542 11.4261 23.931 11.3758L18.3724 10.7147C17.6841 10.6328 17.0877 10.1982 16.7974 9.56685L14.4543 4.4713Z" fill="#6b7280" fill-rule="evenodd"></path></g></svg>
                </div>
              </div>
            </div>

            <div className="relative mt-4 mr-2 border-t border-b border-gray-300">
              <div className={`overflow-hidden transition-all duration-500 ${showMore ? 'max-h-full' : 'max-h-20'}`}>
                <p className="mt-2 mr-4 text-justify text-gray-500">{description}</p>
              </div>
              {showMore && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                  <div className="w-1/3 p-6 bg-white rounded-lg h-3/4">
                    <p className="text-justify text-gray-500">{description}</p>
                    <button onClick={toggleShowMore} className="absolute text-white underline cursor-pointer top-4 right-4">Close X</button>
                  </div>
                </div>
              )}
              {description.length > 100 && (
                <button onClick={toggleShowMore} className="mt-2 mb-2 font-semibold text-black underline bg-transparent ">Show {showMore ? 'less...' : 'more...'}</button>
              )}
            </div>

            <div className='mt-4'>
              <h1 className='text-xl font-semibold'>What this place offers</h1>
            </div>

            <div className="flex flex-row w-[50%] justify-between mt-4 mr-4">
              <div className="flex flex-col items-start">
                  {features.slice(0, 3).map(feature => {
                      const icon = iconsMap.find(icon => icon.name === feature);
                      return (
                          <div key={feature} className="flex items-center mr-4">
                              {icon && icon.icon}
                              <span className="ml-2">{feature}</span>
                          </div>
                      );
                  })}
              </div>
              <div className="flex flex-col items-start ml-auto">
                  {amenities.slice(0, 3).map(amenity => {
                      const icon = iconsMap.find(icon => icon.name === amenity);
                      return (
                          <div key={amenity} className="flex items-center mr-4">
                              {icon && icon.icon}
                              <span className="ml-2">{amenity}</span>
                          </div>
                      );
                  })}
              </div>
              
              {showAmenities && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                  <div className="w-1/3 h-auto p-6 bg-white rounded-lg">
                    <h1 className='text-2xl font-semibold'>What this place offer</h1>
                    <div className='flex flex-col justify-between'>
                        <h1 className='mt-2 mb-4 text-xl font-semibold'>Features</h1>
                        <div className="flex items-center mb-4">
                            <div className="flex flex-col items-start">
                                {features.slice(0, Math.ceil(features.length / 2)).map(feature => {
                                    const icon = iconsMap.find(icon => icon.name === feature);
                                    return (
                                        <div key={feature} className="flex items-center mr-4">
                                            {icon && icon.icon}
                                            <span className="ml-2">{feature}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col items-start w-1/2 ml-auto">
                                {features.slice(Math.ceil(features.length / 2)).map(feature => {
                                    const icon = iconsMap.find(icon => icon.name === feature);
                                    return (
                                        <div key={feature} className="flex items-center mr-4">
                                            {icon && icon.icon}
                                            <span className="ml-2">{feature}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <h1 className='mb-4 text-xl font-semibold'>Amenities</h1>
                        <div className="flex items-center mb-4">
                            <div className="flex flex-col items-start">
                                {amenities.slice(0, Math.ceil(amenities.length / 2)).map(amenity => {
                                    const icon = iconsMap.find(icon => icon.name === amenity);
                                    return (
                                        <div key={amenity} className="flex items-center mr-4">
                                            {icon && icon.icon}
                                            <span className="ml-2">{amenity}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col items-start w-1/2 ml-auto">
                                {amenities.slice(Math.ceil(amenities.length / 2)).map(amenity => {
                                    const icon = iconsMap.find(icon => icon.name === amenity);
                                    return (
                                        <div key={amenity} className="flex items-center mr-4">
                                            {icon && icon.icon}
                                            <span className="ml-2">{amenity}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <h1 className='mb-4 text-xl font-semibold'>Safety</h1>
                        <div className="flex items-center mb-4">
                            <div className="flex flex-col items-start">
                                {safetyFeatures.slice(0, Math.ceil(safetyFeatures.length / 2)).map(safety => {
                                    const icon = iconsMap.find(icon => icon.name === safety);
                                    return (
                                        <div key={safety} className="flex items-center mr-4">
                                            {icon && icon.icon}
                                            <span className="ml-2">{safety}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col items-start w-1/2 ml-auto">
                                {safetyFeatures.slice(Math.ceil(safetyFeatures.length / 2)).map(safety => {
                                    const icon = iconsMap.find(icon => icon.name === safety);
                                    return (
                                        <div key={safety} className="flex items-center mr-4">
                                            {icon && icon.icon}
                                            <span className="ml-2">{safety}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                  </div>
                  <button onClick={toggleShowAmenities} className="absolute text-white underline cursor-pointer top-4 right-4">Close X</button>
                </div>
              )}
            </div>

            <div>
              <button onClick={toggleShowAmenities} className="px-4 py-2 mt-4 text-black border border-gray-500 rounded-lg hover:bg-gray-500 hover:text-white">Show all amenities</button>
            </div>

          </div>


          <div className='flex flex-col h-full py-4 rounded-lg shadow-md shadow-gray-500 2xl:w-1/3 '>
              <div className='flex flex-row'>
                <h1 className='flex justify-start ml-5 text-lg font-semibold'>$300 CAD</h1>
                <p className='mt-1 ml-2 text-gray-500'>night</p>
              </div>

              <div className='flex flex-col justify-center'>
                <div className='flex flex-col border border-gray-500 rounded-lg p-2 bg-transparent ml-5 mt-4 w-[90%]'>
                  <div className='flex flex-row mt-4 mb-4 border-b border-gray-500'>
                    <div className="w-1/2 border-r border-gray-500">
                      <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Start Date"
                      />
                    </div>
                    <div className="w-1/2">
                      <DatePicker
                        selected={endDate}
                        onChange={handleEndDateChange}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate} 
                        placeholderText="End Date"
                      />
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <div className='relative mt-2'>
                      <div className='flex justify-between'>
                        <h1 className='ml-2 cursor-pointer' o>
                          Guests: 
                        </h1>
                        <p className='text-gray-500 ml-2 text-sm mt-[2px]' o>
                          Total Guests: {totalGuests}
                        </p>
                        <span className='mr-5 hover:cursor-pointer' onClick={toggleDropdown}>{showDropdown ? '▲' : '▼'}</span>
                      </div>
                      {showDropdown && (
                        <div className='z-10 flex flex-col w-full p-2 mt-2 bg-transparent rounded shadow-md'>
                          <div className='flex flex-row justify-between'>
                            <div className='flex flex-col'>
                              <p className=''>Adults:</p>
                              <p className='mt-4'>Children:</p>
                              <p className='mt-4'>Infants:</p>
                              <p className='mt-4'>Pets:</p>
                            </div>
                            <div>
                              <div className='flex flex-row items-center'>
                                <button
                                  className='px-3 py-1 text-black bg-gray-300 rounded hover:bg-gray-500 hover:text-white'
                                  onClick={() => decreaseGuestCount('adults')}
                                  disabled={guests.adults === 0}
                                >
                                  -
                                </button>
                                <span className='mx-2'>{guests.adults}</span>
                                <button
                                  className='px-3 py-1 text-black bg-gray-300 rounded hover:bg-gray-500 hover:text-white'
                                  onClick={() => increaseGuestCount('adults')}
                                >
                                  +
                                </button>
                              </div>
                              <div className='flex flex-row items-center mt-2'>
                                <button
                                  className='px-3 py-1 text-black bg-gray-300 rounded hover:bg-gray-500 hover:text-white'
                                  onClick={() => decreaseGuestCount('children')}
                                  disabled={guests.children === 0}
                                >
                                  -
                                </button>
                                <span className='mx-2'>{guests.children}</span>
                                <button
                                  className='px-3 py-1 text-black bg-gray-300 rounded hover:bg-gray-500 hover:text-white'
                                  onClick={() => increaseGuestCount('children')}
                                >
                                  +
                                </button>
                              </div>
                              <div className='flex flex-row items-center mt-2'>
                                <button
                                  className='px-3 py-1 text-black bg-gray-300 rounded hover:bg-gray-500 hover:text-white'
                                  onClick={() => decreaseGuestCount('infants')}
                                  disabled={guests.infants === 0}
                                >
                                  -
                                </button>
                                <span className='mx-2'>{guests.infants}</span>
                                <button
                                  className='px-3 py-1 text-black bg-gray-300 rounded hover:bg-gray-500 hover:text-white'
                                  onClick={() => increaseGuestCount('infants')}
                                >
                                  +
                                </button>
                              </div>
                              <div className='flex flex-row items-center mt-2'>
                                <button
                                  className='px-3 py-1 text-black bg-gray-300 rounded hover:bg-gray-500 hover:text-white'
                                  onClick={() => decreaseGuestCount('pets')}
                                  disabled={guests.pets === 0}
                                >
                                  -
                                </button>
                                <span className='mx-2'>{guests.pets}</span>
                                <button
                                  className='px-3 py-1 text-black bg-gray-300 rounded hover:bg-gray-500 hover:text-white'
                                  onClick={() => increaseGuestCount('pets')}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>

                        </div>
                      )}
                    </div>
                  </div>

                  <div className='flex justify-center mt-8'>
                    <button onClick={navigateToCheckout} className='py-2 text-white bg-gray-700 border border-gray-700 rounded-lg lg:px-32 hover:bg-white hover:text-gray-700 sm:px-8'>
                      Reserve
                    </button>
                  </div>
                </div>

                <div className='flex flex-row justify-center mt-4'>
                      <span className="mt-2 mr-2">
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#374151"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21V3.90002C5 3.90002 5.875 3 8.5 3C11.125 3 12.875 4.8 15.5 4.8C18.125 4.8 19 3.9 19 3.9V14.7C19 14.7 18.125 15.6 15.5 15.6C12.875 15.6 11.125 13.8 8.5 13.8C5.875 13.8 5 14.7 5 14.7" stroke="374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                      </span>
                      <button className='mt-1 text-gray-700 underline bg-transparent rounded-lg hover:decoration-solid'>
                        Report this listing
                      </button>
                </div>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Page;
