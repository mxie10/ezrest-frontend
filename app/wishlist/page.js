import React from 'react'
import ListingCard from '../../components/WishListingCard.js'
import { listings } from '../../public/static/testData.js';

const Page = () => {

  return (
    <div className='bg-neutral-50'>
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
            {/* <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard /> */}
            {
              listings && listings.map((listing, index) => {
                return (
                  <div key={index}>
                    <ListingCard listing={listing} />
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
