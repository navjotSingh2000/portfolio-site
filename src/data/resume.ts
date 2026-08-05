export const profile = {
  name: "Navjot Singh",
  role: "Software Developer",
  company: "Cryopak",
  location: "Montréal, Canada",
  coordinates: "45.50° N, 73.57° W",
  email: "abcnavjot2000@gmail.com",
  github: "https://github.com/navjotSingh2000?tab=repositories",
  linkedin: "https://www.linkedin.com/in/navjotsingh5",
  resumeUrl: `/Navjot_Singh_Resume.pdf?v=${__RESUME_VERSION__}`,
  tagline:
    "I design and develop software across web, desktop, and connected systems, turning complex requirements into reliable, scalable solutions.",
} as const;

export const about = {
  statement: "Software for regulated industries.",
  paragraphs: [
    "Software developer based in Montréal with 5+ years of experience delivering full-stack applications, integrations, and business-critical systems. Experienced with C#/.NET, Java, React, TypeScript, Node.js, and PHP, with a focus on scalable architecture, reliable APIs, and long-term maintainability.",
  ],
};

export const highlights = [
  { title: "5+ years", detail: "Professional experience" },
  { title: "Full-stack", detail: "Web, desktop & IoT systems" },
  { title: "Compliance", detail: "Health Canada & FDA aligned" },
] as const;

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Cryopak Industries Inc.",
    role: "Software Developer",
    period: "Jun 2021 - Present",
    location: "Montréal, QC",
    bullets: [
      "Designed and developed applications that streamlined and modernized manufacturing workflows across the company.",
      "Migrated legacy applications to modern stacks, enhancing security, maintainability, and performance.",
      "Collaborated with Quality teams to create and maintain technical documentation aligned with Health Canada and FDA compliance requirements.",
      "Built and supported software behind LTE-enabled data loggers used by major pharmaceutical customers.",
    ],
  },
];

export interface Project {
  title: string;
  context: string;
  description: string;
  bullets?: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Factory Acceptance Test Application",
    context: "Cryopak",
    description:
      "Internal FAT application that streamlines and modernizes manufacturing workflows, replacing manual processes.",
    tags: ["Internal Tooling", "Manufacturing", "Desktop & Web"],
  },
  {
    title: "SIM-Card Lifecycle Management System",
    context: "Cryopak",
    description:
      "End-to-end SIM lifecycle workflows across multiple vendors for LTE-enabled data loggers.",
    tags: ["IoT", "Workflow Automation", "Multi-Vendor"],
  },
  {
    title: "LTE Data Logger Tracking Platform",
    context: "Cryopak",
    description:
      "Tracking web app managing 100,000+ active LTE data loggers for major pharmaceutical customers.",
    tags: ["Web Platform", "IoT Fleet", "Pharmaceutical"],
  },
  {
    title: "Real-Time Collaboration & Document Management System",
    context: "Personal",
    description:
      "Document platform with real-time collaboration, secure file storage, and role-based access control.",
    tags: [
      "C#",
      "ASP.NET Core",
      "React",
      "TypeScript",
      "SignalR",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS S3",
    ],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["C#", ".NET", "Java", "React", "TypeScript", "Node.js", "PHP"],
  },
  {
    label: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "SQLite",
      "Firebase",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "GitHub Actions",
      "Git",
      "Nginx",
    ],
  },
  {
    label: "AI",
    items: ["Claude", "OpenAI", "GitHub Copilot", "RAG", "Prompt Engineering"],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    name: "French Proficiency TEFAQ Intermediate+ (B2)",
    issuer: "CCI Paris Île-de-France",
    date: "July 2024",
  },
  {
    name: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    date: "Sep 2023",
    url: "https://www.credly.com/badges/3d93bd15-a82d-4ae9-9d80-a800a8865a4b/linked_in_profile",
  },
  {
    name: "French Proficiency TEF Canada Beginner+ (B1)",
    issuer: "CCI Paris Île-de-France",
    date: "June 2023",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Feb 2023",
    url: "https://www.credly.com/badges/b884830c-8794-432a-a8d0-c05208fb93a0/linked_in_profile",
  },
];

export const education = {
  school: "LaSalle College, Montréal",
  credential: "AEC in Information Technology - Programmer Analyst",
  period: "2020 - 2021",
  description:
    "Comprehensive coursework in software development, database design, database management, web and mobile application development, object-oriented programming, systems analysis, networking, software architecture, and information systems implementation, complemented by hands-on development projects and industry best practices.",
};
