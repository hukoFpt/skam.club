import { create } from "zustand";

interface TopUpModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const UseTopUpModal = create<TopUpModal>((set) => ({
  isOpen: false,
  onOpen: () => {
    console.log("Opening modal");
    set({ isOpen: true });
  },
  onClose: () => {
    console.log("Closing modal");
    set({ isOpen: false });
  },
}));

export default UseTopUpModal;
