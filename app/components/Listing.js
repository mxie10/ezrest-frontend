'use client'

import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Listing = (props) => {

  const [like, setLike] = useState(false);
  const { address, startDate, weekdayPrice, weekendPrice, imageSrc } = props.listing;

  const navigateToListingDetails = () => {
    setLike(!like);
  }

  const addOrRemoveFavoriteListing = () => {
    setLike(!like);

  }

  return (
    <Card sx={{ maxWidth: 328 }} className='rounded-lg' onClick={navigateToListingDetails}>
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
            <IconButton aria-label="add to favorites">
              <FavoriteIcon 
                style={like ? { color: 'red' } : {}} 
                onClick={addOrRemoveFavoriteListing} 
              />
            </IconButton>
          </div>
          <div className='font-serif text-sm text-neutral-500'>
            Avilable from {startDate}
          </div>
          <div className='font-bold text-sm'>
            ${weekdayPrice} a night
          </div>

        </div>
      </CardContent>
    </Card>
  );
}

export default Listing;