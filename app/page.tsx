import EventBanner from "@/components/molecules/Home/EventBanner.component";
import MainPageFilter from "@/components/molecules/Home/MainPageFilter.component";

import { CommonSectionAccordion } from "@/components/molecules/Home/Sections/CommonSectionsAccordion.component";
import { EventSectionAccordion } from "@/components/molecules/Home/Sections/EventSectionAccordion.component";
import { BestsellerSectionAccordion } from "@/components/molecules/Home/Sections/BestsellerSectionAccordion.component";
import { CommunitySectionAccordion } from "@/components/molecules/Home/Sections/CommunitySectionAccordion.component";
import { VitalitySectionAccordion } from "@/components/molecules/Home/Sections/VitalitySectionAccordion.component";
import { BattleSectionAccordion } from "@/components/molecules/Home/Sections/BattleSectionAccordion.component";
import { KarriganSectionAccordion } from "@/components/molecules/Home/Sections/KarriganSectionAccordion.component";

const sections = [
  { id: "0", label: "Special for you", description: "Your favorite, free and daily cases", type: "common" },
  { id: "1", label: "Event Cases", description: "", type: "event" },
  {
    id: "2",
    label: "Bestseller Cases",
    description: "Trust the choices of other players and open the best-selling cases",
    type: "bestseller",
  },
  {
    id: "3",
    label: "Community Cases",
    description: "Dive into the diversity of our community's cases",
    type: "community",
  },
  { id: "4", label: "Discord Cases", description: "", type: "common" },
  { id: "5", label: "Armory Bundle", description: "", type: "common" },
  { id: "6", label: "Color Maniac", description: "Enjoy the Thrill of Color Mania!", type: "common" },
  { id: "7", label: "Vitality's Choice", description: "", type: "vitality" },
  { id: "8", label: "Crazy Moves", description: "That's some crazy deals — take it or leave it", type: "common" },
  { id: "9", label: "Anime Cases", description: "Choose your favorite anime title right here", type: "common" },
  {
    id: "10",
    label: "Battle Cases",
    description: "Challenge yourself against bots or real players in case battles. The winner takes it all",
    type: "battle",
  },
  {
    id: "11",
    label: "Sticker Capsules",
    description: "Craft your own unique skin. Find a sticker for your favorite skin",
    type: "common",
  },
  { id: "12", label: "Farm Cases", description: "All or nothing cases", type: "common" },
  { id: "13", label: "Collection Vault", description: "", type: "common" },
  { id: "14", label: "Special Cases", description: "Participate in the regular daily case giveaways", type: "common" },
  {
    id: "15",
    label: "By Rarity",
    description: "From Mil-Spec to Knife: unlock the skins of any rarity",
    type: "common",
  },
  {
    id: "16",
    label: "By Type",
    description: "Are you more into AWP or M4A4? Get a skin for your favorite gun",
    type: "common",
  },
  {
    id: "17",
    label: "Our Special",
    description: "Open the most exclusive, unique and striking cases on the website",
    type: "common",
  },
  { id: "18", label: "Creators Cases", description: "Get a skin of your favorite YouTuber", type: "common" },
  {
    id: "19",
    label: "Karrigan's Choice",
    description: "Unlock Karrigan's secrets, follow the pro's path",
    type: "karrigan",
  },
  {
    id: "20",
    label: "Classic",
    description: "Try out classic variants of cases that are better than Valve's",
    type: "common",
  },
  { id: "21", label: "Collections", description: "Complete your set from maps and collections cases", type: "common" },
];

export default function Home() {
  return (
    <div className="">
      <EventBanner />
      <MainPageFilter />
      {sections.map((section) => {
        switch (section.type) {
          case "event":
            return (
              <EventSectionAccordion
                key={section.id}
                id={parseInt(section.id)}
                title={section.label}
                description={section.description}
              />
            );
          case "bestseller":
            return (
              <BestsellerSectionAccordion
                key={section.id}
                id={parseInt(section.id)}
                title={section.label}
                description={section.description}
              />
            );
          case "community":
            return (
              <CommunitySectionAccordion
                key={section.id}
                id={parseInt(section.id)}
                title={section.label}
                description={section.description}
              />
            );
          case "vitality":
            return (
              <VitalitySectionAccordion
                key={section.id}
                id={parseInt(section.id)}
                title={section.label}
                description={section.description}
              />
            );
          case "battle":
            return (
              <BattleSectionAccordion
                key={section.id}
                id={parseInt(section.id)}
                title={section.label}
                description={section.description}
              />
            );
          case "karrigan":
            return (
              <KarriganSectionAccordion
                key={section.id}
                id={parseInt(section.id)}
                title={section.label}
                description={section.description}
              />
            );
          // Add more cases for other types as needed
          case "common":
          default:
            return (
              <CommonSectionAccordion
                key={section.id}
                id={parseInt(section.id)}
                title={section.label}
                description={section.description}
              />
            );
        }
      })}
    </div>
  );
}
