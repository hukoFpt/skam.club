import React from "react";

import {
  OnlineCounterIcon,
  UserCounterIcon,
  BattleCounterIcon,
  UpgradeCounterIcon,
  CaseCounterIcon,
} from "@/components/atoms/icons/Header/TopBlock.icon";

type Props = {
  icon: string;
  count: number;
  label: string;
  color: string;
};

const iconMap: Record<string, React.ReactNode> = {
  online: <OnlineCounterIcon height={13} width={13} />,
  user: <UserCounterIcon height={13} width={13} fill="#cd4c8f" />,
  battle: <BattleCounterIcon height={13} width={13} fill="#79c1e0" />,
  upgrade: <UpgradeCounterIcon height={13} width={13} fill="#7c5ac8" />,
  case: <CaseCounterIcon height={13} width={13} fill="#da4472" />,
};

export const Counter = ({ icon, count, label, color }: Props) => {
  return (
    <div className="flex items-baseline gap-2.5 tracking-tight">
      <span>{iconMap[icon]}</span>
      <span className="text-[13px] opacity-80 font-medium" style={{ color }}>
        {count.toLocaleString()}
      </span>
      <span className="text-[13px] text-[#84819a] opacity-80 font-medium">{label}</span>
    </div>
  );
};
