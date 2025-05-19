import React from "react";
import { LogoIcon } from "@/components/atoms/icons/Header/Menu.icon";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer pl-8">
      <LogoIcon height={84} width={50} />
      <div className="flex relative flex-col items-center justify-center">
        <span className="text-white font-michroma font-light text-sm">Skam.Club</span>
        <span className="absolute text-[7px] text-[#9793ba] font-semibold uppercase tracking-wide opacity-0 top-1/2 transition-all duration-300 group-hover:opacity-100 group-hover:top-[110%]">
          Drive . Love . CS2
        </span>
      </div>
    </div>
  );
};

export default Logo;
