import { Counter } from "@/components/molecules/Header/TopBlock/Counter.component";

const TopBlock = () => {
  return (
    <div className="h-10 flex items-center gap-8 relative">
      <Counter icon="online" count={1423} label="ONLINE" color="#50c8ce" />
      <Counter icon="user" count={5123212} label="USERS" color="#cd4c8f" />
      <Counter icon="battle" count={58243254} label="BATTLES" color="#79c1e0" />
      <Counter icon="upgrade" count={96130443} label="UPGRADE" color="#7c5ac8" />
      <Counter icon="case" count={495223949} label="CASES" color="#da4472" />
      <div className="absolute w-full h-full top-0 bg-neutral-800/60 flex items-center justify-center text-white font-semibold">
        This counter is not available yet. TDL.
      </div>
    </div>
  );
};

export default TopBlock;
