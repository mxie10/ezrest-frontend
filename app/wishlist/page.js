'use client'

import React, { useContext } from 'react'
import Listing from '../components/Listing';
import { listings } from '../../public/static/testData.js';
import useFetchWishLists from '../hooks/requests/useFetchWishLists';
import { useSelector } from "react-redux";
import { Context } from '../context/useContext';

const Page = () => {

  const { user } = useContext(Context);
  if(!user) {
    return <>...Loading</>
  }
  useFetchWishLists(user._id);
  const wishLists = useSelector(state => state.wishLists.data);
  const isLoading = useSelector(state => state.wishLists.isLoading)
  const listingArray = wishLists?.data || [];
  console.log('wishLists:',wishLists);
  
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
                    <Listing listing = {listing}/>
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
