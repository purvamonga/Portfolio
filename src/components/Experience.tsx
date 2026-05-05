import React, { useEffect, useRef, useState } from "react";

interface ExperienceProps {
    isDarkMode: boolean;
}

interface ExperienceItem {
    year: string;
    startDate: string;     // ISO for <time> tag — SEO
    endDate?: string;      // ISO end date (optional if present)
    role: string;
    company: string;
    companyUrl?: string;   // External link to company
    description: string[];
    technologies: string[];
    // Schema.org WorkExperience type
    employmentType?: string;
}

// Hook to detect when an element is in the viewport
const useInView = (threshold = 0.2) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
};

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {

    // ── Experience data with SEO metadata ──────────────────────────────────
    // Target keywords:
    //   "PwC consulting internship"  | "data analysis consulting"
    //   "Node.js backend developer"  | "Express.js web development intern"
    //   "student leader India"       | "Smart India Hackathon organizer"
    //   "UI UX design head"          | "event branding design"
    // ───────────────────────────────────────────────────────────────────────
    const experiences: ExperienceItem[] = [
        {
            year: "Mar 2026 – Present",
            startDate: "2026-03-01",
            role: "Trainee",
            company: "PwC Advisory Launchpad",
            companyUrl: "https://www.pwc.in/",
            employmentType: "Trainee",
            description: [
                "Apply consulting frameworks, market research, and data analysis techniques to evaluate business challenges and support solution-driven recommendations.",
                "Strengthen analytical thinking, stakeholder communication, and problem-solving skills through case-based assignments and advisory-focused training modules.",
            ],
            technologies: ["Analytical Thinking", "Consulting", "Data Analysis", "Problem Solving"],
        },
        {
            year: "Jun 2025 – Jul 2025",
            startDate: "2025-06-01",
            endDate: "2025-07-31",
            role: "Web Development Intern",
            company: "TechQuint Services and Consulting",
            employmentType: "Internship",
            description: [
                "Engineered backend services using Node.js and Express.js to power scalable REST APIs.",
                "Contributed to the full development lifecycle — from requirements to deployment.",
                "Enhanced application scalability and reliability through modular backend architecture.",
            ],
            technologies: ["Node.js", "Express.js", "Backend Architecture"],
        },
        {
            year: "May 2025 – Present",
            startDate: "2025-05-01",
            role: "President",
            company: "UPES Hypervision",
            employmentType: "Volunteer",
            description: [
                "Led a 100+ member student organisation, managing operations and strategic planning.",
                "Organised 5+ university-level events including Smart India Hackathon and ICMLDE 4.0 with 200+ participants.",
            ],
            technologies: ["Leadership", "Event Management", "Strategic Planning"],
        },
        {
            year: "May 2024 – May 2025",
            startDate: "2024-05-01",
            endDate: "2025-05-31",
            role: "Design Head",
            company: "UPES Hypervision",
            employmentType: "Volunteer",
            description: [
                "Managed design execution for 10+ events, ensuring consistent branding and visual identity across all university touchpoints.",
            ],
            technologies: ["Design Execution", "Visual Identity", "Branding"],
        },
    ];

    const dk = isDarkMode;

    return (
        <section
            id="experience"
            aria-label="Purva Monga Work Experience and Internships"
            className="px-4 sm:px-6 lg:px-12 py-20 w-full min-h-[100vh] flex flex-col items-center"
            // JSON-LD for each role is handled inline via itemScope
        >
            {/* ── Animation keyframes ── */}
            <style>{`
                @keyframes fadeInUp {
                    0%   { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
            `}</style>

            {/* ── Section heading — SEO: h2 with keyword ── */}
            <h2
                className={`text-3xl sm:text-4xl font-bold text-center mb-4 transition-all ${
                    dk ? "text-white" : "text-black"
                }`}
            >
                Work Experience &amp; Internships
            </h2>
            <p className={`text-center mb-16 max-w-xl ${dk ? "text-stone-400" : "text-gray-500"}`}>
                From <strong>AI &amp; data analysis consulting at PwC</strong> to{" "}
                <strong>Node.js backend development</strong> and leading a{" "}
                <strong>100+ member student organisation</strong> — here's my professional journey.
            </p>

            {/* ── Timeline ── */}
            <div className="flex flex-col space-y-16 w-full max-w-4xl">
                {experiences.map((exp, index) => {
                    const { ref, inView } = useInView();

                    return (
                        <article
                            key={index}
                            ref={ref}
                            // Schema.org: WorkExperience / OrganizationRole
                            itemScope
                            itemType="https://schema.org/OrganizationRole"
                            className={`transition-all duration-700 ${
                                inView ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                            }`}
                            aria-label={`${exp.role} at ${exp.company}`}
                        >
                            <div className="flex flex-col lg:flex-row px-4 lg:px-0 gap-4">

                                {/* ── Date column ── */}
                                <div className="w-full lg:w-1/4 text-center lg:text-left">
                                    {/* <time> tag for SEO date parsing */}
                                    <time
                                        dateTime={exp.startDate}
                                        itemProp="startDate"
                                        className={`text-sm ${dk ? "text-stone-400" : "text-gray-500"}`}
                                    >
                                        {exp.year}
                                    </time>
                                    {exp.endDate && (
                                        <meta itemProp="endDate" content={exp.endDate} />
                                    )}
                                    {/* Employment type badge */}
                                    {exp.employmentType && (
                                        <div className={`mt-2 text-xs font-semibold px-2 py-0.5 rounded-full inline-block ${
                                            dk ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-700"
                                        }`}>
                                            {exp.employmentType}
                                        </div>
                                    )}
                                </div>

                                {/* ── Content column ── */}
                                <div className="w-full lg:w-3/4">
                                    {/* Role + Company as h3 with SEO structure */}
                                    <h3
                                        className={`text-lg font-semibold mb-1 ${dk ? "text-white" : "text-black"}`}
                                    >
                                        <span itemProp="roleName">{exp.role}</span>
                                        {" – "}
                                        {exp.companyUrl ? (
                                            <a
                                                href={exp.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Visit ${exp.company} website`}
                                                className={`text-sm hover:underline ${
                                                    dk ? "text-blue-400" : "text-blue-600"
                                                }`}
                                                itemProp="url"
                                            >
                                                <span
                                                    itemScope
                                                    itemType="https://schema.org/Organization"
                                                    itemProp="memberOf"
                                                >
                                                    <span itemProp="name">{exp.company}</span>
                                                </span>
                                            </a>
                                        ) : (
                                            <span
                                                className={`text-sm ${dk ? "text-stone-400" : "text-gray-600"}`}
                                                itemScope
                                                itemType="https://schema.org/Organization"
                                                itemProp="memberOf"
                                            >
                                                <span itemProp="name">{exp.company}</span>
                                            </span>
                                        )}
                                    </h3>

                                    {/* Description bullets — each as a separate <p> for readability */}
                                    <ul
                                        className={`mt-2 space-y-1 list-disc list-inside text-sm ${
                                            dk ? "text-stone-300" : "text-gray-700"
                                        }`}
                                        itemProp="description"
                                    >
                                        {exp.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>

                                    {/* Tech / skill tags */}
                                    <div className="flex flex-wrap gap-2 mt-3" aria-label={`Skills used at ${exp.company}`}>
                                        {exp.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className={`rounded px-2 py-1 text-xs font-medium ${
                                                    dk
                                                        ? "bg-stone-900 text-stone-300"
                                                        : "bg-gray-200 text-gray-900"
                                                }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Divider between entries */}
                            {index < experiences.length - 1 && (
                                <hr className={`mt-10 ${dk ? "border-stone-800" : "border-gray-200"}`} />
                            )}
                        </article>
                    );
                })}
            </div>

            {/* ── Internal link CTA ── */}
            <div className="mt-16 text-center">
                <p className={`text-sm mb-3 ${dk ? "text-stone-400" : "text-gray-500"}`}>
                    Want to see what I've built?
                </p>
                <a
                    href="#projects"
                    aria-label="View Purva Monga's machine learning and full-stack projects"
                    className={`px-5 py-2.5 text-sm font-semibold rounded-md border transition-all ${
                        dk
                            ? "border-stone-400 text-stone-300 hover:bg-stone-800"
                            : "border-gray-800 text-gray-800 hover:bg-gray-100"
                    }`}
                >
                    View Projects →
                </a>
            </div>
        </section>
    );
};

export default Experience;