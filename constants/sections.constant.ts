export interface Section {
  id: string;
  label: string;
  description: string;
  type: 'common' | 'event' | 'bestseller' | 'community' | 'vitality' | 'battle' | 'karrigan';
}

export const SECTION_TYPES = {
  COMMON: 'common',
  EVENT: 'event',
  BESTSELLER: 'bestseller',
  COMMUNITY: 'community',
  VITALITY: 'vitality',
  BATTLE: 'battle',
  KARRIGAN: 'karrigan',
} as const;

export const SECTIONS_DATA: Section[] = [
  { 
    id: "0", 
    label: "Special for you", 
    description: "Your favorite, free and daily cases", 
    type: SECTION_TYPES.COMMON 
  },
  { 
    id: "1", 
    label: "Event Cases", 
    description: "", 
    type: SECTION_TYPES.EVENT 
  },
  {
    id: "2",
    label: "Bestseller Cases",
    description: "Trust the choices of other players and open the best-selling cases",
    type: SECTION_TYPES.BESTSELLER,
  },
  {
    id: "3",
    label: "Community Cases",
    description: "Dive into the diversity of our community's cases",
    type: SECTION_TYPES.COMMUNITY,
  },
  { 
    id: "4", 
    label: "Discord Cases", 
    description: "", 
    type: SECTION_TYPES.COMMON 
  },
  { 
    id: "5", 
    label: "Armory Bundle", 
    description: "", 
    type: SECTION_TYPES.COMMON 
  },
  { 
    id: "6", 
    label: "Color Maniac", 
    description: "Enjoy the Thrill of Color Mania!", 
    type: SECTION_TYPES.COMMON 
  },
  { 
    id: "7", 
    label: "Vitality's Choice", 
    description: "", 
    type: SECTION_TYPES.VITALITY 
  },
  { 
    id: "8", 
    label: "Crazy Moves", 
    description: "That's some crazy deals — take it or leave it", 
    type: SECTION_TYPES.COMMON 
  },
  { 
    id: "9", 
    label: "Anime Cases", 
    description: "Choose your favorite anime title right here", 
    type: SECTION_TYPES.COMMON 
  },
  {
    id: "10",
    label: "Battle Cases",
    description: "Challenge yourself against bots or real players in case battles. The winner takes it all",
    type: SECTION_TYPES.BATTLE,
  },
  {
    id: "11",
    label: "Sticker Capsules",
    description: "Craft your own unique skin. Find a sticker for your favorite skin",
    type: SECTION_TYPES.COMMON,
  },
  { 
    id: "12", 
    label: "Farm Cases", 
    description: "All or nothing cases", 
    type: SECTION_TYPES.COMMON 
  },
  { 
    id: "13", 
    label: "Collection Vault", 
    description: "", 
    type: SECTION_TYPES.COMMON 
  },
  { 
    id: "14", 
    label: "Special Cases", 
    description: "Participate in the regular daily case giveaways", 
    type: SECTION_TYPES.COMMON 
  },
  {
    id: "15",
    label: "By Rarity",
    description: "From Mil-Spec to Knife: unlock the skins of any rarity",
    type: SECTION_TYPES.COMMON,
  },
  {
    id: "16",
    label: "By Type",
    description: "Are you more into AWP or M4A4? Get a skin for your favorite gun",
    type: SECTION_TYPES.COMMON,
  },
  {
    id: "17",
    label: "Our Special",
    description: "Open the most exclusive, unique and striking cases on the website",
    type: SECTION_TYPES.COMMON,
  },
  { 
    id: "18", 
    label: "Creators Cases", 
    description: "Get a skin of your favorite YouTuber", 
    type: SECTION_TYPES.COMMON 
  },
  {
    id: "19",
    label: "Karrigan's Choice",
    description: "Unlock Karrigan's secrets, follow the pro's path",
    type: SECTION_TYPES.KARRIGAN,
  },
  {
    id: "20",
    label: "Classic",
    description: "Try out classic variants of cases that are better than Valve's",
    type: SECTION_TYPES.COMMON,
  },
  { 
    id: "21", 
    label: "Collections", 
    description: "Complete your set from maps and collections cases", 
    type: SECTION_TYPES.COMMON 
  },
];