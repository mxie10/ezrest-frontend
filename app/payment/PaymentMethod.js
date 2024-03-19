import React from 'react'
import CardInfo from './CardInfo';

const PaymentMethod = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='text-neutral-600 font-semibold'>How do you want to pay for this trip?</div>
        <CardInfo cardNumber='8723' cardType='Debit card'/>
        <CardInfo cardNumber='1324' cardType='Credit card'/>
    </div>
  )
}

export default PaymentMethod;
