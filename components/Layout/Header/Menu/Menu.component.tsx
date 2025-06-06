"use client";

import { useEffect, useState } from "react";

import styles from "@/styles/components/layout/header.module.css";

import Logo from "@/components/Layout/Header/Menu/Logo.component";
import LogoutButton from "@/components/Layout/Header/Menu/Logout.component";
import { Button } from "@/components/Layout/Header/Menu/NavigationButton.component";
import { UserAvatar } from "@/components/Layout/Header/Menu/UserAvatar.component";
import { UserMoney } from "@/components/Layout/Header/Menu/UserMoney.component";
import { SettingsIcon } from "@/components/UI/Icons/Layout/Header/Menu.icon";

interface StickyProfileProps {
  onOpenMoney: () => void;
  onOpenInventory: () => void;
  moneyBalance: number;
  weaponBalance: number;
}

const StickyProfile = ({ onOpenMoney, onOpenInventory, moneyBalance, weaponBalance }: StickyProfileProps) => {
  const [scrollY, setScrollY] = useState(0);

  const menuHeight = 84;
  const filterHeight = 750;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTransformY = () => {
    if (scrollY < menuHeight) return "-translate-y-[150px]";
    if (scrollY > filterHeight) return "translate-y-[95px]";
    return "translate-y-0";
  };

  return (
    <div
      className={`${styles["sticky-profile"]} right-0 mr-22 top-[10px] transition-transform duration-300 ${getTransformY()}`}
    >
      <div className="flex items-center ">
        <UserMoney
          money_balance={moneyBalance}
          weapon_balance={weaponBalance}
          onOpenMoney={onOpenMoney}
          onOpenInventory={onOpenInventory}
        />
        <UserAvatar
          avatar_url="https://avatars.steamstatic.com/4cf6453c66d795292b7b133971288a0505c59e83_medium.jpg"
          level={1}
        />
      </div>
    </div>
  );
};

interface MenuProps {
  onOpenMoney: () => void;
  onOpenInventory: () => void;
  onOpenSettings: () => void;
}

const Menu = ({ onOpenMoney, onOpenInventory, onOpenSettings }: MenuProps) => {
  const [moneyBalance, setMoneyBalance] = useState<number>(0);

  useEffect(() => {
    const updateBalance = () => {
      // Get user object from localStorage and parse money
      const userRaw = localStorage.getItem("user");
      const user = userRaw ? JSON.parse(userRaw) : null;
      setMoneyBalance(user && typeof user.money === "number" ? user.money : 0);
    };

    window.addEventListener("userMoneyUpdated", updateBalance);

    updateBalance();
    return () => window.removeEventListener("userMoneyUpdated", updateBalance);
  }, []);

  return (
    <div className={`${styles["header-menu"]} overflow-hidden relative flex h-[84px]`}>
      <StickyProfile
        moneyBalance={moneyBalance}
        weaponBalance={0}
        onOpenMoney={onOpenMoney}
        onOpenInventory={onOpenInventory}
      />
      <Logo />
      <div className={`${styles["header-menu"]} overflow-hidden relative flex h-[84px] w-full`}>
        <div className="flex ml-8 justify-between items-center w-full">
          <div className="flex gap-5 h-full">
            <Button icon="upgrade" label="UPGRADE" />
            <Button icon="missions" label="MISSIONS" />
            <Button icon="event" label="EVENT" />
            <Button icon="battles" label="BATTLES" />
            <Button icon="daily" label="DAILY CASES" />
            <Button icon="exchange" label="EXCHANGE" />
          </div>
          <div className="flex">
            <div
              className={`${styles["settings-button"]} relative flex h-12 w-12 items-center justify-center group cursor-pointer`}
              onClick={onOpenSettings}
            >
              <SettingsIcon
                height={22}
                width={22}
                fill="#9793ba"
                className="transition-colors duration-300 group-hover:fill-[#e4dcfc]"
              />
            </div>
            <UserMoney
              money_balance={moneyBalance}
              weapon_balance={0}
              onOpenMoney={onOpenMoney}
              onOpenInventory={onOpenInventory}
            />
            <UserAvatar
              avatar_url="https://avatars.steamstatic.com/4cf6453c66d795292b7b133971288a0505c59e83_medium.jpg"
              level={1}
            />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
