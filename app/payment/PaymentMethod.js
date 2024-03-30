import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CardInfo from './CardInfo';
import Image from 'next/image';
import logo from '../../public/images/paymentMethod/paypal.png';
import visa from '../../public/images/paymentMethod/visa.png';
import biance from '../../public/images/paymentMethod/binance.png';
import wechat from '../../public/images/paymentMethod/wechat.png';
import banktransfer from '../../public/images/paymentMethod/banktransfer.png';

const PaymentMethod = () => {

  const data = [
    {
      title: 'logo',
      src: logo,
      width:130,
      height:100
    },
    {
      title: 'visa',
      src: visa,
      width:300,
      height:100
    },
    {
      title: 'biance',
      src: biance,
      width:130,
      height:100
    },
    {
      title: 'wechat',
      src: wechat,
      width:330,
      height:100
    },
    {
      title: 'banktransfer',
      src: banktransfer,
      width:130,
      height:100
    }
  ]

  const RadioFormItem = (props) => {

    const { title, src, width, height } = props;

    return (
      <div className='flex flex-row'>
        <FormControlLabel value={title} control={<Radio />} />
        <Image src={src} layout="intrinsic" width={width} height={height} />
      </div>
    )
  }

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <div className='flex flex-col gap-5'>
          {
            data.map((method, index) => {
              return (
                <RadioFormItem
                  title = {method.title}
                  src = {method.src}
                  width = {method.width}
                  height = {method.height}
                  key={method.title}
                />
              )})
          }
        </div>
      </RadioGroup>
    </FormControl>
  )
}

export default PaymentMethod;
