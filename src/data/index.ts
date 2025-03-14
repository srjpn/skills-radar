import { Entry } from "../types";
// Import category-specific data
import languagesFrameworksData from './languages-frameworks.json';
import platformsData from './platforms.json';
import toolsData from './tools.json';
import techniquesData from './techniques.json';

export type Status = 'Expert' | 'Growth' | 'Explore' | 'Pause';

export type Category = 'Languages & Frameworks' | 'Platforms' | 'Tools' | 'Techniques';



// Combine all entries with type assertions
const entries: Entry[] = [
  ...(languagesFrameworksData as Entry[]),
  ...(platformsData as Entry[]),
  ...(toolsData as Entry[]),
  ...(techniquesData as Entry[])
];

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
export const getEntryById = (id: string): Entry | undefined => {
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

// Initialize empty records for each status and category
const initializeGroupedEntries = (): Record<Status, Record<Category, Entry[]>> => {
  const statuses: Status[] = ['Expert', 'Growth', 'Explore', 'Pause'];
  const categories: Category[] = ['Languages & Frameworks', 'Platforms', 'Tools', 'Techniques'];
  
  return statuses.reduce((acc, status) => {
    acc[status] = categories.reduce((catAcc, category) => {
      catAcc[category] = [];
      return catAcc;
    }, {} as Record<Category, Entry[]>);
    return acc;
  }, {} as Record<Status, Record<Category, Entry[]>>);
};

export const getGroupedEntries = (): Record<Status, Record<Category, Entry[]>> => {
  const grouped = initializeGroupedEntries();
  
  entries.forEach(entry => {
    grouped[entry.status][entry.category].push(entry);
  });
  
  return grouped;
};