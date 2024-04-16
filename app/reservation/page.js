'use client';
import React, { useContext,useEffect,useState } from 'react';
import {useRouter} from 'next/navigation';
import BookingCard from '../components/BookingCard';
import useReservationDetailsModal from '@/app/hooks/useReservationDetailsModal'
import { useSelector } from "react-redux";
import { Context } from '../context/useContext';
import { useDispatch } from "react-redux";
import { fetchReservations } from '@/app/redux/actions/reservations';
import { FaCartPlus } from "react-icons/fa6";
import { deleteReservation } from '@/app/redux/actions/reservations';
import BookingDetailsModal from '@/app/components/modals/BookingDetailsModal';
import useBookingDetailsModal from '@/app/hooks/useReservationDetailsModal';

const BookingScreen = () => {

  const { user } = useContext(Context);
  const router = useRouter();
  const dispatch = useDispatch();
  const useReservation = useReservationDetailsModal();
  const isLoading = useSelector(state => state.reservations.isLoading);
  const reservations = useSelector(state => state.reservations.data);
  const ifDeleteLoading = useSelector(state => state.deleteReservation.isLoading);
  const reservationData = reservations?.data || [];
  const [reservationInfo, setReservationInfo] = useState(null);
  const useBooking = useBookingDetailsModal();

  useEffect(() => {
    if(user) {
      dispatch(fetchReservations(user._id));
    }
  }, [dispatch,user,ifDeleteLoading]);

  const handleBookingOnClick = (reservationInfo) => {
    setReservationInfo(reservationInfo);
    useReservation.onOpen();
  }

  const cancelReservation = (reservationID) => {
    dispatch(deleteReservation(reservationID));
    dispatch(fetchReservations(reservationInfo.userID));
    useBooking.onClose();
}

  if(isLoading){
    return <></>
  }

  if(!reservationData.length){
    return (
      <div className='min-h-screen flex flex-col items-center justify-center gap-2'>
        <div className=' text-2xl font-bold'>
          You do not have any reservations at the monent!
        </div>
        <FaCartPlus size={40}/>
      </div>
    )
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
              font-serif
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
                  <BookingCard 
                    onClick={() => handleBookingOnClick(reservation)} 
                    reservation={reservation} key={index}
                  />
                )})
            }
          </div>
        </div>
      </div>
      <BookingDetailsModal 
        reservationInfo={reservationInfo}
        cancelReservation={cancelReservation}
      />
    </div>
  )
}

export default BookingScreen;
