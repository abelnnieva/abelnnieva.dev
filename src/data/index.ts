const date = new Date();

import type { NavigationItem, SocialMediaItem } from "../types";

export const Brand: string = "Abel N. Nieva";

export const Copyright: string = `&copy; ${date.getFullYear()} Abel N. Nieva. All rights reserved.`;

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
    text: "Work Experience",
    label: "work-experience",
    href: "/work-experience",
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
