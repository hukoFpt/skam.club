"use client";

import Image from "next/image";
import HeaderLogo from "./components/svg/header-menu-logo";
import UserWeaponBalanceIcon from "./components/svg/user-weapon-balance-icon";
import UserBalanceIcon from "./components/svg/user-balance-icon";
import TopUpIcon from "./components/svg/top-up-icon";
import TopUpModal from "./components/modals/TopUpModal";
import UseTopUpModal from "./components/hooks/useTopUpModal";
import { useCallback, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const topUpModal = UseTopUpModal();
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div>
      <div className="header-menu bg-indigo-950 m-5 p-3 rounded-xl flex justify-between">
        <div className="header-menu-logo flex items-center gap-2">
          <HeaderLogo width="46px" height="46px" />
          <div className="flex flex-col items-center">
            <div className="text-white text-lg eurostile-extended">
              Skam.Club
            </div>
            <div className="text-white text-[8px] eurostile-extended">
              DEV.BY.HUKO
            </div>
          </div>
        </div>
        <div className="header-navigation flex-grow flex items-center gap-4 px-3">
          <div className="header-navigation-upgrade flex">
            <Link href="/upgrade">
              <div className="header-navigation-upgrade-icon"></div>
              <div className="header-navigation-upgrade-text text-sm font-light ">
                UPGRADE
              </div>
            </Link>
          </div>
          <div className="header-navigation-exchange">
            {" "}
            <div className="header-navigation-exchange-icon"></div>
            <div className="header-navigation-exchange-text text-sm font-light ">
              EXCHANGE
            </div>
          </div>
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
                <div className="user-balance-text text-sm font-bold text-teal-300 group-hover:text-teal-400">
                  $0.00
                </div>
              </div>
              <div className="user-weapon-balance flex items-center gap-1 group">
                <div className="user-weapon-balance-icon text-purple-200 group-hover:text-rose-500">
                  <UserWeaponBalanceIcon width="18px" height="18px" />
                </div>
                <div className="user-weapon-balance-text text-sm font-bold text-purple-200 group-hover:text-rose-500">
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
}
