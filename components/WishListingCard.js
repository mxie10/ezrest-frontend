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

export default function ListingCard(props) {

  const {title,imageSrc,location,price} = props.listing;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300 }} className='rounded-lg'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
            <Typography variant="h7" component="div" fontWeight="bold">
                {title}
            </Typography>
        }
        subheader="May 20-25"
      />
      <CardMedia
          component="img"
          image={imageSrc}
          alt="Paella dish"
          className='h-56 rounded-md'
      />
      <CardContent>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row justify-between'>
                <div className=' font-serif'>Severn Canada</div>
                <div className='flex flex-row gap-1 items-center'>
                    <FaStar className=' text-black' size={15}/>
                    <div>4.95</div>
                </div>
            </div>
            <div className='font-light text-sm'>
                125 Km away
            </div>
            <div className='font-bold text-sm'>
                $129 a night
            </div>
        </div>
      </CardContent>
      <CardActions disableSpacing className='-mt-6'>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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