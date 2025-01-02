import { Entry, Category, Status, categories, status } from "../../types";
import entries from "../../entries.json";

const proficiencyLevels = [
    {
        title: "Expert",
        description: "Skills in which I have achieved a high level of proficiency and confidence. These are my go-to abilities for solving complex problems, and I leverage them effectively in real-world scenarios. I continuously refine and expand these skills, often mentoring others or setting best practices in these areas."
    },
    {
        title: "Growth",
        description: "Skills I am actively learning or refining. I am exploring these through projects, courses, or other deliberate efforts. I see strong potential in these areas to become part of my 'Expert' ring with further practice and exposure."
    },
    {
        title: "Explore",
        description: "Skills I'm interested in and eager to learn. These are areas I find valuable or exciting and plan to invest time in developing further."
    },
    {
        title: "Pause",
        description: "Skills I've decided to set aside for now. They may have been useful in the past but are no longer a focus due to lack of interest, changes in career direction, or reduced demand. I avoid investing additional time in these unless a strong reason emerges."
    }
];

const generateReadableContent = () => {
    // Initialize accumulator with all categories and status types
    const initialAcc: Record<Category, Record<Status, Entry[]>> = categories.reduce((catAcc, category) => {
        catAcc[category] = status.reduce((statusAcc, stat) => {
            statusAcc[stat] = [];
            return statusAcc;
        }, {} as Record<Status, Entry[]>);
        return catAcc;
    }, {} as Record<Category, Record<Status, Entry[]>>);

    // Group entries by category and status
    const groupedEntries = (entries as Entry[]).reduce((acc, entry) => {
        acc[entry.category][entry.status].push(entry);
        return acc;
    }, initialAcc);

    // Generate human-readable text
    let content = "Tech Radar - Skills Overview\n\n";

    Object.entries(groupedEntries).forEach(([category, statusGroups]) => {
        content += `# ${category}\n\n`;

        Object.entries(statusGroups).forEach(([status, items]) => {
            content += `## ${status}\n`;
            items.forEach((item: Entry) => {
                content += `- ${item.label}\n`;
            });
            content += '\n';
        });
    });

    // Add footer with proficiency level descriptions
    content += "\n# Proficiency Levels\n\n";
    proficiencyLevels.forEach(level => {
        content += `## ${level.title}\n${level.description}\n\n`;
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
