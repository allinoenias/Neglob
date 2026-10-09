export const COMPANY_INFO = {
  name: "Neglob Partners",
  kicker: "BUSINESS · BRAND · SOFTWARE",
  brochureTag: "BROCHURE · 2026",
  location: "Jorhat, Assam · India",
  fullAddress: "J.b Road , Jorhat, Assam, India",
  phone: "8486820329",
  phoneFormatted: "+91 8486820329",
  email: "admin@neglobpartners.com",
  inquiryRecipientEmail: "admin@neglobpartners.com",
  website: "neglobpartners.com",
  directors: [
    { name: "Isfaque Parveg Ahmed", role: "Director" },
    { name: "Amit Boruah", role: "Deputy Director" }
  ]
};

export const COLOR_PALETTE = {
  darkBg: "#0f0f1d",
  cardDark: "#171728",
  lime: "#c8ff25",      // Electric volt / lime
  violet: "#7b5cfa",    // Electric purple / violet
  coral: "#ff5c77",     // Coral / rose pink
  white: "#ffffff",
  muted: "#9494a8",
  borderDark: "#262640"
};

export const SECTIONS = [
  { id: "hero", pageNum: "01", title: "Ideas. Brands. Growth.", label: "Cover" },
  { id: "who-we-are", pageNum: "02", title: "The team behind the momentum.", label: "Who We Are" },
  { id: "services-grow", pageNum: "03", title: "Grow the business. Shape the brand.", label: "Grow" },
  { id: "services-build", pageNum: "04", title: "Show up everywhere. Build it properly.", label: "Build" },
  { id: "products", pageNum: "05", title: "From shelf to doorstep.", label: "For Products" },
  { id: "institutes", pageNum: "06", title: "Tell your institute's story.", label: "For Institutes" },
  { id: "also", pageNum: "07", title: "Everything around the work.", label: "Also From Neglob" },
  { id: "work-contact", pageNum: "08", title: "Let's build something loud.", label: "Work & Contact" }
];

export const HERO_TAGS = [
  "Business Development",
  "Branding",
  "Marketing",
  "Social Media",
  "Software Development",
  "Website Development",
  "Package Design",
  "Institute Media",
  "Training and Hiring",
  "Digital Tools"
];

export const CORE_PILLARS = [
  {
    id: "strategy",
    title: "Strategy first",
    description: "We start with your goal and your customer, then pick the channels. Never the other way round.",
    bg: "bg-[#171728] border border-[#262640] text-white",
    iconBg: "text-[#c8ff25]",
    iconType: "target"
  },
  {
    id: "creative",
    title: "Bold creative",
    description: "Brands and content with a point of view, made to be remembered and shared.",
    bg: "bg-[#7b5cfa] text-white",
    iconBg: "text-white",
    iconType: "star"
  },
  {
    id: "engineering",
    title: "Real engineering",
    description: "Software and websites built in-house, fast to launch and ready to grow with you.",
    bg: "bg-[#ff5c77] text-white",
    iconBg: "text-white",
    iconType: "code"
  }
];

export const GROW_SERVICES = [
  {
    num: "01",
    title: "Business Development",
    description: "We find the markets, partners and pricing that move you forward, then build a plan your team can run with.",
    tags: ["Market research", "Go-to-market plans", "Partnerships", "Sales funnels"],
    color: "#c8ff25",
    icon: "trending"
  },
  {
    num: "02",
    title: "Branding",
    description: "A name, a look and a voice that people recognise in one glance and trust in the next.",
    tags: ["Brand strategy", "Logo and identity", "Brand guidelines", "Packaging and print"],
    color: "#7b5cfa",
    icon: "box"
  },
  {
    num: "03",
    title: "Marketing",
    description: "Campaigns that reach the right people and turn attention into enquiries, with every rupee tracked.",
    tags: ["Performance ads", "Lead generation", "Content and SEO", "Email and WhatsApp"],
    color: "#ff5c77",
    icon: "megaphone"
  }
];

