import React, { useEffect, useRef, useState } from "react";

interface EducationProps {
    isDarkMode: boolean;
}

interface EducationItem {
    year: string;
    degree: string;
    institution: string;
    score: string;
}

const useInView = (threshold = 0.2) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
};

const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
    const educationData: EducationItem[] = [
        {
            year: "2023 – 2027",
            degree: "B.Tech Computer Science & Engineering",
            institution: "UPES, Dehradun",
            score: "CGPA: 8.52/10",
        },
        {
            year: "2021 – 2022",
            degree: "Class XII (CBSE)",
            institution: "OP Jindal Modern School",
            score: "Percentage: 88%",
        },
        {
            year: "2019 – 2020",
            degree: "Class X (CBSE)",
            institution: "OP Jindal Modern School",
            score: "Percentage: 95.40%",
        },
    ];

    return (
        <div
            id="education"
            className="px-4 sm:px-6 lg:px-12 py-20 w-full flex flex-col items-center"
        >
            <h2
                className={`text-3xl sm:text-4xl font-bold text-center mb-16 transition-all ${
                    isDarkMode ? "text-white" : "text-black"
                }`}
            >
                Academic Background
            </h2>

            <div className="flex flex-col space-y-12 w-full max-w-4xl">
                {educationData.map((edu, index) => {
                    const { ref, inView } = useInView();

                    return (
                        <div
                            key={index}
                            ref={ref}
                            className={`transition-all duration-700 ${
                                inView ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                            }`}
                        >
                            <div className="flex flex-col lg:flex-row px-4 lg:px-0 gap-4">
                                {/* Date Section */}
                                <div className="w-full lg:w-1/4 text-center lg:text-left">
                                    <p
                                        className={`text-sm font-semibold ${
                                            isDarkMode ? "text-stone-400" : "text-gray-700"
                                        }`}
                                    >
                                        {edu.year}
                                    </p>
                                </div>

                                {/* Content Section */}
                                <div className="w-full lg:w-3/4">
                                    <h3
                                        className={`text-xl font-bold mb-1 ${
                                            isDarkMode ? "text-white" : "text-black"
                                        }`}
                                    >
                                        {edu.degree}
                                    </h3>
                                    <h4
                                        className={`text-lg mb-2 ${
                                            isDarkMode ? "text-stone-300" : "text-gray-800"
                                        }`}
                                    >
                                        {edu.institution}
                                    </h4>
                                    <span
                                        className={`rounded px-3 py-1 text-sm font-medium ${
                                            isDarkMode
                                                ? "bg-stone-900 text-stone-300"
                                                : "bg-gray-200 text-gray-900"
                                        }`}
                                    >
                                        {edu.score}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Education;
