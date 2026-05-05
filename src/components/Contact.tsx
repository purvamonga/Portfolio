import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

interface ContactProps {
    isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
    return (
        <div id="contact" className="w-full py-20 flex flex-col items-center">
            <h2
                className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all ${
                    isDarkMode ? "text-white" : "text-black"
                }`}
            >
                Contact Me
            </h2>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center px-4">
                <a
                    href="mailto:monga.purva@gmail.com"
                    className={`flex items-center gap-4 p-6 rounded-2xl shadow-lg transition-transform hover:-translate-y-2 ${
                        isDarkMode ? "bg-stone-900 text-white" : "bg-white text-black border border-gray-200"
                    }`}
                >
                    <Mail size={32} />
                    <div>
                        <p className="font-semibold text-lg">Email</p>
                        <p className="text-sm opacity-80">monga.purva@gmail.com</p>
                    </div>
                </a>

                <div
                    className={`flex items-center gap-4 p-6 rounded-2xl shadow-lg transition-transform hover:-translate-y-2 ${
                        isDarkMode ? "bg-stone-900 text-white" : "bg-white text-black border border-gray-200"
                    }`}
                >
                    <Phone size={32} />
                    <div>
                        <p className="font-semibold text-lg">Phone</p>
                        <p className="text-sm opacity-80">+91 9812442279</p>
                    </div>
                </div>

                <a
                    href="https://linkedin.com/in/purvamonga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-6 rounded-2xl shadow-lg transition-transform hover:-translate-y-2 ${
                        isDarkMode ? "bg-stone-900 text-white" : "bg-white text-black border border-gray-200"
                    }`}
                >
                    <Linkedin size={32} />
                    <div>
                        <p className="font-semibold text-lg">LinkedIn</p>
                        <p className="text-sm opacity-80">purvamonga</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Contact;
