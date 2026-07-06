// Global constants and data structure for Zentravo Labs website

export const SITE_METADATA = {
  title: "Zentravo Labs | Premium Software Engineering & AI Solutions",
  description: "Engineering high-performance digital products, custom web apps, cloud infrastructure, and intelligent AI models.",
  url: "https://zentravolabs.com",
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Technologies", href: "/#technologies" },
  { label: "Contact", href: "/#contact" },
];

export const CLIENT_LOGOS = [
  { name: "Forbes", width: 110, height: 32 },
  { name: "TechCrunch", width: 130, height: 32 },
  { name: "Wired", width: 90, height: 32 },
  { name: "Bloomberg", width: 120, height: 32 },
  { name: "Fast Company", width: 140, height: 32 },
];

export const CAPABILITIES = [
  {
    id: "software",
    title: "Custom Software Development",
    description: "Building production-grade web applications, robust backends, and high-performance APIs custom-tailored to solve your specific business challenges.",
    features: ["Next.js & React Applications", "Scalable Microservices", "Robust GraphQL & REST APIs", "Secure Payment Integrations"],
    iconName: "Code2",
    glowColor: "rgba(6, 182, 212, 0.15)", // Cyan
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Forging native and cross-platform mobile solutions with fluid animations, offline support, and top-tier user experiences.",
    features: ["React Native & Flutter Apps", "iOS & Android Deployments", "Offline-First Synchronization", "Real-time Push Notifications"],
    iconName: "Smartphone",
    glowColor: "rgba(99, 102, 241, 0.15)", // Indigo
  },
  {
    id: "cloud",
    title: "Cloud Solutions & DevOps",
    description: "Designing secure, auto-scaling cloud architectures with optimized deployment pipelines, containerization, and active server management.",
    features: ["Terraform Infrastructure as Code", "Docker & Kubernetes Clusters", "AWS & GCP Setup & Migration", "CI/CD & Zero-Downtime Releases"],
    iconName: "CloudLightning",
    glowColor: "rgba(168, 85, 247, 0.15)", // Purple
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning Integration",
    description: "Integrating intelligent vector searches, LLM agents, predictive models, and prompt workflows to automate complex enterprise tasks.",
    features: ["LLM Agents & Prompt Engineering", "Vector Search & Retrieval (RAG)", "Natural Language Processing", "Predictive Analytics & Forecasters"],
    iconName: "BrainCircuit",
    glowColor: "rgba(236, 72, 153, 0.15)", // Pink
  },
  {
    id: "consulting",
    title: "IT Consulting & System Architecture",
    description: "Providing senior technical strategy, performance audits, database modeling, and high-level architectural designs to guide your product journey.",
    features: ["Database Schema Modeling", "High-Level Architecture Diagrams", "Scalability & Security Audits", "Technology Stack Modernization"],
    iconName: "Layers",
    glowColor: "rgba(20, 184, 166, 0.15)", // Teal
  },
];

export const FORGE_STEPS = [
  {
    number: "01",
    title: "Requirements & Planning",
    description: "We define precise technical criteria, gather requirements, map business objectives, and finalize a granular product backlog.",
    tag: "PLANNING",
    iconName: "Search",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description: "Our engineers architect database schemas, API contracts, and cloud topologies, while designers craft high-fidelity interactive prototypes.",
    tag: "DESIGN",
    iconName: "Layers",
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "We write clean, production-grade code in agile sprints with continuous unit testing, integration testing, and staging deployments.",
    tag: "ENGINEERING",
    iconName: "Code2",
  },
  {
    number: "04",
    title: "Deployment & Operations",
    description: "We execute zero-downtime production rollouts, run automated security audits, establish cloud monitoring, and scale systems globally.",
    tag: "OPERATIONS",
    iconName: "Rocket",
  },
];

