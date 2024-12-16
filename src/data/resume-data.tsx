import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import {
  AcademiconsResearchgate,
  AcademiconsGoogleScholar,
  SimpleIconsOrcid,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Muhammad Rizqi Amanan Habibullah",
  initials: "RZ",
  location: "Surabaya, Jawa Timur",
  locationLink: "https://www.google.com/maps/place/Riyadh",
  about:
    "experienced in Web Developer and Software Engineering.",
  summary:
    "I am Muh. Rizqi Amanan Habibullah, a student of Universitas Pembangunan Nasional Veteran East Java majoring in Informatics. Someone who likes activities related to writing and can be developed into useful works such as copywriting. In addition, at school I focus on learning about UI/UX Design and Web Development.",
  avatarUrl: "https://i.imgur.com/5rH5fNx.jpeg",
  personalWebsiteUrl: "",
  contact: {
    email: "rizkiamanan@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RizqiH",
        icon: GitHubIcon,
      },

      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rizki-amanan/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "SMK Telkom Malang",
      degree: "Software Enginner",
      start: "2020",
      end: "2023",
    },
    {
      school: "UPN Veteran Jawa Timur",
      degree: "Informatics",
      start: "2023",
      end: "Present",
    },
  ],
  work: [
    {
      company: "MARK DESIGN",
      link: "https://markdesign.net/",
      badges: ["Internship"],
      logo: ConsultlyLogo,
      start: "26 Juli 2022",
      end: "30 Desember 2022",
      description:
        "Providing digital marketing analytics, analyzing data from over 30 companies across multiple social platforms.",
    },
  ],
  skills: [
    "Critical thinking",
    "Problem solving",
    "Javascript",
    "Laravel",
    "PHP",
    "VueJS",
    "NodeJS",
    "ExpressJS",
    "TypeScript",
    "React/Next.js",
    "SQL/Firebase",
  ],

  projects: [
    {
      title: "Village Website",
      techStack: ["NextJS", "ExpressJS", "Firebase"],
      description: "A Village Web Profile",
      logo: MonitoLogo,
      link: {
        label: "Village Website",
        href: "https://arusbawahcreator.vercel.app",
      },
    },
  ],
} as const;
