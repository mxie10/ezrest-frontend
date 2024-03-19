import React from 'react';
import Title from '../../components/Title';

const CancellationPolicy = () => {
  return (
    <div className='flex flex-col pb-4 border-b-2'>
        <Title title='Cancellation policy -- flexible, free cancellation' fontSize='text-lg' />
        <div className='text-neutral-500'>
            Guests can cancel until 5 days before check-in for a full refund, and you won’t be paid.
            If you cancel after that, you’ll be paid for each night they stay, plus 1 additional night, plus 50% for all unspent nights
        </div>
    </div>
  )
}

export default CancellationPolicy;
