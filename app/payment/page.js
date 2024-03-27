'use client';
import React, { useEffect, useState } from 'react';
import BookingCard from '../../components/BookingCard';
import { MdArrowForwardIos } from "react-icons/md";
import Title from '../../components/Title';
import TripDetails from './TripDetails';
import PriceDetails from './PriceDetails';
import PaymentMethod from './PaymentMethod';
import CancellationPolicy from './CancellationPolicy';
import { Transition } from '@headlessui/react';

const testData = {
  _id: { "$oid": "65dd20ca73b370c075e7f464" },
  status: 'Reservation Confirmed',
  confirmationCode: "HMAMNBWYF5",
  description: "House",
  imageSrc: 'https://a0.muscache.com/im/pictures/a4140371-0e56-4554-b593-4f64242d5419.jpg?im_w=720',
  createdAt: { "$date": { "$numberLong": "1689606868828" } },
  userId: { "$oid": "65d79834c2f97225f93c136b" },
  cost: 360,
  nights: 2,
  startDate: 'Sep 24, 2024',
  endDate: 'Oct 30, 2024'
}

const PaymentScreen = () => {

  const [step, setStep] = useState(0);

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

  const MakePaymentScreen = () => {

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
          `
        }
      >
        <Title title='Confirm and pay' fontSize='text-2xl' />
        <div className='flex flex-row justify-between border-b-2 text-neutral-600'>
          <div>Total</div>
          <div>$1320</div>
        </div>
        <PaymentMethod />
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
            <Transition
              show={step === 0}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <BookingDetailsScreen />
            </Transition>
            
            <Transition
              show={step === 1}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <MakePaymentScreen />
            </Transition>

            <div className='mt-10'>
              {step === 1 ?
                <Button actionLabel='Back' position='left-0 -bottom-2' onClick={() => setStep(0)} />
                : null
              }
              <Button actionLabel={step === 0 ? 'Next' : 'Confirm'} position='right-0 -bottom-2' onClick={() => setStep(1)} />
            </div>
          </div>
          <div className='hidden md:block md:w-1/3'>
            <BookingCard booking={testData} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default PaymentScreen;
