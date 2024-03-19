'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useLoginModal from '../hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUserCircle } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Context} from '../app/context/useContext'

const Header = () => {
  //for test purpose
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const listItemStyle = 'cursor-pointer hover:bg-slate-200 rounded-lg p-2 font-md text-black';
  const { user,setUser, setIsRefreshing } = useContext(Context);

  const openLoginModal = () => {
    loginModal.onOpen();
  }

  const openRegisterModal = () => {
    registerModal.onOpen();
  }

  const handleLogOut = () => {
    setUser(null);
    setIsRefreshing(pre=>!pre);
  }

  const LogedInMenu = () => {
    return (
      <div
        className='
          flex 
          flex-row 
          justify-between 
          gap-3 
          items-center
        '
      >
        <div className={listItemStyle} onClick={() => router.push(`/booking`)}>My Bookings</div>
        <div className={listItemStyle} onClick={() => router.push(`/wishlist`)}>Wish List</div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className='cursor-pointer font-bold' onClick={() => router.push('/accountsettings')}>Account Setting</DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer' onClick={() => router.push('/helpcenter')}>Help Center</DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer text-blue-700' onClick={() => router.push('/propertydetails')}>Property Detail(for testing)</DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer text-blue-700' onClick={() => router.push('/payment')}>Make payment(for testing)</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className='cursor-pointer text-red-600 font-bold'
              onClick={handleLogOut}
            >
                Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }

  const UnLoginedInMenu = () => {
    return (
      <div
        className='
          flex 
          flex-row 
          justify-between 
          gap-3 
          items-center
        '
      >
        <DropdownMenu>
          <DropdownMenuTrigger>
              <FaUserCircle size={35}/>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className='cursor-pointer font-bold' onClick={openLoginModal}>Log in</DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer font-bold' onClick={openRegisterModal}>Sign up</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }

  return (
    <div className='
        hidden
        h-12 
        px-10 
        md:flex 
        md:flex-row 
        md:justify-between 
        md:items-center
        fixed
        w-full
        shadow-md
        bg-white
        z-30
      '
    >
      <Image
        onClick={() => router.push('/')}
        alt='Logo'
        className='hidden md:block cursor-pointer'
        height='100'
        width='100'
        src='/images/logo.jpeg'
      />
      {user === null ? <UnLoginedInMenu/> : <LogedInMenu/>}
      
    </div>
  )
}

export default Header;
