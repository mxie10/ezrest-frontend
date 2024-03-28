'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Listing = (props) => {

  const { address, startDate, weekdayPrice, weekendPrice, imageSrc } = props.listing;

  return (
    <Card sx={{ maxWidth: 328 }} className='rounded-lg'>
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
              <FavoriteIcon />
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