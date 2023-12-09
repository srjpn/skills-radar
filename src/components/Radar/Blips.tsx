"use client"
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import * as d3 from "d3";
import { Blip } from "./Blip";
import { blips } from "./blipsList";
import { Tooltip } from "./Tooltip";
import { Icon } from "./Icon";
import { Entry, Status } from "./types";

import "./blips.css";

export function Blips({ entries, selected, setSelected }: Props) {
  const animatedBlips = useAnimatedBlips(entries);

  return (
    <div className="blips">
      {animatedBlips.map((blip, i) => {
        return (
          <div
            key={blip.label}
            className={`blip ${getStatusId(blip.status)} ${
              selected === blip.originId ? "selected" : ""
            }`}
            onMouseOver={() => setSelected(blip.originId)}
            style={{ transform: blip.translate() }}
          >
            {blip.isSelected(selected) ? (
              <Tooltip blip={blip} />
            ) : (
              <Icon blip={blip} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function useAnimatedBlips(entries: Entry[]) {
  const [animatedNodes, setAnimatedNodes] = useState<Blip[]>([]);

  useEffect(() => {
    const simulation = d3
      .forceSimulation()
      .velocityDecay(0.029)
      .force("collision", d3.forceCollide().radius(16).strength(0.15))
      .on("tick", () => {
        const newNodes = simulation.nodes();
        const newBlips = blips(entries).map((blip, i) => blip.update(newNodes[i]));

        setAnimatedNodes(newBlips);
      })
      .nodes(blips(entries));

    return () => {
      simulation.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return animatedNodes;
}

function getStatusId(status: Status): string {
  const statusMap = {
    "🚫 Hold": "hold",
    "🚧 Try": "try",
    "🤔 Reconsider": "reconsider",
    "✅ Use": "use",
  };

  return statusMap[status];
}

type Props = {
  selected?: string;
  setSelected: Dispatch<SetStateAction<string | undefined>>;
  entries: Entry[];
};
