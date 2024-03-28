'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaStar } from "react-icons/fa";

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

  const {address,startDate,weekdayPrice,weekendPrice,imageSrc} = props;

  console.log('imageSrc:',imageSrc);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300 }} className='rounded-lg'>
      <CardMedia
        component="img"
        image={imageSrc}
        alt="Paella dish"
        className='h-56 rounded-md'
      />
      <CardContent>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row justify-between items-center'>
            <div className='font-serif text-lg'>
              Severn Canada
            </div>
            <div>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
          </div>
          <div className='font-light text-sm'>
            Avilable from April 14, 2024
          </div>
          <div className='font-bold text-sm'>
            $129 a night
          </div>
        </div>
      </CardContent>
      <CardActions disableSpacing className='-mt-6'>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        </ExpandMore>
      </CardActions>
    </Card>
  );
}

export default Listing;