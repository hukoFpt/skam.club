"use client";

import React from "react";

type Props = {
  id: number;
  title: string;
  description: string;
  type: string; 
};

export const SectionAccordion = ({ id, title, description, type }: Props) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <section id={`section-${id}`} className="default-case-section w-full pb-[54px]">
      <div className="border-t border-[#1e1b35] pt-11 relative">
        <div className={`title-number large font-orbitron opacity-10 ${isActive ? "text-[96px]" : "text-[40px]"}`}>
          {String(id).padStart(2, "0")}
        </div>
        <div className="title-number small font-orbitron opacity-10">{String(id).padStart(2, "0")}</div>
        <div className="relative flex w-3/4 items-baseline pr-[130px] m-auto">
          <div className="text-2xl font-bold text-white mr-5 uppercase">{title}</div>
          <div className="text-[13px] text-[#70699b] uppercase">{description}</div>
          <div
            className="absolute right-[30px] top-[10px] text-[#716d9e] text-[14px] font-semibold uppercase group cursor-pointer flex items-center"
            onClick={() => setIsActive(!isActive)}
          >
            <span className="group-hover:text-[#e4dcfc] transition-colors duration-300">
              {isActive ? "Hide" : "Show"}
            </span>
            <span
              className={`arrow-icon h-[6px] w-[13px] ml-2.5 bg-[#9793ba] group-hover:bg-[#e4dcfc] duration-300 ${isActive ? "active" : ""}`}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};
