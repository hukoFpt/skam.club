import { LogoutIcon } from "@/components/UI/Icons/Layout/Header/Menu.icon";

import styles from "@/styles/components/layout/header.module.css";

const LogoutButton = () => {
  return (
    <div className={`${styles["logout-button"]} flex items-center justify-center group ml-6 bg-[#1f1d34] hover:bg-[#332f55] cursor-pointer`}>
      <LogoutIcon width={17} height={17} fill="#9793ba" />
    </div>
  );
};

export default LogoutButton;
