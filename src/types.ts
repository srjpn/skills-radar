export const categories = [
  "Tools",
  "Languages & Frameworks",
  "Platforms",
  "Techniques",
] as const;
export type Category = typeof categories[number];

export const status = ["Expert", "Growth", "Explore", "Pause"] as const;
export type Status = typeof status[number];

export type Entry = {
  id: number;
  originId: string;
  category: Category;
  status: Status;
  label: string;
  icon: [IconType, string];
  link?: string;
  description?: string;
};

type IconType = "url" | "data" | "emoji" | "iconify" | "none";
