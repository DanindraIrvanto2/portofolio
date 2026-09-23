import { ProjectItem, ExperienceItem, SkillItem, MediaShowcaseItem } from '../types/portfolio';

export const personalInfo = {
  name: "Danindra Irvanto",
  nickname: "Danindra",
  headline: "Hi, I'm",
  roles: [
    "Fullstack Developer",
    "Broadcast & Media Talent"
  ],
  tagline: "Bridging modern software engineering with dynamic broadcast & creative storytelling.",
  aboutShort: "Halo! Saya adalah seorang Fullstack Web Developer yang memadukan keahlian teknis logika pemrograman modern dengan kepekaan visual, public speaking, serta pengalaman nyata di dunia broadcast dan talent video promosi.",
  aboutDetail: "Bagi saya, teknologi dan media kreatif adalah dua hal yang saling melengkapi. Dengan latar belakang pengembangan aplikasi web (Next.js, Node.js, Express, React, Database) serta pengalaman di stasiun broadcast dan talent di depan kamera, saya mampu mengomunikasikan ide-ide kompleks menjadi produk digital yang intuitif, estetik, dan berdaya guna.",
  stats: [
    { label: "Dual Expertise", value: "IT & Media" },
    { label: "Projects Completed", value: "12+" },
    { label: "Broadcast & Video Works", value: "8+ Productions" },
    { label: "Tech Core", value: "Next.js & Node.js" },
  ],
  personalDetails: [
    { label: "Name", value: "Danindra Irvanto" },
    { label: "Place of Birth", value: "Tangerang, Indonesia" },
    { label: "Phone", value: "+62 813-8468-2074", isLink: true, link: "https://wa.me/6281384682074" },
    { label: "Education", value: "Universitas Pamulang" },
    { label: "Email", value: "danindrairvanto07@gmail.com", isLink: true, link: "mailto:danindrairvanto07@gmail.com" },
    { label: "Status", value: "Open for Full-time" }
  ],
  socials: {
    github: "https://github.com/DanindraIrvanto2",
    linkedin: "https://www.linkedin.com/in/danindra-irvan",
    instagram: "https://www.instagram.com/danindrairvan/",
    email: "mailto:danindrairvanto07@gmail.com",
    whatsapp: "https://wa.me/6281384682074"
  },
  cvUrl: "/Danindra_Irvanto_CV.pdf"
};

export const experiencesData: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "Mei 2026 - Sept 2026",
    role: "Full Stack Developer Intern",
    company: "PT DumbWays Indonesia Teknologi",
    location: "Ciputat, South Tangerang",
    description: "Developing and maintaining modern fullstack web applications using cutting-edge JavaScript ecosystem and relational databases.",
    highlights: [
      "Developed and maintained full-stack web applications using modern JavaScript technologies.",
      "Collaborated with mentors and team members to build responsive and scalable features.",
      "Improved problem-solving and practical skills in frontend, backend, and database development."
    ],
    skills: ["Full Stack", "JavaScript", "React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    category: "it"
  },
  {
    id: "exp-2",
    period: "Mei 2024 - Aug 2024",
    role: "Intern Broadcast Engineering",
    company: "LPP TVRI STASIUN JAKARTA",
    location: "Gelora, Tanah Abang, Jakarta Pusat",
    description: "Supported broadcast studio operations, technical maintenance, floor planning, and production management.",
    highlights: [
      "Conducted routine inspections and maintenance of broadcast equipment every two weeks.",
      "Created floor diagrams for studio and outdoor production setups.",
      "Ensured smooth and uninterrupted broadcasting operations.",
      "Developed a production equipment loan management system for external office assignments."
    ],
    skills: ["Broadcast Operations", "Studio Equipment", "Floor Diagrams", "Equipment Maintenance", "Management System"],
    category: "broadcast"
  },
  {
    id: "exp-3",
    period: "March 2022 - Nov 2025",
    role: "Production Operator",
    company: "PT. Victory Chingluh Indonesia",
    location: "Pasar Kemis, Kab. Tangerang, Banten",
    description: "PT Victory Chingluh Indonesia is a Taiwanese foreign investment manufacturing company specializing in the production of sports footwear. The company is one of the major manufacturing suppliers for Nike, a leading global sportswear brand.",
    highlights: [
      "Conducted ISQ (Inspect Self Quality) inspections in the Lasting & Assembly process to ensure lasted shoe uppers met established quality standards.",
      "Operated Hot & Cold Backpart Molding Machines for heel counter pre-forming according to quality standards and shoe last specifications.",
      "Operated Computerized Pattern Sewing Machines to perform precise and complex stitching of shoe upper components, including logos, eyestays, and reinforcements.",
      "Operated Hot/Cold Embossing Machines to create logos, 3D textures, and pattern details on synthetic leather, mesh, and leather materials."
    ],
    skills: ["ISQ Inspection", "Pattern Sewing Machines", "Hot/Cold Embossing", "Molding Machines", "Nike Quality Standards"],
    category: "it"
  }
];

