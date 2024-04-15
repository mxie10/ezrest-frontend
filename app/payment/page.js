'use client';
import React, { useContext, useEffect, useState } from 'react';
import BookingCard from '../components/BookingCard';
import { useRouter, useSearchParams } from 'next/navigation';
import { MdArrowForwardIos } from "react-icons/md";
import { Transition } from '@headlessui/react';
import ConfirmPaymentScreen from './screens/ConfirmPaymentScreen';
import BookingDetailsScreen from './screens/BookingDetailsScreen';
import SelectPaymentMethodScreen from './screens/SelectPaymentMethodScreen';
import Button from './Button';
import { Context } from '../context/useContext';
import { makeReservation } from '../api/reservation';
import { updateAvailableDate } from '../api/listings';
import {findFirstAvailableDate} from '../utils/findAvailableDate';

const PaymentScreen = () => {

  const { user } = useContext(Context);
  const router = useRouter();
  if(!user) { 
    router.push('/'); 
    return; 
  }
  
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const listingData = JSON.parse(decodeURIComponent(searchParams.get('listingData')));
  const reservation = JSON.parse(decodeURIComponent(searchParams.get('reservation')));
  const occupiedDates = JSON.parse(decodeURIComponent(searchParams.get('ecodedOccupiedDates')));
  const userID = JSON.parse(decodeURIComponent(searchParams.get('userID')));

  const firstAvailableDate = findFirstAvailableDate(occupiedDates,reservation);

  const [tripDetails, setTripDetails] = useState({
    userID: '',
    listingID: '',
    listingSrc:'',
    listingAddress:'',
    checkinDate: '',
    checkoutDate: '',
    guests: {
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0
    },
    nights: 0,
    listingPrice: 0,
    confirmationCode: '',
    payment: {
      method: 'visa',
      cardNumber: '',
      name: '',
      cvv: '',
      expirayDate: '',
    },
    totalPrice: ''
  })

  useEffect(() => {

    let nights = calculateNight(reservation.checkinDate,reservation.checkoutDate);
    let totalPrice = calculateTotalPrice(listingData.weekdayPrice,reservation,nights);
    let listingAddress = listingData.address.addressLine1 + ',' + listingData.address.addressLine2 + 
    listingData.address.city + ',' + listingData.address.state + ',' + listingData.address.country 

    setTripDetails((prevDetails) => ({
      ...prevDetails,
      userID:userID,
      listingID:listingData._id,
      listingImageSrc:listingData.imageSrc,
      listingAddress:listingAddress,
      checkinDate:reservation.checkinDate,
      checkoutDate:reservation.checkoutDate,
      guests:{
        ...prevDetails.guests,
        adults:reservation.guests.adults,
        children:reservation.guests.children,
        infants:reservation.guests.infants,
        pets:reservation.guests.pets
      },
      nights:nights,
      listingPrice: listingData.weekdayPrice,
      totalPrice:totalPrice
    }))
    
  }, [])

  const calculateNight = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = end.getTime() - start.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  }

  const calculateTotalPrice = (listingPrice, reservation, nights) => {
    let totalPrice = 0;
    let adults = reservation.guests.adults;
    let children = reservation.guests.children;
    let infants = reservation.guests.infants;
    let pets = reservation.guests.pets;

    if(adults > 1){
      totalPrice += listingPrice + (adults-1) * (listingPrice * 0.5)
    }else if(adults === 1){
      totalPrice += listingPrice;
    }
    if(children > 1){
      totalPrice += listingPrice * 0.5 + (children-1) * (listingPrice * 0.5 * 0.5)
    }else if(children === 1){
      totalPrice += listingPrice * 0.5
    }
    if(infants >= 1){
      totalPrice += 50
    }
    if(pets >= 1){
      totalPrice += 50
    }
    return totalPrice * nights;
  }

  const updateFields = (e) => {
    setTripDetails((prevDetails) => ({
      ...prevDetails,
      payment: {
        ...prevDetails.payment,
        [e.target.name]: e.target.value
      }
    }))
  }

  // console.log('tripDetails:', tripDetails);

  const confirmAndPay = () => {
    if (step !== 2) {
      setStep(pre => pre + 1)
    }else {
      if(tripDetails.payment.cardNumber === '' || tripDetails.payment.cvv === '' ||
          tripDetails.payment.expirayDate === '' || tripDetails.payment.method === ''
      ){
        alert('Please fill out card info');
        return;
      }else{
        setTripDetails((prevDetails)=>({
          ...prevDetails,
          payment:{
            ...prevDetails.payment,
          }
        }));
        updateAvailableDate(listingData._id,firstAvailableDate);
        makeReservation(tripDetails);
        router.push('/appreciate');
      }
    }
  }

  return (
    <div className='min-h-screen flex flex-col items-center mt-6'>
      {/* progress info */}
      <div className='w-2/3 text-neutral-500 flex flex-row gap-2 items-center'>
        <div>1. Review the details</div>
        <div><MdArrowForwardIos size={13} /> </div>
        <div>2. Make a payment</div>
      </div>
      {/* content section*/}
      <div className='w-10/12 md:w-2/3 mt-2'>
        <div className='flex flex-row justify-between gap-8'>
          <div className='flex flex-col md:w-2/3 w-full relative'>
            {
              step === 0 ? <BookingDetailsScreen step={step} /> :
                step === 1 ?
                  <SelectPaymentMethodScreen
                    tripDetails={tripDetails}
                    setTripDetails={setTripDetails}
                    step={step}
                  /> :
                step === 2 ?
                  <ConfirmPaymentScreen
                    updateFields={updateFields}
                    step={step}
                  /> :
                <></>
            }
            <div className='mt-10'>
              {
                step !== 0 ?
                  <Button actionLabel='Back' position='left-0 -bottom-2' onClick={() => setStep(pre => pre - 1)} />
                  : null
              }
              <div>
                <Button
                  actionLabel={step === 0 || step === 1 ? 'Next' : 'Confirm'}
                  position='right-0 -bottom-2'
                  onClick={confirmAndPay}
                />
              </div>
            </div>
          </div>
          <div className='hidden md:block md:w-1/3'>
            {/* <BookingCard booking={testData} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentScreen;
