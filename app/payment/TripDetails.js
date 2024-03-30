import React from 'react'
import Title from '../components/Title';

const TripDetails = () => {
    return (
        <div className='flex flex-col gap-2 border-b-2 pb-4'>
            <Title title='Your trip' fontSize='text-xl' />
            {/* date */}
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='font-bold'>Dates</div>
                    <div className='underline font-bold cursor-pointer'>Edit</div>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className='text-neutral-500'>Check in: Sep 19, 2024</div>
                    <div className='text-neutral-500'>Check out: Sep 19, 2024</div>
                </div>
            </div>
            {/* address */}
            <div className='flex flex-col gap-2'>
                <div className='font-bold'>Address</div>
                <div className='text-neutral-500'>16514 blenham way, Chesterfield, MO, 63005</div>
            </div>
            {/* guests */}
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='font-bold'>Guests</div>
                    <div className='underline font-bold cursor-pointer'>Edit</div>
                </div>
                <div className='text-neutral-500'>2 guests</div>
            </div>
        </div>
    )
}

export default TripDetails;
