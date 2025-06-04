import React from "react";

import styles from "@/styles/components/layout/header.module.css";

import {
  UpgradeIcon,
  MissionIcon,
  EventIcon,
  BattleIcon,
  DailyCaseIcon,
  ExchangeIcon,
} from "@/components/UI/Icons/Layout/Header/Menu.icon";

type Props = {
  icon: string;
  label: string;
};

const iconMap: Record<string, React.ReactNode> = {
  upgrade: <UpgradeIcon height={23} width={23} fill="#9793ba" />,
  missions: <MissionIcon height={23} width={23} fill="#9793ba" />,
  event: <EventIcon height={23} width={23} fill="#9793ba" />,
  battles: <BattleIcon height={23} width={23} fill="#9793ba" />,
  daily: <DailyCaseIcon height={23} width={23} fill="#9793ba" />,
  exchange: <ExchangeIcon height={23} width={23} />,
};

export const Button = ({ icon, label }: Props) => {
  return (
    <div className={`${styles["header-button-wrapper"]} relative`}>
      <div
        className={`${styles["header-text-wrapper"]} h-full relative flex items-center hover:opacity-80 transition-all duration-300 cursor-pointer`}
      >
        <div>{iconMap[icon]}</div>
        <div className="text-[12px] ml-3 text-white">{label}</div>
      </div>
    </div>
  );
};
