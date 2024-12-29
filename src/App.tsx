import { Hero } from "./components/Hero";
import entriesData from "./entries.json";
import { Entry } from "./types";
import { Radar } from "./components/Radar";
import { ProficiencyLevelGuide  } from "./components/ProficiencyLevelGuide";

function App() {
  return (
    <>
      <Hero />
      <Radar entries={entriesData as Entry[]} />
      <ProficiencyLevelGuide  />
    </>
  );
}

export default App;
