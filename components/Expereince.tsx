"use client";

import React, { useState } from "react";
import { Globe, Linkedin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BuildingIcon from "./icons/BuildingIcon";
import { Cpu } from "lucide-react";

interface Experience {
  id: number;
  icon: React.ReactNode;
  role: string;
  company: string;
  period: string;
  location: string;
  website: string;
  linkedin: string;
  tech: string[];
  summary: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    icon: <BuildingIcon />,
    role: "Full Stack Intern",
    company: "Globetripster",
    period: "June 2025 – Present",
    location: "Remote",
    website: "", // No website available
    linkedin: "", // No LinkedIn available
    tech: [
      "Spring Boot",
      "Java",
      "React",
      "TypeScript",
      "Redis",
      "Docker",
      "PostgreSQL",
      "OAuth",
    ],
    summary:
      "Building a travel booking platform for vacations, flights, hotels, itineraries, and activities.",
    details: [
      "Built scalable features with Spring Boot, Java, React, and TypeScript, ensuring robust architecture.",
      "Integrated 10+ APIs and optimized backend with Redis, Docker, OAuth, SQL, and PostgreSQL.",
      "Implemented AI-driven modules for recommendations and personalization.",
      "Led a 3-member dev team, managing agile sprints and delivering ahead of schedule.",
    ],
  },
  {
    id: 2,
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    role: "Freelance Web Developer",
    company: "Independent Project",
    period: "Mar 2025 – May 2025",
    location: "Remote",
    website: "", // optional
    linkedin: "", // optional
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    summary:
      "Designed and developed a fully responsive website focusing on clean UI, intuitive UX, and optimized performance.",
    details: [
      "Built a responsive web interface using React and Tailwind CSS with smooth animations via Framer Motion.",
      "Enhanced UX through modern layouts, intuitive navigation, and pixel-perfect responsiveness.",
      "Optimized frontend performance for faster load times and seamless user interaction.",
      "Delivered an independent project showcasing strong design sense and attention to user experience.",
    ],
  },

  {
    id: 3,
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    role: "Full Stack Intern",
    company: "Arevei Tech",
    period: "Aug 2024 – Feb 2025",
    location: "Remote",
    website: "https://arevei.com",
    linkedin: "https://www.linkedin.com/company/areveiofficial/",
    tech: [
      "Next.js",
      "MERN Stack",
      "TypeScript",
      "Tailwind CSS",
      "AWS",
      "Shadcn UI",
    ],
    summary:
      "Created e-commerce web apps for digital marketing clients to sell products worldwide.",
    details: [
      "Developed production-grade solutions using Next.js, React, TypeScript, MongoDB, Tailwind CSS, and AWS.",
      "Integrated 50+ APIs (auth, payments, cart, courier tracking) powering global e-commerce.",
      "Boosted API performance by 30% and enhanced UI/UX for 1,000+ users.",
      "Built tailored sites for clients to expand international sales reach.",
    ],
  },
];

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl sm:w-3/4 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-medium mb-4 bg-gradient-to-r from-blue-400 to-cyan-600 text-transparent bg-clip-text text-center sm:text-left">
          Experience
        </h2>
        <p className="text-gray-500 mb-12 text-sm sm:text-base text-center sm:text-left">
          Here&#39;s a timeline of my professional journey, showcasing my roles
          and contributions in blockchain and full-stack development.
        </p>

        {/* Experience Cards */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="p-6 sm:p-8 rounded-xl bg-[#1a1a1a] border border-white/10 hover:bg-neutral-800 transition cursor-pointer"
              style={{ borderLeft: "6px solid #153941" }}
              onClick={() => setSelectedExp(exp)}
              variants={cardVariants}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-lg sm:text-xl font-semibold">
                    {exp.icon}
                    {exp.role}
                    <span className="text-gray-400 font-normal">
                      · {exp.company}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400 mt-2">
                    {exp.period} · {exp.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                  {exp.website && (
                    <a
                      href={exp.website}
                      target="_blank"
                      className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-lg hover:bg-zinc-700"
                    >
                      <Globe size={16} /> Website
                    </a>
                  )}
                  {exp.linkedin && (
                    <a
                      href={exp.linkedin}
                      target="_blank"
                      className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-lg hover:bg-zinc-700"
                    >
                      <Linkedin size={16} /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-4 text-gray-300 text-sm sm:text-base">
                {exp.summary}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-zinc-800 text-xs sm:text-sm px-3 py-1 rounded-md text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedExp && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="bg-[#111] rounded-2xl p-6 sm:p-8 max-w-lg w-full relative border border-white/10 space-y-6 overflow-y-auto max-h-[90vh]">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  onClick={() => setSelectedExp(null)}
                >
                  <X size={22} />
                </button>

                {/* Title */}
                <div className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl font-bold">
                  {selectedExp.icon} {selectedExp.role}
                </div>
                <p className="text-gray-400">{selectedExp.company}</p>

                {/* Links */}
                <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                  {selectedExp.website && (
                    <a
                      href={selectedExp.website}
                      target="_blank"
                      className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-lg hover:bg-zinc-700"
                    >
                      <Globe size={16} /> Website
                    </a>
                  )}
                  {selectedExp.linkedin && (
                    <a
                      href={selectedExp.linkedin}
                      target="_blank"
                      className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-lg hover:bg-zinc-700"
                    >
                      <Linkedin size={16} /> LinkedIn
                    </a>
                  )}
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="font-semibold mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-zinc-800 text-xs sm:text-sm px-3 py-1 rounded-md text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h3 className="font-semibold mb-2">Key Achievements</h3>
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.1 } },
                    }}
                    className="list-disc pl-5 space-y-2 text-gray-500 text-sm sm:text-base"
                  >
                    {selectedExp.details.map((d, i) => (
                      <motion.li
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {d}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
