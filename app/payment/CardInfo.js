import React from 'react';
import { FaCcVisa } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";
import Select from '@mui/material/Select';

const CardInfo = (props) => {

  const {cardType, cardNumber} = props;

  return (
    <div className='flex flex-col gap-2 cursor-pointer hover:bg-neutral-200'>
        <div className='flex flex-row border-2 items-center gap-2 p-2 text-neutral-600'>
            <div className='border-2 border-blue-300 w-4 h-4 rounded-full'></div>
            <div>
                <FaCcVisa/>
            </div>
            <div>
                {cardType} **** {cardNumber}
            </div>
        </div>
    </div>
  )
}

export default CardInfo;
