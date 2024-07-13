const date = new Date();

import type { NavigationItem } from "../types";

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
