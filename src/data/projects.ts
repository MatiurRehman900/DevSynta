export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  images: string[];
  liveUrl?: string;
  featured: boolean;
  year: string;
  client?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "bookair",
    title: "BookAirTicketPK",
    tagline: "Modern flight booking platform",
    description:
      "BookAirTicket is a full-featured flight booking platform that lets users search, compare, and book flights in real time. It includes seat selection, multi-passenger booking, dynamic pricing, and a seamless Stripe-powered checkout flow. The admin panel provides airline partners with route management and analytics.",
    category: "Web App",
    tags: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    images: ["/projects/bookair.png"],
    liveUrl: "https://agent.bookairticket.pk/",
    featured: true,
    year: "2024",
    client: "BookAir Inc.",
    highlights: [
      "Real-time flight search with live pricing",
      "Multi-passenger & multi-city booking",
      "Stripe payment integration",
      "Seat map selection UI",
      "Admin dashboard for route & booking management",
    ],
  },
  {
    id: "flyglobe",
    title: "FlyGlobe",
    tagline: "Global travel management system",
    description:
      "FlyGlobe is a travel management platform designed for corporate clients and travel agencies. It supports multi-destination trip planning, itinerary management, expense tracking, and team travel approvals. The platform integrates with major GDS systems for live inventory.",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "REST API", "Tailwind CSS"],
    images: ["/projects/flyglobe.png"],
    liveUrl: "https://flyglobe.example.com",
    featured: true,
    year: "2024",
    client: "FlyGlobe Ltd.",
    highlights: [
      "Multi-destination itinerary builder",
      "Corporate travel approval workflows",
      "Expense tracking & reporting",
      "GDS API integration for live inventory",
      "Role-based access for teams",
    ],
  },
  {
    id: "helpdesk",
    title: "HelpDesk",
    tagline: "Enterprise customer support platform",
    description:
      "HelpDesk is a SaaS customer support platform built for enterprise teams. It features a smart ticket management system, live chat, canned responses, SLA tracking, and a rich analytics dashboard. Agents can collaborate on tickets, escalate issues, and track resolution times.",
    category: "SaaS",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    images: ["/projects/helpdesk.png"],
    liveUrl: "https://helpdesk.compilex.it.com/",
    featured: true,
    year: "2023",
    client: "HelpDesk Corp.",
    highlights: [
      "Smart ticket routing & prioritization",
      "Real-time live chat with WebSocket",
      "SLA tracking & breach alerts",
      "Team collaboration on tickets",
      "Analytics dashboard with CSAT scores",
    ],
  },
  {
    id: "washnow-admin",
    title: "WashNow Admin",
    tagline: "Laundry service operations dashboard",
    description:
      "WashNow Admin is the operations backbone of the WashNow on-demand laundry service. It gives managers full visibility into orders, driver assignments, pickup/delivery scheduling, and real-time GPS tracking. The dashboard includes revenue analytics, customer management, and promo code management.",
    category: "Dashboard",
    tags: ["Next.js", "Firebase", "Google Maps API", "Chart.js"],
    images: ["/projects/washnow-admin.png"],
    liveUrl: "https://washnow247.com/admin",
    featured: true,
    year: "2023",
    client: "WashNow",
    highlights: [
      "Real-time order & driver tracking on map",
      "Automated driver assignment algorithm",
      "Revenue & performance analytics",
      "Customer & subscription management",
      "Promo code & discount engine",
    ],
  },
  {
    id: "washnow-user",
    title: "WashNow User App",
    tagline: "On-demand laundry pickup & delivery",
    description:
      "WashNow is a consumer web app for on-demand laundry pickup and delivery. Users can schedule pickups, choose service types, track their order live on a map, and pay in-app. The app features push notifications for every order status update and a loyalty rewards program.",
    category: "Web App",
    tags: ["Next.js", "Firebase", "Stripe", "Google Maps"],
    images: ["/projects/washnow-user.png"],
    liveUrl: "https://washnow247.com",
    featured: true,
    year: "2023",
    client: "WashNow",
    highlights: [
      "Schedule pickup with time slot selection",
      "Live order tracking on map",
      "In-app payment with Stripe",
      "Push notifications for order updates",
      "Loyalty points & rewards program",
    ],
  },
  {
    id: "spirit-index",
    title: "Spirit Index",
    tagline: "Spiritual wellness tracking & community platform",
    description:
      "A spiritual wellness tracking application that helps users monitor their meditation practices, daily reflections, and spiritual growth journey. Features mood tracking, guided meditation integrations, community forums, and personalized growth recommendations.",
    category: "Web App",
    tags: ["Laravel", "Vue.js", "PostgreSQL", "WebSockets", "Tailwind CSS"],
    images: ["/projects/project-6.jpeg"],
    liveUrl: "https://spirit.projectpreview.xyz/login",
    featured: true,
    year: "2025",
    client: "Spirit Index",
    highlights: [
      "Meditation practice tracking & streaks",
      "Daily reflections & mood logging",
      "Community forums & group discussions",
      "Personalized spiritual growth recommendations",
      "Real-time updates via WebSockets",
    ],
  },
  {
    id: "redefine-church",
    title: "Redefine Church",
    tagline: "Modern church management & member portal",
    description:
      "A modern church management system with member portal, event scheduling, and donation management. Features include sermon archives, small group coordination, volunteer scheduling, and an integrated giving platform. Built with scalability to handle growing congregations.",
    category: "Web App",
    tags: ["Laravel", "React.js", "MySQL", "Stripe", "AWS S3"],
    images: ["/projects/project-7.jpeg"],
    liveUrl: "https://redefine.aio.church/",
    featured: true,
    year: "2025",
    client: "Redefine Church",
    highlights: [
      "Member portal with profiles & directory",
      "Event scheduling & RSVP management",
      "Integrated donation & giving platform",
      "Sermon archive with media storage on AWS S3",
      "Volunteer & small group coordination",
    ],
  },
  {
    id: "king-riders",
    title: "King Riders Delivery System",
    tagline: "Real-time delivery management & tracking",
    description:
      "A complete delivery management system with real-time tracking, route optimization, and driver management. Features include order dispatching, customer notifications, proof of delivery, and comprehensive analytics for delivery performance monitoring.",
    category: "Web App",
    tags: ["Laravel", "JavaScript", "MySQL", "Google Maps API", "Firebase", "Pusher"],
    images: ["/projects/project-8.jpeg"],
    liveUrl: "https://kingriders.net/",
    featured: true,
    year: "2024",
    client: "King Riders",
    highlights: [
      "Real-time order tracking with Google Maps",
      "Route optimization for drivers",
      "Automated customer SMS & push notifications",
      "Proof of delivery with photo upload",
      "Delivery performance analytics dashboard",
    ],
  },
  {
    id: "geo-b2b",
    title: "Geo B2B Platform",
    tagline: "Geolocation-based B2B e-commerce & supplier network",
    description:
      "A B2B e-commerce platform with geolocation-based services. Enables businesses to connect with local suppliers, manage inventory, and track deliveries in real-time. Features include bulk ordering, automated invoicing, and a supplier rating system.",
    category: "Web App",
    tags: ["Laravel", "JavaScript", "MySQL", "Google Maps API", "REST API"],
    images: ["/projects/project-9.jpeg"],
    liveUrl: "https://geotravels.pk/",
    featured: true,
    year: "2024",
    client: "Geo",
    highlights: [
      "Geolocation-based supplier discovery",
      "Bulk ordering & inventory management",
      "Real-time delivery tracking",
      "Automated invoicing & billing",
      "Supplier rating & review system",
    ],
  },
  {
    id: "tyga-smart",
    title: "TygaSmart Dashboard",
    tagline: "Smart home IoT management & energy analytics",
    description:
      "A comprehensive smart home management dashboard built for Tyga Smart. Features real-time device monitoring, energy consumption analytics, and automated scheduling. The system enables users to control IoT devices, view usage statistics, and optimize energy efficiency across their property.",
    category: "Dashboard",
    tags: ["Laravel", "Vue.js", "MySQL", "REST API", "Chart.js", "Tailwind CSS"],
    images: ["/projects/project-10.jpeg"],
    liveUrl: "https://tyga.projectpreview.xyz/login",
    featured: true,
    year: "2025",
    client: "TygaSmart",
    highlights: [
      "Real-time IoT device monitoring & control",
      "Energy consumption analytics with Chart.js",
      "Automated device scheduling & triggers",
      "Multi-property management support",
      "Usage reports & efficiency recommendations",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
