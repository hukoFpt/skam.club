import Image from "next/image";

const EventBanner = () => {
  return (
    <div className="relative overflow-hidden mt-6 min-h-[460px] bg-no-repeat bg-[50%]">
      <Image
        src="/main-page-event-banner.png"
        alt="Event Banner"
        width={1920}
        height={460}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default EventBanner;
