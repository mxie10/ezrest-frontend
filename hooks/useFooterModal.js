import { create } from 'zustand';

const useFooterModal = create((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen: false})
}))

export default useFooterModal;