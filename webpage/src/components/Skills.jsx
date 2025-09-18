import { Box, Chip } from "@mui/material";
import { useState } from "react";

export default function Skills({ mode }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    const daySkills = [
        "HTML 5",
        "CSS",
        "Javascript",
        "Tailwind CSS",
        "ReactJS",
        "GSAP",
        "Redis",
        "Firebase",
        "MongoDB",
        "Supabase",
        "Unity",
        "Java",
        "Bootstrap",
        "Python",
        "Laravel",
        "NodeJS",
        "PostgreSQL",
        "MySQL",
        "ExpressJS",
        "Neo4j",
        "Git",
        "Figma",
        "PHP",
        "C#",
        "C++",
    ];

    const nightSkills = [
        "Dancer",
        "Choreographer",
        "Instructor",
        "Model",
        "Actor",
        "Director",
        "Producer",
        "Writer",
        "Singer",
        "Songwriter",
        "Composer",
        "Arranger"
    ];

    const currentSkills = mode === "dark" ? nightSkills : daySkills;

    return (
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "0.5rem" }}>
            {currentSkills.map((label, index) => (
                <Chip
                    key={`${mode}-${label}-${index}`}
                    label={label}
                    variant={hoveredIndex === index ? "filled" : "outlined"}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex((prev) => (prev === index ? null : prev))}
                />
            ))}
        </Box>
    );
}