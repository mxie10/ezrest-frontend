import React, { useEffect, useState } from 'react';
import useFooterModal from '../hooks/useFooterModal';
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
        setShowModal(false); 
    };

    let slidingWindowClasses = showModal ? 'translate-y-0' : 'translate-y-full';

    let desktopClasses = `fixed bottom-0 w-full h-2/3 bg-neutral-200 transform transition-transform duration-300 ease-in-out overflow-auto shadow-inner rounded-md z-10 ${slidingWindowClasses}`;

    let mobileClasses = `fixed inset-0 w-full h-full bg-neutral-200 transform transition-transform duration-300 ease-in-out overflow-auto shadow-inner rounded-md z-40 ${slidingWindowClasses}`;

    let closeButton = (
        <button className="absolute text-xl top-5 right-5" onClick={onClose}>
            &times; 
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
                    gap-4 
                    md:gap-2
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
            <div className='bottom-0 left-0 right-0 z-20 px-6 bg-white border-t-2 shadow-inner md:flex md:flex-row md:justify-between border-neutral-200'>
                {/* Left Side */}
                <SectionContainer>
                    {leftSideItems.map((item) => (
                        <ItemContainer key={item.name} onClick={() => onOpen(item.name)}>
                            {item.name}
                        </ItemContainer>
                    ))}
                </SectionContainer>

                <SectionContainer>
                    <div className='p-1 rounded-lg'>© 2024 EZrest, Inc</div>
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
        </div>
    );

    return bodyContent;
};


export default Footer;