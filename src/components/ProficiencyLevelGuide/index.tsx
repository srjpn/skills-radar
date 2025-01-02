import { ProficiencyLevel } from "./proficiencyLevel";
import { proficiencyLevels } from "../../data/proficiencyLevels";

export function ProficiencyLevelGuide() {

  return (
    <div
      style={{
        margin: "80px auto",
        lineHeight: 1.6,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    
      }}
    >
      {proficiencyLevels.map((skill, index) => (
        <ProficiencyLevel key={index} title={skill.title} description={skill.description} />
      ))}
    </div>
  );
}
