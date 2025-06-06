import React from "react";
import { usePathname } from "next/navigation";

import styles from "@/styles/components/layout/header.module.css";

import TopBlock from "./TopBlock/TopBlock.component";
import Menu from "./Menu/Menu.component";
import LiveFeed from "./LiveFeed/LiveFeed.component";

interface HeaderProps {
  onOpenMoney: () => void;
  onOpenInventory: () => void;
  onOpenSettings: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenMoney, onOpenInventory, onOpenSettings }) => {
  const pathname = usePathname();

  return (
    <div className={`relative px-11 pt-2.5 ${pathname === "/" ? styles["header-bg"] : ""}`}>
      <TopBlock />
      <Menu onOpenMoney={onOpenMoney} onOpenInventory={onOpenInventory} onOpenSettings={onOpenSettings} />
      {pathname === "/" && <LiveFeed />}
    </div>
  );
};

export default Header;
