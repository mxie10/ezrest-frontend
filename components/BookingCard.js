'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const BookingCard = (props) => {

  const {onClick,booking} = props;
  const {imageSrc} = booking;

  return (
    <Card sx={{ maxWidth: 300 }} className='rounded-lg cursor-pointer' onClick={onClick}>
      <CardMedia
        component="img"
        image={imageSrc}
        alt="Paella dish"
        sx={{ width:300, height:200, objectFit: 'cover'}}
      />
      <CardContent>
        <div className='flex flex-col gap-2'>
          <div className='font-serif font-bold'>Scarborough Canada</div>
          <div className='font-serif text-sm font-light text-neutral-500'>
              Hosted by Kevin Mcnial
          </div>
          <div className='font-light text-sm'>
              Sep.24,2023 - Oct.25,2023
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export default BookingCard;