import React, { useState } from "react";
import { Categories } from "./Categories";
import { Blips } from "./Blips";
import { SVGGrid } from "./SVGGrid";

import styles from '@/styles/Radar.module.css'

import { Entry } from "./types";

const Radar = ({ entries }: Props) => {
  const [selected, setSelected] = useState<string>();

  return (
    <div className={styles.radar}>
      <Categories entries={entries} selected={selected} setSelected={setSelected} />
      <Blips entries={entries} selected={selected} setSelected={setSelected} />
      <SVGGrid />
    </div>
  );
}

export type Props = {
  entries: Entry[];
};

export default Radar;