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
  { value: "4.5", label: "Client Reviews" },
];

// The four categories shown as filter tabs in "Selected Builds".
export const workCategories = [
  "Structures",
  "Interiors",
  "Environments",
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
    title: "Sunlit Hobbit Burrow",
    category: "Earth Home",
    group: "Structures",
    description:
      "A grass-roofed hillside burrow with round doors and arched windows, bathed in golden dawn light.",
    image: "/images/work/structure-hobbit-burrow.jpg",
  },
  {
    title: "Torii Shrine Grove",
    category: "Shrine",
    group: "Structures",
    description:
      "A great torii gate rising over a fenced shrine clearing, framed by cherry blossoms and misty hills.",
    image: "/images/work/structure-torii-grove.jpg",
  },
  {
    title: "Skyline Rail Construction",
    category: "Cityscape",
    group: "Structures",
    description:
      "A commuter train on elevated tracks beside towering cranes and a high-rise under construction.",
    image: "/images/work/structure-rail-construction.jpg",
  },
  {
    title: "Festival Backstreet",
    category: "Street Scene",
    group: "Structures",
    description:
      "A narrow brick alley strung with glowing bulb lights, graffiti and lamp posts under a dusky sky.",
    image: "/images/work/structure-festival-alley.jpg",
  },
  {
    title: "Domed Sports Arena",
    category: "Stadium",
    group: "Structures",
    description:
      "A vast domed stadium interior with tiered crowd stands, a hanging scoreboard and a floodlit field.",
    image: "/images/work/structure-domed-stadium.jpg",
  },
  {
    title: "Downtown Avenue",
    category: "Cityscape",
    group: "Structures",
    description:
      "A wide multi-lane boulevard cutting between glass skyscrapers under a bright, cloud-dappled sky.",
    image: "/images/work/structure-downtown-avenue.jpg",
  },
  {
    title: "Old European Street",
    category: "Street Scene",
    group: "Structures",
    description:
      "A long avenue of weathered period townhouses fading toward the city under a soft rose-tinted sky.",
    image: "/images/work/structure-old-european-street.jpg",
  },
  {
    title: "Primary School Yard",
    category: "School",
    group: "Structures",
    description:
      "A cheerful school courtyard with cloud-patterned walls, colourful running tracks and a clock-front entrance.",
    image: "/images/work/structure-primary-school.jpg",
  },
  {
    title: "Voxel Shrine Ruins",
    category: "Voxel Build",
    group: "Structures",
    description:
      "A blocky, glowing shrine of suspended red beams and chains rising over lantern-lit stone steps at night.",
    image: "/images/work/structure-voxel-shrine.jpg",
  },
  {
    title: "Green-Roof Manor",
    category: "Manor House",
    group: "Structures",
    description:
      "A symmetrical three-storey manor with a green hip roof, columned portico and tall chimney stacks.",
    image: "/images/work/structure-manor-house.jpg",
  },
  {
    title: "Lantern-Lit Facade",
    category: "Facade",
    group: "Structures",
    description:
      "An ornate stucco building face glowing under wall lanterns against a star-filled night sky.",
    image: "/images/work/structure-lantern-facade.jpg",
  },
  {
    title: "Winter Pagoda",
    category: "Pagoda",
    group: "Structures",
    description:
      "A tiered Japanese pagoda with red-trimmed eaves and stone lanterns standing in a snow-dusted grove.",
    image: "/images/work/structure-winter-pagoda.jpg",
  },
  {
    title: "Rainy Backstreet",
    category: "Street Scene",
    group: "Structures",
    description:
      "A moody, rain-soaked alley of brick and timber walls, graffiti and dim neon glow at night.",
    image: "/images/work/structure-rainy-backstreet.jpg",
  },
  {
    title: "Open-Air Pavilion",
    category: "Pavilion",
    group: "Structures",
    description:
      "A vast open pavilion of soaring steel canopies over a grassy field, ringed by small cottages.",
    image: "/images/work/structure-open-pavilion.jpg",
  },
  {
    title: "Paris Olympic Arena",
    category: "Stadium",
    group: "Structures",
    description:
      "A beach-volleyball arena set before the Eiffel Tower, decked in Paris 2024 Olympic branding.",
    image: "/images/work/structure-paris-arena.jpg",
  },
  {
    title: "Coastal Embankment",
    category: "Waterfront",
    group: "Structures",
    description:
      "A lamp-lined seawall road beside a grassy slope and a row of colourful gabled houses.",
    image: "/images/work/structure-coastal-embankment.jpg",
  },
  {
    title: "Highway Fuel Station",
    category: "Fuel Station",
    group: "Structures",
    description:
      "A wide green-trimmed fuel station canopy over rows of pumps on an open roadside lot.",
    image: "/images/work/structure-fuel-station.jpg",
  },
  {
    title: "Tenement Street",
    category: "Street Scene",
    group: "Structures",
    description:
      "A classic city block of brick tenements with fire escapes, lit windows and a long open road.",
    image: "/images/work/structure-tenement-street.jpg",
  },

  // ---- Interiors ----
  {
    title: "Corner Convenience Store",
    category: "Retail Interior",
    group: "Interiors",
    description:
      "A stocked convenience store with lit shelving, soda coolers, a TV and a checkout counter with stools.",
    image: "/images/work/interior-01-convenience-store.jpg",
  },
  {
    title: "Arena Atrium",
    category: "Arena Interior",
    group: "Interiors",
    description:
      "A vast multi-level event hall with exposed trusses, twin sweeping staircases and stage lighting.",
    image: "/images/work/interior-02-arena-atrium.jpg",
  },
  {
    title: "Dim Corridor",
    category: "Interior Scene",
    group: "Interiors",
    description:
      "A long shadowy hallway lined with doors, lit by rows of warm yellow ceiling tubes.",
    image: "/images/work/interior-03-dim-corridor.jpg",
  },
  {
    title: "Starship Pod Quarters",
    category: "Sci-Fi Interior",
    group: "Interiors",
    description:
      "A sci-fi sleeping bay with backlit red crew pods, panelled walls and ambient deck lighting.",
    image: "/images/work/interior-04-pod-quarters.jpg",
  },
  {
    title: "Marble Barbershop",
    category: "Salon Interior",
    group: "Interiors",
    description:
      "An opulent marble-walled barbershop with vintage chairs, ornate consoles and a sea-view archway.",
    image: "/images/work/interior-05-marble-barbershop.jpg",
  },
  {
    title: "Security Control Room",
    category: "Sci-Fi Interior",
    group: "Interiors",
    description:
      "A red-lit underground control room with consoles, monitors and a 'Security Breach' alert panel.",
    image: "/images/work/interior-06-control-room.jpg",
  },
  {
    title: "Mahogany Lounge",
    category: "Lounge Interior",
    group: "Interiors",
    description:
      "A grand wood-panelled lounge with a roaring fireplace, library shelves and a city-view window.",
    image: "/images/work/interior-07-mahogany-lounge.jpg",
  },
  {
    title: "Gallery Room",
    category: "Gallery Interior",
    group: "Interiors",
    description:
      "A warm wood-trimmed gallery room with parquet floors, an arched passage and a framed seascape.",
    image: "/images/work/interior-08-gallery-room.jpg",
  },
  {
    title: "Modern Gym",
    category: "Gym Interior",
    group: "Interiors",
    description:
      "A sleek black-and-wood gym with neon ceiling strips, racked weights and a 'Work Hard Stay Hard' wall.",
    image: "/images/work/interior-09-modern-gym.jpg",
  },
  {
    title: "Cinema Hall",
    category: "Theater Interior",
    group: "Interiors",
    description:
      "A plush cinema hall of tiered leather recliners, mood lighting and colourful abstract wall panels.",
    image: "/images/work/interior-10-cinema-hall.jpg",
  },
  {
    title: "Home Theater",
    category: "Theater Interior",
    group: "Interiors",
    description:
      "A cosy wood-clad home theater with twin projector screens, warm spotlights and low bench seating.",
    image: "/images/work/interior-11-home-theater.jpg",
  },
  {
    title: "Elevator Lobby",
    category: "Lobby",
    group: "Interiors",
    description:
      "A cool blue-lit lobby with twin elevators marked A and B, glass partitions and potted plants.",
    image: "/images/work/interior-12-elevator-lobby.jpg",
  },
  {
    title: "Cargo Bay",
    category: "Sci-Fi Interior",
    group: "Interiors",
    description:
      "A dark industrial cargo bay with riveted walls, cyan spotlights and stacked metal crates.",
    image: "/images/work/interior-13-cargo-bay.jpg",
  },

  // ---- Environments ----
  {
    title: "Barn Meadow",
    category: "Rural Scene",
    group: "Environments",
    description:
      "A sunlit grassy meadow with a dirt path winding past a lone tree toward a weathered barn.",
    image: "/images/work/environment-01-barn-meadow.jpg",
  },
  {
    title: "Waterfall Cove",
    category: "Landscape",
    group: "Environments",
    description:
      "A misty rocky cove where a churning waterfall spills into still water under a hazy sky.",
    image: "/images/work/environment-02-waterfall-cove.jpg",
  },
  {
    title: "State Park Gate",
    category: "Landscape",
    group: "Environments",
    description:
      "A timber park pavilion and signpost framing a forest trail under tall sunlit pines.",
    image: "/images/work/environment-03-state-park-gate.jpg",
  },
  {
    title: "Misty Meadow",
    category: "Landscape",
    group: "Environments",
    description:
      "A hazy golden meadow of tall grass and scattered pines glowing in soft morning sun.",
    image: "/images/work/environment-04-misty-meadow.jpg",
  },
  {
    title: "Golden Canyon",
    category: "Landscape",
    group: "Environments",
    description:
      "A sun-drenched rocky canyon bathed in warm golden haze, framed by mossy boulders and trees.",
    image: "/images/work/environment-05-golden-canyon.jpg",
  },
  {
    title: "Fern Forest",
    category: "Landscape",
    group: "Environments",
    description:
      "A serene pine forest clearing dotted with ferns and pink wildflowers under a soft blue sky.",
    image: "/images/work/environment-06-fern-forest.jpg",
  },

  // ---- Models ----
  {
    title: "Hooded Assassin Bundle",
    category: "Character Model",
    group: "Models",
    description:
      "A hooded dark-clad assassin avatar with armoured pauldrons, sash and a masked helm.",
    image: "/images/work/model-01-hooded-assassin.jpg",
  },
  {
    title: "Raven Skull Staff",
    category: "Weapon Model",
    group: "Models",
    description:
      "A long-beaked raven-skull staff carved with a spiral sigil atop a slender spiked shaft.",
    image: "/images/work/model-02-raven-skull-staff.jpg",
  },
  {
    title: "Mecha Companion Bot",
    category: "Character Model",
    group: "Models",
    description:
      "A floating low-poly mascot bot with rabbit-ear antennae and glowing teal eyes.",
    image: "/images/work/model-03-mecha-companion.jpg",
  },
  {
    title: "Iron Cross Pendant",
    category: "Accessory Model",
    group: "Models",
    description:
      "A weathered stone iron-cross pendant inset with a deep-red core, strung on a cord.",
    image: "/images/work/model-04-iron-cross-pendant.jpg",
  },
  {
    title: "Clergy Vestments",
    category: "Character Model",
    group: "Models",
    description:
      "A clergy avatar in a crisp white cassock, black trousers and a cross-marked cap.",
    image: "/images/work/model-05-clergy-vestments.jpg",
  },
  {
    title: "Crow Skull Relic",
    category: "Prop Model",
    group: "Models",
    description:
      "A close-up crow-skull relic of dark bone set with a glowing red hexagonal gem.",
    image: "/images/work/model-06-crow-skull-relic.jpg",
  },
  {
    title: "Burger Delivery Scooter",
    category: "Vehicle Model",
    group: "Models",
    description:
      "A playful delivery scooter built around a stacked cheeseburger with a rear cargo box.",
    image: "/images/work/model-07-burger-scooter.jpg",
  },
  {
    title: "Watermelon Scooter",
    category: "Vehicle Model",
    group: "Models",
    description:
      "A whimsical scooter sculpted from a ripe watermelon with rind wheels and a slice seat.",
    image: "/images/work/model-08-watermelon-scooter.jpg",
  },
  {
    title: "Vintage Steam Locomotive",
    category: "Vehicle Model",
    group: "Models",
    description:
      "A classic 19th-century steam engine and passenger carriage in deep red and black.",
    image: "/images/work/model-09-steam-locomotive.jpg",
  },
  {
    title: "Block Cat Pet",
    category: "Character Model",
    group: "Models",
    description:
      "A cubic black-cat pet with big round eyes, pink-lined ears and stubby paws.",
    image: "/images/work/model-10-block-cat-pet.jpg",
  },
  {
    title: "Luminous Butterfly",
    category: "Prop Model",
    group: "Models",
    description:
      "A teal-winged butterfly rimmed with glowing dots, wings edged in fine light.",
    image: "/images/work/model-11-luminous-butterfly.jpg",
  },
  {
    title: "Barrel Armor Set",
    category: "Accessory Model",
    group: "Models",
    description:
      "A rugged wooden barrel-plate armour set — helm, chest, pauldrons and bracers.",
    image: "/images/work/model-12-barrel-armor.jpg",
  },
  {
    title: "Amethyst Dagger",
    category: "Weapon Model",
    group: "Models",
    description:
      "A short steel dagger with a faceted purple gem in the guard and a wrapped grip.",
    image: "/images/work/model-13-amethyst-dagger.jpg",
  },
  {
    title: "Crimson Katana",
    category: "Weapon Model",
    group: "Models",
    description:
      "A slim katana with a red-wrapped tsuka and matching black saya with crimson accents.",
    image: "/images/work/model-14-crimson-katana.jpg",
  },
  {
    title: "Ring Blade",
    category: "Weapon Model",
    group: "Models",
    description:
      "A circular bladed ring weapon with hooked edges and a leather-bound central grip.",
    image: "/images/work/model-15-ring-blade.jpg",
  },
  {
    title: "Wooden Toy Sword",
    category: "Weapon Model",
    group: "Models",
    description:
      "A stylised wood-grain toy sword with a carved crossguard and ridged handle.",
    image: "/images/work/model-16-wooden-toy-sword.jpg",
  },
  {
    title: "Low-Poly Heroine",
    category: "Character Model",
    group: "Models",
    description:
      "A slim low-poly female character in a cropped top, shorts and heeled shoes.",
    image: "/images/work/model-17-lowpoly-heroine.jpg",
  },
  {
    title: "Tower Cottage",
    category: "Building Model",
    group: "Models",
    description:
      "A cosy cottage with a purple-shingled roof, round stone turret and golden finial.",
    image: "/images/work/model-18-tower-cottage.jpg",
  },
  {
    title: "Timber Cottage",
    category: "Building Model",
    group: "Models",
    description:
      "A half-timbered cottage with a red-tile roof, stone base and brick chimney.",
    image: "/images/work/model-19-timber-cottage.jpg",
  },
  {
    title: "Seaside Coffee Kiosk",
    category: "Building Model",
    group: "Models",
    description:
      "An open-air coffee kiosk with a slatted pergola, signage and full counter fittings by the shore.",
    image: "/images/work/model-20-coffee-kiosk.jpg",
  },
  {
    title: "Medieval Storefront",
    category: "Building Model",
    group: "Models",
    description:
      "A stone-and-timber medieval shop with a striped awning and an arched oak doorway.",
    image: "/images/work/model-21-medieval-storefront.jpg",
  },
  {
    title: "Bone Recurve Bow",
    category: "Weapon Model",
    group: "Models",
    description:
      "A sinuous bone-carved recurve bow paired with a single fletched arrow.",
    image: "/images/work/model-22-bone-recurve-bow.jpg",
  },
  {
    title: "Ornate Greatsword",
    category: "Weapon Model",
    group: "Models",
    description:
      "A broad ceremonial greatsword with gilded filigree along the blade and crossguard.",
    image: "/images/work/model-23-ornate-greatsword.jpg",
  },
  {
    title: "GUN-R Airliner",
    category: "Vehicle Model",
    group: "Models",
    description:
      "A full passenger jet in white with a blue tail, branded 'GUN-R Airlines'.",
    image: "/images/work/model-24-gunr-airliner.jpg",
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
  {
    quote:
      "Hired BMG for our tycoon's lobby and main map — he absolutely delivered. Clear communication the whole way through and hit every deadline. Already planning the next commission.",
    author: "vexnoir",
    role: "Studio Owner",
    project: "Lobby & Map",
    rating: 5,
    accent: "#06b6d4",
  },
  {
    quote:
      "Great eye for lighting and atmosphere. Took a little back-and-forth to nail the exact style we wanted, but the final result was well worth it. Will work with him again.",
    author: "mqpeolly",
    role: "Client",
    project: "Atmosphere & Lighting",
    rating: 4,
    accent: "#a855f7",
  },
  {
    quote:
      "Commissioned a set of low-poly props and they came out clean and fully optimized. Fast turnaround and fair pricing — would recommend to anyone needing custom assets.",
    author: "Renlux_Dev",
    role: "Client",
    project: "Prop Pack",
    rating: 5,
    accent: "#f97316",
  },
];

// Aggregate social-proof figures shown above the testimonials.
export const reviewStats = [
  { value: "4.5", label: "Average Rating" },
  { value: "20+", label: "Successful Collaborations" },
  { value: "100K+", label: "Combined Community" },
  { value: "7+", label: "Studios & Creators" },
];
