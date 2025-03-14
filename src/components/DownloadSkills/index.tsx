import { Entry } from "../../types";
import { proficiencyLevels } from "../../data/proficiencyLevels";
import { getGroupedEntries } from "../../data";

const generateReadableContent = () => {
    // Generate human-readable text
    let content = "# Tech Radar - Skills Overview\n\n";

    // Find proficiency level description by status
    const getDescription = (statusTitle: string) => {
        const level = proficiencyLevels.find(level => level.title === statusTitle);
        return level ? level.description : '';
    };

    Object.entries(getGroupedEntries()).forEach(([status, categoryGroups]) => {
        content += `## ${status}\n\n`;
        content += `${getDescription(status)}\n\n`;

        Object.entries(categoryGroups).forEach(([category, items]) => {
            if (items.length > 0) {
                content += `### ${category}\n`;
                items.forEach((item: Entry) => {
                    const label = item.link 
                        ? `[${item.label}](${item.link})`
                        : item.label;
                    content += `- ${label}`;
                    if (item.description) {
                        content += `\n  ${item.description}`;
                    }
                    content += '\n';
                });
                content += '\n';
            }
        });
        content += '\n';
    });

    return content;
};

const handleDownload = () => {
    const content = generateReadableContent();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tech-radar-skills.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

export function DownloadSkills() {
    return (
        <div style={{ textAlign: "center", margin: "40px 0" }}>
            <button
                onClick={handleDownload}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "background-color 0.2s"
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = "#0056b3")}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = "#007bff")}
            >
                Download Skills Overview
            </button>
        </div>
    );
}
