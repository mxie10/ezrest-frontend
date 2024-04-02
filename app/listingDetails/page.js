'use client'

import React, { useState, useContext, useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import DatePicker from 'react-datepicker';
import { useRouter, useSearchParams } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import ImagePresenter from './ImagePresenter';
import { Context } from '../context/useContext';
import { fetchListing } from '@/app/redux/actions/listings';
import { fetchReservationByListingID } from '../redux/actions/reservations';
import AmenitiesModal from './amenitiesModal';
import { iconsMap } from '../../public/static/icons';

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
  const {user} = useContext(Context);
  const searchParams = useSearchParams();
  const listingID = searchParams.get('listingID');
  const [showDropdown, setShowDropdown] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAmenities, setShowAmenities] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [error, setError] = useState(null);
  const [occupiedDates, setOccupiedDates] = useState(null);
  
  //listing info
  const listing = useSelector(state => state.listing.data);
  const isLoadingListing = useSelector(state => state.listing.isLoading)
  const listingData = listing?.data || [];

  //listing reservation info
  const listingReservations = useSelector(state => state.reservation.data);
  const isLoadinglistingReservations = useSelector(state => state.reservation.isLoading)
  const listingReservationsData = listingReservations?.data || [];

  const totalGuests = reservation.guests.adults + reservation.guests.children + reservation.guests.infants + reservation.guests.pets;

  console.log('listingData:',listingData);

  useEffect(() => {
    if(user) {
      dispatch(fetchListing(listingID));
      dispatch(fetchReservationByListingID({listingID:listingID,userID:user._id}));
    }
  }, [dispatch,user]);

  useEffect(() => {
    if (reservation.checkinDate !== '' && reservation.checkoutDate !== '' && totalGuests !== 0) {
      setError(null);
    }
  }, [reservation.guests, reservation.checkinDate, reservation.checkoutDate])

  useEffect(() => {
    if(listingReservationsData && listingReservationsData.length > 0){
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

  const description = "Escape to Rock 'n' House, a marvel featured in Architectural Digest, nestled on a 14-acre estate down a secluded road - 2 hrs from NYC. This architectural wonder with panoramic views and circular design offers seamless integration with nature. Inside, the main level offers open concept living, sunken lounge and dining for 10, with radiant heat & central air to ensure your comfort. Outdoors enjoy stunning vistas from the outdoor firepit and porch table.";

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleShowAmenities = () => {
    setShowAmenities(!showAmenities);
  };

  if (isLoadingListing || isLoadinglistingReservations) return <>...Loading</>

  console.log('listingData.basicInformation:',listingData.basicInformation);

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

            <div className='flex flex-row mt-4 '>
              <Avatar className='mt-2'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className='flex flex-col ml-4'>
                <h1 className='font-semibold'>Hosted By {listingData?.landlordName}</h1>

                <div className='flex flex-row'>
                  <p className='text-sm text-gray-500'>Host Rating:</p>
                  <p className='ml-2 text-sm text-gray-500'>
                    4.8
                  </p>
                  <svg className='mt-1 ml-2' width="12px" height="12px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path clipRule="evenodd" d="M12.1904 2.64611C12.9026 1.09713 15.0974 1.09713 15.8096 2.64611L18.607 8.72957L25.2394 9.51836C26.9281 9.71921 27.6063 11.813 26.3578 12.9711L21.4543 17.5197L22.7559 24.0907C23.0874 25.7638 21.3118 27.0578 19.8279 26.2246L14 22.9523L8.17211 26.2246C6.6882 27.0578 4.91264 25.7638 5.24406 24.0907L6.54569 17.5197L1.64223 12.9711C0.3937 11.813 1.07191 9.71921 2.76065 9.51836L9.39298 8.72957L12.1904 2.64611ZM14.4543 4.4713C14.2758 4.08315 13.7242 4.08315 13.5457 4.4713L11.2026 9.56685C10.9123 10.1981 10.3159 10.6328 9.62762 10.7147L4.06902 11.3758C3.64578 11.4261 3.47555 11.949 3.78803 12.2388L7.89874 16.0521C8.40759 16.5241 8.63541 17.2274 8.50034 17.9093L7.40955 23.4159C7.32661 23.8346 7.77263 24.158 8.14481 23.949L13.0266 21.208C13.6314 20.8684 14.3686 20.8684 14.9734 21.208L19.8552 23.949C20.2274 24.158 20.6734 23.8346 20.5905 23.4159L19.4997 17.9093C19.3646 17.2274 19.5924 16.5241 20.1013 16.0521L24.212 12.2388C24.5244 11.949 24.3542 11.4261 23.931 11.3758L18.3724 10.7147C17.6841 10.6328 17.0877 10.1982 16.7974 9.56685L14.4543 4.4713Z" fill="#6b7280" fillRule="evenodd"></path></g></svg>
                </div>
              </div>
            </div>

            <div className="relative mt-4 mr-2 border-t border-b border-gray-300">
              <div className={`overflow-hidden transition-all duration-500 ${showMore ? 'max-h-full' : 'max-h-20'}`}>
                <p className="mt-2 mr-4 text-justify text-gray-500">{listingData?.description}</p>
              </div>

              {listingData?.description?.length > 100 && (
                <button onClick={toggleShowMore} className="mt-2 mb-2 font-semibold text-black underline bg-transparent ">Show {showMore ? 'less...' : 'more...'}</button>
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
              <button onClick={toggleShowAmenities} className="px-4 py-2 mt-4 text-black border border-gray-500 rounded-lg hover:bg-gray-500 hover:text-white">Show all amenities</button>
            </div>

          </div>


          <div className='flex flex-col h-full py-4 rounded-lg shadow-md shadow-gray-500 2xl:w-1/3 '>
            <div className='flex flex-row'>
              <h1 className='flex justify-start ml-5 text-lg font-semibold'>{listingData.weekdayPrice} CAD</h1>
              <p className='mt-1 ml-2 text-gray-500'>night</p>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='flex flex-col border border-gray-500 rounded-lg p-2 bg-transparent ml-5 mt-4 w-[90%]'>
                <div className='flex flex-row mt-4 mb-4 border-b border-gray-500'>
                  <div className="w-1/2 border-r border-gray-500">
                    <DatePicker
                      selected={reservation.checkinDate}
                      onChange={(date) => setCheckinDate(date)}
                      placeholderText='Check-in'
                      className='w-full ml-2 bg-transparent'
                      excludeDates={occupiedDates}
                    />
                  </div>
                  <div className="w-1/2">
                    <DatePicker
                      selected={reservation.checkoutDate}
                      onChange={(date) => setCheckOutDate(date)}
                      placeholderText='Check-out'
                      className='w-full mb-2 ml-2 bg-transparent'
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
                                disabled={reservation.guests.adults === 0}
                              >
                                -
                              </button>
                              <span className='mx-2'>{reservation.guests.adults}</span>
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
                                disabled={reservation.guests.children === 0}
                              >
                                -
                              </button>
                              <span className='mx-2'>{reservation.guests.children}</span>
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
                                disabled={reservation.guests.infants === 0}
                              >
                                -
                              </button>
                              <span className='mx-2'>{reservation.guests.infants}</span>
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
                                disabled={reservation.guests.pets === 0}
                              >
                                -
                              </button>
                              <span className='mx-2'>{reservation.guests.pets}</span>
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
