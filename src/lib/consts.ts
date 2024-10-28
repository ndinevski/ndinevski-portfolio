import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiAmazonwebservices,
  SiGnubash,
  SiPython,
  SiDjango,
  SiCsharp,
  SiUnity,
  SiAdobephotoshop,
  SiDiscord,
  SiArduino,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { DiAptana } from "react-icons/di";
import { CiFlag1 } from "react-icons/ci";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { RiRobot3Line } from "react-icons/ri";

import {
  AchievementsEntry,
  EducationEntry,
  ExperienceEntry,
  ProjectsEntry,
} from "./types";

export const navigationTabs = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export const navigationTabsMobile = [
  { name: "Home", path: "/" },
  ...navigationTabs,
];

export const achievements: AchievementsEntry[] = [
  {
    name: "AWS Certifed Cloud Practicioner ( CLF-C02 )",
    period: "September, 2024",
  },
  {
    name: "Gold Medal at Global Game Jam",
    period: "January, 2020",
  },
  {
    name: "National and Olympiad Competitions",
    period: "September, 2011 - June, 2019",
    description: "1st, 2nd and 3rd medals in Mathematics and Physics",
  },
  {
    name: "67th place at TJCTF",
    period: "May, 2021",
    description: "Worldwide Cyber Security competition",
  },
];

export const educations: EducationEntry[] = [
  {
    degree: "Master of Science in Cloud Computing",
    school: "Faculty of Computer Science and Engineering, Skopje",
    period: "October, 2024 - Present",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Faculty of Computer Science and Engineering, Skopje",
    period: "October, 2021 - June, 2024",
    description: "9.67/10.0 GPA",
  },
  {
    degree: "High School Diploma",
    school: "Gymnasium Josip Broz Tito, Bitola",
    period: "October, 2021 - June, 2024",
    description: "5.0/5.0 GPA",
  },
];

export const experiences: ExperienceEntry[] = [
  {
    company: "CodeChem Inc",
    role: "Full-Stack Software Engineer",
    period: "August, 2022 - Present",
    description:
      "Mainly working with NodeJS, React, AWS. Also DevOps, server confgurations, CI/CD pipelines.",
  },
  {
    company: "Freelance",
    role: "Full-Stack Software Engineer",
    period: "June, 2021 - February, 2022",
    description:
      "Development of Python packages. And fullstack developement of mostly RESTfull APIs using Django and React.",
  },
  {
    company: "Veeva Systems",
    role: "Data Curator",
    period: "May, 2021 - September, 2021",
    description: "Freelance Contractor working with data.",
  },
  {
    company: "GoGreen",
    role: "Volunteer",
    period: "August, 2019 - April, 2021",
    description:
      "Took part in a lot of projects and seminars. Organised and managed projects.",
  },
];

export const profileCardWords = ["build", "break", "rebuild"];

export const technologies = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "AWS", icon: SiAmazonwebservices },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "DevOps", icon: DiAptana },
  { name: "Bash", icon: SiGnubash },
];

export const dabbleTechnologies = [
  { name: "ML & AI", icon: RiRobot3Line },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "C#", icon: SiCsharp },
  { name: "Unity", icon: SiUnity },
  { name: "UXP Extensions", icon: SiAdobephotoshop },
  { name: "Discord Bot", icon: SiDiscord },
  { name: "CTFs", icon: CiFlag1 },
  { name: "Arduino", icon: SiArduino },
  { name: "Trying out Frameworks", icon: HiOutlineDotsCircleHorizontal },
];

