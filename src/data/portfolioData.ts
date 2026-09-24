import { ProjectItem, ExperienceItem, SkillItem, MediaShowcaseItem } from '../types/portfolio';

export const personalInfo = {
  name: "Danindra Irvanto",
  nickname: "Danindra",
  headline: "Hi, I'm",
  roles: [
    "Full-Stack Developer",
    "Broadcast & Media Talent"
  ],
  aboutShort: "Halo! Saya adalah seorang Fullstack Web Developer yang memadukan keahlian teknis logika pemrograman modern dengan kepekaan visual, public speaking, serta pengalaman nyata di dunia broadcast dan talent video promosi.",
  aboutDetail: "Bagi saya, teknologi dan media kreatif adalah dua hal yang saling melengkapi. Dengan latar belakang pengembangan aplikasi web (Laravel, React.js, Next.js, Node.js, Express.js, PostgreSQL, MySQL) serta pengalaman di stasiun broadcast dan talent di depan kamera, saya mampu mengomunikasikan ide-ide kompleks menjadi produk digital yang intuitif, estetik, dan berdaya guna.",
  stats: [
    { label: "Dual Expertise", value: "IT & Media" },
    { label: "GPA", value: "3.48 / 4.00" },
    { label: "Core Stack", value: "Laravel & React" },
    { label: "Databases", value: "PostgreSQL & MySQL" },
  ],
  personalDetails: [
    { label: "Name", value: "Danindra Irvanto" },
    { label: "Place of Birth", value: "Tangerang, Indonesia" },
    { label: "Phone", value: "+62 813 8468 2074", isLink: true, link: "https://wa.me/6281384682074" },
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
    period: "Mei 2026 – Sept 2026",
    role: "Full-Stack Developer Intern",
    company: "PT DumbWays Indonesia",
    location: "Ciputat, South Tangerang, Indonesia",
    description: "Developed and enhanced web applications and core features with a focus on reliability, cross-functional collaboration, and performance.",
    highlights: [
      "Developed and enhanced features for a web-based booking application using Laravel.",
      "Translated business requirements into functional application features and improvements.",
      "Collaborated with cross-functional teams to test, maintain, and optimize system performance.",
      "Resolved bugs and technical issues to improve application reliability and user experience."
    ],
    skills: ["Laravel", "PHP", "Full-Stack", "JavaScript", "System Testing", "REST APIs"],
    category: "it"
  },
  {
    id: "exp-2",
    period: "Jun 2023 – Dec 2023",
    role: "Broadcast Engineer Intern",
    company: "LPP TVRI STASIUN JAKARTA",
    location: "Gelora, Tanah Abang, Jakarta, Indonesia",
    description: "Supported broadcast studio operations, technical maintenance, floor planning, and internal system development.",
    highlights: [
      "Conducted routine inspections and maintenance of broadcast equipment every two weeks.",
      "Created floor diagrams for studio and outdoor production setups.",
      "Ensured smooth and uninterrupted broadcasting operations.",
      "Developed a production equipment loan management system for external office assignments."
    ],
    skills: ["Loan Management System", "Broadcast Operations", "Floor Diagrams", "Equipment Maintenance"],
    category: "broadcast"
  },
  {
    id: "exp-3",
    period: "Jun 2022 – May 2023",
    role: "Production Operator",
    company: "PT. Victory Chingluh Indonesia",
    location: "Pasar Kemis, Kab. Tangerang, Indonesia",
    description: "Operated computerized manufacturing machinery, pattern programming, embossing, and conducted self-quality inspections for Nike sportswear footwear.",
    highlights: [
      "Conducted ISQ (Inspect Self Quality) inspections in the Lasting & Assembly process to ensure lasted shoe uppers met established quality standards.",
      "Operated Hot & Cold Backpart Molding Machines for heel counter pre-forming according to quality standards and shoe last specifications.",
      "Operated Computerized Pattern Sewing Machines to perform precise and complex stitching of shoe upper components, including logos, eyestays, and reinforcements.",
      "Operated Hot/Cold Embossing Machines to create logos, 3D textures, and pattern details on synthetic leather, mesh, and leather materials."
    ],
    skills: ["Computerized Pattern Sewing", "Hot/Cold Embossing", "ISQ Inspection", "Molding Machines", "Nike Quality Standards"],
    category: "operations"
  }
];

export const skillsData: SkillItem[] = [
  // Programming Languages
  { name: "TypeScript", category: "frontend", highlight: "Type Safety" },
  { name: "JavaScript", category: "frontend", highlight: "ES6+ Modern Syntax" },
  { name: "PHP", category: "backend", highlight: "Server-side Language" },
  { name: "Java", category: "backend", highlight: "OOP & Architecture" },

  // Frontend Technologies
  { name: "React.js", category: "frontend", highlight: "Component UI" },
  { name: "Next.js", category: "frontend", highlight: "SSR & Fullstack" },
  { name: "Tailwind CSS", category: "frontend", highlight: "Utility-first Styling" },
  { name: "HTML5 / CSS3", category: "frontend", highlight: "Semantic & Responsive" },
  
  // Backend Technologies
  { name: "Laravel", category: "backend", highlight: "MVC Framework" },
  { name: "Node.js", category: "backend", highlight: "Runtime Environment" },
  { name: "Express.js", category: "backend", highlight: "RESTful APIs" },
  
  // Databases
  { name: "PostgreSQL", category: "database", highlight: "Relational DB" },
  { name: "MySQL", category: "database", highlight: "Relational DB" },
  { name: "Supabase", category: "database", highlight: "BaaS & Postgres" },
  
  // Tools & Platforms
  { name: "Git & GitHub", category: "tools", highlight: "Version Control" },
  { name: "VS Code", category: "tools", highlight: "Development IDE" },
  { name: "Midtrans", category: "tools", highlight: "Payment Gateway" },
  { name: "Canva", category: "tools", highlight: "Creative Design" },
  
  // Soft Skills & Broadcast
  { name: "On-Camera Talent", category: "broadcast_creative", highlight: "Video & Host Talent" },
  { name: "Public Speaking", category: "broadcast_creative", highlight: "Clear Communication" },
  { name: "Problem Solving", category: "broadcast_creative", highlight: "Analytical Thinking" },
  { name: "Team Work", category: "broadcast_creative", highlight: "Cross-functional Agility" }
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
