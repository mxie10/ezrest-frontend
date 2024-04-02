'use client';
import React, { useContext,useEffect,useState } from 'react';
import BookingCard from '../components/BookingCard';
import useReservationDetailsModal from '@/app/hooks/useReservationDetailsModal'
import { useSelector } from "react-redux";
import { Context } from '../context/useContext';
import { useDispatch } from "react-redux";
import { fetchReservations } from '@/app/redux/actions/reservations';
import BookingDetailsModal from '@/app/components/modals/BookingDetailsModal';

const BookingScreen = () => {

  const { user } = useContext(Context);
  const dispatch = useDispatch();
  const useReservation = useReservationDetailsModal();
  const isLoading = useSelector(state => state.reservations.isLoading);
  const reservations = useSelector(state => state.reservations.data);
  const reservationData = reservations?.data || [];
  const [reservationInfo, setReservationInfo] = useState(null);

  useEffect(() => {
    if(user) {
      dispatch(fetchReservations(user._id));
    }
  }, [dispatch,user]);

  const handleBookingOnClick = (reservationInfo) => {
    setReservationInfo(reservationInfo);
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
                  <BookingCard 
                    onClick={() => handleBookingOnClick(reservation)} 
                    reservation={reservation} key={index}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
      <BookingDetailsModal reservationInfo={reservationInfo}/>
    </div>
  )
}

export default BookingScreen;
