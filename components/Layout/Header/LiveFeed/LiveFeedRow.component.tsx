import LiveFeedOrdinary from "./LiveFeedOrdinary.component";
import LiveFeedWow from "./LiveFeedWow.component";

const LiveFeedRow = () => {
  return (
    <div className="flex w-full">
      <LiveFeedWow />
      <LiveFeedOrdinary />
    </div>
  );
};

export default LiveFeedRow;
