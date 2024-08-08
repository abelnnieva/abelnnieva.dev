---
isDraft: false
publishDate: 2024-08-08
title: Polymorphic Astro components with TypeScript
description: Learn how to use polymorphic components in Astro to create flexible, reusable components while maintaining type safety and consistency.
topic: astro
---

In modern web development, creating flexible and reusable components is crucial for building maintainable applications. One powerful pattern to achieve this in Astro is using polymorphic components. These components allow you to change the underlying HTML element (like a `button`, `a`, or `div`) based on the props passed, all while ensuring type safety for `refs` and other properties.

Implementing a polymorphic component in Astro is straightforward. The key is to use an `as` prop (or a similar method) to determine the element type dynamically.

Here’s a basic example:

```astro
---
import type { HTMLTag, Polymorphic } from "astro/types";

type Props<Tag extends HTMLTag> = Polymorphic<{
  as: Tag;
  color?: keyof typeof colorClasses;
  size?: keyof typeof sizeClasses;
}>;

const {
  as: Tag,
  class: className,
  color = "primary",
  size = "base",
  ...props
} = Astro.props;

const baseClasses = "inline-flex items-center font-medium rounded-full";

const colorClasses = {
  primary: "text-white bg-blue-700 hover:bg-blue-800",
};

const classes = [
  baseClasses,
  colorClasses[color as keyof typeof colorClasses],
  className,
];
---

<Tag class:list={classes} {...props}>
  <slot />
</Tag>
```

In this example, PolymorphicComponent can render as either a `button` or an `a` tag based on the `as` prop, with TypeScript ensuring type safety for the `onClick` and `href` props.

Usage example:

```astro
---
import Button from "@/components/Button.astro";
---

<Button
  as="button"
  onClick={() => alert('Button clicked!')}
>
  Button as button
</Button>

<Button
  as="a"
  href="https://www.example.com"
  target="_blank"
>
  Button as link
</Button>
```

Whether you’re working on a design system or just trying to streamline your code, these components help you adapt to different situations without any hassle. I hope this guide helps you keep your code clean and your UI consistent. If you have any questions or need more details, feel free to send me an email. Happy coding!
