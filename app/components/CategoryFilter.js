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

    const {
        setFilterOptions,
        selectedPriceIndex,
        selectedBedroomIndex,
        selectedCategory,
        setSelectedPriceIndex,
        setSelectedBedroomIndex,
        setSelectedCategory,
        setSelectedProvince,
        selectedProvince,
        setCheckinDate
    } = props;

    const handleProvinceOptions = (value) => {
        setSelectedProvince(value);
        setFilterOptions((previousValue) => ({
            ...previousValue,
            apply: true,
            province: value
        }));
    }

    const handlePriceFilterOptions = (index) => {
        setSelectedPriceIndex(index);
        setFilterOptions((previousValue) => ({
            ...previousValue,
            apply: true,
            price: priceRanges[index]
        }));
    };

    const handleBedroomsFilterOptions = (index) => {
        setSelectedBedroomIndex(index);
        setFilterOptions((previousValue) => ({
            ...previousValue,
            apply: true,
            bedrooms: index + 1
        }));
    }

    const handleCategoryFilterOptions = (category) => {
        setSelectedCategory(category);
        setFilterOptions((previousValue) => ({
            ...previousValue,
            apply: true,
            category: category,
        }));
    }

    const clearFilterOptions = () => {
        setFilterOptions((previousValue) => ({
            ...previousValue,
            apply: false,
            province: '',
            price: {
                min: 0,
                max: 0
            },
            bedrooms: 0,
            location: '',
            category: '',
            checkinDate: ''
        }));
        setSelectedPriceIndex(-1);
        setSelectedBedroomIndex(-1);
        setSelectedCategory(null);
        setSelectedProvince('');
        setCheckinDate('');
    }

    const Location = () => (
        <div className='flex flex-row gap-2 text-neutral-600 items-center'>
            <div className='text-md font-semibold'>
                Province:
            </div>
            <Select onValueChange={handleProvinceOptions}>
                <SelectTrigger className="w-[180px] border-2 border-neutral-300">
                    <SelectValue placeholder={selectedProvince === '' ? 'Unselected' : selectedProvince} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {canadianProvinces.map((province) => {
                            return <SelectItem value={province} key={province}>{province}</SelectItem>
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )

    const ListingPrice = () => (
        <div
            className='flex flex-row gap-2 text-neutral-600 items-center'
        >
            <div className='font-serif font-semibold'>
                Price:
            </div>
            <div className='flex flex-row gap-2 text-neutral-600 items-center'>
                <div className='flex flex-row gap-5 text-sm'>
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
        <div className='flex flex-row gap-2 text-neutral-600 items-center'>
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
                                    py-1
                                    px-2 
                                    rounded-md
                                    ${selectedBedroomIndex === index ? 'text-green-600' : ''}
                                    text-sm
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

    const Category = () => (
        <div className='flex flex-row gap-2 text-neutral-600 items-center'>
            <div className='text-md font-semibold'>
                Category:
            </div>
            <div className='flex flex-row gap-4'>
                {categories.map((category) => {
                    return (
                        <div
                            key={category.label}
                            className={`flex flex-col items-center cursor-pointer hover:bg-neutral-200 p-1 rounded-md text-sm`}
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

    return (
        <>
            <div
                className='flex flex-col gap-6 px-6 mt-2'
            >
                <Location />
                <ListingPrice />
                <ListingBedrooms />
                <Category />
            </div>
            <div
                className='
                    ml-6 
                    mt-4
                    text-red-600
                    cursor-pointer
                    hover:text-red-800
                    text-sm
                    w-20
                '
                onClick={clearFilterOptions}
            >
                Clear filter
            </div>
        </>
    )
}

export default CategoryFilter;
