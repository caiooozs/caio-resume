/** Textos de interface em ingles (o idioma padrao e a fonte da forma dos outros). */
const en = {
  meta: {
    title: "Caio Cesar Costa — Frontend Developer",
    description:
      "Frontend developer from Recife, PE, working with React and Next.js. I build interfaces people enjoy using, run a YouTube channel, and help lead the Hyphen Community.",
    shortDescription:
      "Frontend developer from Recife, PE, working with React and Next.js.",
    ogLocale: "en_US",
  },
  nav: {
    label: "Main",
    home: "home",
    all: "All",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  theme: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  language: {
    change: "Change language",
  },
  email: {
    copy: "Copy email",
    copied: "Email copied",
    copiedStatus: "Email copied to clipboard",
  },
  home: {
    hello: "Hello, I'm ",
    name: "Caio Costa!",
    bio: "Frontend developer focused on building fast, accessible interfaces with an eye for detail. I work mainly with React, Next.js and TypeScript",
    goToProjects: "Go to Projects",
    downloadCv: "Download CV",
    projects: "Projects",
    community: "Community",
    stack: "Tech Stack",
    building: "Building",
    github: "GitHub",
    website: "Website",
    post: "LinkedIn post",
    builtWith: "Built with",
    myCommunity: "My Community",
    joinUs: "Join us",
    latestVideos: "Latest Videos",
    watchNow: "Watch now",
    noVideos: "No videos published yet",
    noVideosHint: "New uploads show up here automatically",
    events: "Events",
    privateRepo: "Private repository",
    seeDetails: "See details",
    stackLabels: {
      frontend: "Frontend",
      tools: "Tools",
      design: "Design",
      db: "Database",
      architecture: "Architecture",
      ai: "AI",
    } as Record<string, string>,
    /** Termos da stack que mudam de idioma (nomes de tecnologia nao mudam). */
    stackTerms: {} as Record<string, string>,
  },
  projects: {
    title: "Projects",
    metaDescription:
      "Projects by Caio Cesar Costa, frontend developer: what each one does, how it is built and where to see it running.",
    intro:
      "Apps I have shipped and products I am still building. Open one to see what it does, how it is built and where to find it.",
    expandAll: "Expand all",
    collapseAll: "Collapse all",
    overview: "Overview",
    whatItDoes: "What it does",
    screenshotAlt: "{title} home page",
    viewer: {
      label: "{title} screens",
      count: "{n} of {total}",
      previous: "Previous screen",
      next: "Next screen",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      close: "Close",
    },
  },
  about: {
    career: "Career",
    careerLead:
      "Where I have been, what I built and the stacks I used at each step.",
    channels: "Channels",
    channelsLead: "Where I share content and help build community.",
    events: "Events",
    eventsLead: "Talks, meetups and hackathons I joined or helped to organize.",
    at: "at",
    current: "Current",
    skills: "Skills",
    orReach: "Or reach me here",
    organizedWith: "Organized with",
    date: "Date",
    location: "Location",
  },
  contact: {
    title: "Contact",
    intro:
      "Got a project, an idea or just want to say hi? Drop me a message and I'll get back to you.",
    formTitle: "Send a message",
    name: "Name",
    email: "Email",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "Tell me what you have in mind...",
    send: "Send message",
    sending: "Sending...",
    errors: {
      name: "Name is required",
      email: "Invalid email",
      message: "Message is required",
    },
    success: "Message sent!",
    successHint: "Thanks for reaching out — I'll get back to you soon.",
    failure: "Something went wrong",
    failureHint: "Your message could not be sent. Please try again.",
  },
  footer: {
    navigation: "Navigation",
    community: "Community",
  },
};

export type Dictionary = typeof en;

export default en;