export const BUILD_SERVICES = [
  {
    id: "social-media",
    title: "Social Media",
    description: "Content calendars, reels, creatives and community management that keep your brand talking to the right crowd, every week.",
    badges: ["STRATEGY", "CREATIVES", "REELS", "COMMUNITY", "REPORTING"],
    bgClass: "bg-[#171728] border border-[#262640] text-white",
    iconBg: "bg-[#ff5c77]/15 text-[#ff5c77]",
    icon: "instagram"
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Custom web apps, mobile apps and SaaS products, designed and engineered by one team, from first sketch to launch and beyond.",
    badges: ["WEB APPS", "MOBILE APPS", "SAAS", "APIS", "MAINTENANCE"],
    bgClass: "bg-[#7b5cfa] text-white",
    iconBg: "bg-white/20 text-white",
    icon: "code"
  },
  {
    id: "website-development",
    title: "Website Development",
    description: "Fast, mobile-first websites that look sharp, rank well and turn visitors into customers. Landing pages to full online stores.",
    badges: ["UI DESIGN", "LANDING PAGES", "E-COMMERCE", "SEO", "CMS"],
    bgClass: "bg-white text-[#0f0f1d]",
    iconBg: "bg-[#0f0f1d]/10 text-[#0f0f1d]",
    icon: "monitor"
  }
];

export const PRODUCT_CARDS = [
  {
    id: "package-design",
    title: "Package Design",
    description: "Boxes, pouches, bottles and labels that stand out on the shelf and tell your story in a second.",
    bgClass: "bg-[#171728] border border-[#262640] text-white",
    iconBg: "text-[#c8ff25]",
    icon: "package"
  },
  {
    id: "product-branding",
    title: "Branding",
    description: "A name, logo and voice that make your product feel like a brand people ask for by name.",
    bgClass: "bg-white text-[#0f0f1d]",
    iconBg: "text-[#7b5cfa]",
    icon: "star"
  },
  {
    id: "product-marketing",
    title: "Product Marketing",
    description: "Launch campaigns, catalogues, ads and social content that turn a new product into a talked-about one.",
    bgClass: "bg-[#7b5cfa] text-white",
    iconBg: "text-white",
    icon: "megaphone"
  },
  {
    id: "distribution-help",
    title: "Distribution Help",
    description: "We help you find dealers, retailers and channel partners, and give your sales team the kit to close them.",
    bgClass: "bg-[#c8ff25] text-[#0f0f1d]",
    iconBg: "text-[#0f0f1d]",
    icon: "truck"
  }
];

export const INSTITUTE_SERVICES = [
  {
    id: "magazine",
    title: "Magazine Creation",
    description: "Annual and periodic institute magazines, from story ideas and layout to a print-ready file.",
    iconColor: "bg-[#c8ff25] text-[#0f0f1d]",
    icon: "book"
  },
  {
    id: "cover-poster",
    title: "Cover and Poster Design",
    description: "Magazine covers, toppers' posters and admission banners with a look students want to share.",
    iconColor: "bg-[#ff5c77] text-white",
    icon: "image"
  },
  {
    id: "video-reels",
    title: "Video and Reels Editing",
    description: "Short, snappy reels from your events, results and classroom moments, cut for Instagram and YouTube.",
    iconColor: "bg-[#7b5cfa] text-white",
    icon: "video"
  },
  {
    id: "student-data",
    title: "Student Data Management",
    description: "Admissions, records, results and enquiries organised in one place, easy to find and easy to report on.",
    iconColor: "bg-white text-[#0f0f1d]",
    icon: "database"
  }
];

export const ALSO_SERVICES = [
  {
    id: "flex-print",
    title: "Flex and Print Design",
    description: "Flex banners, hoardings, shop boards, standees and posters, designed to be read from across the road and ready for the printer.",
    bgClass: "bg-[#ff5c77] text-white",
    iconColor: "text-white",
    icon: "printer"
  },
  {
    id: "training-hiring",
    title: "Employee Training and Hiring",
    description: "Staff training programmes for sales, service and digital skills, plus recruitment support to find the right people for your team.",
    bgClass: "bg-white text-[#0f0f1d]",
    iconColor: "text-[#7b5cfa]",
    icon: "users"
  },
  {
    id: "digital-tools",
    title: "Digital Tools at Discount Rates",
    description: "AI and productivity tools such as Gemini and ChatGPT, available to your organisation at discounted rates, set up so your team's workflow runs smoother from day one.",
    badges: ["AI ASSISTANTS", "PRODUCTIVITY", "SETUP", "TEAM ONBOARDING"],
    bgClass: "bg-[#c8ff25] text-[#0f0f1d]",
    iconColor: "text-[#0f0f1d]",
    icon: "sparkles"
  }
];

export const WORK_PROCESS = [
  {
    stage: "Discover",
    description: "We learn your goals, customers and market.",
    color: "#c8ff25"
  },
  {
    stage: "Design",
    description: "Strategy, brand and product take shape.",
    color: "#7b5cfa"
  },
  {
    stage: "Build",
    description: "We ship the site, app or campaign.",
    color: "#ff5c77"
  },
  {
    stage: "Grow",
    description: "We measure, learn and keep improving.",
    color: "#ffffff"
  }
];
