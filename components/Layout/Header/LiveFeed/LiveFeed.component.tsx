import LiveFeedConveyor from "./LiveFeedConveyor.component";
import LiveFeedRow from "./LiveFeedRow.component";

const LiveFeed = () => {
  return (
    <div className="relative">
      <LiveFeedRow />
      <LiveFeedConveyor />
    </div>
  );
};

export default LiveFeed;
