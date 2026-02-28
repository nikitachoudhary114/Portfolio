"use client";

import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tech: string[];
  status?: string;
  link?: string;
  githubLink?: string;
  highlight?: boolean;
}

const personalProjects: Project[] = [
  {
    title: "LeetPeers",
    status: "In Development",
    link: "",
    githubLink: "https://github.com/nikitachoudhary114/Leetpeers",
    description:
      "Collaborative coding platform tracking daily LeetCode progress in groups, with streaks, badges, real-time chat, video calls, whiteboard collaboration, and AI-assisted coding help.",
    tech: [
      "Next.js",
      "Graphql",
      "WebRTC",
      "Redis",
      "Leetcode API",
      "PostgreSQL",
      "Excalidraw",
    ],
  },
  {
    title: "Weekendly",
    link: "https://kairos-azure-beta.vercel.app/",
    githubLink: "https://github.com/nikitachoudhary114/kairos",
    description:
      "Interactive weekend planner app with drag-and-drop scheduling, dark/light themes, offline PWA support, exportable plans, and strong UI polish.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "ShadCN UI",
      "Lucide React",
      "LocalStorage",
      "PWA",
    ],
  },
  {
    title: "MedifyPro",
    link: "https://medifypro.vercel.app/",
    githubLink: "https://github.com/nikitachoudhary114/MedifyPro",
    description:
      "Full-stack healthcare platform for appointments, Razorpay payments, SOS alerts via Twilio, Google Maps integration, and real-time chat.",
    tech: [
      "MERN",
      "Razorpay",
      "Twilio",
      "Google Maps API",
      "Socket.io",
      "Cron Jobs",
    ],
  },
  {
    title: "Smart Attendance System",
    link: "https://github.com/nikitachoudhary114/mini-project-attendance-system",
    githubLink: "",
    description:
      "IoT-based attendance system using ESP32 and keypad with MCQ-based attendance marking and MongoDB storage.",
    tech: ["ESP32", "MERN"],
  },
  {
    title: "Tomato",
    link: "https://food-del-frontend-z00t.onrender.com/",
    githubLink: "https://github.com/nikitachoudhary114/food-del",
    description:
      "Full-stack food delivery app with Stripe payments, order management, and admin dashboard.",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
  },
  {
    title: "Simon Says Game",
    link: "",
    githubLink: "https://github.com/nikitachoudhary114/game",
    description:
      "Web-based memory game with animated sequences and responsive UI.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const clientProjects: Project[] = [
  {
    title: "Jenni – E-Commerce Platform",
    link: "https://jenii.in/",
    description:
      "Custom jewelry store built using Next.js, TypeScript, and Tailwind with secure authentication and 50+ API integrations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "AWS", "Node.js"],
    highlight: true,
  },
  {
    title: "Arevei Company Website",
    link: "https://arevei-front-new.vercel.app/",
    description:
      "Company website built in MERN stack with booking system and project showcase.",
    tech: ["MERN", "TypeScript", "TailwindCSS"],
  },
  {
    title: "JustOrder",
    link: "https://justorder-alpha.vercel.app/",
    description:
      "Freelance printed clothing store frontend built in React within one week.",
    tech: ["React", "TailwindCSS"],
  },
];

const hoverGradients = [
  "bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-rose-400/20",
  "bg-gradient-to-r from-sky-500/20 via-cyan-400/20 to-teal-300/20",
  "bg-gradient-to-r from-emerald-500/20 via-lime-400/20 to-yellow-300/20",
  "bg-gradient-to-r from-indigo-600/20 via-purple-500/20 to-pink-400/20",
  "bg-gradient-to-r from-orange-500/20 via-amber-400/20 to-rose-300/20",
  "bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-violet-500/20",
  "bg-gradient-to-r from-teal-400/20 via-sky-400/20 to-indigo-300/20",
];

export default function Projects() {
  const [activeTab, setActiveTab] =
    useState<"personal" | "client">("personal");

  const projects =
    activeTab === "personal" ? personalProjects : clientProjects;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl sm:w-3/4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-medium mb-6 mt-28 
          bg-gradient-to-r from-blue-400 to-cyan-600 
          text-transparent bg-clip-text text-center sm:text-left"
        >
          Projects
        </motion.h2>

        {/* Tabs */}
        <div className="flex mb-8 border border-neutral-700 rounded-lg overflow-hidden">
          {["personal", "client"].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab as "personal" | "client")
                }
                className={`flex-1 py-2 text-sm sm:text-base transition ${
                  isActive
                    ? "bg-neutral-800 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {tab === "personal"
                  ? "Personal Projects"
                  : "Client Work"}
              </button>
            );
          })}
        </div>

        {/* Project Cards */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="relative p-5 rounded-xl border border-neutral-700 bg-neutral-900/80 group overflow-hidden"
            >
              <div
                className={`absolute -inset-[1px] ${
                  hoverGradients[i % hoverGradients.length]
                } opacity-0 group-hover:opacity-100 transition duration-500 blur-sm rounded-xl`}
              />

              {/* Title Row */}
              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg font-semibold">
                    {proj.title}
                  </h3>

                  {(proj.link || proj.githubLink) && (
                    <a
                      href={proj.link || proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {proj.githubLink && (
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {proj.status && (
                  <span className="text-xs bg-blue-900/40 text-blue-400 px-2 py-0.5 rounded-md">
                    {proj.status}
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm text-gray-400 relative z-10">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-800 text-xs px-2 py-1 rounded-md text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
