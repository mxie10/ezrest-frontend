import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchWishLists } from '@/app/redux/actions/wishLists';

const useFetchWishLists = (userID) => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchWishLists(userID));

    }, [dispatch,userID])
}

export default useFetchWishLists;


