import { Entry } from "../types";
// Import the entries data
import entriesData from '../entries.json';

export type Status = 'Expert' | 'Growth' | 'Explore' | 'Pause';

export type Category = 'Languages & Frameworks' | 'Platforms' | 'Tools' | 'Techniques';


// Type assertion for the imported JSON data
const entries = entriesData as Entry[];

// Get all entries
export const getAllEntries = (): Entry[] => {
  return entries;
};

// Get entries by category
export const getEntriesByCategory = (category: Category): Entry[] => {
  return entries.filter(entry => entry.category === category);
};

// Get entries by status
export const getEntriesByStatus = (status: Status): Entry[] => {
  return entries.filter(entry => entry.status === status);
};

// Get entry by ID
export const getEntryById = (id: number): Entry | undefined => {
  return entries.find(entry => entry.id === id);
};

// Get entry by originId
export const getEntryByOriginId = (originId: string): Entry | undefined => {
  return entries.find(entry => entry.originId === originId);
};

// Get all categories
export const getAllCategories = (): Category[] => {
  return Array.from(new Set(entries.map(entry => entry.category))) as Category[];
};

// Get all statuses
export const getAllStatuses = (): Status[] => {
  return Array.from(new Set(entries.map(entry => entry.status))) as Status[];
}; 

export const getGroupedEntries = (entries: Entry[]): Record<Status, Record<Category, Entry[]>> => {
    return entries.reduce((acc, entry) => {
        acc[entry.status][entry.category].push(entry);
        return acc;
    }, {} as Record<Status, Record<Category, Entry[]>>);
};