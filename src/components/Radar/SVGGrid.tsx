'use client'
import React, { useEffect, useState } from "react";
import { status } from "./types";
import { rings } from "./constants";

const height = 810;

export function SVGGrid() {
  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();
  const width = Math.min(size.width, 1400);

  return (
    <svg width={width} height={height} style={{ backgroundColor: "white" }}>
      <g
        style={{ backgroundColor: "green" }}
        transform={`translate(${width / 2}, ${height / 2})`}
      >
        <line
          x1={0}
          y1={-380}
          x2={0}
          y2={380}
          stroke="#f2f2ff"
          strokeWidth={2}
        ></line>

        <line
          x1={-width / 2}
          y1={0}
          x2={width / 2}
          y2={0}
          stroke="#f2f2ff"
          strokeWidth={2}
        ></line>

        {status.map((status, i) => {
          return (
            <g key={status}>
              <circle
                cx={0}
                cy={0}
                r={rings[i].radius}
                fill="none"
                stroke="#dde"
                strokeWidth={4}
              ></circle>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
