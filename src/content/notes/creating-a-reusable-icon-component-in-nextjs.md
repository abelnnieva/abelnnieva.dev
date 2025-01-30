---
isDraft: false
publishDate: 2024-10-02
title: Creating a Reusable Icon Component in Next.js
description: Learn how to create a reusable icon component in Next.js using TypeScript for better type safety and maintainability.
topic: react
---

In my latest Next.js project, I needed a flexible and scalable way to handle SVG icons throughout the application. Instead of relying on external libraries, I created a reusable `Icon` component that dynamically renders SVGs based on a predefined set of icons. This approach keeps our project lightweight and improves performance.

## Implementation Details

The solution consists of two parts:

1. **An `Icon` component** that renders SVGs dynamically.
2. **An `icons.ts` module** that serves as an icon library.

### 1. The `Icon` Component

The `Icon` component takes four props: `name`, `width`, `height`, and `className`. It fetches the appropriate SVG data from the `icons.ts` module and renders it using `dangerouslySetInnerHTML`.

```tsx
import { getIcon, IconName } from "@/lib/icons.ts";

type IconProps = {
  name: IconName;
  width?: string;
  height?: string;
  className?: string;
};

export const Icon = ({ name, width, height, className }: IconProps) => {
  const icon = getIcon(name);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icon.viewBox}
      fill={icon.fill}
      width={width}
      height={height}
      dangerouslySetInnerHTML={{ __html: icon.graphic }}
      className={className}
    ></svg>
  );
};
```

### 2. The `icons.ts` Module

This module defines a collection of SVG icons, each represented by an object containing its `viewBox`, `fill`, and `graphic` (SVG path data).

```tsx
interface Icon {
  fill: string | undefined;
  viewBox: string;
  graphic: string;
}

const icons = {
  menu: {
    fill: "none",
    viewBox: "0 0 48 48",
    graphic: `<g><path fill="#F0E9D9" d="M6 36h36v-4H6v4Zm0-10h36v-4H6v4Zm0-14v4h36v-4H6Z"/></g>`,
  },
  close: {
    fill: "none",
    viewBox: "0 0 25 25",
    graphic: `<path fill="#B52F55" d="M25 2.518 22.482 0 12.5 9.982 2.518 0 0 2.518 9.982 12.5 0 22.482 2.518 25l9.982-9.982L22.482 25 25 22.482 15.018 12.5 25 2.518Z"/>`,
  },
} as const;

export type IconName = keyof typeof icons;

export const getIcon = (key: IconName): Icon => {
  return icons[key];
};
```

## Benefits of This Approach

- **Reusable and Scalable**: New icons can be added easily to `icons.ts` without modifying the `Icon` component.
- **Lightweight**: No external icon libraries are required.
- **Flexible Styling**: The `className` prop allows custom styling.
- **Performance Optimization**: SVGs are inlined, reducing network requests.

## Conclusion

By implementing this `Icon` component, we achieve a clean and efficient way to handle icons in a Next.js project. This method ensures maintainability and scalability while keeping the project lightweight. Happy coding! 🚀
