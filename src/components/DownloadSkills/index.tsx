import { Entry, Category, Status, categories, status } from "../../types";
import entries from "../../entries.json";
import { proficiencyLevels } from "../../data/proficiencyLevels";

const generateReadableContent = () => {
    // Initialize accumulator with all status and category types
    const initialAcc: Record<Status, Record<Category, Entry[]>> = status.reduce((statusAcc, stat) => {
        statusAcc[stat] = categories.reduce((catAcc, category) => {
            catAcc[category] = [];
            return catAcc;
        }, {} as Record<Category, Entry[]>);
        return statusAcc;
    }, {} as Record<Status, Record<Category, Entry[]>>);

    // Group entries by status and category
    const groupedEntries = (entries as Entry[]).reduce((acc, entry) => {
        acc[entry.status][entry.category].push(entry);
        return acc;
    }, initialAcc);

    // Generate human-readable text
    let content = "# Tech Radar - Skills Overview\n\n";

    // Find proficiency level description by status
    const getDescription = (statusTitle: string) => {
        const level = proficiencyLevels.find(level => level.title === statusTitle);
        return level ? level.description : '';
    };

    Object.entries(groupedEntries).forEach(([status, categoryGroups]) => {
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
