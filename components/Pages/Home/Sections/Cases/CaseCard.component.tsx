import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/components/shared/cases.module.css";

import type { CaseCardProps } from "@/types/section-case.type";

export const CaseCard = ({ case: caseData, onClick }: CaseCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(caseData.id);
    }
  };

  return (
    <Link
      href={caseData.caseUrl}
      className={`group relative h-[365px] w-[234px] mt-6 mx-2.5  text-center`}
      onClick={handleClick}
    >
      <span
        className={`${styles["case-entity__top-gradient"]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div
        className={`${styles["case-entity__border"]} ${styles["is-top"]} opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-[150ms] ease-out`}
      />
      <div
        className={`${styles["case-entity__border"]} ${styles["is-bottom"]} opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-[150ms] ease-out`}
      />
      <div
        className="flex items-center justify-center w-[234px] h-[234px] group-hover:scale-110 transition-transform duration-300"
        style={{
          transitionTimingFunction: "cubic-bezier(0.47, 1.64, 0.41, 0.8)",
        }}
      >
        <Image src={caseData.imageUrl} alt={caseData.title} width={232} height={234} className="object-contain w-full h-full" />
      </div>
      {caseData.tags != null && (
        <div
          className={`${styles["label"]} absolute top-[19px] left-[12px] ${
            caseData.tags === "new"
              ? styles["new"]
              : caseData.tags === "hit"
                ? styles["hit"]
                : caseData.tags === "phases" && styles["phases"]
          }`}
        >
          {caseData.tags}
        </div>
      )}
      <div className={`text-[16px] text-[#fbfffe] font-semibold ${caseData.price !== 0 ? "" : "mt-[-14px]"}`}>
        {caseData.title}
      </div>
      <span className={`${styles["feast-point"]} flex items-center justify-center opacity-0 group-hover:opacity-100`}>
        +{caseData.eventPoint}
        <Image src="/images/home/austin-blast.png" alt="Feast Point Icon" width={20} height={20} className="inline-block ml-1" />
      </span>
      {caseData.price === 0 ? (
        <div>
          <div className="text-[13px] text-[#4af1b8] font-semibold uppercase mt-1.5">Free</div>
          <div
            className={`${styles["case-entity__button"]} text-[13px] mt-[18px] text-white bg-[#cf3464] group-hover:!bg-[#f15183]`}
          >
            Open Case
          </div>
        </div>
      ) : (
        <div
          className={`${styles["case-entity__button"]} text-[16px] mt-[18px] text-[#4af1b8] bg-[#1c1a31] group-hover:!bg-[#201d37]`}
        >
          {"$"}
          {caseData.price.toFixed(2)}
        </div>
      )}
      <div
        className={`${styles["case-entity__video-animation"]} mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      >
        <video autoPlay loop playsInline preload="none" muted className={``}>
          <source src="/videos/case-hover-animation.mp4" type="video/mp4" />
        </video>
      </div>
    </Link>
  );
};
