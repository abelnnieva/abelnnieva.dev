// utils.ts

import { getEntry } from "astro:content";

export const resolveCollection = async (collection) => {
  return await Promise.all(
    collection.map(async (collectionEntry) => {
      const entry = await getEntry(collectionEntry);
      return entry.data;
    })
  );
};

// Function to calculate reading time in minutes
export const calculateReadingTime = (text) => {
  const textContent = text.replace(/<[^>]+>/g, ""); // Strip HTML tags
  const wordsPerMinute = 200; // Average reading speed
  const words = textContent.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};
