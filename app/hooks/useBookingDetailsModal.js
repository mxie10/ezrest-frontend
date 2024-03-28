import { create } from 'zustand';

const useBookingDetailsModal = create((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen: false})
}))

export default useBookingDetailsModal;