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
