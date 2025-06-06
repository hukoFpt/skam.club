"use client";

import React, { ReactNode, useState } from "react";

import Header from "./Header/Header.component";
import Footer from "./Footer.component";
import { CommonOverlay } from "../UI/Icons/Layout/CommonOverlay.component";

type OverlayType = "money" | "inventory" | "settings" | null;

type ClientWrapperProps = {
  children: ReactNode;
};

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [overlayType, setOverlayType] = useState<OverlayType>(null);

  const openMoney = () => {
    setOverlayType("money");
    setShowModal(true);
  };

  const openInventory = () => {
    setOverlayType("inventory");
    setShowModal(true);
  };

  const openSettings = () => {
    setOverlayType("settings");
    setShowModal(true);
  };

  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <Header onOpenMoney={openMoney} onOpenInventory={openInventory} onOpenSettings={openSettings} />
        <div className="flex-1">{children}</div>
        <Footer />
        <CommonOverlay isActive={showModal} type={overlayType} onClose={() => setShowModal(false)} />
      </div>
    </>
  );
};

export default ClientWrapper;
