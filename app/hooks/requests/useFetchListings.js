import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from '@/app/redux/actions/listings';

const useFetchListings = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchListings());

    }, [dispatch])
}

export default useFetchListings;


