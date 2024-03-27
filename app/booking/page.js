'use client';
import React from 'react';
import BookingCard from '../../components/BookingCard';
import useBookingDetailsModal from '@/hooks/useBookingDetailsModal'
import { bookings } from '@/public/static/testBookingData';

const BookingScreen = () => {

  const useBooking = useBookingDetailsModal();

  const handleBookingOnClick = () => {
    useBooking.onOpen();
  }

  return (
    <div className='bg-neutral-50 min-h-screen'>
      <div
        className='
          flex
          flex-col
          px-10
          items-center
          min-h-screen
        '
      >
        <div
          className='
            flex
            flex-col
            justify-center
            mt-6
          '
        >
          <div
            className='
              font-bold
              text-3xl
            '
          >
            My Bookings
          </div>
          <div
            className='
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              items-center
              justify-between
              gap-6
              mt-7
            '
          >

            {
              bookings && bookings.map((booking, index) => {
                return (
                  <BookingCard onClick={handleBookingOnClick} booking={booking} key={index}/>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className='h-20'>

      </div>

    </div>
  )
}

export default BookingScreen;