export const skillsData: SkillItem[] = [
  // Frontend
  { name: "React.js", category: "frontend", highlight: "Component Architecture" },
  { name: "Next.js (App Router)", category: "frontend", highlight: "SSR / ISR / Fullstack" },
  { name: "TypeScript", category: "frontend", highlight: "Type Safety" },
  { name: "Tailwind CSS", category: "frontend", highlight: "Modern Styling" },
  { name: "HTML5 / CSS3", category: "frontend", highlight: "Semantic & Responsive" },
  { name: "Framer Motion", category: "frontend", highlight: "Fluid Animations" },
  
  // Backend
  { name: "Node.js", category: "backend", highlight: "Runtime Environment" },
  { name: "Express.js", category: "backend", highlight: "RESTful API Engine" },
  { name: "Next.js Server Actions", category: "backend", highlight: "Seamless Fullstack" },
  { name: "RESTful APIs", category: "backend", highlight: "Architecture & Security" },
  
  // Database & Tools
  { name: "PostgreSQL", category: "database", highlight: "Relational DB" },
  { name: "MySQL", category: "database", highlight: "Database Design" },
  { name: "Prisma ORM", category: "database", highlight: "Type-safe DB Queries" },
  { name: "Git & GitHub", category: "tools", highlight: "Version Control" },
  { name: "Postman", category: "tools", highlight: "API Testing" },
  { name: "Vercel / Linux", category: "tools", highlight: "Cloud Deployment" },
  
  // Broadcast & Creative
  { name: "On-Camera Talent", category: "broadcast_creative", highlight: "Host / Video Talent" },
  { name: "Broadcast Studio Ops", category: "broadcast_creative", highlight: "Technical Live Control" },
  { name: "Video Production & Direction", category: "broadcast_creative", highlight: "Storyboard to Final" },
  { name: "Video Editing", category: "broadcast_creative", highlight: "Premiere Pro & CapCut" },
  { name: "Public Speaking & Voice", category: "broadcast_creative", highlight: "Clear Communication" }
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Hair Dept. - Barbershop Customer Platform",
    category: "web",
    description: "Modern barbershop customer web application featuring interactive branch location maps, certified barber profiles, haircut service booking, and responsive UI.",
    longDescription: "Hair Dept. is a modern grooming and barbershop customer platform built with React 19 and Vite. Features integrated Leaflet interactive maps for branch discovery, booking flows, service pricing catalogs, and rapid styling powered by Tailwind CSS v4.",
    image: "/images/barbershop-customer.png",
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Leaflet Maps", "Axios"],
    liveUrl: "https://github.com/DanindraIrvanto2/barbershopCustomer",
    githubUrl: "https://github.com/DanindraIrvanto2/barbershopCustomer",
    featured: true
  },
  {
    id: "proj-2",
    title: "Monitoring Apps - Industrial Machine Telemetry",
    category: "fullstack",
    description: "Enterprise industrial machine repair & telemetry system with HMI authentication, maintenance logging, and automated PDF/Excel reports.",
    longDescription: "An industrial machine monitoring and maintenance web system built on modern Laravel 12 and Inertia.js with React. Engineered for manufacturing environments, providing operator access control, real-time machine telemetry, maintenance work order ticketing, and automated report generation with DomPDF and PhpSpreadsheet.",
    image: "/images/monitoring-mesin.png",
    techStack: ["Laravel 12", "Inertia.js", "React.js", "PHP 8.2", "Tailwind CSS", "DomPDF", "PhpSpreadsheet"],
    liveUrl: "https://github.com/DanindraIrvanto2/monitoringPerbaikanMesin",
    githubUrl: "https://github.com/DanindraIrvanto2/monitoringPerbaikanMesin",
    featured: true
  },
  {
    id: "proj-3",
    title: "Rider Sportswear & Underwear Campaign",
    category: "broadcast",
    description: "Featured as a commercial talent in a promotional video campaign for Rider Sportswear & Underwear, delivering on-camera performance to support digital brand marketing.",
    longDescription: "Featured as a commercial talent in a promotional video campaign for Rider Sportswear & Underwear, delivering on-camera performance to support digital brand marketing.",
    image: "/images/commercial-reel-polo.jpg",
    techStack: ["On-Camera Talent"],
    liveUrl: "https://www.instagram.com/reel/Dc20sFcRQmx/",
    videoUrl: "https://www.instagram.com/reel/Dc20sFcRQmx/",
    featured: true,
    roleDescription: "On-Camera Talent",
    additionalLinks: [
      { label: "Commercial Video", url: "https://www.instagram.com/reel/Dc20sFcRQmx/" },
      { label: "Product Testimonial Video", url: "https://www.instagram.com/reel/Dc_LvRWvGNa/" }
    ]
  }
];

export const mediaShowcaseData: MediaShowcaseItem[] = [
  {
    id: "media-1",
    title: "Rider Sportswear & Underwear Campaign",
    type: "promo",
    role: "On-Camera Talent",
    year: "2024",
    thumbnail: "/images/commercial-reel-polo.jpg",
    description: "Featured as a commercial talent in a promotional video campaign for Rider Sportswear & Underwear, delivering on-camera performance to support digital brand marketing.",
    clientOrOrg: "Rider Sportswear & Underwear"
  }
];
