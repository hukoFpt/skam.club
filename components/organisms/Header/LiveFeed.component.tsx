import LiveFeedConveyor from "@/components/molecules/Header/LiveFeed/LiveFeedConveyor.component";
import LiveFeedRow from "@/components/molecules/Header/LiveFeed/LiveFeedRow.component";

const LiveFeed = () => {
  return (
    <div className="relative">
      <LiveFeedRow />
      <LiveFeedConveyor />
    </div>
  );
};

export default LiveFeed;
