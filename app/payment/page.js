'use client';
import React, { useEffect, useState } from 'react';
import BookingCard from '../components/BookingCard';
import { useRouter, useSearchParams } from 'next/navigation';
import { MdArrowForwardIos } from "react-icons/md";
import Title from '../components/Title';
import TripDetails from './TripDetails';
import PriceDetails from './PriceDetails';
import PaymentMethod from './PaymentMethod';
import CancellationPolicy from './CancellationPolicy';
import { Transition } from '@headlessui/react';

const PaymentScreen = () => {

  const [step, setStep] = useState(0);
  const searchParams = useSearchParams();
  const listingData = JSON.parse(searchParams.get('listingData'));
  const reservation = JSON.parse(searchParams.get('reservation'));

  const [tripDetails, setTripDetails] = useState({
    userID:'',
    listingID:'',
    checkinDate:'',
    checkoutDate:'',
    guests:{
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0
    },
    nights:0,
    listingPrice:0,
    confirmationCode:'',
    payment:{
      method:'',
      cardNumber:'',
      name:'',
      expirayDate:''
    },
    totalPrice:''
  })

  console.log('listingData:',listingData);
  console.log('reservation:',reservation);

  const Button = (props) => {
    const { actionLabel, position, onClick } = props;
    return (
      <div
        className={`
          bg-red-500 
          p-2 
          rounded-lg 
          text-white 
          w-1/4 
          text-center 
          font-bold 
          absolute 
          ${position}
          cursor-pointer
         hover:bg-red-600
        `}
        onClick={onClick}
      >
        {actionLabel}
      </div>
    )
  }

  const BookingDetailsScreen = () => {

    return (
      <div className={`flex flex-col transition-opacity duration-500 ease-in-out ${step === 0 ? 'block opacity-100' : 'hidden opacity-0'}`}>
        {/* header */}
        <Title title='Trip details' fontSize='text-2xl' borderBottom />
        {/* trip details */}
        <TripDetails />
        {/* Price details */}
        <PriceDetails />
      </div>
    )
  }

  const SelectPaymentMethodScreen = () => {

    return (
      <div
        className={`
            flex 
            flex-col 
            transition-opacity 
            duration-500 
            ease-in-out 
            gap-3 
            ${step === 1 ? 'block opacity-100' : 'hidden opacity-0'}
            mb-6
          `
        }
      >
        <Title title='How would you like to pay?' fontSize='text-2xl' borderBottom />
        <PaymentMethod />
      </div>
    )
  }

  const ConfirmPaymentScreen = () => {

    return (
      <div
        className={`
            flex 
            flex-col 
            transition-opacity 
            duration-500 
            ease-in-out 
            gap-3 
            ${step === 2 ? 'block opacity-100' : 'hidden opacity-0'}
          `
        }
      >
        <Title title='Confirm and pay' fontSize='text-2xl' />
        <div className='flex flex-row justify-between border-b-2 text-neutral-600 font-bold'>
          <div>Total</div>
          <div>$1320</div>
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <div className='flex flex-row gap-10 w-full'>
            <div className='flex flex-col gap-2 w-4/5'>
              <div>Card Number:</div>
              <input
                type='text'
                className='border-2 border-neutral-300  rounded-md'
              />
            </div>
            <div className='flex flex-col gap-2 w-1/5'>
              <div>CVV:</div>
              <input
                type='text'
                className='border-2 border-neutral-300  rounded-md'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 w-3/5'>
            <div>Name on Card:</div>
            <input
              type='text'
              className='border-2 border-neutral-300  rounded-md'
            />
          </div>
        </div>
        <CancellationPolicy />
        <div className='text-neutral-500 pb-4'>
          I agree to the <span className='text-sky-600'>House Rules, Cancellation policy</span>,
          and the <span className='text-sky-600'>Guest refind policy</span>. I also agree to pay total amount
          shown, which includes service fees.
        </div>
      </div>
    )
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
              step === 0 ? <BookingDetailsScreen /> :
                step === 1 ? <SelectPaymentMethodScreen /> :
                  step === 2 ? <ConfirmPaymentScreen /> : <></>
            }
            <div className='mt-10'>
              {
                step !== 0 ?
                  <Button actionLabel='Back' position='left-0 -bottom-2' onClick={() => setStep(pre => pre - 1)} />
                  : null
              }
              <Button
                actionLabel={step === 0 || step === 1 ? 'Next' : 'Confirm'}
                position='right-0 -bottom-2'
                onClick={() => setStep(pre => pre + 1)}
              />
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
