import React, { useEffect, useRef, useState } from "react";

interface CertificationsProps {
    isDarkMode: boolean;
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

const Certifications: React.FC<CertificationsProps> = ({ isDarkMode }) => {
    const certs = [
        "Postman API Fundamentals Student Expert",
        "Fundamentals of Digital Marketing – Google"
    ];

    const { ref, inView } = useInView();

    return (
        <div
            id="certifications"
            className="px-4 sm:px-6 lg:px-12 py-20 w-full flex flex-col items-center"
        >
            <h2
                className={`text-3xl sm:text-4xl font-bold text-center mb-16 transition-all ${
                    isDarkMode ? "text-white" : "text-black"
                }`}
            >
                Certifications
            </h2>

            <div
                ref={ref}
                className={`flex flex-col space-y-6 w-full max-w-2xl transition-all duration-700 ${
                    inView ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
            >
                {certs.map((cert, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-lg border-l-4 transition-all hover:-translate-y-1 ${
                            isDarkMode
                                ? "bg-stone-900 border-stone-500 text-white"
                                : "bg-white border-black text-black"
                        }`}
                    >
                        <h3 className="text-xl font-semibold">{cert}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
