"use client";

import { HomeIcon } from "@/components/atoms/icons/Home/MainPageFilter.icon";
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Mousewheel } from "swiper/modules";

const FilterToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div className="w-[84px] h-full flex items-center justify-center cursor-pointer group" onClick={scrollToTop}>
      <HomeIcon
        height={20}
        width={20}
        className="fill-[#58547b] group-hover:fill-[#9f9ea8] transition-colors duration-300"
      />
    </div>
  );
};

const FilterSection = () => {
  const [activeSection, setActiveSection] = useState<string>("0");
  const swiperRef = useRef<import("swiper").Swiper | null>(null); // Reference to the Swiper instance

  const sections = React.useMemo(
    () => [
      { id: "0", label: "Special for you" },
      { id: "1", label: "Event Cases" },
      { id: "2", label: "Bestseller Cases" },
      { id: "3", label: "Community Cases" },
      { id: "4", label: "Discord Cases" },
      { id: "5", label: "Armory Bundle" },
      { id: "6", label: "Color Maniac" },
      { id: "7", label: "Vitality's Choice" },
      { id: "8", label: "Crazy Moves" },
      { id: "9", label: "Anime Cases" },
      { id: "10", label: "Battle Cases" },
      { id: "11", label: "Sticker Capsules" },
      { id: "12", label: "Farm Cases" },
      { id: "13", label: "Collection Vault" },
      { id: "14", label: "Special Cases" },
      { id: "15", label: "By Rarity" },
      { id: "16", label: "By Type" },
      { id: "17", label: "Our Special" },
      { id: "18", label: "Creators Cases" },
      { id: "19", label: "Karrigan's Choice" },
      { id: "20", label: "Classic" },
      { id: "21", label: "Collections" },
    ],
    []
  );

  const handleSectionClick = (id: string) => {
    const targetSection = document.getElementById(`section-${id}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(`section-${section.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  useEffect(() => {
    if (swiperRef.current) {
      const activeIndex = sections.findIndex((section) => section.id === activeSection);
      if (activeIndex !== -1) {
        swiperRef.current.slideTo(activeIndex); // Auto-swipe to the active section
      }
    }
  }, [activeSection, sections]);

  return (
    <div className="w-full h-full overflow-hidden">
      <Swiper
        modules={[Mousewheel]}
        slidesPerView="auto"
        className="h-full w-full"
        mousewheel={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
      >
        {sections.map((section) => (
          <SwiperSlide
            key={section.id}
            className={`flex items-center justify-center cursor-pointer group ${
              activeSection === section.id ? "bg-[#9f9ea8]" : ""
            }`}
            onClick={() => handleSectionClick(section.id)}
            style={{ width: "auto" }}
          >
            <div className="h-full px-[23px] flex items-center justify-center">
              <span
                className={`text-[15px] font-medium uppercase tracking-tighter ${
                  activeSection === section.id
                    ? "text-[#ffffff]"
                    : "text-[#58547b] group-hover:text-[#9f9ea8]"
                } transition-colors duration-300`}
              >
                {section.label}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const FilterPriceButton = () => {
  return (
    <div className="w-[84px] h-full flex items-center justify-center">
      <HomeIcon height={20} width={20} fill="#58547b" />
    </div>
  );
};

const MainPageFilter = () => {
  return (
    <div className="pt-6 px-5 pb-7 mx-[35px] sticky top-0 z-10 rounded-[20px]">
      <div className="main-page-filter flex h-[70px] relative items-center justify-between overflow-hidden">
        <FilterToTopButton />
        <FilterSection />
        <FilterPriceButton />
      </div>
    </div>
  );
};

export default MainPageFilter;
