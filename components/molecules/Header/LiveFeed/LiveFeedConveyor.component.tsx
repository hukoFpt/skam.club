import ConveyorOrdinary from "./ConveyorOrdinary.component";
import ConveyorWow from "./ConveyorWow.component";

const LiveFeedConveyor = () => {
  return (
    <div className="bg-[#141225] h-[116px] rounded-[5px] w-full relative overflow-hidden flex">
      <ConveyorWow />
      <ConveyorOrdinary />
    </div>
  );
};

export default LiveFeedConveyor;
