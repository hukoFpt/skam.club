import { LogoIcon } from "@/components/atoms/icons/Layout/Header/Menu.icon";
import Image from "next/image";

const vitalityBanner = () => {
  return (
    <div className="relative section-title__vitality-banner flex flex-col gap-[48px] items-center justify-center pb-48">
      <Image src="/vitality-logo.png" alt="Vitality Banner" width={328} height={79} />
      <div className="flex w-full items-center justify-center gap-2 mt-4">
        <LogoIcon height={48} width={48} />
        <div className="text-[13px] text-white font-medium tracking-widest uppercase">Major Partner</div>
        <Image src="/vitality.png" alt="Vitality Logo" width={48} height={48} className="rounded-full" />
      </div>
    </div>
  );
};

export default vitalityBanner;
