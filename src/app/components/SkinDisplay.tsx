import Image from "next/image";

interface SkinDisplayProps {
  id: string;
  name: string;
  quality: string;
  exterior: string;
  ext: string;
  price: number;
  category: string;
  subcategory: string;
  addon: string;
  image: string;
}

const qualityBackgrounds: Record<string, string> = {
  Extraordinary: "rarity-7",
  Contraband: "rarity-6",
  Covert: "rarity-6",
  Classified: "rarity-5",
  Restricted: "rarity-4",
  "Mil-Spec Grade": "rarity-3",
  "Industrial Grade": "rarity-2",
  "Consumer Grade": "rarity-1",
};

const SkinDisplay = (props: SkinDisplayProps) => {
  const QualityBackground = `/images/backgrounds/${
    qualityBackgrounds[props.quality]
  }.svg`;
  return (
    <div
      className="bg-bg-highlight flex flex-col p-2 h-[180px] w-[214px] justify-between"
      style={{
        backgroundImage: `url(${QualityBackground})`,
        backgroundSize: "120px auto",
        backgroundPosition: "57% 25%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-xs font-light text-neutral-300 text-right w-full">
        {props.ext}
      </div>
      <div className="flex justify-center items-center flex-grow">
        <Image
          className="object-contain"
          src={`/images/weapons/${props.image}`}
          width={100}
          height={100}
          alt={props.name}
        />
      </div>
      <div className="flex w-full items-end">
        <div className="flex flex-col w-3/5">
          <div className="text-xs text-neutral-300 text-opacity-70">
            {props.subcategory}
          </div>

          <div className="text-ms">{props.name}</div>
        </div>

        <div className="text-ms font-bold text-teal-300 w-2/5 text-end">
          ${props.price}
        </div>
      </div>
    </div>
  );
};

export default SkinDisplay;
