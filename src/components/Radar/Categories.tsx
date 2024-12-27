import { Blip } from "../../Blip";
import { Category } from "../../types";

import "./categories.css";

export function Categories({
  selected,
  setSelected,
  entries,
}: {
  selected?: string;
  setSelected: Function;
  entries: Blip[]
}) {
  function getCategoryId(category: Category): string {
    const categoryMap = {
      Tools: "tools",
      "Languages & Frameworks": "languages-frameworks",
      Techniques: "techniques",
      Platforms: "platforms",
    };
  
    return categoryMap[category];
  }
  const byCategory = (category: Category): Blip[] =>
    entries.filter((entry) => entry.category === category);
  
  const categoryEntries: {
    [K in Category]: Blip[];
  } = {
    Tools: byCategory("Tools"),
    "Languages & Frameworks": byCategory("Languages & Frameworks"),
    Techniques: byCategory("Techniques"),
    Platforms: byCategory("Platforms"),
  };

  return (
    <>
      {Object.entries(categoryEntries).map(([category, entries]) => {
        return (
          <div
            key={category}
            className={`category ${getCategoryId(category as Category)}`}
          >
            <h3>{category}</h3>

            <ul>
              {entries.map((entry) => {
                return (
                  <li
                    key={entry.id}
                    onMouseOver={() => setSelected(entry.originId)}
                    className={selected === entry.originId ? "selected" : ""}
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
