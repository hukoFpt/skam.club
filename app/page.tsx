import EventBanner from "@/components/molecules/Home/EventBanner.component";
import MainPageFilter from "@/components/molecules/Home/MainPageFilter.component";
import { SectionAccordion } from "@/components/molecules/Home/Sections/SectionsAccordion.component";

const sections = [
  { id: "0", label: "Special for you", description: "Your favorite, free and daily cases" },
  { id: "1", label: "Event Cases", description: "" },
  { id: "2", label: "Bestseller Cases", description: "" },
  { id: "3", label: "Community Cases", description: "" },
  { id: "4", label: "Discord Cases", description: "" },
  { id: "5", label: "Armory Bundle", description: "" },
  { id: "6", label: "Color Maniac", description: "" },
  { id: "7", label: "Vitality's Choice", description: "" },
  { id: "8", label: "Crazy Moves", description: "" },
  { id: "9", label: "Anime Cases", description: "" },
  { id: "10", label: "Battle Cases", description: "" },
  { id: "11", label: "Sticker Capsules", description: "" },
  { id: "12", label: "Farm Cases", description: "" },
  { id: "13", label: "Collection Vault", description: "" },
  { id: "14", label: "Special Cases", description: "" },
  { id: "15", label: "By Rarity", description: "" },
  { id: "16", label: "By Type", description: "" },
  { id: "17", label: "Our Special", description: "" },
  { id: "18", label: "Creators Cases", description: "" },
  { id: "19", label: "Karrigan's Choice", description: "" },
  { id: "20", label: "Classic", description: "" },
  { id: "21", label: "Collections", description: "" },
];

export default function Home() {
  return (
    <div className="">
      <EventBanner />
      <MainPageFilter />
      {sections.map((section) => (
        <SectionAccordion
          key={section.id}
          id={parseInt(section.id)}
          title={section.label}
          description={section.description}
        />
      ))}
    </div>
  );
}
