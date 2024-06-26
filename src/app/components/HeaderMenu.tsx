"use client";

import "./HeaderMenu.css";
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "./svg/header-menu-logo";
import UpgradeIcon from "./svg/upgrade-icon";
import ExchangeIcon from "./svg/exchange-icon";
import { useCallback, useEffect, useState } from "react";
import UseTopUpModal from "./hooks/useTopUpModal";
import UserBalanceIcon from "./svg/user-balance-icon";
import UserWeaponBalanceIcon from "./svg/user-weapon-balance-icon";
import TopUpIcon from "./svg/top-up-icon";

const HeaderMenu = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const topUpModal = UseTopUpModal();
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const checkScroll = () => {
      if (window.pageYOffset > 40) {
        // Adjust this value based on the height of your HeaderMenu
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div>
      <div className="header-menu bg-bg-highlight m-5 m-3 rounded-xl flex justify-between">
        <Link
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
          href="/"
          className="header-menu-logo flex items-center gap-2 m-3"
        >
          <HeaderLogo width="46px" height="46px" />
          <div className="flex flex-col items-center">
            <div className="text-white text-lg eurostile-extended">
              Skam.Club
            </div>
            <div className="text-white text-[8px] eurostile-extended">
              DEV.BY.HUKO
            </div>
          </div>
        </Link>
        <div className="header-navigation flex-grow flex items-center gap-6 px-3">
          {currentUrl === "http://localhost:3000/en/upgrade" ? (
            <div
              className="header-navigation-upgrade flex gap-1 h-full items-center text-rose-500"
              style={{
                backgroundImage:
                  "radial-gradient(50% 50% at 50% 100%, rgba(175, 49, 49, 0.377) 0px, rgba(76, 67, 154, 0)), radial-gradient(50% 50% at 50% 0%, rgba(201, 47, 47, 0.432) 0px, rgba(76, 67, 154, 0))",
              }}
            >
              <div className="header-navigation-upgrade-icon">
                <UpgradeIcon height="18px" />
              </div>
              <div className="header-navigation-upgrade-text text-sm">
                UPGRADE
              </div>
            </div>
          ) : (
            <Link
              href="/en/upgrade"
              className={`header-navigation-upgrade flex gap-1 h-full items-center ${
                currentUrl === "http://localhost:3000/en/upgrade"
                  ? "text-rose-500"
                  : "text-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/en/upgrade";
              }}
              style={{
                transition: "background 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage =
                  "radial-gradient(50% 50% at 50% 100%, rgba(76, 67, 154, 0.432) 0px, rgba(76, 67, 154, 0)), radial-gradient(50% 50% at 50% 0%, rgba(76, 67, 154, 0.432) 0px, rgba(76, 67, 154, 0))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = "";
              }}
            >
              <div className="header-navigation-upgrade-icon">
                <UpgradeIcon height="18px" />
              </div>
              <div className="header-navigation-upgrade-text text-sm font-light ">
                UPGRADE
              </div>
            </Link>
          )}

          {currentUrl === "http://localhost:3000/en/exchange" ? (
            <div
              className="header-navigation-upgrade flex gap-1 h-full items-center text-rose-500"
              style={{
                backgroundImage:
                  "radial-gradient(50% 50% at 50% 100%, rgba(175, 49, 49, 0.377) 0px, rgba(76, 67, 154, 0)), radial-gradient(50% 50% at 50% 0%, rgba(201, 47, 47, 0.432) 0px, rgba(76, 67, 154, 0))",
              }}
            >
              <div className="header-navigation-upgrade-icon">
                <UpgradeIcon height="18px" />
              </div>
              <div className="header-navigation-upgrade-text text-sm">
                EXCHANGE
              </div>
            </div>
          ) : (
            <Link
              href="/en/upgrade"
              className={`header-navigation-upgrade flex gap-1 h-full items-center ${
                currentUrl === "http://localhost:3000/en/exchange"
                  ? "text-rose-500"
                  : "text-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/en/exchange";
              }}
              style={{
                transition: "background 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage =
                  "radial-gradient(50% 50% at 50% 100%, rgba(76, 67, 154, 0.432) 0px, rgba(76, 67, 154, 0)), radial-gradient(50% 50% at 50% 0%, rgba(76, 67, 154, 0.432) 0px, rgba(76, 67, 154, 0))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = "";
              }}
            >
              <div className="header-navigation-upgrade-icon">
                <ExchangeIcon height="18px" />
              </div>
              <div className="header-navigation-upgrade-text text-sm font-light ">
                EXCHANGE
              </div>
            </Link>
          )}
        </div>
        <div className="header-menu-user flex items-center gap-3">
          <div className="user-money flex items-center gap-1">
            <div className="user-money-balance flex flex-col items-center">
              <div
                className="user-balance flex items-center gap-1 group cursor-pointer"
                onClick={topUpModal.onOpen}
              >
                <div className="user-balance-icon">
                  <div className="user-weapon-balance-icon text-teal-300 group-hover:text-teal-400">
                    <UserBalanceIcon width="18px" height="18px" />
                  </div>
                </div>
                <div className="user-balance-text text-sm font-bold montserrat-extended text-teal-300 group-hover:text-teal-400">
                  $0.00
                </div>
              </div>
              <div className="user-weapon-balance flex items-center gap-1 group">
                <div className="user-weapon-balance-icon text-purple-200 group-hover:text-rose-500">
                  <UserWeaponBalanceIcon width="18px" height="18px" />
                </div>
                <div className="user-weapon-balance-text text-sm font-bold montserrat-extended text-purple-200 group-hover:text-rose-500">
                  $0.00
                </div>
              </div>
            </div>
            <div className="top-up text-teal-300 hover:text-teal-200">
              <TopUpIcon width="20px" height="20px" />
            </div>
          </div>
          <div className="user-avatar">
            <Image
              src="/images/user.jpg"
              alt="User"
              width={46}
              height={46}
              className="rounded-full p-[2px] border-gray-400 border-2"
            />
          </div>
        </div>
      </div>
      <div
        className={`header-menu ${
          isScrolled ? "flyIn mt-3" : "flyOut"
        } fixed top-0 right-10 px-5 py-3 rounded-lg bg-slate-950/70 flex items-center space-x-2`}
      >
        <div className="header-menu-user flex items-center gap-3">
          <div className="user-money flex items-center gap-1">
            <div className="user-money-balance flex flex-col items-right">
              <div
                className="user-balance flex items-center gap-1 group cursor-pointer"
                onClick={topUpModal.onOpen}
              >
                <div className="user-balance-icon">
                  <div className="user-weapon-balance-icon text-teal-300 group-hover:text-teal-400">
                    <UserBalanceIcon width="18px" height="18px" />
                  </div>
                </div>
                <div className="user-balance-text text-sm font-bold montserrat-extended text-teal-300 group-hover:text-teal-400">
                  $1000.00
                </div>
              </div>
              <div className="user-weapon-balance flex items-center gap-1 group">
                <div className="user-weapon-balance-icon text-purple-200 group-hover:text-rose-500">
                  <UserWeaponBalanceIcon width="18px" height="18px" />
                </div>
                <div className="user-weapon-balance-text text-sm font-bold montserrat-extended text-purple-200 group-hover:text-rose-500">
                  $0.00
                </div>
              </div>
            </div>
            <div className="top-up text-teal-300 hover:text-teal-200">
              <TopUpIcon width="20px" height="20px" />
            </div>
          </div>
          <div className="user-avatar">
            <Image
              src="/images/user.jpg"
              alt="User"
              width={46}
              height={46}
              className="rounded-full p-[2px] border-gray-400 border-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
