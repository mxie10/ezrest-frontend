import React from 'react';
import Title from '../../components/Title';
import TripDetails from '../TripDetails';
import PriceDetails from '../PriceDetails';

const BookingDetailsScreen = (props) => {

    const { step,price,nights,totalCost } = props;

    console.log('totalCost:',totalCost);

    return (
        <div className={`flex flex-col transition-opacity duration-500 ease-in-out ${step === 0 ? 'block opacity-100' : 'hidden opacity-0'}`}>
          {/* header */}
          <Title title='Trip details' fontSize='text-2xl' borderBottom />
          {/* trip details */}
          <TripDetails />
          {/* Price details */}
          <PriceDetails 
            price={price}
            nights={nights}
            totalCost={totalCost}
          />
        </div>
      )
}

export default BookingDetailsScreen;
