import { SettingsIcon } from "@/components/atoms/icons/Header/Menu.icon";
import Logo from "@/components/molecules/Header/Menu/Logo.component";
import LogoutButton from "@/components/molecules/Header/Menu/Logout.component";
import { Button } from "@/components/molecules/Header/Menu/NavigationButton.component";
import { UserAvatar } from "@/components/molecules/Header/Menu/UserAvatar.component";
import { UserMoney } from "@/components/molecules/Header/Menu/UserMoney.component";

const Menu = () => {
  return (
    <div className="header-menu overflow-hidden relative flex h-[84px]">
      <Logo />
      <div className="header-menu overflow-hidden relative flex h-[84px] w-full">
        <div className="flex ml-8 justify-between items-center w-full">
          <div className="flex gap-5 h-full">
            <Button icon="upgrade" label="UPGRADE" />
            <Button icon="missions" label="MISSIONS" />
            <Button icon="event" label="EVENT" />
            <Button icon="battles" label="BATTLES" />
            <Button icon="daily" label="DAILY CASES" />
            <Button icon="exchange" label="EXCHANGE" />
          </div>
          <div className="flex">
            <div className="settings-button relative flex h-12 w-12 items-center justify-center group">
              <SettingsIcon
                height={22}
                width={22}
                fill="#9793ba"
                className="transition-colors duration-300 group-hover:fill-[#e4dcfc]"
              />
            </div>
            <UserMoney money_balance={100} weapon_balance={100} />
            <UserAvatar
              avatar_url="https://avatars.steamstatic.com/4cf6453c66d795292b7b133971288a0505c59e83_medium.jpg"
              level={1}
            />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;