import React,{useEffect} from 'react';
import Listing from './Listing';
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from '@/app/redux/actions/listings';

const Listings = (props) => {

  const {pageNumber,filterOptions} = props;
  const dispatch = useDispatch();
  const listings = useSelector(state => state.listings.data);
  const isLoading = useSelector(state => state.listings.isLoading);
  const listingArray = listings?.data || [];

  useEffect(() => {
    const params = {
      pageNumber:pageNumber,
      filterOptions:filterOptions
    }
    dispatch(fetchListings(params));
  }, [dispatch,pageNumber,filterOptions.apply,filterOptions.province,filterOptions.price,filterOptions.bedrooms,
    filterOptions.category,filterOptions.location,filterOptions.checkinDate
  ])

  if (isLoading) {
    return (
      <></>
    )
  }

  return (
    <div
          className="
              grid 
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3 
              lg:grid-cols-4 
              gap-12
              px-10
              mb-10
              mt-7
          "
        >
          {
            listingArray.map((listing, index) => {
              return (
                <Listing
                  listing={listing}
                  key={index}
                />
              )
            })
          }
        </div>
  )
}

export default Listings;
