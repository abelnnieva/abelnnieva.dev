---
isDraft: false
publishDate: 2024-11-23
title: Dynamically Generating robots.txt in a Next.js Project
description: Dynamically generate robots.txt in Next.js based on the environment for better SEO control during development and production.
topic: react
---

When building a website with Next.js, one of the essential elements to consider is controlling how search engine bots interact with your site. This can be done using the `robots.txt` file, which specifies rules about which pages or resources search engines should crawl or avoid.

In this post, I’ll walk you through a solution I implemented to dynamically generate the `robots.txt` file based on the environment (development or production) in a Next.js project. This approach makes it easier to handle different configurations for different stages of development.

## Problem

In a typical Next.js project, we might include a static `robots.txt` file in the public folder. However, during development, we often want to block all search engine crawlers to avoid indexing pages that are still in progress or incomplete. On the other hand, in production, we want to allow search engines to index the full site.

## Solution

To solve this, I decided to remove the static `robots.txt` file and instead dynamically generate it based on the environment (i.e., `APP_ENV`).

Here is the implementation:

1. **Remove the Static `robots.txt` File:**
   The first step was to remove the static `robots.txt` file from the public folder. This allows us to replace it with dynamic logic instead of relying on a static file.

2. **Create a Dynamic Route for `robots.txt`:**
   Next, I created a dynamic route handler for `robots.txt` inside the `src/app/robots.txt/route.js` file. This handler checks the environment and generates the appropriate `robots.txt` content:

```javascript
export async function GET() {
  // Detect the environment
  const isDevelop = process.env.APP_ENV !== "production";

  // Generate the robots.txt content based on the environment
  const content = isDevelop
    ? `User-agent: *\nDisallow: /` // Block everything in development
    : `User-agent: *\nAllow: /`; // Allow everything in production

  // Return the response with the content and correct MIME type
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
```

In the code above:

- If the `APP_ENV` is not set to production, the server will block all search engines by returning a `Disallow` rule.

- If it is production, the `Allow` rule is applied, permitting search engines to index the site fully.

## Why This is Useful

This solution is beneficial because:

- **Environment-Specific Behavior:** It automatically adapts based on the environment, ensuring that search engines do not index your in-progress work during development.

- **Cleaner Workflow:** There’s no need to manually update the `robots.txt` file during different stages of the project. It’s all handled automatically.

- **No Static File:** With this dynamic generation, you avoid keeping an unnecessary static file in the public directory.

## Conclusion

This dynamic approach to generating `robots.txt` is a simple yet effective way to manage how search engines interact with your site based on the environment. By leveraging Next.js’s dynamic routes and the `process.env.APP_ENV` variable, you can easily control your website’s SEO behavior during development and production without the need for separate configurations.