export const projects: ProjectsEntry[] = [
  {
    backgroundImage: "adsManagerThumbnail.png",
    title: "ADS Manager",
    technologies: ["Python", "AWS"],
    description:
      "Python SDK for unified management of ADS resources on TikTok and Facebook.",
    linkToProject: "https://github.com/ndinevski/ads-manager",
  },
  {
    backgroundImage: "asRtsldThumbnail.png",
    title: "AS_RTSLD",
    technologies: ["Python", "Tensorflow"],
    description:
      'Real Time Sign Language Detection app in honour of 60 years after Aco Shopov\'s song "Pet i Sedumnaeset", that was written for the tragic earthquake in Skopje in 1963.',
    linkToProject: "https://github.com/ndinevski/AS_RTSLD",
  },
  {
    backgroundImage: "healthExpenditureThumbnail.png",
    title: "Health-Expenditures-Economic-And-Health-Outcomes",
    technologies: ["Python", "Jupyter Notebook"],
    description:
      "This project explores the relationship between public health expenditures, health outcomes, and economic performance using data from the WHO Global Health Observatory, IMF, and World Bank.",
    linkToProject:
      "https://github.com/ndinevski/Health-Expenditures-Economic-And-Health-Outcomes",
  },
  {
    backgroundImage: "bloodlineThumbnail.png",
    title: "Bloodline",
    technologies: ["C#", "Unity"],
    description: "3D Strategy game with medieval style.",
    linkToProject: "https://github.com/ndinevski/Bloodline",
  },
  {
    backgroundImage: "foodAppThumbnail.png",
    title: "GitOps-Food-App",
    technologies: [
      "TypeScript",
      "React",
      "Express.js",
      "Kubernetes",
      "AWS",
      "Jenkins",
      "Argo-CD",
    ],
    description:
      "This project represents a comprehensive end-to-end DevOps process for a food order application.",
    linkToProject: "https://github.com/ndinevski/Food-Order-App",
  },
  {
    backgroundImage: "weatherStationThumbnail.png",
    title: "Bluetooth-Based-Weather-Station",
    technologies: ["C++", "Arduino"],
    description:
      "Bluetooth weather station, measuring temperature and humidity with real-time remote data display.",
    linkToProject:
      "https://github.com/ndinevski/Bluetooth-Based-Weather-Station",
  },
  {
    backgroundImage: "ndMoleThumbnail.png",
    title: "nd-mole",
    technologies: ["Shell", "AWS"],
    description:
      "Tool that sets up a proxy for your local apps with a public IP address of an EC2 instance.",
    linkToProject: "https://github.com/ndinevski/nd-mole",
  },
  {
    backgroundImage: "portfolioThumbnail.png",
    title: "Portfolio Page",
    technologies: ["TypeScript", "Next.js", "React"],
    description: "My personal portfolio page.",
    linkToProject: "https://github.com/ndinevski/ndinevski-portfolio",
  },
  {
    backgroundImage: "ytRestThumbnail.png",
    title: "Custom_YT_REST_API",
    technologies: ["Python", "Django", "JavaScript", "React"],
    description:
      "Full stack Django + React web application with custom RESTfull API for extracting and storing YouTube analytics data.",
    linkToProject: "https://github.com/ndinevski/Custom_YT_REST_API",
  },
  {
    backgroundImage: "wordWarsThumbnail.png",
    title: "Word Wars",
    technologies: ["Rust", "Yew", "Rocket"],
    description:
      "A work in-progress exciting and strategic word-based game that brings friends together for an engaging battle of wits!",
    linkToProject: "https://github.com/ndinevski/word-wars",
  },
  {
    backgroundImage: "gptThumbnail.png",
    title: "Discord GPT Bot",
    technologies: ["JavaScript", "Discord Bot", "GPT"],
    description:
      "A Discord bot, using the GPT Api, allowing you to chat in your Discord channel.",
    linkToProject: "https://github.com/ndinevski/Discord-GPT-API",
  },
  {
    backgroundImage: "marioThumbnail.png",
    title: "Super Mario the Plumber",
    technologies: ["Python", "Ren'Py", "Cython"],
    description:
      "A visual novel with a funny twist on a popular game. What if Mario was actually a plubmer?",
    linkToProject: "https://github.com/ndinevski/supermariotheplumber",
  },
];
