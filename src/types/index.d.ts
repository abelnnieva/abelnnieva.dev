// src/types/index.d.ts

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
