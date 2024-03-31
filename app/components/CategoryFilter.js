import React, { useState, useEffect } from 'react'
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

const priceRanges = [
    { min: 0, max: 200 },
    { min: 200, max: 500 },
    { min: 500, max: 1000 },
    { min: 1000, max: 1500 },
    { min: 1500, max: 2000 },
    { min: 2000, max: 99999 },
];

const CategoryFilter = (props) => {

    const { setFilterOptions } = props;
    const [selectedPriceIndex, setSelectedPriceIndex] = useState(-1);
    const [selectedBedroomIndex, setSelectedBedroomIndex] = useState(-1);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handlePriceFilterOptions = (index) => {
        setSelectedPriceIndex(index);
        setFilterOptions((previousValue) => ({
            ...previousValue,
            price: priceRanges[index] || { min: 0, max: -1 },
        }));
    };

    const handleBedroomsFilterOptions = (index) => {
        setSelectedBedroomIndex(index);
        setFilterOptions((previousValue) => ({
            ...previousValue,
            bedrooms: index + 1
        }));
    }

    const handleCategoryFilterOptions = (category) => {
        setSelectedCategory(category);
        setFilterOptions((previousValue) => ({
            ...previousValue,
            category: category
        }));
    }

    const clearFilterOptions = () => {
        setFilterOptions((previousValue) => ({
            ...previousValue,
            province: '',
            price: {
                min: 0,
                max: 0
            },
            bedrooms: 0,
            category: ''
        }));
        setSelectedPriceIndex(-1);
        setSelectedBedroomIndex(-1);
        setSelectedCategory(null);
    }

    const Location = () => (
        <div className='flex flex-row gap-2 text-neutral-600 items-center font-serif'>
            <div className='text-md font-semibold'>
                Province:
            </div>
            <div>
                <Select>
                    <SelectTrigger className="w-[180px] border-2 border-neutral-300">
                        <SelectValue placeholder="Ontario" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {canadianProvinces.map((province, index) => {
                                return <SelectItem value={province} key={province}>{province}</SelectItem>
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
                        <div
                            key={category.label}
                            className={`flex flex-col items-center cursor-pointer hover:bg-neutral-200 p-1 rounded-md`}
                            onClick={() => handleCategoryFilterOptions(category.label)}
                        >
                            <CategoryBox
                                label={category.label}
                                icon={category.icon}
                                selectedCategory={selectedCategory}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )

    const ListingPrice = () => (
        <div
            className='flex flex-row gap-2 text-neutral-600 items-center font-serif'
        >
            <div className='font-serif font-semibold'>
                Price:
            </div>
            <div className='flex flex-row gap-2 text-neutral-600 items-center'>
                <div className='flex flex-row gap-5'>
                    {pricesRange.map((price, index) => {
                        return (
                            <div
                                key={price}
                                className={`
                                    cursor-pointer 
                                    hover:bg-neutral-200 
                                    px-2
                                    py-1 
                                    rounded-lg
                                    ${selectedPriceIndex === index ? 'text-green-600' : ''}
                                `}
                                onClick={() => handlePriceFilterOptions(index)}
                            >
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
                    {bedRooms.map((bedroom, index) => {
                        return (
                            <div
                                key={bedroom}
                                className={`
                                    cursor-pointer 
                                    hover:bg-neutral-200 
                                    p-1 
                                    rounded-md
                                    ${selectedBedroomIndex === index ? 'text-green-600' : ''}
                                `}
                                onClick={() => handleBedroomsFilterOptions(index)}
                            >
                                {bedroom}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div
                className='flex flex-col gap-7 px-6 mt-2'
            >
                <Location />
                <ListingPrice />
                <ListingBedrooms />
                <Category />
            </div>
            <div
                className='
                    p-1 
                    ml-6 
                    mt-2 
                    w-44 
                    bg-red-600 
                    text-center 
                    rounded-md 
                    text-white 
                    cursor-pointer 
                    hover:bg-red-500
                '
                onClick={clearFilterOptions}
            >
                X Clear Filter
            </div>
        </>
    )
}

export default CategoryFilter;
