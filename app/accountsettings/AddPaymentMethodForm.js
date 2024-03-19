import React from 'react'
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import Button from '@/components/Button';

const imageAddress = [
    'https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg',
    'https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg',
    'https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_amex.84088b520ca1b3384cb71398095627da.svg',
    'https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_discover.7f05c82f07d62a0f8a69d54dbcd7c8be.svg'
]

const AddPaymentMethodForm = (props) => {

    const {cancelAddPaymentMethod} = props;

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-2'>
                {imageAddress && imageAddress.map((address, index) => {
                    return (
                        <Image
                            alt='Logo'
                            height='35'
                            width='40'
                            src={address}
                            key={index}
                        />
                    )
                })}
            </div>
            <div className='mt-2'>
                <TextField
                    id="outlined-basic"
                    label="Card Number"
                    variant="outlined"
                    className='h-12 w-full'
                />
            </div>
            <div className='flex flex-row gap-2 mt-2'>
                <TextField
                    id="outlined-basic"
                    label="Expiration"
                    variant="outlined"
                    className='h-12 w-full'
                />
                <TextField
                    id="outlined-basic"
                    label="CVV"
                    variant="outlined"
                    className='h-12 w-full'
                />
            </div>
            <div className='mt-2 flex flex-row justify-between gap-2'>
                <TextField
                    id="outlined-basic"
                    label="Postal Code"
                    variant="outlined"
                    className='h-12 w-1/2'
                />
                <TextField
                    id="outlined-basic"
                    label="Country/Region"
                    variant="outlined"
                    className='h-12 w-1/2'
                />
            </div>
          
            <div className='flex flex-row justify-between items-center mt-2'>
                <div
                    className='underline cursor-pointer'
                    onClick={cancelAddPaymentMethod}
                >
                        Cancle
                </div>
                <Button title='Submit' width='w-1/4' hover='hover:bg-slate-800'/>
            </div>
        </div>
    )
}

export default AddPaymentMethodForm;
