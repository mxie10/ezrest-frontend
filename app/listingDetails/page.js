'use client'

import React, { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import DatePicker from 'react-datepicker';
import { useRouter, useSearchParams } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import ImagePresenter from './ImagePresenter';
import { Context } from '../context/useContext';
import { fetchListing } from '@/app/redux/actions/listings';
import { fetchReservationByListingID } from '../redux/actions/reservations';
import AmenitiesModal from './AmenitiesModal';
import { iconsMap } from '../../public/static/icons';
import Map from './Map';

const Page = () => {

  const [reservation, setReservation] = useState({
    checkinDate: '',
    checkoutDate: '',
    guests: {
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0
    }
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useContext(Context);
  const searchParams = useSearchParams();
  const listingID = searchParams.get('listingID');
  const [showDropdown, setShowDropdown] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAmenities, setShowAmenities] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [error, setError] = useState(null);
  const [occupiedDates, setOccupiedDates] = useState(null);
  const guestsCategory = ['adults', 'children', 'infants', 'pets'];

  //listing info
  const listing = useSelector(state => state.listing.data);
  const isLoadingListing = useSelector(state => state.listing.isLoading)
  const listingData = listing?.data || [];

  //listing reservation info
  const listingReservations = useSelector(state => state.reservation.data);
  const isLoadinglistingReservations = useSelector(state => state.reservation.isLoading)
  const listingReservationsData = listingReservations?.data || [];

  const totalGuests = reservation.guests.adults + reservation.guests.children + reservation.guests.infants + reservation.guests.pets;

  console.log('listingData:', listingData);
  console.log('reservation:',reservation);
  useEffect(() => {
    if (user) {
      dispatch(fetchListing(listingID));
      dispatch(fetchReservationByListingID({ listingID: listingID, userID: user._id }));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (reservation.checkinDate !== '' && reservation.checkoutDate !== '' && totalGuests !== 0) {
      setError(null);
    }
  }, [reservation.guests, reservation.checkinDate, reservation.checkoutDate])

  useEffect(() => {
    if (listingReservationsData && listingReservationsData.length > 0) {
      const occupiedDates = listingReservationsData.reduce((acc, reservation) => {
        const checkinDate = new Date(reservation.checkinDate);
        const checkoutDate = new Date(reservation.checkoutDate);
        const datesBetween = getDatesBetween(checkinDate, checkoutDate);
        return [...acc, ...datesBetween];
      }, []);
      setOccupiedDates(occupiedDates);
    }
  }, [listingReservationsData])

  const getDatesBetween = (startDate, endDate) => {
    const dates = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

  const navigateToCheckout = () => {
    if (reservation.checkinDate === '' || reservation.checkoutDate === '') {
      setError('Check-in date and check-out date cannot be empty!');
      return;
    }
    if (totalGuests === 0) {
      setError('Guests number cannot be 0!');
      return;
    }
    const encodedListingData = encodeURIComponent(JSON.stringify(listingData));
    const encodedReservationData = encodeURIComponent(JSON.stringify(reservation));
    const ecodedUserID = encodeURIComponent(JSON.stringify(user._id));
    const queryString = `?listingData=${encodedListingData}&reservation=${encodedReservationData}&userID=${ecodedUserID}`;
    router.push(`/payment${queryString}`);
  };

  const setCheckinDate = (date) => {
    setReservation(prevState => ({
      ...prevState,
      checkinDate: date
    }));
  }

  const setCheckOutDate = (date) => {
    setReservation(prevState => ({
      ...prevState,
      checkoutDate: date
    }));
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const decreaseGuestCount = (type) => {
    if (reservation.guests[type] > 0) {
      setReservation(prevState => ({
        ...prevState,
        guests: {
          ...prevState.guests,
          [type]: reservation.guests[type] - 1
        }
      }));
    }
  };

  const increaseGuestCount = (type) => {
    console.log('type:',type);
    setReservation(prevState => ({
      ...prevState,
      guests: {
        ...prevState.guests,
        [type]: reservation.guests[type] + 1
      }
    }));
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseFullScreen = () => {
    setSelectedImage(null);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleShowAmenities = () => {
    setShowAmenities(!showAmenities);
  };

  if (isLoadingListing || isLoadinglistingReservations) return <>...Loading</>

  console.log('listingData.basicInformation:', listingData.basicInformation);

  return (
    <div className='flex justify-center min-h-screen'>
      <div className='justify-center 2xl:w-[60%] xl:w-3/4 sm:w-[90%] my-12 rounded-lg'>

        <div className='flex mt-4'>
          <ImagePresenter
            handleImageClick={(imageUrl) => handleImageClick(imageUrl)}
            handleCloseFullScreen={handleCloseFullScreen}
            selectedImage={selectedImage}
            imageSrc={listingData?.imageSrc}
          />
        </div>

        <div className='flex flex-row justify-between mt-6'>
          <div className='flex flex-col w-2/3'>
            <h1 className='text-2xl font-semibold'>{listingData?.title}</h1>
            <div className='flex flex-row justify-between mr-2 border-b border-gray-300'>
              <div className='flex flex-row mt-2'>
                {listingData?.basicInformation?.livingroom} Living rooms | {listingData?.basicInformation?.bedroom} Bedrooms | {listingData?.basicInformation?.kitchen} Kitchen | {listingData?.basicInformation?.bathroom} Bathroom
              </div>
            </div>

            <div className='flex flex-row mt-4 items-center gap-2'>
              <Avatar className='mt-2'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className='font-semibold'>Hosted By {listingData?.landlordName}</h1>
            </div>

            <div className="relative mt-4 mr-2 border-t border-b border-gray-300">
              <div className={`overflow-hidden transition-all duration-500 ${showMore ? 'max-h-full' : 'max-h-20'}`}>
                <p className="mt-2 mr-4 text-justify text-gray-500">{listingData?.description}</p>
              </div>

              {listingData?.description?.length > 100 && (
                <button onClick={toggleShowMore} className="mt-2 mb-2 font-semibold text-black underline bg-transparent ">
                  Show {showMore ? 'less...' : 'more...'}
                </button>
              )}
            </div>

            <div className='mt-4'>
              <h1 className='text-xl font-semibold'>What this place offers</h1>
            </div>

            <div className="flex flex-row w-[50%] justify-between mt-4 mr-4">
              <div className="flex flex-col items-start">
                {listingData.features?.slice(0, 3).map(feature => {
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
                {listingData.amenities?.slice(0, 3).map(amenity => {
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

            <div>
              <button
                onClick={toggleShowAmenities}
                className="px-4 py-2 mt-4 text-black border border-gray-500 rounded-lg hover:bg-gray-500 hover:text-white"
              >
                Show all amenities
              </button>
            </div>
          </div>


          <div className='flex flex-col h-full py-4 rounded-lg shadow-md shadow-gray-500 2xl:w-1/3 '>
            <div className='flex flex-row'>
              <h1 className='ml-5 text-lg font-semibold'>{listingData.weekdayPrice} CAD</h1>
              <p className='mt-1 ml-2 text-gray-500'>/night</p>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='flex flex-col border border-gray-500 rounded-lg p-2 bg-transparent ml-5 mt-4 w-[90%]'>
                <div className='flex flex-row mt-4 mb-4 border-b border-gray-500'>
                  <div className="border-r border-gray-500">
                    <DatePicker
                      selected={reservation.checkinDate}
                      onChange={(date) => setCheckinDate(date)}
                      placeholderText='Check-in'
                      className='w-4/5 h-6 ml-2 bg-transparent'
                      minDate={new Date()}
                      excludeDates={occupiedDates}
                    />
                  </div>
                  <div className="">
                    <DatePicker
                      selected={reservation.checkoutDate}
                      onChange={(date) => setCheckOutDate(date)}
                      placeholderText='Check-out'
                      className='w-4/5 h-6 mb-2 ml-2 bg-transparent'
                      minDate={new Date()}
                      excludeDates={occupiedDates}
                    />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <div className='relative mt-2'>
                    <div className='flex justify-between'>
                      <h1 className='ml-2 cursor-pointer'>
                        Guests:
                      </h1>
                      <p className='text-gray-500 ml-2 text-sm mt-[2px]'>
                        Total Guests: {totalGuests}
                      </p>
                      <span 
                        className='mr-5 hover:cursor-pointer' 
                        onClick={toggleDropdown}>{showDropdown ? '▲' : '▼'}
                      </span>
                    </div>
                    <div className='z-10 flex flex-col gap-2 w-full p-2 mt-2 bg-transparent rounded shadow-md'>
                      {guestsCategory.map((category) => {
                        return (
                          <div
                            className='
                                flex
                                flex-row
                                justify-between
                            '
                            key = {category}
                          >
                            <div className=''>{category}:</div>
                            <div className='flex flex-row items-center'>
                              <button
                                className='px-3 py-1 text-black bg-gray-300 rounded hover:bg-gray-500 hover:text-white'
                                onClick={() => decreaseGuestCount(category)}
                                disabled={reservation.guests?.adults === 0}
                              >
                                -
                              </button>
                              <span className='mx-2 w-3'>
                                {
                                  category === 'adults' ? reservation.guests?.adults :
                                  category === 'children' ? reservation.guests?.children :
                                  category === 'infants' ? reservation.guests?.infants :
                                  reservation.guests?.pets
                                }
                              </span>
                              <button
                                className='px-3 py-1 text-black bg-gray-300 rounded hover:bg-gray-500 hover:text-white'
                                onClick={() => increaseGuestCount(category)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className='flex justify-center mt-8'>
                  <button 
                    onClick={navigateToCheckout} 
                    className='py-2 text-white bg-gray-700 border border-gray-700 rounded-lg lg:px-32 hover:bg-white hover:text-gray-700 sm:px-8'
                  >
                    Reserve
                  </button>
                </div>
                {
                  error != null ? <div className='text-red-600'>{error}</div> : null
                }
              </div>

              <div className='flex flex-row justify-center mt-4'>
                <span className="mt-2 mr-2">
                  <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#374151"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21V3.90002C5 3.90002 5.875 3 8.5 3C11.125 3 12.875 4.8 15.5 4.8C18.125 4.8 19 3.9 19 3.9V14.7C19 14.7 18.125 15.6 15.5 15.6C12.875 15.6 11.125 13.8 8.5 13.8C5.875 13.8 5 14.7 5 14.7" stroke="374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </span>
                <button className='mt-1 text-gray-700 underline bg-transparent rounded-lg hover:decoration-solid'>
                  Report this listing
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* map area */}
        <div className='mt-5 w-full'>
          <div className='text-xl font-bold border-b-2 border-neutral-200 py-1'>Find the place on map</div>
          <Map/>
        </div>
      </div>
      <AmenitiesModal
        showAmenities={showAmenities}
        features={listingData.features}
        amenities={listingData.amenities}
        safetyFeatures={listingData.safety}
        toggleShowAmenities={toggleShowAmenities}
        iconsMap={iconsMap}
      />
    </div>
  )
}

export default Page;
