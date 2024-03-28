import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from "react-icons/fa";

const SearchBarAlt = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
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
                className='w-4/12 h-14 text-lg border-2 rounded-3xl border-neutral-300'
            />
            <div className='flex flex-row items-center'>
                    <DatePicker 
                        selected={startDate} 
                        className='h-14 pl-2 rounded-3xl border-2 border-neutral-300' 
                    />
                    <FaCalendarAlt className='-ml-10' size={17} />
                </div>
        </div>
    )
}

export default SearchBarAlt;
