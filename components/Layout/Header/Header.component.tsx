import React from "react";
import { usePathname } from "next/navigation";

import TopBlock from "./TopBlock/TopBlock.component";
import Menu from "./Menu/Menu.component";
import LiveFeed from "./LiveFeed/LiveFeed.component";

const Header = () => {
  const pathname = usePathname();
  console.log("Header pathname:", pathname);

  return (
    <div className={`relative px-11 pt-2.5 ${pathname === "/" ? "header-bg" : ""}`}>
      <TopBlock />
      <Menu />
      {pathname === "/" && <LiveFeed />}
    </div>
  );
};

export default Header;
