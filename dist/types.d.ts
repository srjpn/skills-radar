export declare const categories: readonly ["Tools", "Languages & Frameworks", "Platforms", "Techniques"];
export declare type Category = typeof categories[number];
export declare const status: readonly ["✅ Use", "🚧 Try", "🤔 Reconsider", "🚫 Hold"];
export declare type Status = typeof status[number];
export declare type Entry = {
    id: number;
    originId: string;
    category: Category;
    status: Status;
    label: string;
    icon: [IconType, string];
};
declare type IconType = "url" | "data" | "emoji" | "none";
export {};
