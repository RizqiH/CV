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
    "Experimental researcher, statistical modeler, and programmer with a PhD in Applied Linguistics.",
  summary:
    "Saya Muh. Rizqi Amanan Habibullah, seorang mahasiswa Universitas Pembangunan Nasional Veteran Jawa Timur jurusan Informatika. Seseorang yang menyukai kegiatan yang berhubungan dengan menulis dan dapat dikembangkan menjadi karya yang bermanfaat seperti copywriting. Selain itu, di sekolah saya fokus belajar tentang UI/UX Design dan Web Development.",
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
        url: "",
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
      link: "https://feathersa.com/",
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
    "Experimental design",
    "Statistics",
    "R",
    "Python",
    "TypeScript",
    "React/Next.js",
    "SQL/Firebase",
  ],

  projects: [
    {
      title: "Village Website",
      techStack: ["NextJS", "ExpressJS", "Firebase"],
      description: "Sebuah Web Profile Desa",
      logo: MonitoLogo,
      link: {
        label: "Village Website",
        href: "https://arusbawahcreator.vercel.app",
      },
    },
  ],
} as const;
