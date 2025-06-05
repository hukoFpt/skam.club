"use client";

import React from "react";

import styles from "@/styles/pages/home.module.css";

import EventBackground from "./EventBackground.component";
import BestsellerBanner from "./BestsellerBanner.component";
import CommunityBackground from "./CommunityBackground.component";
import VitalityBanner from "./VitalityBanner.component";
import BattleBanner from "./BattleBanner.component";
import KarriganBanner from "./KarriganBanner.component";

import { CasesGrid } from "./Cases/CasesGrid.component";
import { getCasesBySection } from "@/utils/section-case.util";

type Props = {
  id: number;
  title: string;
  description: string;
  type: string;
};

export const SectionAccordion = ({ id, title, description, type }: Props) => {
  const [isActive, setIsActive] = React.useState(false);
  const cases = getCasesBySection(id.toString());

  const sectionHeight = 460 * Math.ceil(cases.length / 5);

  const renderSectionBackground = () => {
    switch (type) {
      case "event":
        return <EventBackground />;
      case "bestseller":
        return <BestsellerBanner />;
      case "community":
        return <CommunityBackground />;
      case "vitality":
        return <VitalityBanner />;
      case "battle":
        return <BattleBanner />;
      case "karrigan":
        return <KarriganBanner />;
      default:
        return null;
    }
  };

  return (
    <section
      id={`section-${id}`}
      className={`relative w-full transition-all duration-500 ease-in-out ${
        type === "community"
          ? "pb-[108px]"
          : isActive
            ? `pb-[108px] ${type !== "event" ? `${styles["section-accordion"]}` : ""}`
            : "pb-[54px]"
      } ${type === "event" ? `${styles["bg-transparent"]}` : ""} ${type !== "community" ? "overflow-hidden" : ""}`}
    >
      {renderSectionBackground()}
      <div className={`pt-11 relative ${type !== "battle" && type !== "karrigan" ? "border-t border-[#1e1b35]" : ""}`}>
        <div
          className={`${styles["title-number"]} ${styles["large"]} font-nechao opacity-10 ${isActive ? "text-[96px] top-[45px] left-[30px]" : "text-[40px] top-[27px] left-[56px]"} `}
        >
          {String(id).padStart(2, "0")}
        </div>
        <div className={`${styles["title-number"]} ${styles["small"]} font-nechao opacity-10`}>
          {String(id).padStart(2, "0")}
        </div>
        <div className="relative flex w-3/4 items-baseline pr-[130px] m-auto">
          <div className="text-2xl font-bold text-white mr-5 uppercase">{title}</div>
          <span className="text-[13px] text-[#70699b] uppercase flex-grow-1 flex">
            {description}{" "}
            {type === "community" && (
              <div
                className={`${styles["section-title__create-case-button"]} w-full flex items-baseline gap-1 cursor-pointer`}
              >
                <div className={`${styles["plus-icon"]} w-2.5 h-2.5 bg-[#8471f7]`}></div>
                Create your own case
              </div>
            )}
          </span>
          <div
            className="absolute right-[30px] top-[10px] text-[#716d9e] text-[14px] font-semibold uppercase group cursor-pointer flex items-center"
            onClick={() => setIsActive(!isActive)}
          >
            <span className="group-hover:text-[#e4dcfc] transition-colors duration-300">
              {isActive ? "Hide" : "Show"}
            </span>
            <span
              className={`${styles["arrow-icon"]} h-[6px] w-[13px] ml-2.5 bg-[#9793ba] group-hover:bg-[#e4dcfc] duration-300 ${isActive ? "active" : ""}`}
            ></span>
          </div>
        </div>
      </div>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isActive ? `${sectionHeight}px` : "0px",
          opacity: isActive ? 1 : 0,
        }}
      >
        <CasesGrid cases={cases} sectionId={id.toString()} />
      </div>
    </section>
  );
};
