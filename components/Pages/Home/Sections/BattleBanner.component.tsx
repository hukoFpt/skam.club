import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/pages/home.module.css"; // Assuming you have a CSS module for styles

import { Case } from "@/types/section-case.type";

type BattleWidgetCardProps = {
  round: number;
  price: number;
  cases: Case[];
  mode: string;
  player: string;
};
export const BattleWidgetCard = ({ round, price }: BattleWidgetCardProps) => {
  return (
    <div className="relative overflow-hidden h-[198px] w-[318px]">
      <div className={`${styles["battle-widget-card-wrapper"]}`}>
        <div className="info-block flex justify-between items-center pt-[11px] px-[20px]">
          <div className="flex items-center">
            <div className={`${styles["rounds-hexagon"]} h-[30px] w-[26px]`}>
              <div className={`${styles["inner-hexagon"]} h-[24px] w-[21px] text-[11px] text-[#e8e4f7] font-semibold text-center`}>
                {round}
              </div>
            </div>
            <span className="text-[#38364f] text-[11px] ml-1.5 font-semibold uppercase">Rounds</span>
          </div>
          <div className="text-[#4af1b8] font-semibold text-[16px]">$ {price.toFixed(2)}</div>
        </div>
        <div className={`${styles["case-list"]} flex items-center justify-center h-[120px] w-full`}>
          <Image src="/sample-case.png" alt="sample case" width={120} height={120} className="object-contain" />
        </div>
        <div className={`${styles["player-list"]} relative flex items-center justify-center`}>
          <div className={`${styles["sample-user-avatar"]} mx-[8px]`}>
            <Image
              src="https://avatars.steamstatic.com/4cf6453c66d795292b7b133971288a0505c59e83_medium.jpg"
              alt="sample player"
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
          <div className={`${styles["sample-user-avatar"]} mx-[8px]`}>
            <Image
              src="https://avatars.steamstatic.com/4cf6453c66d795292b7b133971288a0505c59e83_medium.jpg"
              alt="sample player"
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
          <div className={`${styles["sample-user-avatar"]} mx-[8px]`}>
            <Image
              src="https://avatars.steamstatic.com/4cf6453c66d795292b7b133971288a0505c59e83_medium.jpg"
              alt="sample player"
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
          <div className={`${styles["sample-user-avatar"]} mx-[8px]`}>
            <Image
              src="https://avatars.steamstatic.com/4cf6453c66d795292b7b133971288a0505c59e83_medium.jpg"
              alt="sample player"
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const BattleBanner = () => {
  return (
    <div className={`${styles["battle-banner"]} relative border-t border-[#1e1b35] w-full pt-[70px] mx-auto text-center`}>
      <div>
        <span className="text-[40px] text-white font-bold tracking-[1.2em] uppercase">Battles</span>
        <span className="text-[13px] text-[#70699b] uppercase mt-9 block tracking-[.15em]">
          Up to 4 players open cases, and the one with the most expensive drop gets all the skins
        </span>
      </div>
      <div className="relative flex gap-2 justify-center mt-12 mx-auto w-[1762px]">
        <div className="battle-widget-block__border left-0 left"></div>
        <div className="flex gap-2 justify-center mx-auto">
          <BattleWidgetCard round={10} price={92} cases={[]} mode={""} player={""} />
          <BattleWidgetCard round={17} price={80.55} cases={[]} mode={""} player={""} />
          <BattleWidgetCard round={30} price={92.1} cases={[]} mode={""} player={""} />
          <BattleWidgetCard round={6} price={59.23} cases={[]} mode={""} player={""} />
        </div>
        <div className="battle-widget-block__border right-0 right"></div>
      </div>
      <div className="relative mt-[40px] mb-[86px]">
        <Link href="/battles" className={`${styles["to-battles-button-block"]}`}>
          Play Battle
          <span className="ml-[5px] text-[#cf3464]">{"(15)"}</span>
        </Link>
      </div>
    </div>
  );
};

export default BattleBanner;
