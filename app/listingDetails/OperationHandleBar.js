import React,{useEffect, useState} from 'react'

const OperationHandleBar = (props) => {

    const { category,decreaseGuestCount,increaseGuestCount,reservation } = props;
    const [guests,setGuests] = useState({
        
    });

    useEffect(() => {
        setGuests(...reservation.guests);
    },[reservation.guests])

    return (
        <div
            className='
                flex
                flex-row
                justify-between
            '
        >
            <div className=''>{category}:</div>
            <div className='flex flex-row items-center'>
                <button
                    className='px-3 py-1 text-black bg-gray-300 rounded hover:bg-gray-500 hover:text-white'
                    onClick={() => decreaseGuestCount(category)}
                    disabled={guests.adults === 0}
                >
                    -
                </button>
                <span className='mx-2'>{guests.adults}</span>
                <button
                    className='px-3 py-1 text-black bg-gray-300 rounded hover:bg-gray-500 hover:text-white'
                    onClick={() => increaseGuestCount(category)}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default OperationHandleBar;
