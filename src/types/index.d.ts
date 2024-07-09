// src/types/index.d.ts

export interface NavBarItem {
  text: string;
  label: string;
  href: string;
}

export interface Footer {
  copyright: string;
  navBarItems: NavBarItem[];
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
