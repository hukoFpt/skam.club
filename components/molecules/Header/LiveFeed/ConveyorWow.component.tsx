import { LiveFeedDrop } from "./LiveFeedDrop.component";

const ConveyorWow = () => {
  return (
    <div className="w-[525px] shrink-0 h-full overflow-hidden border-x border-[#44380c]">
      <div className="flex flex-nowrap h-full w-max ">
        <LiveFeedDrop
          isFromBattle={true}
          rarity={7}
          image={"https://cfdn.skin.club/iixekz9zfm/items/d110082f457de0904e11424c7888a00f36fb93ff.png"}
          weapon={" ★ Karambit"}
          finish={"Stained "}
        />
        <LiveFeedDrop
          isFromBattle={true}
          rarity={7}
          image={"https://cfdn.skin.club/iixekz9zfm/items/d110082f457de0904e11424c7888a00f36fb93ff.png"}
          weapon={" ★ Karambit"}
          finish={"Stained "}
        />
        <LiveFeedDrop
          isFromBattle={true}
          rarity={7}
          image={"https://cfdn.skin.club/iixekz9zfm/items/1f1b458bd93ff5b8eafecb159be5eeb3771b6fe8.png"}
          weapon={" ★ M9 Bayonet"}
          finish={"Case Hardened "}
        />
        <LiveFeedDrop
          isFromBattle={true}
          rarity={7}
          image={"https://cfdn.skin.club/iixekz9zfm/items/1f1b458bd93ff5b8eafecb159be5eeb3771b6fe8.png"}
          weapon={" ★ M9 Bayonet"}
          finish={"Case Hardened "}
        />
      </div>
    </div>
  );
};

export default ConveyorWow;
