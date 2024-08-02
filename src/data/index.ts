import type {
  EducationItem,
  NavigationItem,
  SkillItem,
  SocialMediaItem,
} from "@/types";

export const Brand: string = "Abel N. Nieva";

export const Navigation: NavigationItem[] = [
  {
    text: "Home",
    label: "home",
    href: "/",
  },
  {
    text: "Notes",
    label: "notes",
    href: "/notes",
  },
  {
    text: "Projects",
    label: "projects",
    href: "/projects",
  },
  {
    text: "Resume",
    label: "resume",
    href: "/resume",
  },
  {
    text: "About",
    label: "about",
    href: "/about",
  },
];

export const About = {
  title: "Hi, I’m Abel N. Nieva",
  description:
    "I solve real-world problems by crafting simple, elegant, and impactful frontend solutions. If you want to reach out, ",
  link: {
    text: "send me an email.",
    href: "mailto:abelnnieva@gmail.com",
  },
};

export const SocialMedia: SocialMediaItem[] = [
  {
    text: "X",
    href: "https://x.com/abelnnieva",
    icon: "brand-x",
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/abelnnieva",
    icon: "brand-instagram",
  },
  {
    text: "GitHub",
    href: "https://github.com/abelnnieva",
    icon: "brand-github",
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/abelnnieva",
    icon: "brand-linkedin",
  },
];

export const Education: EducationItem[] = [
  {
    school: "Universidad Politécnica de Madrid ",
    degree: "Bachelor’s Degree in Software Engineering",
    startDate: new Date("2008-09-01"),
    endDate: new Date("2013-06-30"),
  },
  {
    school: "Escuela Superior Luther King",
    degree: "Higher Certificate in Science in Computer Systems Administration",
    startDate: new Date("2006-09-01"),
    endDate: new Date("2008-06-30"),
  },
  {
    school: "Escuela de Educación Técnica Juana Azurduy",
    degree: "High School Diploma in Sciences",
    startDate: new Date("2002-03-01"),
    endDate: new Date("2004-12-31"),
  },
];

export const Skills: SkillItem[] = [
  {
    name: "Soft Skills",
    relatedSkills: [
      "Leadership",
      "Communication",
      "Teamwork",
      "Problem-Solving",
      "Continuous Learning",
    ],
  },
  {
    name: "Languages",
    relatedSkills: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Sass",
      "PHP",
      "Python",
    ],
  },
  {
    name: "Frameworks & Libraries",
    relatedSkills: [
      "Angular",
      "Vue.js",
      "Nuxt.js",
      "NestJS",
      "Astro",
      "jQuery",
      "RxJS",
      "Tailwind CSS",
    ],
  },
  {
    name: "CMS & Databases",
    relatedSkills: ["Strapi", "WordPress", "PostgreSQL", "MySQL", "MongoDB"],
  },
];
