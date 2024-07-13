// src/types/index.d.ts

export interface NavigationItem {
  text: string;
  label: string;
  href: string;
}

export interface Project {
  logo: Image;
  heading: string;
  text: string;
  techStack: TechStackItem[];
  livePreview: {
    isActive: boolean;
    link: {
      href: string;
      text: string;
    };
  };
}
