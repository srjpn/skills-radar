import { Blip } from "./Blip";
import React from "react";

import styles from '@/styles/Icon.module.css'

type Props = { blip: Blip; tooltip?: boolean };
const basePath = `/images/`;

export function Icon({ blip, tooltip }: Props) {
  const [type, str] = blip.icon;

  switch (type) {
    case "none":
      return <></>;
    case "emoji":
      return <div className={`${styles.icon} ${styles.emoji} ${tooltip && styles.in}`}>{str}</div>;
    case "data":
    case "url":
      return (
        <div className={`${styles.icon} ${styles.image} ${tooltip && styles.in}`}>
          <div
            style={{
              backgroundImage: `url(${type === "url" ? basePath : ""}${str})`,
            }}
          />
        </div>
      );
  }
}
