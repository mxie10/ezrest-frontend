import React, { useState } from 'react';
import { Input } from "@/app/components/ui/input";
import { FaSearch } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from "react-icons/fa";

const SearchBarAlt = () => {
    const [startDate, setStartDate] = useState(new Date());
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
            <Input
                type="text"
                placeholder="Enter an address, ciy or ZIP code"
                className='w-3/12 h-14 text-lg border-2 rounded-3xl border-red-200'
            />
            <div className='flex flex-row items-center'>
                <DatePicker
                    selected={startDate}
                    className='h-14 pl-3 rounded-3xl border-2 border-red-200'
                />
                <FaCalendarAlt className='-ml-10' size={17} />
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
                    ml-6 
                    bg-red-500 
                    text-white
                '
            >
                Search
            </div>
        </div>
    )
}

export default SearchBarAlt;
