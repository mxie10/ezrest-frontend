import React, { useState, useEffect } from 'react';
import Listing from './Listing';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from '@/app/redux/actions/listings';

const Listings = (props) => {

  const { filterOptions } = props;
  const [ pageNumber, setPageNumber ] = useState(1);
  const dispatch = useDispatch();
  const listings = useSelector(state => state.listings.data);
  const isLoading = useSelector(state => state.listings.isLoading);
  const listingArray = listings?.data || [];

  useEffect(() => {
    const params = {
      pageNumber: pageNumber,
      filterOptions: filterOptions
    }
    dispatch(fetchListings(params));
  }, [dispatch, pageNumber, filterOptions.apply, filterOptions.province, filterOptions.price, filterOptions.bedrooms,
    filterOptions.category, filterOptions.location, filterOptions.checkinDate
  ])

  const handlePageChange = (event, newPage) => {
    setPageNumber(newPage);
  }

  if (isLoading) {
    return (
      <></>
    )
  }

  return (
    <div className='flex flex-col gap-5'>
      <div
        className='
            grid 
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-12
            px-10
            mb-10
            mt-7
        '
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
      <div className='flex justify-center mb-10'>
        <Stack spacing={10}>
          <Pagination
            count={15}
            color="primary"
            onChange={handlePageChange}
            page={pageNumber}
          />
        </Stack>
      </div>
    </div>
  )
}

export default Listings;
