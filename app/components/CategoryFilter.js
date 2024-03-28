import React, { useRef, useState, useEffect } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"
import { canadianProvinces } from '../../public/static/province';
import { pricesRange, categories, bedRooms } from '../../public/static/listingFilterOptions';
import CategoryBox from './CategoryBox';

const CategoryFilter = () => {

    const Location = () => (
        <div className='flex flex-row gap-2 text-neutral-600 items-center font-serif'>
            <div className='text-md font-semibold'>
                Province:
            </div>
            <div>
                <Select>
                    <SelectTrigger className="w-[180px] border-2 border-neutral-300">
                        <SelectValue placeholder="Ontario"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {canadianProvinces.map((province, index) => {
                                return <SelectItem value="apple" key={index}>{province}</SelectItem>
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )



    const Category = () => (
        <div className='flex flex-row gap-2 text-neutral-600 items-center font-serif'>
            <div className='text-md font-semibold'>
                Category:
            </div>
            <div className='flex flex-row gap-4'>
                {categories.map((category) => {
                    return (
                        <div key={category.label} className='flex flex-col items-center'>
                            <CategoryBox
                                label={category.label}
                                icon={category.icon}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )

    const ListingPrice = () => (
        <div className='flex flex-row gap-2 text-neutral-600 items-center font-serif'>
            <div className='font-serif font-semibold'>
                Price:
            </div>
            <div className='flex flex-row gap-2 text-neutral-600 items-center'>
                <div className='flex flex-row gap-5'>
                    {pricesRange.map((price) => {
                        return (
                            <div key={price}>
                                {price}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

    const ListingBedrooms = () => (
        <div className='flex flex-row gap-2 text-neutral-600 items-center font-serif'>
            <div className='font-serif font-semibold'>
                Bedrooms:
            </div>
            <div className='flex flex-row gap-2 text-neutral-600 items-center'>
                <div className='flex flex-row gap-5'>
                    {bedRooms.map((bedroom) => {
                        return bedroom === '1' ? 
                            <div key={bedroom}>
                                Only 1
                            </div> : 
                            bedroom === '7+' ?
                            <div key={bedroom}>
                                more than 7
                            </div> :
                            <div>
                                {bedroom} bedrooms
                            </div>
                    })}
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div
                className='flex flex-col gap-5 px-4 mt-2'
            >
                <Location />
                <ListingPrice />
                <ListingBedrooms/>
                <Category />
            </div>
        </>
    )
}

export default CategoryFilter;
