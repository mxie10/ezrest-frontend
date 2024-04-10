import React from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from "react-icons/fa";

const SearchBarAlt = (props) => {

    const {location,setLocation,setCheckinDate,handleSearchOnClick} = props;

    return (
        <div
            className='
                flex 
                flex-row 
                gap-2
                font-serif
                justify-center
                items-center
                mt-4
                w-full
            '
        >
            <input
                type="text"
                placeholder="Enter a ciy or ZIP code"
                className='w-3/12 h-14 text-lg border-2 rounded-3xl border-red-300 px-2'
                onChange = {e => setLocation(e.target.value)}
                value={location}
            />
            <div className='flex flex-row items-center'>
                <DatePicker
                    placeholderText='Check in date'
                    selected={null}
                    className='h-14 pl-3 w-40 rounded-3xl border-2 border-red-300'
                    onChange={(date) => setCheckinDate(date)}
                />
                <FaCalendarAlt className='-ml-8 z-20' size={17} />
            </div>
            <div 
                className='
                    w-22 
                    flex 
                    flex-row 
                    items-center 
                    justify-center 
                    h-14 
                    rounded-3xl 
                    px-5 
                    text-lg 
                    ml-4
                    bg-red-500 
                    text-white
                    cursor-pointer
                    hover:bg-red-600
                '
                onClick={handleSearchOnClick}
            >
                Search
            </div>
        </div>
    )
}

export default SearchBarAlt;
