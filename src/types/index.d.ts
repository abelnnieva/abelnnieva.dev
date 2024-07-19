// src/types/index.d.ts

export interface Link {
  text: string;
  href: string;
}

export interface NavigationItem extends Link {
  label: string;
}

export interface Image {
  png?: {
    light: string;
    dark?: string;
  };
  svg?: {
    light: {
      fill?: string;
      viewBox: string;
      graphic: string;
    };
    dark?: {
      fill?: string;
      viewBox: string;
      graphic: string;
    };
  };
}

export interface Logo {
  name: string;
  image: Image;
}

export interface SocialMediaItem extends Link {
  icon: "brand-x" | "brand-instagram" | "brand-github" | "brand-linkedin";
}
