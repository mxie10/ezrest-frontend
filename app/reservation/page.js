'use client';
import React, { useContext } from 'react';
import BookingCard from '../components/BookingCard';
import useReservationDetailsModal from '@/app/hooks/useReservationDetailsModal'
import { bookings } from '@/public/static/testBookingData';
import { useSelector } from "react-redux";
import useFetchReservations from '../hooks/requests/useFetchReservations';
import { Context } from '../context/useContext';

const BookingScreen = () => {

  const { user } = useContext(Context);

  useFetchReservations(user._id);
  const useReservation = useReservationDetailsModal();
  const isLoading = useSelector(state => state.reservations.isLoading);

  const reservations = useSelector(state => state.reservations.data);
  const reservationData = reservations?.data || [];

  console.log('reservations:',reservationData);

  const handleBookingOnClick = () => {
    useReservation.onOpen();
  }

  if(isLoading){
    return <>...Loading</>
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
            My Reservations
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
              reservationData && reservationData.map((reservation, index) => {
                return (
                  <BookingCard onClick={handleBookingOnClick} reservation={reservation} key={index}/>
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
