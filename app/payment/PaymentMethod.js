import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import Image from 'next/image';
import { paymentTypeIcons } from '../../public/static/icons';

const PaymentMethod = (props) => {

  const { tripDetails, setTripDetails } = props;
  const [selectedValue, setSelectedValue] = React.useState('');

  useEffect(() => {
    setSelectedValue(tripDetails.payment.method);
  }, [tripDetails.payment.method])

  const handleChange = (event) => {
    setTripDetails((prevDetails) => ({
      ...prevDetails,
      payment: {
        ...prevDetails.payment,
        method: event.target.value
      }
    }))
  }

  return (
    <FormControl>
      <div className='flex flex-col gap-5'>
        {
          paymentTypeIcons.map((method) => {
            return (
              <div className='flex flex-row'>
                <Radio
                  checked={selectedValue === method.title}
                  onChange={handleChange}
                  value={method.title}
                  name="radio-buttons"
                />
                <Image src={method.src} layout="intrinsic" width={method.width} height={method.height} alt='paymentImage' />
              </div>
            )})
        }
      </div>
    </FormControl>
  )
}

export default PaymentMethod;
