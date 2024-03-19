'use client'
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientRendering from '../components/ClientRendering';
import { FaAlignJustify } from "react-icons/fa";
import useSidebar from '../hooks/useSideBar';
import SideBar from '@/components/SideBar';
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import BookingDetailsModal from '@/components/modals/BookingDetailsModal';
import { ContextProvider } from './context/useContext';
import "./globals.css";

export default function RootLayout({ children }) {

  const sidebarModel = useSidebar();

  const toggleSidebar = () => {
    sidebarModel.onOpen();
  }

  const ToggleIcon = () => {
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

  return (
    <html lang="en">
      <body>
        <div className="bg-neutral-50 flex flex-col min-h-screen relative z-10">
          <ContextProvider>
            <ClientRendering>
              <ToggleIcon />
              <SideBar />
              <LoginModal />
              <RegisterModal />
              <BookingDetailsModal/>
              <Header />
              <div className="mt-12">
                {children}
              </div>
              <Footer />
            </ClientRendering>
          </ContextProvider>
        </div>
      </body>
    </html>
  );
}
