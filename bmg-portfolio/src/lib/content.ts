// Central content source for the portfolio.
// Pulled from the live site (bmgportfolio.chaoslabs.cc). Edit values here to update the whole page.

export const profile = {
  name: "BUILDERMANGUY31",
  shortName: "BMG",
  role: "Roblox Environment Builder",
  age: 18,
  since: 2020,
  yearsExperience: 4,
  tagline: "Creating amazing gaming experiences.",
  intro:
    "Transforming ideas into immersive Roblox environments with attention to detail and technical excellence.",
  // Hero photo lives in /public/images/profile.png (transparent cutout recommended).
  photo: "/images/profile.png",
  availability: "Available for hire",
  location: "Worldwide · Remote",
};

export const contact = {
  email: "singhrudrapratap21.2007@gmail.com",
  discord: "@buildermanguy31",
  roblox: "BUILDERMANGUY31",
  robloxUrl: "https://www.roblox.com/users/profile",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Groups", href: "#groups" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

// Shown spread across the hero like the "cast" row in the reference.
export const specialties = [
  "Environment Design",
  "Lighting & FX",
  "3D Modeling",
  "Optimization",
];

export const heroTags = ["Roblox Studio", "Environments", "4+ Years"];

export const stats = [
  { value: "9.7M", label: "Visits on a featured build" },
  { value: "1.6M", label: "Visits on a featured build" },
  { value: "4+", label: "Years building since 2020" },
  { value: "6+", label: "Showcase environments" },
];

export const skills = [
  {
    title: "Roblox Studio Mastery",
    description:
      "Fluent in every corner of Studio — terrain, parts, unions, and the full build pipeline.",
  },
  {
    title: "3D Modeling",
    description:
      "Custom meshes and props built to scale, optimized for real-time Roblox rendering.",
  },
  {
    title: "Lighting & Effects",
    description:
      "Atmospheric lighting, fog, and particle work that sets the mood of every scene.",
  },
  {
    title: "Architecture Design",
    description:
      "From hobbit homes to research labs — structures that feel believable and grounded.",
  },
  {
    title: "Environment Creation",
    description:
      "Forests, waterfalls, and full landscapes crafted to feel alive and explorable.",
  },
  {
    title: "Optimization",
    description:
      "Beautiful worlds that still run smoothly — performance is part of the design.",
  },
];

// Groups / studios collaborated with.
export const groups = [
  {
    name: "Squid Game International",
    tag: "Obby / Challenge",
    members: "55.7K+",
    rank: "[◇] Players Rank",
    creator: "Kayocletian",
    logo: "/images/groups/icons/squid-game-international-icon.jpg",
  },
  {
    name: "Illuminate Studios Games",
    tag: "Studio Partner",
    members: "33.1K+",
    rank: "Development Contributor Rank",
    creator: "one",
    logo: "/images/groups/icons/illuminate-studios-icon.jpg",
  },
  {
    name: "Combat Assault Team",
    tag: "Combat / FPS",
    members: "26.9K+",
    rank: "Recruit Rank",
    creator: "joshuaholic",
    logo: "/images/groups/icons/combat-assault-team-icon.jpg",
  },
  {
    name: "SlicerStudios",
    tag: "Game Studio",
    members: "25.5K+",
    rank: "Supporter Rank",
    creator: "SlicerStudios",
    logo: "/images/groups/icons/slicer-studios-icon.jpg",
  },
  {
    name: "ovalodo",
    tag: "Creative Studio",
    members: "13K+",
    rank: "Contributor Rank",
    creator: "evan",
    logo: "/images/groups/icons/ovalodo-icon.jpg",
  },
  {
    name: "Ravyn's Rise",
    tag: "Open World",
    members: "11.8K+",
    rank: "Contributor Rank",
    creator: "Versed",
    logo: "/images/groups/icons/ravyns-rise-icon.jpg",
  },
  {
    name: "RLightning Studios",
    tag: "Game Studio",
    members: "10.5K+",
    rank: "Supporter Rank",
    creator: "alexjouq",
    logo: "/images/groups/icons/rlightning-studios-icon.jpg",
  },
];

// The four categories shown as filter tabs in "Selected Builds".
export const workCategories = [
  "Environments",
  "Structures",
  "Interiors",
  "Models",
] as const;

export type WorkCategory = (typeof workCategories)[number];

// "Jo kaam kiya hai woh" — the work / portfolio. Drop screenshots in /public/images/work/.
// `group` decides which tab a build appears under.
export const projects: {
  title: string;
  category: string;
  group: WorkCategory;
  description: string;
  image: string;
}[] = [
  // ---- Structures ----
  {
    title: "Foggy Downtown Boulevard",
    category: "Cityscape",
    group: "Structures",
    description:
      "A fog-drenched city street at night, neon-lit high-rises fading into teal haze.",
    image: "/images/work/foggy-city-street.jpg",
  },
  {
    title: "Transit Platform A&B",
    category: "Transit Station",
    group: "Structures",
    description:
      "A fog-soaked station platform under a sweeping steel canopy, lit by hazy morning sun.",
    image: "/images/work/train-platform.jpg",
  },
  {
    title: "Forest Viaduct",
    category: "Bridge / Viaduct",
    group: "Structures",
    description:
      "A weathered stone arch viaduct crossing a misty river, framed by towering pines.",
    image: "/images/work/stone-viaduct.jpg",
  },
  {
    title: "Grand Cathedral",
    category: "Cathedral",
    group: "Structures",
    description:
      "A vaulted cathedral interior with golden chandeliers and flickering flame sconces.",
    image: "/images/work/cathedral.jpg",
  },
  {
    title: "Alpine Gate Facility",
    category: "Facility",
    group: "Structures",
    description:
      "A snowbound mountain checkpoint with control towers, roads, and rugged terrain.",
    image: "/images/work/mountain-facility.jpg",
  },
  {
    title: "Rainfall Glass House",
    category: "Modern Home",
    group: "Structures",
    description:
      "A modern glass-walled home glowing warmly through a tropical night rainstorm.",
    image: "/images/work/glass-house.jpg",
  },
  {
    title: "Old Town Night Market",
    category: "Street Scene",
    group: "Structures",
    description:
      "A lantern-lit Japanese street at dusk, lined with timber shopfronts and warm light.",
    image: "/images/work/japanese-street.jpg",
  },
  {
    title: "Torii Shrine Grounds",
    category: "Shrine",
    group: "Structures",
    description:
      "A serene shrine clearing crowned by a great torii gate and blooming cherry blossoms.",
    image: "/images/work/torii-garden.jpg",
  },
  {
    title: "Main Street Storefront",
    category: "Storefront",
    group: "Structures",
    description:
      "A brick-and-stucco retail facade with display windows and a clean storefront entrance.",
    image: "/images/work/brick-storefront.jpg",
  },
  {
    title: "National Bank",
    category: "Civic Building",
    group: "Structures",
    description:
      "A neoclassical bank with towering columns and a grand pedimented entrance.",
    image: "/images/work/national-bank.jpg",
  },
  {
    title: "Skyline Under Construction",
    category: "Cityscape",
    group: "Structures",
    description:
      "A high-rise build site with tower cranes, scaffolding, and an elevated rail line.",
    image: "/images/work/city-construction.jpg",
  },
  {
    title: "Downtown Boulevard",
    category: "Cityscape",
    group: "Structures",
    description:
      "A sprawling downtown street flanked by skyscrapers under a bright open sky.",
    image: "/images/work/downtown-street.jpg",
  },

  // ---- Interiors ----
  {
    title: "Moonlit Memorial Garden",
    category: "Night Scene",
    group: "Interiors",
    description:
      "A hushed lantern-lit garden after dark, all soft shadow and glowing pools of light.",
    image: "/images/work/night-garden.jpg",
  },
  {
    title: "Executive Office",
    category: "Office Interior",
    group: "Interiors",
    description:
      "A polished executive suite with a tufted leather sofa, hardwood floors, and warm trim.",
    image: "/images/work/luxury-office.jpg",
  },
  {
    title: "Expo Arena Hall",
    category: "Arena Interior",
    group: "Interiors",
    description:
      "A vast multi-level event hall with exposed trusses, sweeping staircases, and stage lighting.",
    image: "/images/work/expo-hall.jpg",
  },
  {
    title: "Starship Quarters",
    category: "Sci-Fi Interior",
    group: "Interiors",
    description:
      "A sci-fi sleeping bay with backlit crew pods, panelled walls, and ambient deck lighting.",
    image: "/images/work/spaceship-interior.jpg",
  },
  {
    title: "Bank Banking Hall",
    category: "Lobby",
    group: "Interiors",
    description:
      "A skylit banking hall with arched teller windows, checkered floors, and a mezzanine.",
    image: "/images/work/bank-lobby.jpg",
  },
  {
    title: "Precinct Break Room",
    category: "Office Interior",
    group: "Interiors",
    description:
      "A lived-in office break room with filing cabinets, tile floors, and fluorescent light.",
    image: "/images/work/office-breakroom.jpg",
  },
  {
    title: "Corner Store",
    category: "Retail Interior",
    group: "Interiors",
    description:
      "A stocked convenience store with shelving, coolers, and a worn checkout counter.",
    image: "/images/work/convenience-store.jpg",
  },
  {
    title: "Collapsed Bunker",
    category: "Interior Scene",
    group: "Interiors",
    description:
      "A blown-out underground bunker — cracked walls, scattered rubble, and emergency lighting.",
    image: "/images/work/bunker.jpg",
  },

  // ---- Environments ----
  {
    title: "Lakeside Willows",
    category: "Landscape",
    group: "Environments",
    description:
      "A tranquil lakeside at dusk with weeping willows, supply crates, and soft fading light.",
    image: "/images/work/lakeside-willows.jpg",
  },
  {
    title: "Grassland Shrine",
    category: "Landscape",
    group: "Environments",
    description:
      "An open sunlit field of swaying grass and wildflowers around a small lone shrine.",
    image: "/images/work/grassland-shrine.jpg",
  },
  {
    title: "Sunlit River Valley",
    category: "Landscape",
    group: "Environments",
    description:
      "A glittering river winding through rolling green hills under a bright midday sky.",
    image: "/images/work/river-valley.jpg",
  },
  {
    title: "Countryside Barn",
    category: "Rural Scene",
    group: "Environments",
    description:
      "A timber barn on a grassy hillside, a dirt track curving past sunlit trees.",
    image: "/images/work/countryside-barn.jpg",
  },
  {
    title: "Autumn Harvest Village",
    category: "Village",
    group: "Environments",
    description:
      "A golden-hour village with a steepled church, pumpkin patches, and falling leaves.",
    image: "/images/work/autumn-village.jpg",
  },
  {
    title: "Misty Pine Highlands",
    category: "Landscape",
    group: "Environments",
    description:
      "A sun-hazed forest clearing of towering pines and tall grass framing a distant peak.",
    image: "/images/work/misty-forest.jpg",
  },

  // ---- Models ----
  {
    title: "Tudor Cottage",
    category: "Building Model",
    group: "Models",
    description:
      "A detailed half-timbered Tudor cottage with a mossy green roof and glowing windows.",
    image: "/images/work/timber-house.jpg",
  },
  {
    title: "Coffee Kiosk",
    category: "Prop / Kiosk",
    group: "Models",
    description:
      "A standalone open-air coffee stand with slatted pergola, signage, and counter fittings.",
    image: "/images/work/coffee-kiosk.jpg",
  },
  {
    title: "Medieval Shop",
    category: "Building Model",
    group: "Models",
    description:
      "A compact medieval stone-and-timber shop with a striped awning and arched oak door.",
    image: "/images/work/medieval-shop.jpg",
  },
  {
    title: "Government Complex",
    category: "Building Model",
    group: "Models",
    description:
      "A massive institutional block — modular wings, ribbon windows, and a fortified perimeter.",
    image: "/images/work/institutional-block.jpg",
  },
  {
    title: "Metro Train Carriage",
    category: "Vehicle Model",
    group: "Models",
    description:
      "A bright transit carriage interior with rows of orange seats and grab poles under sunlit windows.",
    image: "/images/work/train-carriage.jpg",
  },
  {
    title: "Jungle Temple Ruins",
    category: "Building Model",
    group: "Models",
    description:
      "A weathered stone temple half-swallowed by roots, fronted by a worn flagstone path.",
    image: "/images/work/temple-ruins.jpg",
  },
];

// Placeholder testimonials — replace with the real reviews from the live site.
export const reviews = [
  {
    quote:
      "BMG turned our vague concept into a fully realized world. The attention to lighting and detail was on another level.",
    author: "Combat Assault Team",
    role: "Game Studio",
  },
  {
    quote:
      "Fast, communicative, and genuinely talented. Our build's visits jumped after the environment overhaul.",
    author: "Illuminate Studios",
    role: "Studio Partner",
  },
  {
    quote:
      "One of the most reliable builders I've worked with. Delivers exactly what's briefed — and then some.",
    author: "Gotham's Shadow",
    role: "Open World Project",
  },
];
