"use client";

import { AddFundIcon, MoneyBalanceIcon, WeaponBalanceIcon } from "@/components/atoms/icons/Header/Menu.icon";
import { useState } from "react";

type Props = {
  money_balance: number;
  weapon_balance: number;
};
export const UserMoney = ({ money_balance, weapon_balance }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="user-money relative flex items-center gap-2 h-12 px-4">
      <div className="flex flex-col items-start">
        <div className="flex gap-1.5 group items-center justify-center cursor-pointer">
          <MoneyBalanceIcon
            height={18}
            width={18}
            fill="#4af1cc"
            className="transition-colors duration-300 group-hover:fill-[#0fc69d]"
          />
          <div className="font-semibold text-[#4af1cc] transition-colors duration-300 group-hover:text-[#0fc69d] text-sm">
            ${money_balance.toFixed(2)}
          </div>
        </div>
        <div className="flex gap-1.5 group items-center justify-center cursor-pointer">
          <WeaponBalanceIcon
            height={18}
            width={18}
            fill="#e4dcfc"
            className="transition-colors duration-300 group-hover:fill-[#f15183]"
          />
          <div className="font-semibold text-[#e4dcfc] transition-colors duration-300 group-hover:text-[#f15183] text-sm">
            ${weapon_balance.toFixed(2)}
          </div>
        </div>
      </div>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="cursor-pointer">
        <AddFundIcon height={24} width={28} background={hovered ? "#4af1cc" : "#0fc69d"} />
      </div>
    </div>
  );
};
