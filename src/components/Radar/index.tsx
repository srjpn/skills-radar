import React, { useState } from "react";

import { Categories } from "./Categories";
import { Blips } from "./Blips";
import { SVGGrid } from "./SVGGrid";

import { Entry } from "../../types";
import { Blip } from "../../Blip";
import "./radar.css";

interface RadarProps {
  entries: Entry[];
}

export function Radar({ entries }: RadarProps) {
  const [selected, setSelected] = useState<string>();  
  const blips = entries.map((entry) => new Blip(entry));

  return (
    <div className="radar">
      <Categories selected={selected} setSelected={setSelected} entries={blips} />
      <Blips selected={selected} setSelected={setSelected} entries={blips} />
      <SVGGrid />
    </div>
  );
}
