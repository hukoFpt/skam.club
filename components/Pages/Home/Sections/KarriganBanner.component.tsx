import Image from "next/image";

const KarriganBanner = () => {
  return (
    <div className="karrigan-banner-block relative mb-[42px]">
      <div className="border-b border-[#55283b] justify-between w-[1316px] mx-auto px-2.5 pt-5 pb-1 relative flex z-1">
        <Image src="/karrigan-first-photo.png" alt="Karrigan Banner" width={363} height={352} />
        <div className="flex flex-col mt-24 items-center">
          <Image src="/karrigan-text.png" alt="Karrigan Banner" width={398} height={100} />
          <div className="text-[18px] text-[#9692b8] text-center mt-[25px] w-[440px] ">
            Try out cases that have been approved by the world champion and our big friend — Karrigan.
          </div>
        </div>
        <Image src="/karrigan-second-photo.png" alt="Karrigan Banner" width={369} height={372} />
      </div>
    </div>
  );
};

export default KarriganBanner;
