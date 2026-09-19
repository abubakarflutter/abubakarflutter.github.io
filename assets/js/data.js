window.PORTFOLIO = {
  name: "Muhammad Abubakar",
  role: "Senior Flutter Developer & Mobile Engineer",
  email: "abubakarflutter@gmail.com",
  github: "https://github.com/abubakarflutter",
  linkedin: "https://www.linkedin.com/in/abubakarflutter/",
  location: "Pakistan",
  resumeUrl: "",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "10+", label: "Production Projects" },
    { value: "50+", label: "Countries Supported" },
    { value: "100K+", label: "Monthly Users on Large Apps" },
  ],
  skillGroups: [
    {
      title: "Mobile",
      items: ["Flutter", "Dart", "Android", "iOS", "Responsive UI"],
    },
    {
      title: "Architecture & State",
      items: [
        "Clean Architecture",
        "MVVM",
        "Riverpod",
        "BLoC",
        "Provider",
        "GetX",
        "Dependency Injection",
      ],
    },
    {
      title: "APIs & Data",
      items: ["REST APIs", "GraphQL", "Dio", "HTTP", "JSON", "Hive", "Caching"],
    },
    {
      title: "Firebase & Real-Time",
      items: ["Firebase", "FCM", "Socket.IO", "Pusher", "Agora"],
    },
    {
      title: "Platform & Integrations",
      items: ["Google Maps", "Stripe", "Apple Pay", "Google Pay", "Shopify"],
    },
    {
      title: "DevOps & Tools",
      items: [
        "Git",
        "GitHub Actions",
        "CodeMagic",
        "CI/CD",
        "Postman",
        "Swagger",
        "Jira",
      ],
    },
  ],
  approach: [
    {
      title: "Scalable Architecture",
      copy: "I structure applications using Clean Architecture, MVVM, repositories, dependency injection and feature-based modules to keep business logic separate from the UI.",
      tags: ["Clean Architecture", "MVVM", "DI", "Repositories"],
    },
    {
      title: "Predictable State",
      copy: "I use Riverpod, BLoC, Provider or GetX depending on the complexity and requirements of the application.",
      tags: ["Riverpod", "BLoC", "Provider", "GetX"],
    },
    {
      title: "Performance First",
      copy: "I use Flutter DevTools, caching, pagination, optimized API calls and controlled widget rebuilds to keep applications responsive.",
      tags: ["DevTools", "Caching", "Pagination", "Profiling"],
    },
    {
      title: "Reliable Delivery",
      copy: "I use Git, GitHub Actions and CodeMagic to automate checks, builds and deployment workflows.",
      tags: ["GitHub Actions", "CodeMagic", "CI/CD"],
    },
  ],
  experience: [
    {
      company: "Fillinx Solutions",
      logo: "assets/img/orgs/fillinx.png",
      logoTone: "dark",
      title: "Senior Flutter Developer",
      dates: "May 2023 – Present",
      place: "Faisalabad, Pakistan",
      bullets: [
        {
          text: "Lead development of production Flutter applications using Riverpod, GraphQL, REST APIs, Firebase and Clean Architecture principles.",
          keywords: [
            "Clean Architecture",
            "Riverpod",
            "GraphQL",
            "Firebase",
            "Flutter",
          ],
        },
        {
          text: "Architected Tapday, a configurable mobile app builder for Shopify merchants.",
          keywords: [],
        },
        {
          text: "Built real-time and location-based workflows across mobile products.",
          keywords: [],
        },
        {
          text: "Implemented CI/CD workflows using GitHub Actions.",
          keywords: ["CI/CD"],
        },
      ],
    },
    {
      company: "Technupur",
      logo: "assets/img/orgs/technupur.png",
      title: "Flutter Developer",
      dates: "March 2022 – May 2023",
      place: "Faisalabad, Pakistan",
      bullets: [
        {
          text: "Built and maintained API-driven Flutter applications using Provider/BLoC, REST APIs and Firebase.",
          keywords: ["REST APIs", "Firebase", "Provider", "BLoC", "Flutter"],
        },
        {
          text: "Worked on real-time civic engagement and order-tracking platforms.",
          keywords: [],
        },
        {
          text: "Refactored core modules to improve maintainability and application performance.",
          keywords: ["Performance"],
        },
        {
          text: "Improved application loading performance through code and API optimization.",
          keywords: ["Performance"],
        },
      ],
    },
    {
      company: "Invictus Solutions",
      logo: "assets/img/orgs/invictus.png",
      title: "Junior Flutter Developer",
      dates: "September 2020 – March 2022",
      place: "Faisalabad, Pakistan",
      bullets: [
        {
          text: "Developed mobile features using Flutter, REST APIs, Firebase and Google Maps.",
          keywords: ["Google Maps", "REST APIs", "Firebase", "Flutter"],
        },
        {
          text: "Worked on real-time logistics and booking applications.",
          keywords: [],
        },
        {
          text: "Debugged production issues using Flutter DevTools.",
          keywords: ["Flutter DevTools"],
        },
        {
          text: "Improved API performance through caching and better data handling.",
          keywords: ["Caching"],
        },
      ],
    },
  ],
  projects: [
    {
      slug: "tapday",
      title: "Tapday",
      subtitle: "No-Code Mobile App Builder for Shopify",
      company: "Fillinx Solutions",
      description:
        "A Flutter-based mobile app builder that enables Shopify merchants to create configurable Android and iOS applications without building each app from scratch.",
      technologies: [
        "Flutter",
        "Dart",
        "Riverpod",
        "GraphQL",
        "Shopify",
        "Firebase",
        "GitHub Actions",
      ],
      contributions: [
        "Built reusable and configurable Flutter components.",
        "Integrated Shopify GraphQL APIs and third-party services.",
        "Designed scalable state and data flows using Riverpod.",
      ],
      role: "Senior Flutter Developer",
      overview:
        "Tapday turns Shopify storefronts into configurable native Android and iOS apps from a single Flutter engine.",
      roleCopy:
        "I architected and developed core Flutter builder flows, including reusable widgets, GraphQL product sync, and Riverpod state used across merchant apps.",
      workedOn: [
        "Configurable widget system for merchant storefronts",
        "Shopify GraphQL catalog and checkout wiring",
        "Riverpod data flows for live product sync",
        "Push campaign hooks through Firebase",
        "CI checks with GitHub Actions",
      ],
      metrics: [],
      projectUrl: "https://www.tapday.com/",
      playStoreUrl: "", // TODO: Add verified Play Store URL when provided.
      appStoreUrl: "", // TODO: Add verified App Store URL when provided.
      challenges: [], // TODO: Add verified technical challenge
      featured: true,
      cover: "tap",
    },
    {
      slug: "aqarmap",
      title: "Aqarmap",
      subtitle: "Large-Scale Real Estate Platform",
      company: "Fillinx Solutions",
      description:
        "A real estate application supporting property discovery, location-based search and large property datasets.",
      technologies: [
        "Flutter",
        "Provider",
        "Google Maps",
        "Firebase",
        "REST APIs",
        "CI/CD",
      ],
      contributions: [
        "Built map-based property discovery flows.",
        "Managed API-driven application state using Provider.",
        "Worked with Firebase and automated deployment workflows.",
      ],
      role: "Senior Flutter Developer",
      overview:
        "Aqarmap helps people discover property with map-first search across a large catalog.",
      roleCopy:
        "I worked on map discovery, Provider-driven API state, and Firebase-backed deployment workflows.",
      workedOn: [
        "Map-based property discovery",
        "Provider state for API-driven listings",
        "Firebase-backed workflows",
        "Automated deployment support",
      ],
      metrics: ["100K+ monthly visitors", "10K+ properties", "1K+ projects"],
      projectUrl: "", // TODO: Add verified live URL when provided.
      playStoreUrl: "", // TODO: Add verified Play Store URL when provided.
      appStoreUrl: "", // TODO: Add verified App Store URL when provided.
      challenges: [], // TODO: Add verified technical challenge
      featured: true,
      cover: "aqar",
    },
    {
      slug: "forall",
      title: "ForAll",
      subtitle: "Global Multi-Service Platform",
      company: "Fillinx Solutions",
      description:
        "A multi-service application covering e-commerce, healthcare, travel, real estate and other services across multiple countries.",
      technologies: [
        "Flutter",
        "Provider",
        "Pusher",
        "Agora",
        "Localization",
        "REST APIs",
      ],
      contributions: [
        "Implemented real-time communication features.",
        "Supported localization across multiple regions.",
        "Built reusable workflows used across multiple service categories.",
      ],
      role: "Senior Flutter Developer",
      overview:
        "ForAll is a multi-service platform spanning e-commerce, healthcare, travel and more across many countries.",
      roleCopy:
        "I implemented real-time communication, localization, and reusable service workflows shared across categories.",
      workedOn: [
        "Real-time communication with Pusher and Agora",
        "Localization for multiple regions",
        "Reusable category workflows",
        "REST-driven service screens",
      ],
      metrics: ["50+ countries", "300+ cities", "17 languages", "40+ service categories"],
      projectUrl: "", // TODO: Add verified live URL when provided.
      playStoreUrl: "", // TODO: Add verified Play Store URL when provided.
      appStoreUrl: "", // TODO: Add verified App Store URL when provided.
      challenges: [], // TODO: Add verified technical challenge
      featured: true,
      cover: "forall",
    },
    {
      slug: "almohannad-cards",
      title: "AlMohannad Cards",
      subtitle: "Digital Prepaid Card Platform",
      company: "Fillinx Solutions",
      description:
        "A digital prepaid card purchasing platform for customers in Saudi Arabia with instant delivery and multiple payment options.",
      technologies: [
        "Flutter",
        "BLoC",
        "Clean Architecture",
        "Stripe",
        "Apple Pay",
        "Google Pay",
      ],
      contributions: [
        "Implemented structured BLoC-based application state.",
        "Integrated multiple digital payment methods.",
        "Built purchase, delivery and order-tracking flows.",
      ],
      role: "Senior Flutter Developer",
      overview:
        "AlMohannad Cards lets customers in Saudi Arabia buy prepaid cards with instant delivery and several payment options.",
      roleCopy:
        "I implemented BLoC state, payment integrations, and purchase-to-delivery flows.",
      workedOn: [
        "BLoC application state",
        "Stripe, Apple Pay, and Google Pay",
        "Purchase and delivery flows",
        "Order tracking",
      ],
      metrics: [],
      projectUrl: "", // TODO: Add verified live URL when provided.
      playStoreUrl: "", // TODO: Add verified Play Store URL when provided.
      appStoreUrl: "", // TODO: Add verified App Store URL when provided.
      challenges: [], // TODO: Add verified technical challenge
      featured: true,
      cover: "cards",
    },
    {
      slug: "sakoon",
      title: "Sakoon",
      subtitle: "Pharmacy & Medicine Delivery",
      company: "Fillinx Solutions",
      description:
        "A pharmacy application supporting medicine ordering, prescription uploads, notifications and delivery tracking.",
      technologies: [
        "Flutter",
        "GetX",
        "Clean Architecture",
        "REST APIs",
        "FCM",
        "Google Maps",
      ],
      contributions: [
        "Integrated REST-based ordering workflows.",
        "Implemented Firebase push notifications.",
        "Integrated Google Maps Directions API for delivery-related features.",
      ],
      role: "Senior Flutter Developer",
      overview:
        "Sakoon is a pharmacy app for ordering medicine, uploading prescriptions, and tracking delivery.",
      roleCopy:
        "I integrated REST ordering, FCM notifications, and Google Maps directions for delivery.",
      workedOn: [
        "REST ordering workflows",
        "Firebase Cloud Messaging",
        "Google Maps Directions",
        "Prescription upload screens",
      ],
      metrics: [],
      projectUrl: "", // TODO: Add verified live URL when provided.
      playStoreUrl: "", // TODO: Add verified Play Store URL when provided.
      appStoreUrl: "", // TODO: Add verified App Store URL when provided.
      challenges: [], // TODO: Add verified technical challenge
      featured: true,
      cover: "sakoon",
    },
    {
      slug: "nautaes",
      title: "Nautaes",
      subtitle: "Boat Booking Platform",
      company: "Fillinx Solutions",
      description:
        "A boat-booking application with supplier coordination, location-based services and real-time communication.",
      technologies: [
        "Flutter",
        "REST APIs",
        "Real-Time Chat",
        "Maps",
        "Location Services",
      ],
      contributions: [
        "Built booking and supplier coordination workflows.",
        "Implemented location-based features.",
        "Worked on real-time messaging functionality.",
      ],
      role: "Senior Flutter Developer",
      overview:
        "Nautaes coordinates boat bookings between customers and suppliers with location and messaging.",
      roleCopy:
        "I built booking and supplier workflows, location features, and real-time messaging.",
      workedOn: [
        "Booking and supplier coordination",
        "Location-based services",
        "Real-time messaging",
        "REST-driven booking APIs",
      ],
      metrics: ["1K+ monthly bookings"],
      projectUrl: "", // TODO: Add verified live URL when provided.
      playStoreUrl: "", // TODO: Add verified Play Store URL when provided.
      appStoreUrl: "", // TODO: Add verified App Store URL when provided.
      challenges: [], // TODO: Add verified technical challenge
      featured: true,
      cover: "boat",
    },
    {
      slug: "honeydu",
      title: "Honeydu",
      subtitle: "Creator Payments",
      description:
        "Flutter client for invoicing and B2B payouts on Android and iOS.",
      technologies: ["Flutter", "Android", "iOS", "Firebase"],
      contributions: [],
      featured: false,
      projectUrl: "",
      cover: "honey",
    },
    {
      slug: "zego-calling",
      title: "Zego Calling",
      subtitle: "Audio & Video Calls",
      description:
        "Real-time calling with ZegoCloud, push notifications, and a shared Flutter UI.",
      technologies: ["Flutter", "ZegoCloud", "FCM"],
      contributions: [],
      featured: false,
      projectUrl: "",
      cover: "zego",
    },
    {
      slug: "restaurant-app",
      title: "Restaurant App",
      subtitle: "Animated Ordering UI",
      description:
        "Motion-first menu and checkout screens with Hero transitions.",
      technologies: ["Flutter", "Animations", "Android", "iOS"],
      contributions: [],
      featured: false,
      projectUrl: "",
      cover: "rest",
    },
    {
      slug: "expense-tracker",
      title: "Expense Tracker",
      subtitle: "Daily Spending",
      description: "A clean Flutter tracker for everyday spend and categories.",
      technologies: ["Flutter", "Dart"],
      contributions: [],
      featured: false,
      projectUrl: "",
      cover: "exp",
    },
    {
      slug: "storefront-apps",
      title: "Storefront Apps",
      subtitle: "Ecommerce · Fillinx",
      description:
        "Merchant Android and iOS storefronts with catalogs and checkout.",
      technologies: ["Flutter", "GraphQL", "REST", "Klaviyo"],
      contributions: [],
      featured: false,
      projectUrl: "",
      cover: "shop",
    },
    {
      slug: "flutter-web-desktop",
      title: "Flutter Web & Desktop",
      subtitle: "Multi-platform · Technupur",
      description:
        "Performance and feature work on Flutter web and desktop alongside mobile.",
      technologies: ["Flutter Web", "Desktop", "Dart"],
      contributions: [],
      featured: false,
      projectUrl: "",
      cover: "web",
    },
    {
      slug: "furniture-store",
      title: "Furniture Store",
      subtitle: "Commerce UI",
      description:
        "Catalog browsing with SliverAppBar, cached images, and Hero transitions.",
      technologies: ["Flutter", "Slivers", "Hero"],
      contributions: [],
      featured: false,
      projectUrl: "",
      cover: "furn",
    },
  ],
};
