import { Hero } from "./components/Hero";
import entriesData from "./entries.json";
import { Entry } from "./types";
import { Radar } from "./components/Radar";
import { Content } from "./components/Content";

function App() {
  return (
    <>
      {/* <Hero /> */}
      <Radar entries={entriesData as Entry[]} />
      {/* <Content /> */}
    </>
  );
}

export default App;
