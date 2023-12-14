import { Blip } from "./Blip";
import { blips } from "./blipsList";
import { Category, Entry } from "./types";
import React from "react";

import styles from '@/styles/Categories.module.css'

const byCategory = (entries: Entry[], category: Category): Blip[] =>
    blips(entries as Entry[]).filter((entry: Blip) => entry.category === category);


export function Categories({
  entries,
  selected,
  setSelected,
}: {
  entries: Entry[];
  selected?: string;
  setSelected: Function;
}) {

  const categoryEntries: {
    [K in Category]: Blip[];
  } = {
    Tools: byCategory(entries, "Tools"),
    "Languages & Frameworks": byCategory(entries, "Languages & Frameworks"),
    Techniques: byCategory(entries, "Techniques"),
    Platforms: byCategory(entries, "Platforms"),
  };
  return (
    <>
      {Object.keys(categoryEntries).map((category) => {
        return (
          <div
            key={category}
            className={`${styles.category} ${styles[getCategoryId(category as Category)]}`}
          >
            <h3>{category}</h3>

            <ul>
              {entries.map((entry) => {
                return (
                  <li
                    key={entry.id}
                    onMouseOver={() => setSelected(entry.originId)}
                    className={selected === entry.originId ? styles.selected : ""}
                  >
                    {entry.label}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}

function getCategoryId(category: Category): string {
  const categoryMap = {
    Tools: "tools",
    "Languages & Frameworks": "languagesFrameworks",
    Techniques: "techniques",
    Platforms: "platforms",
  };

  return categoryMap[category];
}
