import React from 'react'
import Title from '../../components/Title';
import CancellationPolicy from '../CancellationPolicy';

const cardInfo = [
    {
      title:'Card Number:',
      name: 'cardNumber',
      type: 'text'
    },
    {
      title:'Name on Card:',
      name: 'name',
      type: 'text'
    },
    {
      title:'CVV:',
      name: 'cvv',
      type: 'text'
    },
    {
      title:'Expiray Date:',
      name: 'expirayDate',
      type: 'date'
    },
  ]
  

const ConfirmPaymentScreen = (props) => {

    const {updateFields,step} = props

    return (
        <div
            className={`
              flex 
              flex-col 
              transition-opacity 
              duration-500 
              ease-in-out 
              gap-3 
              ${step === 2 ? 'block opacity-100' : 'hidden opacity-0'}
            `
            }
        >
            <Title title='Confirm and pay' fontSize='text-2xl' />
            <div className='flex flex-row justify-between border-b-2 text-neutral-600 font-bold'>
                <div>Total</div>
                <div>$1320</div>
            </div>
            <div className='flex flex-row flex-wrap gap-4 w-full'>
                {
                    cardInfo.map((field) => (
                        <div className='flex flex-col gap-2 w-2/5' key={field.name}>
                            <div>{field.title}</div>
                            <input
                                type={field.type}
                                name={field.name}
                                className='border-2 border-neutral-300  rounded-md p-2'
                                onChange={(e)=>updateFields(e)}
                            />
                        </div>
                    ))
                }
            </div>
            <CancellationPolicy />
            <div className='text-neutral-500 pb-4'>
                I agree to the <span className='text-sky-600'>House Rules, Cancellation policy</span>,
                and the <span className='text-sky-600'>Guest refind policy</span>. I also agree to pay total amount
                shown, which includes service fees.
            </div>
        </div>
    )
}


export default ConfirmPaymentScreen;
