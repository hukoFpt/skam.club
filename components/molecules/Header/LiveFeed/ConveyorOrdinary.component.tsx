import { LiveFeedDrop } from "./LiveFeedDrop.component";

const ConveyorOrdinary = () => {
  return (
    <div className="w-full shrink-0 h-full overflow-hidden">
      <div className="flex flex-nowrap h-full w-max ">
        <LiveFeedDrop
          isFromBattle={true}
          rarity={6}
          image={"https://cfdn.skin.club/iixekz9zfm/items/b11912a9a19fdc13aa068e1d12fd58f884ce2eaf.png"}
          weapon={" AWP"}
          finish={"Chromatic Aberration "}
        />
        <LiveFeedDrop
          isFromBattle={true}
          rarity={5}
          image={"https://cfdn.skin.club/iixekz9zfm/items/db73286fca4275063d52884bae716b90373bb50e.png"}
          weapon={" AWP"}
          finish={"Mortis "}
        />
        <LiveFeedDrop
          isFromBattle={false}
          rarity={4}
          image={"https://cfdn.skin.club/iixekz9zfm/items/3f78d34ec9983c2d4b40618c76b3080812da8926.png"}
          weapon={" M4A1-S"}
          finish={"Nitro "}
        />
        <LiveFeedDrop
          isFromBattle={true}
          rarity={5}
          image={"https://cfdn.skin.club/iixekz9zfm/items/3045814de4741976a8a73c5180077a66f2b6422d.png"}
          weapon={" Sticker"}
          finish={"100 Thieves (Foil) | 2020 RMR "}
        />
        <LiveFeedDrop
          isFromBattle={true}
          rarity={3}
          image={"https://cfdn.skin.club/iixekz9zfm/items/3d44bd77025074f971e63b37a99e4b5cb08d46f4.png?policy=skin-sm"}
          weapon={" Sticker"}
          finish={"Get Clucked "}
        />
        <LiveFeedDrop
          isFromBattle={true}
          rarity={4}
          image={"https://cfdn.skin.club/iixekz9zfm/items/a31c6b85ee52c1f08fb67449979c00985e8756a4.png"}
          weapon={" Glock-18"}
          finish={"Moonrise "}
        />
        <LiveFeedDrop
          isFromBattle={true}
          rarity={4}
          image={"https://cfdn.skin.club/iixekz9zfm/items/cf72b8666385b7b2734c82b322ce7805b6def7e2.png"}
          weapon={" FAMAS"}
          finish={"ZX Spectron "}
        />
        <LiveFeedDrop
          isFromBattle={true}
          rarity={4}
          image={"https://cfdn.skin.club/iixekz9zfm/items/a31c6b85ee52c1f08fb67449979c00985e8756a4.png"}
          weapon={" Glock-18"}
          finish={"Moonrise "}
        />
      </div>
    </div>
  );
};

export default ConveyorOrdinary;