export const PORTFOLIO_PRODUCTS = [
  {
    title: "Aegis Cloud",
    subtitle: "Enterprise Security Platform",
    description: "A secure dashboard monitoring multi-cloud infrastructure threats in real-time, built with Next.js, Tailwind, and WebSockets.",
    tech: ["Next.js", "WebSockets", "Terraform", "Go"],
    metric: "12M+ Threats Blocked/Day",
    image: "/images/portfolio_aegis.jpg",
    link: "#",
  },
  {
    title: "NeuralPulse AI",
    subtitle: "Generative Customer Agent",
    description: "Custom RAG application processing company knowledge files to resolve client queries autonomously with 94% accuracy.",
    tech: ["Python", "OpenAI API", "VectorDB", "React"],
    metric: "94% Autonomous Resolution",
    image: "/images/portfolio_neural.jpg",
    link: "#",
  },
  {
    title: "WaveFlow SDK",
    subtitle: "High-Performance Media Engine",
    description: "An open-source library optimized for streaming compressed video feeds over unstable mobile networks with minimal latency.",
    tech: ["TypeScript", "Rust", "WebRTC", "WASM"],
    metric: "40% Bandwidth Savings",
    image: "/images/portfolio_waveflow.jpg",
    link: "#",
  },
];

export const PRICING_PLANS = [
  {
    name: "Standard Sprint",
    price: "$4,500",
    period: "per 2-week sprint",
    description: "Best for building MVPs, initial feature launches, or product design prototypes.",
    features: [
      "1 Dedicated Senior Developer",
      "1 UI/UX Designer (Part-time)",
      "Daily Slack updates & Staging builds",
      "1 Bi-weekly planning & demo call",
      "Full source code ownership",
    ],
    cta: "Start Scaling",
    popular: false,
  },
  {
    name: "Dedicated Team",
    price: "$9,500",
    period: "per 2-week sprint",
    description: "Best for growing products that require full-stack velocity, complex integrations, or DevOps.",
    features: [
      "2 Dedicated Senior Developers",
      "1 UI/UX Designer & Product Manager",
      "Continuous deployment support",
      "Priority SLA response times",
      "Weekly strategic planning sessions",
      "Custom analytics and integrations",
    ],
    cta: "Hire Dedicated Team",
    popular: true,
  },
  {
    name: "Enterprise Labs",
    price: "Custom",
    period: "consulting agreement",
    description: "Best for large-scale migrations, custom AI model training, or high-security architectures.",
    features: [
      "Full Elastic Engineering Squad",
      "Custom SLA & Dedicated Solutions Architect",
      "Security auditing & Penetration testing",
      "On-prem or private cloud deployments",
      "24/7 Critical incident monitoring",
    ],
    cta: "Contact Architect",
    popular: false,
  },
];

export const FAQS = [
  {
    question: "What core technologies do you build with?",
    answer: "We build with modern frameworks like React, Next.js, Angular, and Vue.js for frontends. For backends, we use Node.js, Python, Java, .NET, PHP, and Laravel. All hosting is configured on AWS, Azure, Google Cloud, or Vercel, using Docker for containerized pipelines and Jest/Selenium for testing.",
  },
  {
    question: "How do you manage requirements and project progress?",
    answer: "We run on agile sprint cycles (typically 2-week iterations) with regular planning and review calls. We use Slack and email for day-to-day coordination, and you will have constant access to a staging environment showing active builds.",
  },
  {
    question: "Can we start with a minimal viable product (MVP)?",
    answer: "Yes, we specialize in modular design that lets you launch a functional MVP quickly (often within 4 to 8 weeks) to collect real market telemetry, scaling it up dynamically as your user base grows.",
  },
  {
    question: "Who owns the source code and intellectual property (IP)?",
    answer: "You do, 100%. Upon payment of sprint milestones, all repository access, source files, deployment configurations, and design tokens are fully transferred to your company's ownership.",
  },
  {
    question: "What support do you offer after application launch?",
    answer: "We offer customized post-launch maintenance SLA packages including security audits, dependency updates, active cloud infrastructure scaling, database maintenance, and ongoing feature developments.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Zentravo Labs transformed our complex analytics dashboards into a stunning, fast application that helped us close our Series A funding. Their technical execution is flawless.",
    author: "Jessica R.",
    role: "VP of Product, Finlytic",
    rating: 5,
  },
  {
    quote: "The NeuralPulse agent Zentravo Labs built for us handles over 10,000 queries a week without breaking a sweat. It feels like magic, and saved us thousands in support costs.",
    author: "Marcus T.",
    role: "Founder, SupportSphere",
    rating: 5,
  },
  {
    quote: "Highly professional, communicative, and skilled. They took our custom Rust/WASM video engine project and finished it ahead of schedule. Best development team we've ever hired.",
    author: "Sophia L.",
    role: "CTO, WaveStream Media",
    rating: 5,
  },
];
