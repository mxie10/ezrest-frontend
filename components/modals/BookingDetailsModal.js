import React,{useState} from 'react';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import CardMedia from '@mui/material/CardMedia';
import useBookingDetailsModal from '@/hooks/useBookingDetailsModal';
import { RiMessage2Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import TextField from '@mui/material/TextField';
import Button from './components/ButtonAlt';

const BookingDetailsModal = () => {
    const [openSendMessageBox, setOpenSendMessageBox] = useState(false);
    const useBooking = useBookingDetailsModal();

    const handleOnClose = () => {
        useBooking.onClose();
    }

    const toogle = () => {
        setOpenSendMessageBox(!openSendMessageBox);
    }

    const bodyContent = (
        <div className='md:h-148 h-full overflow-scroll no-scrollbar text-neutral-700'>
            {/* booking status title */}
            <div className='text-2xl font-bold font-sans'>
                Your reservation was confirmed! 
            </div>
            {/* property image */}
             <CardMedia
                component="img"
                image='https://a0.muscache.com/im/pictures/a4140371-0e56-4554-b593-4f64242d5419.jpg?im_w=720'
                alt="Paella dish"
                className='mt-4'
            />
            {/* message host option */}
            <div className={`py-4 flex flex-row items-center gap-2 mt-6 border-t-2 cursor-pointer`} onClick={toogle}>
                <RiMessage2Fill size={30}/>
                <div 
                    className='
                        text-neutral-500
                         text-lg
                    '
                >
                    Message Host
                </div>
            </div>
            {/* input box area for sending messages to landlord */}
            {openSendMessageBox ? 
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        label="Messages"
                        className='w-full'
                    />
                    <div className='mt-2'>
                        <Button    
                            label='Send'
                            small            
                        />
                    </div>
                </div> : <></>
            }
            
            {/* dividing line */}
            <div className='h-3 bg-neutral-200 rounded-md mt-2'></div>
            {/* reservation details */}
            <div
                className='
                    flex
                    flex-col
                    py-4
                '
            >
                <div
                    className='
                        text-2xl
                        font-sans
                    '
                >
                    Reservation details
                </div>
                 {/* listing address */}
                 <div
                    className='
                        py-4
                        border-b-2
                    '
                >
                    <div className='font-semibold'>Listing address</div>
                    <div className='text-neutral-500'>16514 blenham way, Chesterfield, MO, 63005</div>
                </div>
                {/* confirmation code */}
                <div
                    className='
                        py-4
                        border-b-2
                    '
                >
                    <div className='font-semibold'>Confirmation Code</div>
                    <div>HMAMNBWYF5</div>
                </div>
                 {/* cancel policy */}
                 <div
                    className='
                        py-4
                        border-b-2
                    '
                >
                    <div className='font-semibold'>Cancel policy</div>
                    <div className=' text-neutral-500'>
                        Cancel before check-in at 3:00 p.m. on Sep. 24 for a partial refund. The first 30 nights are non-refundable.
                    </div>
                </div>
                {/* Payment details */}
                <div
                    className='
                        border-b-2
                        py-4
                    '
                >
                    <div className='font-semibold'>Payment Detalis</div>
                    <div>Total cost: $912.21 CAD</div>
                </div>
                {/* Show listing */}
                <div className='flex flex-row gap-3 items-center py-4 justify-center cursor-pointer hover:bg-neutral-200'>
                    <FaHome />
                    <div>Show listing</div>
                    <MdKeyboardArrowRight size={20}/>
                </div>
                {/* Cancel reservation button */}
                <div className='mt-2'>
                    <Button    
                        label='Cancel Reservation'
                        small       
                        backgroundColor='bg-red-500'     
                    />
                </div>
            </div>
        </div>
    )

    return (
        <Modal 
            isOpen={useBooking.isOpen}
            onClose={handleOnClose}
            body={bodyContent}
            invisible
        />
    )
}

export default BookingDetailsModal;
