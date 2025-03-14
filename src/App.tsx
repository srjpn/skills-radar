import { Hero } from "./components/Hero";
import { Radar } from "./components/Radar";
import { ProficiencyLevelGuide } from "./components/ProficiencyLevelGuide";
import { DownloadSkills } from "./components/DownloadSkills";
import { getAllEntries } from "./data";

function App() {
  return (
    <>
      <Hero />
      <Radar entries={getAllEntries()} />
      <ProficiencyLevelGuide />
      <DownloadSkills />
    </>
  );
}

export default App;
