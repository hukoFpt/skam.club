"use client";

import { HomeIcon } from "@/components/atoms/icons/Home/MainPageFilter.icon";
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";


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
    [],
  );

  const handleSectionClick = (id: string) => {
    const targetSection = document.getElementById(`section-${id}`);
    if (targetSection) {
      const offset = 100; // Adjust this value to scroll less (e.g., 50px above the section)
      const top = targetSection.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(`section-${section.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionHeight = element.offsetHeight;

          // Adjust logic to account for small section heights
          if (rect.top >= 0 && rect.top + sectionHeight / 2 <= window.innerHeight / 2) {
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
        className="h-full w-full swiper-container"
        mousewheel={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
      >
        {sections.map((section) => (
          <SwiperSlide
            key={section.id}
            className={`flex items-center justify-center group ${
              activeSection === section.id ? " text-white cursor-default" : " cursor-pointer "
            }`}
            onClick={() => handleSectionClick(section.id)}
            style={{ width: "auto" }}
          >
            <div className="relative h-full px-[23px] flex items-center justify-center">
              <span
                className={`text-[15px] font-medium uppercase tracking-tighter ${
                  activeSection === section.id
                    ? "active-swiper-slide text-[#ffffff]"
                    : "text-[#58547b] group-hover:text-[#9f9ea8]"
                } transition-colors duration-300`}
              >
                {section.label}
              </span>
              {activeSection === section.id && <div className="active-gradient"></div>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const FilterPriceButton = ({ isActive, toggleActiveState }: { isActive: boolean; toggleActiveState: () => void }) => {
  return (
    <div className={`filter-price-button h-full ${isActive ? "active" : ""}`} onClick={toggleActiveState}>
      <div className="text-[15px] text-[#e4dcfc] tracking-tighter uppercase">$ Price</div>
      <div className={`arrow-icon ${isActive ? "active" : ""}`}></div>
    </div>
  );
};

const MainPageFilter = () => {
  const [value, setValue] = useState([0, 1000]); // Initial range values
  const [isPriceFilterActive, setIsPriceFilterActive] = useState(false);

  const togglePriceFilter = () => {
    setIsPriceFilterActive(!isPriceFilterActive); // Toggle the active state
  };

  return (
    <div className="pt-6 px-5 pb-7 mx-[35px] sticky top-0 z-10 rounded-[20px] swiper-container">
      <div className="main-page-filter flex h-[70px] relative items-center justify-between overflow-hidden">
        <FilterToTopButton />
        <FilterSection />
        <FilterPriceButton isActive={isPriceFilterActive} toggleActiveState={togglePriceFilter} />
      </div>
      <div className={`price-filter-wrapper flex items-center justify-between ${isPriceFilterActive ? "active" : ""}`}>
        <div className="mx-8 flex items-center">
          <span className="text-[#9793ba] tracking-tighter	text-[14px] mr-8">CHOOSE A PRICE</span>
          <div className="bg-[#282546] w-[480px]">
            <RangeSlider id="range-slider-custom" />
          </div>
        </div>
        <div>Hello</div>
      </div>
    </div>
  );
};

export default MainPageFilter;
