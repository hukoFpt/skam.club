"use client";

import React from "react";
import Image from "next/image";
import { LogoIcon } from "@/components/atoms/icons/Layout/Header/Menu.icon";

type Props = {
  id: number;
  title: string;
  description: string;
  type: string;
};

export const SectionAccordion = ({ id, title, description, type }: Props) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <section
      id={`section-${id}`}
      className={`relative w-full transition-all duration-500 ease-in-out ${
        type === "community"
          ? "pb-[108px]"
          : isActive
            ? `pb-[108px] ${type !== "event" ? "section-accordion" : ""}`
            : "pb-[54px]"
      } ${type === "event" ? "bg-transparent" : ""}`}
    >
      {type === "event" && (
        <div className="absolute h-full w-full opacity-20 -z-1 top-0 left-0 overflow-hidden">
          <video autoPlay loop playsInline preload="none" muted className="object-contain overflow-clip">
            <source src="/videos/event-animation-bg.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      {type === "bestseller" && (
        <div className="pickem-banner">
          <div className="flex flex-col max-w-[1175px] px-5 mx-auto gap-[41px]">
            <div>
              <Image src="/major-logo.png" alt="Bestseller Banner" width={283} height={84} />
              <p className="text-[20px] text-[#0ffdfd] font-bold mt-6 uppercase">
                <time dateTime="2025-05-05">5 may</time>
                {" - "}
                <time dateTime="2025-06-22">22 jun</time>
              </p>
            </div>
            <div className="self-end">
              <p className="pickem-banner__prize-pool-title-text flex flex-col">
                <span>Pick&apos;em</span> with Skin.Club!
              </p>
              <p className="mt-3 uppercase">
                <span className="text-[#0ffdfd] font-bold text-[31px]">350 skins</span>
                <span className="text-[#fffefe] font-bold text-[16px] ml-[9px]">prize pool</span>
              </p>
              <a
                href="https://pickem.skin.club/en"
                className="pickem-banner__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Participate
              </a>
            </div>
          </div>
        </div>
      )}
      {type === "community" && (
        <div className="w-full">
          <div className="section-title__new-label flex items-center absolute top-[-12px] left-[230px] text-[17px] rounded font-semibold px-1.5 bg-[#cf3464] z-1">
            {"NEW (but not implemented)"}
          </div>
          <video
            autoPlay
            loop
            playsInline
            preload="none"
            muted
            className="section-title__animation-bg object-contain overflow-hidden"
          >
            <source src="/videos/community-section-animation.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      {type === "vitality" && (
        <div className="relative section-title__vitality-banner flex flex-col gap-[48px] items-center justify-center pb-48">
          <Image src="/vitality-logo.png" alt="Vitality Banner" width={328} height={79} />
          <div className="flex w-full items-center justify-center gap-2 mt-4">
            <LogoIcon height={48} width={48}/>
            <div className="text-[13px] text-white font-medium tracking-widest uppercase">Major Partner</div>
            <Image
              src="/vitality.png"
              alt="Vitality Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        </div>
      )}
      <div className="border-t border-[#1e1b35] pt-11 relative">
        <div
          className={`title-number large font-nechao opacity-10 ${isActive ? "text-[96px] top-[45px] left-[30px]" : "text-[40px] top-[27px] left-[56px]"} `}
        >
          {String(id).padStart(2, "0")}
        </div>
        <div className="title-number small font-nechao opacity-10">{String(id).padStart(2, "0")}</div>
        <div className="relative flex w-3/4 items-baseline pr-[130px] m-auto">
          <div className="text-2xl font-bold text-white mr-5 uppercase">{title}</div>
          <span className="text-[13px] text-[#70699b] uppercase flex-grow-1 flex">
            {description}{" "}
            {type === "community" && (
              <div className="section-title__create-case-button w-full flex items-baseline gap-1 cursor-pointer">
                <div className="plus-icon w-2.5 h-2.5 bg-[#8471f7]"></div>
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
              className={`arrow-icon h-[6px] w-[13px] ml-2.5 bg-[#9793ba] group-hover:bg-[#e4dcfc] duration-300 ${isActive ? "active" : ""}`}
            ></span>
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isActive ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="h-[460px]"></div>
      </div>
    </section>
  );
};
