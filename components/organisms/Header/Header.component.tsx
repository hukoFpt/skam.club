import React from "react";

import TopBlock from "./TopBlock.component";
import Menu from "./Menu.component";
import LiveFeed from "./LiveFeed.component";

const Header = () => {
  return (
    <div className="relative header-bg px-11 pt-2.5">
      <TopBlock />
      <Menu />
      <LiveFeed />
    </div>
  );
};

export default Header;