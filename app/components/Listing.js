'use client'

import React, {useContext, useState, useRef, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addWishList,deleteWishList } from '../api/wishList';
import { Context } from '../context/useContext';

const Listing = (props) => {

  const [like, setLike] = useState(false);
  const iconRef = useRef(null);
  const router = useRouter();
  const { user } = useContext(Context);
  const { _id, address, availableDate, weekdayPrice, weekendPrice, imageSrc } = props.listing;
  const { liked } = props;

  useEffect(() => {
    liked && liked == true ? setLike(true) : setLike(false);
  },[liked])

  const navigateToListingDetails = () => {
    router.push(`/listingDetails?listingID=${_id}`);
  }

  const addOrRemoveFavoriteListing = (e) => {
    e.stopPropagation();
    if(!liked){
      addWishList(user._id, props.listing._id);
      setLike(true);
    }else{
      deleteWishList(_id);
      setLike(false);
    }
  }

  return (
    <Card sx={{ maxWidth: 328 }} 
      className='rounded-lg cursor-pointer' 
      onClick={navigateToListingDetails}
    >
      <CardMedia
        component="img"
        image={imageSrc}
        alt="Paella dish"
        className='h-56 rounded-md'
      />
      <CardContent>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row justify-between items-center'>
            <div className='font-serif text-md'>
              {address.city} {address.state} {address.country}
            </div>
            <IconButton 
              aria-label="add to favorites" 
              onClick={(e)=>addOrRemoveFavoriteListing(e)} 
            >
              <FavoriteIcon 
                ref = {iconRef}
                style={like ? { color: 'red' } : {}} 
              />
            </IconButton>
          </div>
          <div className='font-serif text-sm text-neutral-500'>
            Available from {availableDate?.substring(0,10)}
          </div>
          <div className='font-bold text-sm'>
            <div>
              ${weekdayPrice} a night
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Listing;