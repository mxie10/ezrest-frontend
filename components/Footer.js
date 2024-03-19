import React, { useEffect, useState } from 'react';
import useFooterModal from '../hooks/useFooterModal';
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const leftSideItems = [
    { name: 'Privacy' },
    { name: 'Terms' },
    { name: 'About Us' }
];

const rightSideItems = [
    {
        name: 'icons',
        icons: [
            { name: 'twitter', type: <FaTwitter size={25} /> },
            { name: 'facebook', type: <FaFacebook size={25} /> },
            { name: 'instagram', type: <FaInstagram size={25} /> },
            { name: 'whatsapp', type: <FaWhatsapp size={25} /> }
        ]
    },
    {
        name: 'item',
        content: 'Contact Us'
    }
];

const Footer = () => {
    const footerModal = useFooterModal();
    const [showModal, setShowModal] = useState(footerModal.isOpen);

    const onOpen = (name) => {
        setShowModal(true);
    }
    const onClose = () => {
        setShowModal(false); // Instead of calling footerModal.onClose();
    };

    let slidingWindowClasses = showModal ? 'translate-y-0' : 'translate-y-full';

    // For desktop view
    let desktopClasses = `fixed bottom-0 w-full h-2/3 bg-neutral-200 transform transition-transform duration-300 ease-in-out overflow-auto shadow-inner rounded-md z-10 ${slidingWindowClasses}`;

    // For mobile view
    let mobileClasses = `fixed inset-0 w-full h-full bg-neutral-200 transform transition-transform duration-300 ease-in-out overflow-auto shadow-inner rounded-md z-40 ${slidingWindowClasses}`;

    // Use a media query to apply different styles based on the screen size
    let slidingWindowStyles = window.innerWidth >= 768 ? desktopClasses : mobileClasses;

    // JSX for the modal's close button
    let closeButton = (
        <button className="absolute text-xl top-5 right-5" onClick={onClose}>
            &times; {/* This creates a '×' symbol for closing the modal */}
        </button>
    );

    const SectionContainer = ({ children, className }) => {
        return (
            <div
                className={`
                    flex
                    ${className ? className : 'flex-col md:flex-row'}
                    justify-between
                    items-center
                    w-full md:w-auto
                    text-neutral-500
                    gap-4 md:gap-2
                    my-2
                `}
            >
                {children}
            </div>
        );
    };

    const ItemContainer = ({ children, onClick }) => {
        return (
            <div
                className='p-2 rounded-lg cursor-pointer hover:bg-slate-200' onClick={onClick} >
                {children}
            </div>
        );
    };

    let bodyContent = (
        <div className='flex flex-col'>
            <div className='bottom-0 left-0 right-0 z-20 px-6 py-1 bg-white border-t-2 shadow-inner md:flex md:flex-row md:justify-between border-neutral-200'>
                {/* Left Side */}
                <SectionContainer>
                    {leftSideItems.map((item) => (
                        <ItemContainer key={item.name} onClick={() => onOpen(item.name)}>
                            {item.name}
                        </ItemContainer>
                    ))}
                </SectionContainer>

                <SectionContainer>
                    <div className='p-2 rounded-lg'>© 2024 EZrest, Inc</div>
                </SectionContainer>
                {/* Right Side */}
                <SectionContainer className="items-end">
                    <SectionContainer className="flex flex-col justify-between w-full md:flex-row md:items-center">

                        {/* Social Icons */}
                        <div className="flex justify-center w-full md:justify-end " key="social-icons">
                            {rightSideItems
                                .find(item => item.name === 'icons')
                                ?.icons.map((icon) => (
                                    <div
                                        className='p-1 cursor-pointer'
                                        key={icon.name}
                                        onClick={() => console.log('Icon clicked:', icon.name)}
                                    >
                                        {icon.type}
                                    </div>
                                ))}
                        </div>

                        {/* Contact Us - Only on a new line in responsive view */}
                        <div className="flex justify-center w-full md:justify-end " key="contact-us">
                            <ItemContainer onClick={() => console.log('Contact Us clicked')}>
                                {rightSideItems.find(item => item.name === 'item')?.content}
                            </ItemContainer>
                        </div>

                    </SectionContainer>
                </SectionContainer>
            </div>
            <div className={`${slidingWindowStyles} shadow-none border-none`}>
                {/* Enhanced Close Button at the top left corner */}
                <button
                    className="absolute z-50 p-3 text-lg leading-none text-gray-700 bg-white border border-gray-300 rounded-full top-2 left-2 hover:bg-gray-100"
                    onClick={onClose}
                    aria-label="Close" // Accessibility label for screen readers
                >
                    &#10005; {/* '✕' symbol for closing the modal */}
                </button>
                <div className='relative'>
                    {/* ...existing sliding window content... */}
                </div>
            </div>

        </div>


    );


    return bodyContent;
};


export default Footer;