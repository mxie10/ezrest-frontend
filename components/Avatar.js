'use client'
import React from 'react'
import Image from 'next/image';

const Avatar = () => {
  return (
    <div>
        <Image
            className='rounded-full'
            height='35'
            width='35'
            alt="Avater"
            src='/images/placeholder.jpg'
        />
    </div>
  )
}

export default Avatar;
