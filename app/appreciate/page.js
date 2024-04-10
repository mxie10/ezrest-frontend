'use client';
import React from 'react';
import {useRouter} from 'next/navigation';

const AppreciateScreen = () => {

    const router = useRouter();

    const navigateToHomePage = () => {
        router.push('/');
    }

    return (
        <div className='min-h-screen flex flex-col gap-4 justify-center items-center'>
            <div className='text-4xl font-bold -mt-20'>
                Thank you for your payment!
            </div>
            <div className='text-2xl text-neutral-500'>
                Have a pleasant journey!
            </div>
            <div 
                className='p-2 text-lg bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-500'
                onClick={navigateToHomePage}
            >
                Continue Explore
            </div>
    </div>
    )
}

export default AppreciateScreen;
