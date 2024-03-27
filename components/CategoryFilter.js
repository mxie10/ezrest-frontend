import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { canadianProvinces } from '../public/static/province';
import { pricesRange } from '../public/static/listingPrices';
import { categories } from '../public/static/listingCategories';
import CategoryBox from './CategoryBox';

const CategoryFilter = () => {

    const Location = () => (
        <div className='flex flex-row gap-2 text-neutral-600 items-center font-serif'>
            <div>
                Province:
            </div>
            <div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Ontario" />
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
            <div>
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
            <div className='font-serif'>
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

    return (
        <>
            <div className='flex flex-col gap-4 pt-4 bg-white p-4 mt-2 rounded-lg shadow-md'>
            <Category />
                <Location />
                <ListingPrice/>   
            </div>
        </>
    )
}

export default CategoryFilter;
