// Central content source for the portfolio.
// Pulled from the live site (bmgportfolio.chaoslabs.cc). Edit values here to update the whole page.

export const profile = {
  name: "BUILDERMANGUY31",
  shortName: "BMG",
  role: "Roblox Environment Builder",
  age: 18,
  since: 2020,
  yearsExperience: 6,
  tagline: "Creating amazing gaming experiences.",
  intro:
    "Transforming ideas into immersive Roblox environments with attention to detail and technical excellence.",
  bio: [
    "I'm BUILDERMANGUY31, an 18-year-old passionate Roblox builder with 6+ years of experience creating immersive environments and structures. I have a proven track record of delivering high-quality builds that exceed expectations.",
    "I specialize in creating detailed, functional, and optimized builds that enhance player experiences. My expertise spans both Roblox Studio and Blender, allowing me to create custom assets and environments that stand out.",
    "My builds have been featured in popular Roblox games with over 9.7 million and 1.6 million visits, demonstrating my ability to create engaging content that players love.",
  ],
  whyHireMe: [
    "Always instantaneous to respond",
    "Will complete your projects before the given deadline",
    "Flexible with payment options",
    "Fluent in English — a good communicator and team worker",
    "Available 2–8 hours daily depending on project needs",
  ],
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

// Terms of Service — mirrors the live site (bmgportfolio.chaoslabs.cc/terms).
export const termsOfService = {
  lastUpdated: "May 8, 2025",
  sections: [
    {
      heading: "Introduction",
      items: [
        { label: "1.1", text: "By agreeing to these terms we can make sure we both are on the same page and won't have any conflicts in the future." },
        { label: "1.2", text: "If you fail to follow these terms and conditions there will be no refund given if any, or if no payment is made the project would be declared cancelled." },
        { label: "1.3", text: "Make sure you read through each and every point before moving forward." },
      ],
    },
    {
      heading: "Rules and Regulations",
      items: [
        { label: "2.1", text: "Any payment above 3000 Robux ($10) would need to be paid 50% upfront." },
        { label: "OR", text: "" },
        { label: "2.2", text: "A legitimate proof that the payment will be done." },
        { label: "2.3", text: "We both understand the boundaries and respect that we should have for each other, so PLEASE do not cross it." },
        { label: "2.4", text: "Minor changes are okay, but asking for major changes after finalizing the work and the payment will require an extra charge." },
      ],
    },
    {
      heading: "Confidentiality",
      items: [
        { label: "3.1", text: "You hereby agree, when you start working with me, that the builds I make for you I can use for my portfolio (unless and until it's meant to not be published)." },
        { label: "3.2", text: "I will make sure no information about the game gets leaked without your permission." },
        { label: "3.3", text: "When you write a review for my work, you make sure you are allowing me to use your Discord ID and profile picture as a showcase in my portfolio." },
      ],
    },
  ],
  closing:
    "BY CONTINUING WORKING WITH ME YOU MAKE SURE YOU HAVE READ THROUGH THE TERMS OF SERVICE AND HAVE REACHED A CONCLUSION OF “AGREEING” TO IT.",
};

export const navLinks = [
  // "About" lives in the hero fold, so it points back to the top.
  { label: "About", href: "#top" },
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

export const heroTags = ["Roblox Studio", "Environments", "6+ Years"];

// The standout builds surfaced directly in the hero as a "Featured Builds" strip.
// `image` should match an existing screenshot in /public/images/work/.
export const featuredBuilds: {
  title: string;
  metric: string;
  image: string;
}[] = [
  {
    title: "Foggy Downtown Boulevard",
    metric: "9.7M visits",
    image: "/images/work/foggy-city-street.jpg",
  },
  {
    title: "Grand Cathedral",
    metric: "1.6M visits",
    image: "/images/work/cathedral.jpg",
  },
  {
    title: "Torii Shrine Grounds",
    metric: "Featured",
    image: "/images/work/torii-garden.jpg",
  },
  {
    title: "Alpine Gate Facility",
    metric: "Featured",
    image: "/images/work/mountain-facility.jpg",
  },
];

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

// Groups / studios collaborated with — enriched as cinematic case studies.
export type Group = {
  name: string;
  tag: string;
  members: string;
  rank: string;
  creator: string;
  logo: string;
  cover: string;
  role: string;
  blurb: string;
  built: string[];
  tech: string[];
  stats: { value: string; label: string }[];
};

export const groups: Group[] = [
  {
    name: "Squid Game International",
    tag: "Obby / Challenge",
    members: "55.7K+",
    rank: "Contributor",
    creator: "Kayocletian",
    logo: "/images/groups/icons/squid-game-international-icon.jpg",
    cover: "/images/work/foggy-city-street.jpg",
    role: "Environment & Map Contributor",
    blurb:
      "Built challenge arenas and themed environments for one of the largest Squid Game experiences on the platform, balancing dramatic visuals with performance at scale.",
    built: ["Environment Design", "Gameplay Areas", "Optimization", "Visual Polish"],
    tech: ["Roblox Studio", "Blender", "Lighting & FX"],
    stats: [
      { value: "55.7K+", label: "Members" },
      { value: "2M+", label: "Visits" },
      { value: "12+", label: "Features Built" },
    ],
  },
  {
    name: "Illuminate Studios Games",
    tag: "Studio Partner",
    members: "33.1K+",
    rank: "Development Contributor",
    creator: "one",
    logo: "/images/groups/icons/illuminate-studios-icon.jpg",
    cover: "/images/work/expo-hall.jpg",
    role: "Development Contributor",
    blurb:
      "Partnered as a core build contributor delivering custom assets, interiors and modular environment systems that shipped across multiple studio titles.",
    built: ["World Building", "Custom Systems", "3D Modeling", "Interiors"],
    tech: ["Roblox Studio", "Blender", "Modular Kits"],
    stats: [
      { value: "33.1K+", label: "Members" },
      { value: "8+", label: "Months" },
      { value: "15+", label: "Features Built" },
    ],
  },
  {
    name: "Combat Assault Team",
    tag: "Combat / FPS",
    members: "26.9K+",
    rank: "Recruit",
    creator: "joshuaholic",
    logo: "/images/groups/icons/combat-assault-team-icon.jpg",
    cover: "/images/work/mountain-facility.jpg",
    role: "Map & Environment Builder",
    blurb:
      "Designed combat-ready maps and tactical environments with clear sightlines, cover flow and atmospheric lighting tuned for fast-paced FPS gameplay.",
    built: ["Environment Design", "Gameplay Areas", "Optimization", "Visual Polish"],
    tech: ["Roblox Studio", "Terrain", "Lighting & FX"],
    stats: [
      { value: "26.9K+", label: "Members" },
      { value: "6+", label: "Maps" },
      { value: "10+", label: "Features Built" },
    ],
  },
  {
    name: "SlicerStudios",
    tag: "Game Studio",
    members: "25.5K+",
    rank: "Supporter",
    creator: "SlicerStudios",
    logo: "/images/groups/icons/slicer-studios-icon.jpg",
    cover: "/images/work/torii-garden.jpg",
    role: "Environment Builder",
    blurb:
      "Crafted detailed showcase environments and props that elevated the studio's flagship experiences with a polished, cohesive art direction.",
    built: ["Environment Design", "World Building", "Visual Polish"],
    tech: ["Roblox Studio", "Blender"],
    stats: [
      { value: "25.5K+", label: "Members" },
      { value: "5+", label: "Builds" },
      { value: "8+", label: "Features Built" },
    ],
  },
  {
    name: "ovalodo",
    tag: "Creative Studio",
    members: "13K+",
    rank: "Contributor",
    creator: "evan",
    logo: "/images/groups/icons/ovalodo-icon.jpg",
    cover: "/images/work/japanese-street.jpg",
    role: "Creative Contributor",
    blurb:
      "Contributed stylized environments and creative set-pieces, collaborating closely on art direction for experimental experiences.",
    built: ["Environment Design", "Custom Systems", "Visual Polish"],
    tech: ["Roblox Studio", "Blender"],
    stats: [
      { value: "13K+", label: "Members" },
      { value: "4+", label: "Builds" },
      { value: "7+", label: "Features Built" },
    ],
  },
  {
    name: "Ravyn's Rise",
    tag: "Open World",
    members: "11.8K+",
    rank: "Contributor",
    creator: "Versed",
    logo: "/images/groups/icons/ravyns-rise-icon.jpg",
    cover: "/images/work/river-valley.jpg",
    role: "Open-World Builder",
    blurb:
      "Built explorable open-world regions with believable terrain, landmarks and atmosphere designed to reward exploration.",
    built: ["World Building", "Environment Design", "Optimization"],
    tech: ["Roblox Studio", "Terrain", "Lighting & FX"],
    stats: [
      { value: "11.8K+", label: "Members" },
      { value: "3+", label: "Regions" },
      { value: "9+", label: "Features Built" },
    ],
  },
  {
    name: "RLightning Studios",
    tag: "Game Studio",
    members: "10.5K+",
    rank: "Supporter",
    creator: "alexjouq",
    logo: "/images/groups/icons/rlightning-studios-icon.jpg",
    cover: "/images/work/glass-house.jpg",
    role: "Environment Builder",
    blurb:
      "Delivered environment builds and visual polish supporting the studio's released experiences and ongoing projects.",
    built: ["Environment Design", "Visual Polish", "Optimization"],
    tech: ["Roblox Studio", "Blender"],
    stats: [
      { value: "10.5K+", label: "Members" },
      { value: "4+", label: "Builds" },
      { value: "6+", label: "Features Built" },
    ],
  },
];

export const groupTrust = [
  { value: "175K+", label: "Community Members" },
  { value: "10+", label: "Collaborations" },
  { value: "5.0", label: "Client Reviews" },
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

export type Review = {
  quote: string;
  author: string;
  role: string;
  project: string;
  rating: number;
  accent: string; // avatar gradient accent (hex)
  featured?: boolean;
};

export const reviews: Review[] = [
  {
    quote:
      "BUILDERMANGUY31, the best builder i've ever seen and/or hired — this guy never disappoints. He is a fast worker while also maintaining top-tier quality. 10/10 🔥",
    author: "lizion33",
    role: "VIP Client",
    project: "Full Environment",
    rating: 5,
    accent: "#f59e0b",
    featured: true,
  },
  {
    quote:
      "BUILDERMANGUY31 is a competent builder, modeler, and GUI artist whose work I've seen firsthand! If you need stylized GUI, high-poly models, or just a build done — give him a DM :)",
    author: "SquaredCube",
    role: "Client",
    project: "GUI Design & Modeling",
    rating: 5,
    accent: "#7c5cff",
  },
  {
    quote:
      "I would highly recommend hiring builderman — he makes fast, quality builds & models. I would hire again without a second thought. It would be a mistake not to hire him.",
    author: "Xander",
    role: "Client",
    project: "Building Package",
    rating: 5,
    accent: "#3b82f6",
  },
  {
    quote:
      "Great work with awesome detailing which would provide a riveting experience while playing the map itself!",
    author: "24lancelll",
    role: "Client",
    project: "Map Design",
    rating: 5,
    accent: "#22c55e",
  },
  {
    quote:
      "The model was very well made and delivered as fast as possible in a very timely manner. I would recommend to future customers!!!",
    author: "Gold_KingVon2001",
    role: "Client",
    project: "Custom Model",
    rating: 5,
    accent: "#eab308",
  },
  {
    quote:
      "He was a pretty good builder. We had some miscommunication issues but in the end I really liked the final product.",
    author: "fxnix",
    role: "Client",
    project: "Interior Design",
    rating: 4,
    accent: "#ef4444",
  },
];

// Aggregate social-proof figures shown above the testimonials.
export const reviewStats = [
  { value: "5.0", label: "Average Rating" },
  { value: "20+", label: "Successful Collaborations" },
  { value: "100K+", label: "Combined Community" },
  { value: "7+", label: "Studios & Creators" },
];
