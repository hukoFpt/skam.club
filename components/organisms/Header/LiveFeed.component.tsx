import LiveFeedConveyor from "@/components/molecules/Header/LiveFeed/LiveFeedConveyor.component";
import LiveFeedRow from "@/components/molecules/Header/LiveFeed/LiveFeedRow.component";

const LiveFeed = () => {
  return (
    <div className="relative">
      <LiveFeedRow />
      <LiveFeedConveyor />
      <div className="absolute w-full h-full top-0 bg-neutral-800/60 flex items-center justify-center text-white font-semibold">
        This live feed is not available yet. TDL.
      </div>
    </div>
  );
};

export default LiveFeed;
