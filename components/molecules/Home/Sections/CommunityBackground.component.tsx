const CommunityBackground = () => {
  return (
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
  );
};

export default CommunityBackground;
