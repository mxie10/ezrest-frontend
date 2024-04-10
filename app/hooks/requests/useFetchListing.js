import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchListing } from '@/app/redux/actions/listings';

const useFetchListing = (listingID) => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchListing(listingID));

    }, [dispatch,listingID])
}

export default useFetchListing;





