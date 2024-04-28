'use client';

import React from 'react';
import { FaAlignJustify } from "react-icons/fa";
import useSidebar from '@/app/hooks/useSideBar';

const ToggleIcon = () => {

  const sidebarModel = useSidebar();

  const toggleSidebar = () => {
    sidebarModel.onOpen();
  }

  return (
    <div
      className="
        absolute 
        left-3 
        top-3 
        cursor-pointer 
        md:hidden
      "
      onClick={toggleSidebar}
    >
      <FaAlignJustify size={25} />
    </div>
  )
}

export default ToggleIcon;
