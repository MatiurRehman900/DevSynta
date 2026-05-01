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
    tags: ["Web App", "Next Js", "Node.js", "Stripe", "PostgreSQL"],
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
    tags: ["Web App", "Next.js", "TypeScript", "REST API", "Tailwind CSS"],
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
    tags: ["SaaS", "React", "Node.js", "PostgreSQL", "WebSocket"],
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
    tags: ["Dashboard", "Next js", "Firebase", "Google Maps API", "Chart.js"],
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
    category: "Mobile App",
    tags: ["Web App", "Next Js", "Firebase", "Stripe", "Google Maps"],
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
];

export const featuredProjects = projects.filter((p) => p.featured);
