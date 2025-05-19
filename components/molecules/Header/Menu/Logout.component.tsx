import { LogoutIcon } from "@/components/atoms/icons/Header/Menu.icon";


const LogoutButton = () => {
  return (
    <div className="logout-button flex items-center justify-center group ml-6 bg-[#1f1d34] hover:bg-[#332f55] cursor-pointer">
      <LogoutIcon width={17} height={17} fill="#9793ba" />
    </div>
  );
};

export default LogoutButton;
