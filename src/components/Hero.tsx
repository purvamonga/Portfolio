import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion"; // Assuming framer-motion is available in the user's environment

// Placeholder image for the profile avatar
const PLACEHOLDER_AVATAR = "https://placehold.co/200x200/FF5733/FFFFFF?text=Profile";
import Profile from "../assets/Profile.jpg";
// Placeholder for resume PDF
const PLACEHOLDER_RESUME_PDF = "/Purva(ML)_Samsung.pdf";

import ProfileCard from "./ui/ProfileCard";

// --- ShinyText Component ---
// This component applies a shine effect to its text content.
interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;
    return (
        <div
            className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: animationDuration,
            }}
        >
            {text}
        </div>
    );
};


// --- Hero Component ---
interface HeroProps {
  isDarkMode: boolean;
}

// Define variants for framer-motion animations
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <div id="Hero" className="mt-10 mb-10 px-4 sm:px-6 md:px-10 lg:px-30">
      <div className="flex flex-col lg:flex-row">
        {/* Empty div for spacing on larger screens */}

<div className="w-full px-40">
  <div id="intro" className="pb-4 lg:mb-36">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-8" style={{ fontFamily: 'Outfit' }}>
      
      {/* Text Section — SEO: itemScope Person schema */}
      <div
        className="w-full lg:w-2/3 text-center lg:text-left"
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* H1 — primary keyword: AI ML developer India */}
        <div className="text-[1.875rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[5rem] font-bold">
          <h1
            className={`${isDarkMode ? "text-white" : "text-black"}`}
            style={{ display: "inline-block", fontFamily: "Raleway" }}
            itemProp="name"
            aria-label="Purva Monga — AI/ML Developer and Data Science Portfolio"
          >
            Purva
          </h1>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {/* H2 subtitle — secondary keyword: machine learning deep learning data science */}
          <div className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.875rem] lg:text-[2.25rem] font-semibold mt-2">
            <motion.h2
              variants={childVariants}
              className={`bg-gradient-to-r ${
                isDarkMode
                  ? "from-stone-300 to-stone-600"
                  : "from-black to-gray-700"
              } bg-clip-text text-transparent`}
              itemProp="jobTitle"
            >
              <ShinyText text="AI/ML Enthusiast & Developer" />
            </motion.h2>
          </div>

          {/* Bio — SEO: keyword-rich description with schema itemProp */}
          <div
            className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] font-light mt-3 px-2 sm:px-0"
            itemProp="description"
          >
            <motion.p
              variants={childVariants}
              className={`${isDarkMode ? "text-stone-300" : "text-gray-700"} font-outfit`}
            >
              I'm an undergraduate{" "}
              <strong className={isDarkMode ? "text-blue-400" : "text-blue-700"}>
                machine learning &amp; AI developer
              </strong>{" "}
              based in{" "}
              <span itemProp="addressLocality">
                <strong className={isDarkMode ? "text-blue-400" : "text-blue-700"}>India</strong>
              </span>
              , passionate about{" "}
              <strong>deep learning</strong>, <strong>data science</strong>, and building
              intelligent systems that solve real-world problems.
            </motion.p>
            <motion.p
              variants={childVariants}
              className={`${isDarkMode ? "text-stone-300" : "text-gray-700"} mt-2 font-outfit`}
            >
              With hands-on experience in{" "}
              <strong>Python</strong>,{" "}
              <strong>Convolutional Neural Networks (CNNs)</strong>, and full-stack development
              using <strong>React</strong> &amp; <strong>Node.js</strong>, I build end-to-end
              <strong> AI solutions</strong> — from data preprocessing pipelines to production-ready
              web applications.
            </motion.p>
            <motion.p
              variants={childVariants}
              className={`${isDarkMode ? "text-stone-300" : "text-gray-700"} mt-2 font-outfit`}
            >
              🔗 Always learning. Always innovating.
            </motion.p>
          </div>

          {/* Resume CTA — aria-label for accessibility & crawlability */}
          <div className="mt-5 flex flex-wrap gap-3 justify-center lg:justify-start">
            <motion.a
              variants={childVariants}
              href={PLACEHOLDER_RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Purva Monga's Machine Learning Resume (PDF)"
              className={`px-5 py-2.5 font-semibold rounded-md transition-all ${
                isDarkMode
                  ? "bg-stone-300 text-black hover:bg-stone-400"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              View Resume
            </motion.a>
            <motion.a
              variants={childVariants}
              href="#articles"
              aria-label="Read Purva Monga's data science and machine learning articles"
              className={`px-5 py-2.5 font-semibold rounded-md border transition-all ${
                isDarkMode
                  ? "border-stone-400 text-stone-300 hover:bg-stone-800"
                  : "border-gray-800 text-gray-800 hover:bg-gray-100"
              }`}
            >
              Read Articles
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Profile Section */}
      <div className="w-full h-full lg:w-1/3 flex justify-center">
        <ProfileCard
          avatarUrl={Profile}
          miniAvatarUrl="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000"
          name="Purva"
          title="AI/ML Enthusiast"
          handle="purvamonga"
          status="Available"
          contactText="Let's Talk"
          onContactClick={() => console.log("Contact button clicked!")}
        />
      </div>
    </div>
  </div>
</div>
</div>
    </div>
    
  );
};

export default Hero;
