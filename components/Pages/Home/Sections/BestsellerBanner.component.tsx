import Image from "next/image";

import styles from "@/styles/pages/home.module.css";

const BestsellerBanner = () => {
  return (
    <div className={`${styles["pickem-banner"]}`}>
      <div className="flex flex-col max-w-[1175px] px-5 mx-auto gap-[41px]">
        <div>
          <Image src="/images/home/major-logo.png" alt="Bestseller Banner" width={283} height={84} />
          <p className="text-[20px] text-[#0ffdfd] font-bold mt-6 uppercase">
            <time dateTime="2025-05-05">5 may</time>
            {" - "}
            <time dateTime="2025-06-22">22 jun</time>
          </p>
        </div>
        <div className="self-end">
          <p className={`${styles["pickem-banner__prize-pool-title-text"]} flex flex-col`}>
            <span>Pick&apos;em</span> with Skin.Club!
          </p>
          <p className="mt-3 uppercase">
            <span className="text-[#0ffdfd] font-bold text-[31px]">350 skins</span>
            <span className="text-[#fffefe] font-bold text-[16px] ml-[9px]">prize pool</span>
          </p>
          <a
            href="https://pickem.skin.club/en"
            className={`${styles["pickem-banner__button"]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Participate
          </a>
        </div>
      </div>
    </div>
  );
};

export default BestsellerBanner;
