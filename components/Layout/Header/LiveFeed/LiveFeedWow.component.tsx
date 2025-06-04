import React from "react";

import { FireIcon } from "@/components/UI/Icons/Layout/Header/LiveFeed.icon";

const LiveFeedWow = () => {
  return (
    <div className="relative w-[525px] flex py-2 items-center">
      <FireIcon className="absolute top-[-6px] left-[-8px]" />
      <span className="live-feed-wow-label pl-4 text-[10px] font-medium">WOW DROP</span>
    </div>
  );
};

export default LiveFeedWow;
