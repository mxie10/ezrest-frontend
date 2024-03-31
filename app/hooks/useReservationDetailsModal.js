import { create } from 'zustand';

const useReservationDetailsModal = create((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen: false})
}))

export default useReservationDetailsModal;