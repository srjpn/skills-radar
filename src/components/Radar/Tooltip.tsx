import React from "react";
import { Blip } from "./Blip";
import { Icon } from "./Icon";
import styles from '@/styles/Tooltip.module.css'

export function Tooltip({ blip }: { blip: Blip }) {
  return (
    <div className={styles.tooltip}>
      <div className={styles.tooltipTitle}>
        <Icon tooltip blip={blip} />
        <b>{blip.label}</b>
      </div>

      <div className={styles.tooltipStatusWrapper}>
        <span className={styles.tooltipStatus}>{blip.status}</span>
      </div>

      <div className={styles.tooltipCategory}>{blip.category}</div>
    </div>
  );
}
