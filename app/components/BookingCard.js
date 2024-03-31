'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const BookingCard = (props) => {

  const {onClick,reservation} = props;
  const {listingImageSrc,listingAddress,checkinDate, checkoutDate} = reservation;

  const addressArray = listingAddress.split(',');
  const lastThreeElements = addressArray.slice(-3);

  return (
    <Card sx={{ maxWidth: 300 }} className='rounded-lg cursor-pointer' onClick={onClick}>
      <CardMedia
        component="img"
        image={listingImageSrc}
        alt="Paella dish"
        sx={{ width:300, height:200, objectFit: 'cover'}}
      />
      <CardContent>
        <div className='flex flex-col gap-2'>
          <div className='font-serif font-bold'></div>
          <div className='font-serif text-md font-light text-neutral-500'>
              {lastThreeElements[0] + ', ' + lastThreeElements[1] + ', ' + lastThreeElements[2]}
          </div>
          <div className='font-light text-sm'>
              Hosted By Tom Henderson
          </div>
          <div className='font-light text-sm'>
              {checkinDate.substring(0, 10)} - {checkoutDate.substring(0, 10)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export default BookingCard;