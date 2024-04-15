'use client'

import React, { useContext,useEffect } from 'react'
import Listing from '../components/Listing';
// import useFetchWishLists from '../hooks/requests/useFetchWishLists';
import { useSelector } from "react-redux";
import { Context } from '../context/useContext';
import { useDispatch } from "react-redux";
import { fetchWishLists } from '@/app/redux/actions/wishLists';
import { FaCartPlus } from "react-icons/fa6";

const Page = () => {

  const { user } = useContext(Context);
  const dispatch = useDispatch();
  const wishLists = useSelector(state => state.wishLists.data);
  const isLoading = useSelector(state => state.wishLists.isLoading)
  const listingArray = wishLists?.data || [];

  useEffect(() => {
    if(user) {
      dispatch(fetchWishLists(user._id));
    }
  }, [dispatch,user]);

  if(isLoading){
    return <></>
  }

  if(!listingArray.length){
    return (
      <div className='min-h-screen flex flex-col items-center justify-center gap-2'>
        <div className=' text-2xl font-bold'>
          You do not have any favorite properties at the moment!
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
            Wish Lists
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
              listingArray && listingArray.map((listing, index) => {
                return (
                  <div key={index}>
                    <Listing 
                      listing = {listing}
                      liked = {true}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='h-20'>
        </div>
      </div>
    </div>
  )
}

export default Page;
