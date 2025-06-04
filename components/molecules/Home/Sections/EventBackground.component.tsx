const EventBackground = () => {
  return (
    <div className="absolute h-full w-full opacity-20 -z-1 top-0 left-0 overflow-hidden">
      <video autoPlay loop playsInline preload="none" muted className="object-contain overflow-clip">
        <source src="/videos/event-animation-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default EventBackground;
