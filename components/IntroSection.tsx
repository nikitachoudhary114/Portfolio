"use client";

import Image from "next/image";
import { Github, Linkedin, Twitter, Download } from "lucide-react";
import React from "react";
import LeetCodeIcon from "./icons/LeetcodeIcon";
import { motion } from "framer-motion";

export default function IntroSection() {
  const socialIcons = [
    {
      href: "https://x.com/Nikita25586",
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
    },
    {
      href: "https://www.linkedin.com/in/nikita-choudhary2005/",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/nikitachoudhary114",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://leetcode.com/u/nikitac_364/",
      icon: <LeetCodeIcon />,
      label: "LeetCode",
    },
  ];

  return (
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
      <div className="text-center sm:text-left space-y-8 sm:space-y-10 max-w-3xl sm:w-3/4 mx-auto px-2 sm:px-6">
        {/* Top Row: Profile + Socials */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Image */}
          <motion.div
            className="relative h-24 w-24 sm:h-28 sm:w-28 flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/profile.png"
              alt="Profile picture"
              fill
              className="rounded-3xl object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-white">
            {socialIcons.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              >
                <div className="p-3 rounded-lg transition group-hover:bg-gray-600">
                  {s.icon}
                </div>
                <span className="absolute -top-12 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  {s.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Name + Resume Button */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-start w-full">
            <div className="flex flex-col items-center sm:items-start w-full">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 text-center sm:text-left w-full">
              Hi, I&apos;m Nikita
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-gray-400 text-center sm:text-left w-full">
              20, Pune | Full Stack Developer
              </p>
            </div>

            <motion.a
              href="/Nikita_Choudhary.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 mt-2 sm:mt-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/70 transition-all duration-300"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Resume
            </motion.a>
          </div>

          {/* Intro Text */}
          <motion.p
            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            &rarr; Passionate full-stack developer creating modern,
            high-performance web apps with clean design, accessibility, and a
            focus on meaningful user experiences.
          </motion.p>

          <motion.p
            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            &rarr; Exploring AI, Web3, and open-source contributions—always
            excited to collaborate and build impactful projects!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
