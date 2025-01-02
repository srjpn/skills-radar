import { Hero } from "./components/Hero";
import entriesData from "./entries.json";
import { Entry } from "./types";
import { Radar } from "./components/Radar";
import { ProficiencyLevelGuide } from "./components/ProficiencyLevelGuide";
import { DownloadSkills } from "./components/DownloadSkills";

function App() {
  return (
    <>
      <Hero />
      <Radar entries={entriesData as Entry[]} />
      <ProficiencyLevelGuide />
      <DownloadSkills />
    </>
  );
}

export default App;
