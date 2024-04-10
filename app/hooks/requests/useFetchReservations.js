import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchReservations } from '@/app/redux/actions/reservations';

const useFetchReservations = (userID) => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchReservations(userID));

    }, [dispatch,userID])
}

export default useFetchReservations;

