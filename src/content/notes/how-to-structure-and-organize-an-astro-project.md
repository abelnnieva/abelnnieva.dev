---
isDraft: false
publishDate: 2024-08-01
title: How to Structure and Organize an Astro Project
description: The key to efficient development is good project organization, so I’m going to show you how I do it on my personal website.
topic: astro
---

Hello everyone! Welcome to my first article on my personal blog. I want to talk about how to structure and organize an Astro project. For those who don’t know, Astro is a modern framework that helps us build fast and optimized websites. The key to efficient development is good project organization, so I’m going to show you how I do it on my personal website.

## Directory Structure

Having a well-organized directory structure makes it easier to maintain and scale the project. Here’s a look at the basic structure of my Astro project, with a brief description of each folder and file:

```bash
abelnnieva.dev/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── content/
│   ├── data/
│   ├── lib/
│   └── types/
├── astro.config.mjs
├── package.json
└── README.md
```

## Description of Each Folder

### 1. components

The `components` folder contains all the reusable components in my project. Components are like building blocks that I can use on multiple pages or within other components.

```bash
src
├── components
│   ├── Avatar.astro
│   ├── Badge.astro
│   ├── Button.astro
│   ├── Header.astro
│   ├── Footer.astro
│   └── ...
```

### 2. content

In `content`, I store all the data that feeds my site. This can include information in JSON, Markdown (MDX), or TypeScript format.

```bash
src
├── content
│   ├── companies
│   │   ├── company-1.json
│   │   └── company-2.json
│   ├── education
│   │   └── education-1.json
│   ├── notes
│   │   └── note-1.md
│   ├── projects
│   │   └── project-1.json
│   └── topics
│       └── topic-1.json
```

### 3. data

The `data` folder is an alternative location to store static data files without using the `content` functionality. This can include JSON, YAML, or other data files that your site will consume. For example, configuration settings, or static data.

```bash
src
├── data
│   └── index.ts
```

### 4. layouts

Layouts are reusable page structures that wrap your content. For example, I can have one layout for the main page and another for detail pages.

```bash
src
├── layouts
│   └── Layout.astro
```

### 5. lib

The `lib` folder contains utilities and functions that can be used throughout the project. This includes JavaScript or TypeScript scripts that provide specific functionalities.

```bash
src/
├── lib/
│   ├── icons.ts
│   └── utils.js
```

### 6. pages

The `pages` folder contains the pages of your website. Each file in this folder represents a route on your site.

```bash
src
├── pages
│   ├── index.astro
│   ├── notes
│   │   └── [...slug].astro
│   ├── notes.astro
│   ├── projects.astro
│   ├── resume.astro
│   └── topics
│       └── [...slug].astro
```

### 7. types

Here, I define shared TypeScript types for my project, which helps keep the code typed and avoid errors.

```bash
src/
├── types/
│   └── index.d.ts
```

## Conclusion

Organizing your Astro project efficiently is crucial for long-term success. By following a clear and consistent structure like the one I’ve described, you’ll improve the maintainability and scalability of your website.

I hope this guide is helpful and helps you keep your Astro project well-organized. If you have any questions or need more details, feel free to send me an email. Happy coding!
