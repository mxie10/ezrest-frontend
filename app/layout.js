import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from '@/app/components/SideBar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import { ContextProvider } from './context/useContext';
import ToggleIcon from '@/app/components/ToggleIcon';
import ReduxProvider from '@/app/components/ReduxProvider';
import "./globals.css";
import 'react-datepicker/dist/react-datepicker.css';
import 'leaflet/dist/leaflet.css'

export default function RootLayout({ children }) {

  return (
    <ReduxProvider>
      <html lang="en">
        <body>
          <div className="bg-white flex flex-col min-h-screen relative z-10">
            <ContextProvider>
                <ToggleIcon />
                <SideBar />
                <LoginModal />
                <RegisterModal />
                <Header />
                <div className="mt-12">
                  {children}
                </div>
                <Footer />
            </ContextProvider>
          </div>
        </body>
      </html>
    </ReduxProvider>
  );
}
