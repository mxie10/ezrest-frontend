'use client'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { FaAlignJustify } from "react-icons/fa";
import ClientRendering from './components/ClientRendering';
import useSidebar from './hooks/useSideBar';
import SideBar from '@/app/components/SideBar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import { ContextProvider } from './context/useContext';
import { Provider } from 'react-redux';
import store from './redux/state/store';
import "./globals.css";
import 'react-datepicker/dist/react-datepicker.css';
import 'leaflet/dist/leaflet.css'

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
    <Provider store={store}>
      <html lang="en">
        <body>
          <div className="bg-neutral-50 flex flex-col min-h-screen relative z-10">
            <ContextProvider>
                <ToggleIcon />
                <SideBar />
                <LoginModal />
                <RegisterModal />
                <Header />
                <div className="mt-12">
                  {children}
                </div>
                {/* <Footer /> */}
            </ContextProvider>
          </div>
        </body>
      </html>
    </Provider>
  );
}
