/* THEJESTERVERSE site content
 * Edit this file to update roles, affiliations, case studies, metrics,
 * testimonials, services, communities and contact. No build step.
 * Then commit and push to Thejesterverse/thejesterverse.github.io.
 *
 * Role statuses:
 *   current | affiliate | past | collaboration | contribution
 * "collaboration" and "contribution" are for work that should not be
 * labelled current or past until you confirm the dates.
 * Set email to a public address to show the composer email button; leave null to hide it.
 * Add objects to testimonials[] to show the Testimonials section.
 */
window.SITE = {
  profile: {
    name: "Thejesterverse",
    displayName: "The jester verse",
    handle: "@ThejesterVerse",
    location: "Lagos, Nigeria",
    locationNote: "Open to remote work worldwide",
    studying: "Chemistry Education at the University of Uyo",
    headline: "I Build Partnerships, Grow Web3 Communities and Create Campaigns That Move Projects Forward.",
    intro: "I'm Thejesterverse, a Web3 Business Development professional, KOL and community growth contributor working with projects around the world.",
    tagline: "I find projects the right rooms, then fill them.",
    quote: "The jester gets to say what the court won't. That's the job in a crowded timeline.",
    about: [
      "I'm based in Lagos, Nigeria and I work remotely with projects anywhere. My work covers ambassador programs and community management, KOL and affiliate content with exchanges, and business development at Action Model, where I pitch projects on ActionFi.",
      "I write the way I'd want to be pitched: what the product does, what the numbers are, what the catch is. I trade too, so I know what traders skip and what they screenshot.",
      "Outside of client work I run a degen traders group, coordinate a KOL group, and host or speak in X Spaces. I'm also studying Chemistry Education at the University of Uyo."
    ],
    openToWork: true,
    portrait: "assets/portrait.jpg",
    banner: "assets/banner.jpg",
    x: "https://x.com/ThejesterVerse",
    telegram: "https://t.me/ThejesterVerse",
    discord: "thejesterVerse",
    email: "elishayehudah@gmail.com",
    siteUrl: "https://thejesterverse.github.io/"
  },

  seo: {
    title: "Thejesterverse · Web3 BD, KOL & ambassador",
    description: "Thejesterverse (@ThejesterVerse): Web3 business development, KOL and community growth. BD at Action Model, KOL for KoinBX, ambassador for Cellframe, KindWorld and ShopinX. Lagos, open to remote work.",
    keywords: "Web3 BD, Web3 KOL, Community Management, Web3 Partnerships, Thejesterverse",
    ogImage: "https://thejesterverse.github.io/assets/banner.jpg"
  },

  nav: [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Selected Work" },
    { href: "#experience", label: "Experience" },
    { href: "#communities", label: "Communities" },
    { href: "#contact", label: "Contact" }
  ],

  pillars: [
    { id: "bd", title: "Web3 BD & Partnerships", text: "I source projects, pitch the fit, and keep the partnership pipeline moving over X, Telegram and Discord." },
    { id: "kol", title: "KOL, Content & Growth Marketing", text: "Research-led posts, campaign narrative and timing, and coordinated KOL rounds, not a pile of random shoutouts." },
    { id: "community", title: "Community Management & Growth", text: "Ambassador work, daily cadence, moderation, and bringing people in through channels that already trust the voice." }
  ],

  metrics: {
    asOf: "Nov 24, 2026",
    note: "X figures from public profile data on Nov 24, 2026. Only verified figures are shown.",
    items: [
      { value: "3K+", label: "followers on X" },
      { value: "7", label: "current roles across BD, KOL, affiliate and ambassador work" },
      { value: "7", label: "ambassador programs, 3 of them current" },
      { value: "11.7K", label: "posts since joining X in Nov 2024" }
    ]
  },

  roleGroups: [
    { id: "current", label: "Current" },
    { id: "affiliate", label: "Affiliate partnerships" },
    { id: "past", label: "Past" },
    { id: "contribution", label: "Contributions" }
  ],

  roles: [
    { id: "actionmodel", name: "Action Model AI (ActionFi)", short: "Action Model", handle: "@ActionModelAI", url: "https://x.com/ActionModelAI", logo: "assets/logos/actionmodel.jpg", group: "current", title: "Business development", summary: "I source Web3 projects and pitch them on ActionFi, run cold outreach over X, Telegram and Discord, and keep the partnership pipeline tracked." },
    { id: "koinbx", name: "KoinBX", short: "KoinBX", handle: "@KoinBX", url: "https://x.com/KoinBX", logo: "assets/logos/koinbx.jpg", group: "current", title: "Official KOL", summary: "Content for KoinBX campaigns and trading contests." },
    { id: "cellframe", name: "Cellframe", short: "Cellframe", handle: "@cellframenet", url: "https://x.com/cellframenet", logo: "assets/logos/cellframe.jpg", group: "current", title: "Core Contributor & Ambassador", summary: "Dec 2025 to Present. Community growth and awareness." },
    { id: "kindworld", name: "KindWorld", short: "KindWorld", handle: "@kindworldlabs", url: "https://x.com/kindworldlabs", logo: "assets/logos/kindworld.jpg", group: "current", title: "Ambassador", summary: "Ambassador since Oct 13, 2026. Community growth and awareness." },
    { id: "shopinx", name: "ShopinX", short: "ShopinX", handle: "@shopinxSHOPINX", url: "https://x.com/shopinxSHOPINX", logo: "assets/logos/shopinx.jpg", group: "current", title: "Ambassador", summary: "Commerce and loyalty on BNB Chain, with GoBenefits offers across 400+ brands." },

    { id: "weex", name: "WEEX", short: "WEEX", handle: "@WEEX_Official", url: "https://x.com/WEEX_Official", logo: "assets/logos/weex.jpg", group: "affiliate", title: "Affiliate partner", summary: "Affiliate content partnership." },
    { id: "alphax", name: "AlphaX", short: "AlphaX", handle: "@AlphaX_DEX", url: "https://x.com/AlphaX_DEX", logo: "assets/logos/alphax.jpg", group: "affiliate", title: "Official affiliate partner", summary: "Campaign breakdowns and affiliate content." },

    { id: "tauntlive", name: "TauntLive", short: "TauntLive", handle: "@TauntCoin", url: "https://x.com/TauntCoin", logo: "assets/logos/tauntlive.jpg", group: "past", title: "Ambassador", summary: "Represented the project in the community." },
    { id: "midnight", name: "Midnight", short: "Midnight", handle: "@MidnightNtwrk", url: "https://x.com/MidnightNtwrk", logo: "assets/logos/midnight.jpg", group: "past", title: "Alpha Ambassador", summary: "" },
    { id: "astra", name: "Astra", short: "Astra", handle: "@Astra_HQ", url: "https://x.com/Astra_HQ", logo: "assets/logos/astra.jpg", group: "past", title: "Ambassador", summary: "An AI-powered, KYC-first Layer 2 for Web3 compliance." },
    { id: "aryze", name: "Aryze", short: "Aryze", handle: "@AryzeOfficial", url: "https://x.com/AryzeOfficial", logo: "assets/logos/aryze.jpg", group: "past", title: "Ambassador", summary: "Money software for banks and payment companies, issuing Digital Cash." },
    { id: "fastx", name: "FastX Network", short: "FastX Network", handle: "@FastXNetwork", url: "https://x.com/FastXNetwork", logo: "assets/logos/fastx.jpg", group: "past", title: "Content Creator", summary: "Onchain AI infrastructure that links GPU nodes and applications into a Web3 AI network." },


    { id: "injective", name: "Injective", short: "Injective", handle: "@injective", url: "https://x.com/injective", logo: "assets/logos/injective.jpg", group: "contribution", title: "Contribution", summary: "A blockchain where users, institutions and AI agents trade, tokenize and transact at scale." },
    { id: "xora", name: "XORA", short: "XORA", handle: "@xora_finance", url: "https://x.com/xora_finance", logo: "assets/logos/xora.jpg", group: "contribution", title: "Contributor, content", summary: "A breakdown of XORA on the XRP Ledger and its Bounty Marketplace for contributors." },
    { id: "memu", name: "memU", short: "memU", handle: "@memU_ai", url: "https://x.com/memU_ai", logo: "assets/logos/memu.jpg", group: "contribution", title: "Contributor", summary: "" }
  ],

  ecosystem: ["memU.ai", "U2U", "Stellar West Africa Chapter", "XORA", "BIGOD", "Spaace", "iVault", "AI Coach"],

  services: [
    {
      id: "bd",
      title: "Business Development",
      explanation: "Sourcing and pitching partners, cold outreach over X, Telegram and Discord, follow-ups that don't go cold, and a pipeline you can actually read.",
      deliverables: [
        "Partner sourcing and pitches",
        "Cold outreach and follow-ups over X, Telegram and Discord",
        "A partnership pipeline you can actually read",
        "Warm introductions to the right partner, platform or group of creators"
      ],
      cta: "Request a Custom Proposal"
    },
    {
      id: "kol",
      title: "KOL & Content Campaigns",
      explanation: "Launch and moment-based campaigns: narrative, timing, and the posts that carry it, not a pile of random shoutouts. Long-form posts and threads built from your docs, plus coordinated KOL rounds through a group I already run.",
      deliverables: [
        "Research-led KOL posts and threads",
        "Campaign narrative, timing and hooks",
        "Coordinated KOL rounds",
        "X Spaces and AMA hosting",
        "Exchange and listing awareness posts written for traders"
      ],
      cta: "Request a Custom Proposal"
    },
    {
      id: "community",
      title: "Community Operations",
      explanation: "Ambassador and community programs: onboarding, the daily chat, moderation, and the cadence that keeps a group talking after announcement day.",
      deliverables: [
        "Ambassador program representation",
        "Community onboarding and discussion",
        "Moderation and guideline enforcement",
        "Daily cadence after announcement day"
      ],
      cta: "Request a Custom Proposal"
    },
    {
      id: "growth",
      title: "Growth Partnerships",
      explanation: "Bringing new users in through the channels that already trust the voice: community, content, and direct introductions. Affiliate content partnerships included.",
      deliverables: [
        "Affiliate content partnerships",
        "Trusted-channel introductions for new users",
        "Campaign breakdowns and affiliate content"
      ],
      cta: "Request a Custom Proposal"
    }
  ],

  work: [
    {
      id: "alphax-post",
      project: "AlphaX",
      role: "Official affiliate partner",
      objective: "Explain AlphaX's 189,100 USDT trading campaign clearly, including the terms and a risk note.",
      contribution: "An affiliate post walking through the campaign terms with a risk note.",
      deliverables: ["Long-form X post"],
      outcomes: [
        { value: "207", label: "likes" },
        { value: "71", label: "replies" },
        { value: "14", label: "reposts" }
      ],
      outcomeNote: "Public X engagement on the post, Oct 28, 2026.",
      links: [{ label: "Read the post on X", url: "https://x.com/ThejesterVerse/status/2115584456228503809" }],
      image: "assets/post_alphax.jpg",
      imageAlt: "AlphaX campaign post image",
      date: "Oct 28, 2026",
      team: false,
      placeholder: false
    },
    {
      id: "xora-post",
      project: "XORA",
      role: "Contributor, content",
      objective: "Break down why XORA is building more than another crypto platform.",
      contribution: "A breakdown of XORA on the XRP Ledger and its Bounty Marketplace for contributors: what it is, why the XRPL choice matters, and what to watch next.",
      deliverables: ["Long-form X post"],
      outcomes: [
        { value: "51", label: "likes" },
        { value: "21", label: "replies" },
        { value: "7", label: "reposts" }
      ],
      outcomeNote: "Public X engagement on the post, Jul 29, 2026.",
      links: [{ label: "Read the post on X", url: "https://x.com/ThejesterVerse/status/2082392518310703241" }],
      image: "assets/post_xora.jpg",
      imageAlt: "XORA post image",
      date: "Jul 29, 2026",
      team: false,
      placeholder: false
    },
    {
      id: "sixr-team",
      project: "Action Model: SIXR",
      role: "Business development (team campaign example)",
      objective: "An example of the kind of ActionFi campaign the Action Model team runs.",
      contribution: "I source Web3 projects and pitch them on ActionFi. This case study is a team result, not a personal one.",
      deliverables: ["Team ActionFi campaign (Action Model)"],
      outcomes: [
        { value: "29.4K", label: "new users (team result)" }
      ],
      outcomeNote: "Figure from Action Model's official SIXR case study. Team result, not a personal one.",
      links: [{ label: "Action Model SIXR case study", url: "https://actionmodel.com/case-studies/sixr" }],
      image: "assets/logos/actionmodel.jpg",
      imageAlt: "Action Model",
      date: null,
      team: true,
      placeholder: false
    },
    {
      id: "koinbx-kol",
      project: "KoinBX",
      role: "Official KOL",
      objective: "Verified campaign objective to be added.",
      contribution: "Content for KoinBX campaigns and trading contests.",
      deliverables: ["KOL content (details to be added)"],
      outcomes: [],
      outcomeNote: "Verified outcomes and campaign links will be added here.",
      links: [{ label: "KoinBX on X", url: "https://x.com/KoinBX" }],
      image: "assets/logos/koinbx.jpg",
      imageAlt: "KoinBX",
      date: null,
      team: false,
      placeholder: true
    },
    {
      id: "community-growth",
      project: "Community growth",
      role: "Ambassador and community work",
      objective: "Project, objective and dates to be added.",
      contribution: "Ambassador work for Cellframe, KindWorld, ShopinX, TauntLive, Midnight, Astra and Aryze. Growth that shows up in the group chat.",
      deliverables: ["Community representation (case details to be added)"],
      outcomes: [],
      outcomeNote: "A specific, verified community-growth case will be added here.",
      links: [],
      image: null,
      imageAlt: "",
      date: null,
      team: false,
      placeholder: true
    }
  ],

  testimonials: [],

  ways: [
    {
      id: "bd",
      title: "BD Engagement",
      kicker: "Partnerships",
      covers: "Sourcing, pitching and following up with partners for a project that needs rooms and introductions.",
      deliverables: ["Outreach plan and pipeline", "Pitches and follow-ups", "Intros where there's a real fit"],
      structure: "Scoped to a push or kept ongoing. Timing and deliverables settled up front.",
      request: "Use the brief composer and pick Business Development."
    },
    {
      id: "kol",
      title: "KOL & Content Campaigns",
      kicker: "Campaign",
      covers: "Research-led posts on my account, timed to your launch, campaign or contest. Add the KOL network when you need more reach.",
      deliverables: ["Campaign narrative and posts", "Optional coordinated KOL rounds", "Spaces or AMAs where useful"],
      structure: "Campaign-based. Timing and deliverables settled up front.",
      request: "Use the brief composer and pick KOL & Content Creation."
    },
    {
      id: "community",
      title: "Community Management Retainers",
      kicker: "Ongoing",
      covers: "I stay in the room: content, Spaces and the daily work of keeping a community active.",
      deliverables: ["Onboarding and discussion", "Moderation", "Ambassador representation"],
      structure: "Ongoing retainer. Cadence agreed up front. No prices listed here. Request a proposal.",
      request: "Use the brief composer and pick Community Management or Ambassador Campaigns."
    },
    {
      id: "affiliate",
      title: "Affiliate & Growth Partnerships",
      kicker: "Growth",
      covers: "Affiliate content and introductions through channels that already trust the voice.",
      deliverables: ["Affiliate posts and campaign breakdowns", "Trusted-channel introductions"],
      structure: "Project-based or ongoing, agreed up front.",
      request: "Use the brief composer and pick Affiliate Partnerships."
    }
  ],

  communities: [
    { network: "Telegram", name: "Degen traders group", text: "A Telegram group I run for degen traders.", url: "https://t.me/moonshot011", linkLabel: "t.me/moonshot011" },
    { network: "Telegram", name: "KOL group", text: "The group where I coordinate my KOL network for campaigns.", url: "https://t.me/pixelgrass", linkLabel: "t.me/pixelgrass" },
    { network: "X", name: "Spaces", text: "I host and speak in Spaces. Follow on X to catch the next one.", url: "https://x.com/ThejesterVerse", linkLabel: "@ThejesterVerse" }
  ],

  composer: {
    services: [
      "Business Development",
      "KOL & Content Creation",
      "Community Management",
      "Moderation",
      "Ambassador Campaigns",
      "Affiliate Partnerships",
      "Other"
    ],
    timelines: ["This week", "This month", "Just exploring"]
  },

  footerNote: "Follower and post figures from public X data, Nov 24, 2026. Logos belong to their projects."
};
