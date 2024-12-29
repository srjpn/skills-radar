import "./hero.css";

export function Hero() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
      <a href="https://srjpn.github.io/" rel="noopener noreferrer" style={{ marginRight: "auto", marginLeft: "2rem" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="black"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </a>
      <h1>
        Skills Radar
        <sub>December 2024</sub>
      </h1>
      <a href="https://github.com/srjpn" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "auto", marginRight: "2rem" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="black"
        >
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.24 5.7.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
        </svg>
      </a>
    </div>
  );
}
