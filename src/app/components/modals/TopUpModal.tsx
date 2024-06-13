"use client";

import { useState } from "react";
import useTopUpModal from "../hooks/useTopUpModal";
import CloseIcon from "../svg/close-icon";

const TopUpModal = () => {
  const topUpModal = useTopUpModal();
  const [isOpen, setIsOpen] = useState(false);

  if (!topUpModal.isOpen) {
    return null;
  }
  return (
    <div
      className="
          justify-center 
          items-center
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
    >
      <div className="h-[600px] flex flex-col bg-bg-main rounded-xl w-1/2 overflow-y-hidden">
        <div className="header bg-bg-highlight flex justify-between">
          <div className="text-white p-4 text-sm font-bold">TOP UP BALANCE</div>
          <div
            className="text-gray-400 font-bold p-4 cursor-pointer hover:text-white"
            onClick={topUpModal.onClose}
          >
            <CloseIcon width="15px "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUpModal;
