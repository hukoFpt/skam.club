import React from "react";
import Image from "next/image";

type Props = {
  isFromBattle: boolean;
  rarity: number;
  image: string;
  weapon: string;
  finish: string;
};

const rarityMap: Record<number, string> = {
  1: "border-b-[2px] border-t border-[#c8ccd64d] w-[175px] h-full border-l border-l-[#1e1b38]",
  2: "border-b-[2px] border-t border-[#2696b04d] w-[175px] h-full border-l border-l-[#1e1b38]",
  3: "border-b-[2px] border-t border-[#353dff4d] w-[175px] h-full border-l border-l-[#1e1b38]",
  4: "border-b-[2px] border-t border-[#6c31e94d] w-[175px] h-full border-l border-l-[#1e1b38]",
  5: "border-b-[2px] border-t border-[#ff3c7b4d] w-[175px] h-full border-l border-l-[#1e1b38]",
  6: "border-b-[2px] border-t border-[#b025244d] w-[175px] h-full border-l border-l-[#1e1b38]",
  7: "border-b-[2px] border-t border-[#d298274d] w-[175px] h-full border-l border-l-[#1e1b38]",
};

export const LiveFeedDrop = ({ isFromBattle, rarity, image, weapon, finish }: Props) => {
  return (
    <div className={rarityMap[rarity] || ""}>
      <div className={`relative rarity-${rarity} w-full h-full`}>
        {isFromBattle && <span className="live-drop-battle"></span>}
        <div className="flex w-full items-center justify-center gap-2 h-full pb-2.5 relative">
          <Image src={image} alt={weapon} width={107} height={80} className="mt-[-9px]" />
          <span className="absolute bottom-[19px] w-[90%] left-[7px] text-[#9793ba] text-[11px] opacity-70 truncate">
            {weapon}
          </span>
          <span className="absolute bottom-[5px] w-[90%] left-[7px] text-[#9793ba] text-[11px] font-semibold truncate">
            {finish}
          </span>
        </div>
      </div>
    </div>
  );
};
