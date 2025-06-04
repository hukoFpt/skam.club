"use client";

import React, { ReactNode } from "react";
import Header from "./Header/Header.component";
import Footer from "./Footer.component";

type ClientWrapperProps = {
  children: ReactNode;
};

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default ClientWrapper;
