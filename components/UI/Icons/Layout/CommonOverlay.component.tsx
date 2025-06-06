import { MoneyModal } from "./Overlay/MoneyModal.component";

type Props = {
  isActive: boolean;
  type: "money" | "inventory" | "settings" | null;
  onClose: () => void;
};

export const CommonOverlay = ({ onClose, type, isActive }: Props) => {
  console.log(isActive, type);
  return (
    <div
      className={`
        z-[100] fixed flex items-center justify-center bottom-0 left-0 right-0 top-0 py-[40px] overflow-y-scroll
        transition-opacity duration-200
        ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="fixed bg-[#040314b3] backdrop-blur-md bottom-0 left-0 right-0 top-0" onClick={onClose}></div>
      <div className="relative flex mx-auto">
        {(() => {
          switch (type) {
            case "money":
              return <MoneyModal key={String(isActive) + String(type)} onClose={onClose} />;
            case "inventory":
              return <div className="bg-white p-4 rounded shadow-lg">Inventory Overlay</div>;
            case "settings":
              return <div className="bg-white p-4 rounded shadow-lg">Settings Overlay</div>;
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
};
