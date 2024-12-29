import React from "react";

interface ProficiencyLevelProps {
    title: string;
    description: string;
}

export function ProficiencyLevel({ title, description }: ProficiencyLevelProps) {
    return (
        <div className="proficiency-level" style={{width: "45%", padding: "0 1rem"}}>
            <p>
                <b>{title}</b>
                <br />
                {description}
            </p>
        </div>
    );
}
