"use client";

import { HomeIcon } from "@/components/atoms/icons/Home/MainPageFilter.icon";
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import "swiper/css";
import "swiper/css/free-mode";
import { Mousewheel } from "swiper/modules";
import HexagonCheckbox from "@/components/atoms/icons/Home/HexagonCheckbox.icon";
import XIcon from "@/components/atoms/icons/Home/XIcon.icon";

const FilterToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
      const offset = 100; 
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

const FilterPriceButton = ({
  isActive,
  toggleActiveState,
  priceRange,
}: {
  isActive: boolean;
  toggleActiveState: () => void;
  priceRange?: string;
}) => {
  return (
    <div className={`filter-price-button h-full ${isActive ? "active" : ""}`} onClick={toggleActiveState}>
      <div className="text-[15px] text-[#e4dcfc] tracking-tighter uppercase">
        <span className={!priceRange ? "" : "text-[#4af1b8]"}>$</span>
        <span className=""> PRICE</span>
        {priceRange && <div className="text-[#385866] text-[12px] font-semibold"> {priceRange}</div>}
      </div>
      <div className={`arrow-icon bg-[#9793ba] w-[16px] h-[8px] ${isActive ? "active" : ""}`}></div>
    </div>
  );
};

const MainPageFilter = () => {
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 100]); // Slider works with 0-100

  const ranges = [
    { percent: 0, value: 0 },
    { percent: 50, value: 6 },
    { percent: 75, value: 26 },
    { percent: 80, value: 50 },
    { percent: 90, value: 100 },
    { percent: 96, value: 200 },
    { percent: 99, value: 777 },
    { percent: 100, value: 1000 },
  ];

  // Convert slider percentage to actual value
  const percentToValue = (percent: number): number => {
    for (let i = 0; i < ranges.length - 1; i++) {
      const current = ranges[i];
      const next = ranges[i + 1];

      if (percent >= current.percent && percent <= next.percent) {
        const ratio = (percent - current.percent) / (next.percent - current.percent);
        return current.value + ratio * (next.value - current.value);
      }
    }
    return ranges[ranges.length - 1].value;
  };

  // Get actual values for display
  const actualValues: [number, number] = [percentToValue(sliderValue[0]), percentToValue(sliderValue[1])];

  const [isPriceFilterActive, setIsPriceFilterActive] = useState(false);

  const togglePriceFilter = () => {
    setIsPriceFilterActive(!isPriceFilterActive);
  };

  const minPercent = sliderValue[0];
  const maxPercent = sliderValue[1];
  const minValue = actualValues[0];
  const maxValue = actualValues[1];

  const sliderWidth = 480;
  const minPx = (minPercent / 100) * sliderWidth;
  const maxPx = (maxPercent / 100) * sliderWidth;

  const overlap = Math.abs(maxPx - minPx) < 40;

  const [isChecked, setIsChecked] = useState(false);

  const hasStateChanged = sliderValue[0] !== 0 || sliderValue[1] !== 100 || isChecked !== false;

  const isPriceRangeChanged = sliderValue[0] !== 0 || sliderValue[1] !== 100;

  const priceRangeText = isPriceRangeChanged ? `$${minValue.toFixed(2)} - ${maxValue.toFixed(2)}` : undefined;

  // Reset to initial state
  const resetFilters = () => {
    if (!hasStateChanged) return;
    setSliderValue([0, 100]);
    setIsChecked(false);
  };

  return (
    <div className="sticky top-0 z-10 rounded-[20px] swiper-container">
      <div className="main-page-filter flex h-[70px] relative items-center justify-between overflow-hidden">
        <FilterToTopButton />
        <FilterSection />
        <FilterPriceButton
          isActive={isPriceFilterActive}
          toggleActiveState={togglePriceFilter}
          priceRange={priceRangeText}
        />
      </div>
      <div className={`price-filter-wrapper flex items-center justify-between ${isPriceFilterActive ? "active" : ""}`}>
        <div className="h-full flex items-center">
          <div className="flex h-full items-center mx-8 ">
            <span className="text-[#9793ba] tracking-tighter text-[14px] mr-8">CHOOSE A PRICE</span>
            <div className="relative bg-[#282546] w-[480px]">
              <RangeSlider id="range-slider-custom" value={sliderValue} onInput={setSliderValue} min={0} max={100} />
              {overlap ? (
                <div
                  className="absolute top-[-32px] text-[#58547b] text-[12px] font-semibold"
                  style={{
                    left: `calc(${(minPercent + maxPercent) / 2}% - 30px)`,
                    width: "max-content",
                    whiteSpace: "nowrap",
                  }}
                >
                  ${minValue.toFixed(2)} - ${maxValue.toFixed(2)}
                </div>
              ) : (
                <>
                  <div
                    className="absolute top-[-32px] text-[#58547b] text-[12px] font-semibold"
                    style={{ left: `calc(${minPercent}% - ${minPercent * 0.14}px)` }}
                  >
                    ${minValue.toFixed(2)}
                  </div>
                  <div
                    className="absolute top-[-32px] text-[#58547b] text-[12px] font-semibold"
                    style={{ left: `calc(${maxPercent}% - ${maxPercent * 0.14}px)` }}
                  >
                    ${maxValue.toFixed(2)}
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className="h-full border-l border-[#1f1c36] flex items-center justify-center pl-8 cursor-pointer select-none"
            onClick={() => setIsChecked(!isChecked)}
          >
            <div className="flex items-center">
              <input type="checkbox" className="appearance-none w-0 h-0 opacity-0 absolute" />
              <HexagonCheckbox checked={isChecked} onChange={setIsChecked} size={26} />
            </div>
            <div className="text-[#58547b] text-[14px] ml-2.5 uppercase font-medium tracking-tighter tracking">
              Sufficient balance to open
            </div>
          </div>
        </div>
        <div className="border-[#1f1c36] h-full flex items-center justify-center border-l">
          <button
            className={`flex items-center justify-center group bg-[#282546] rounded-sm mx-10 px-2.5 h-8 min-w-[106px] transition-all duration-300 ${
              hasStateChanged ? "cursor-pointer hover:bg-[#3a3658]" : "cursor-not-allowed"
            }`}
            onClick={resetFilters}
            disabled={!hasStateChanged}
          >
            <XIcon
              height={12}
              className={`transition-colors duration-300 fill-[#7f7aab] ${
                hasStateChanged ? " group-hover:fill-[#e4dcfc]" : ""
              }`}
            />
            <span
              className={`ml-2 text-[14px] font-semibold tracking-tighter transition-colors duration-300 uppercase text-[#7f7aab] ${
                hasStateChanged ? " group-hover:text-[#e4dcfc]" : ""
              }`}
            >
              Clear
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPageFilter;
