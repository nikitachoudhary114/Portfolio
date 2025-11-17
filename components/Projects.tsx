"use client";

import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tech: string[];
  status?: string;
  link?: string;
  highlight?: boolean;
}

const personalProjects: Project[] = [
  {
    title: "LeetPeers",
    status: "In Development",
    link: "https://github.com/nikitachoudhary114/Leetpeers",
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
    link: "https://github.com/nikitachoudhary114/kairos",
    description:
      "An interactive weekend planner app to design personalized schedules with drag-and-drop activities, light/dark themes, offline PWA support, weekend summary, and exportable image plans. Built for Atlan’s Frontend Challenge with focus on UI polish, accessibility, and responsiveness.",
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
    link: "https://github.com/nikitachoudhary114/MedifyPro",
    description:
      "Full-stack healthcare platform for booking appointments, Razorpay payments, SOS alerts via Twilio, pharmacy & lab mapping with Google Maps, and real-time doctor-patient chat.",
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
    description:
      "IoT-based attendance solution using ESP32 and keypad, where students answer MCQs to mark attendance, with data stored in MongoDB and faculty able to manage questions online.",
    tech: ["ESP32", "MERN"],
  },
  {
    title: "Tomato",
    link: "https://github.com/nikitachoudhary114/food-del",
    description:
      "Full-stack food delivery app with React, Node.js, Stripe payments, order management, and an admin dashboard to monitor restaurants, users, and orders.",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
  },
  {
    title: "Simon Says Game",
    link: "https://github.com/nikitachoudhary114/game",
    description:
      "Web-based memory game that challenges players to replicate sequences of colors and sounds, built with interactive animations and a responsive UI.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const clientProjects: Project[] = [
  {
    title: "Jenni – E-Commerce Platform",

    link: "https://jenii.in/",
    description:
      "Custom jewelry store built during internship at Arevei Tech using Next.js, TypeScript, and Tailwind. Integrated 50+ third-party APIs, optimized DB queries, and implemented secure login and role-based access.",
    tech: ["Next.js", "TypeScript", "Tailwind", "AWS", "Node.js"],
    highlight: true,
  },
  {
    title: "Arevei Company Website",
    link: "https://arevei-front-new.vercel.app/",
    description:
      "Company website for booking, showcasing previous works, and company details. Built in MERN stack with TypeScript.",
    tech: ["MERN", "TypeScript", "TailwindCSS"],
  },
  {
    title: "JustOrder",
    link: "https://justorder-alpha.vercel.app/",
    description:
      "Freelance project — printed shirt, hoodies selling website frontend completed in React within 1 weeks.",
    tech: ["React", "TailwindCSS"],
  },
];

// Gradient styles array (you can cycle them for each project)
const hoverGradients = [
  // Royal Violet → Magenta → Coral
  "bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-rose-400/20",

  // Ocean Blue → Cyan → Mint
  "bg-gradient-to-r from-sky-500/20 via-cyan-400/20 to-teal-300/20",

  // Emerald → Lime → Yellow
  "bg-gradient-to-r from-emerald-500/20 via-lime-400/20 to-yellow-300/20",

  // Deep Indigo → Purple → Pink
  "bg-gradient-to-r from-indigo-600/20 via-purple-500/20 to-pink-400/20",

  // Sunset Orange → Amber → Rose
  "bg-gradient-to-r from-orange-500/20 via-amber-400/20 to-rose-300/20",

  // Electric Blue → Indigo → Violet
  "bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-violet-500/20",

  // Teal → Blue → Lavender
  "bg-gradient-to-r from-teal-400/20 via-sky-400/20 to-indigo-300/20",
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"personal" | "client">("personal");
  const projects = activeTab === "personal" ? personalProjects : clientProjects;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
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
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-medium mb-6 mt-28 
             bg-gradient-to-r from-blue-400 to-cyan-600 
             text-transparent bg-clip-text text-center sm:text-left 
             leading-tight"
        >
          Projects
        </motion.h2>
        <p className="text-slate-500 mb-8 text-sm sm:text-base text-center sm:text-left">
          A showcase of my full-stack creations — from personal passion projects
          to professional client work.
        </p>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row w-full mb-8 border border-neutral-700 rounded-lg overflow-hidden">
          {["personal", "client"].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "personal" | "client")}
                className={`relative flex-1 py-2 sm:py-1 text-base sm:text-lg font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-neutral-800"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10 text-sm sm:text-base">
                  {tab === "personal" ? "Personal Projects" : "Client Work"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Cards grid with staggered animation */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((proj, i) => (
            <motion.a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative p-5 rounded-xl border border-neutral-700 bg-neutral-900/80 group block overflow-hidden"
            >
              {/* Glow layer */}
              <div
                className={`absolute -inset-[1px] ${
                  hoverGradients[i % hoverGradients.length]
                } 
                opacity-0 group-hover:opacity-100 transition duration-500 blur-sm rounded-xl`}
              ></div>

              {/* Title Row */}
              <div className="flex items-start justify-between z-10 relative">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {proj.title}
                  </h3>
                  {proj.link && (
                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition duration-300" />
                  )}
                </div>
                {proj.status && (
                  <span className="text-xs bg-blue-900/40 text-blue-400 px-2 py-0.5 rounded-md">
                    {proj.status}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-400 z-10 relative">
                {proj.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4 z-10 relative">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-800 text-xs sm:text-sm px-2 py-1 rounded-md text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
