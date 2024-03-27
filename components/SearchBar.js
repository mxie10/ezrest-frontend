import React from 'react';
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <div
            className='
                absolute 
                flex 
                flex-row 
                w-full 
                text-center 
                transform 
                -translate-x-1/2 
                -translate-y-1/2 
                md:w-5/12 
                top-1/2 
                left-1/2 
                gap-2
                font-serif
            '
        >
            <div className="flex flex-row w-full items-center">
                <Input type="text" placeholder="Enter an address, ciy or ZIP code" className='w-full h-14 text-lg' />
                <FaSearch className="absolute right-5" size={20} />
            </div>
        </div>
    )
}

export default SearchBar;
