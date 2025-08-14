"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Award, Users } from "lucide-react";

interface Activity {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Vice President, CodeStrom",
    description:
      "Led the college coding club (2023–2024), mentoring 100+ students, conducting sessions on Web Development, Web3, ML, and Competitive Programming.",
    icon: <Users className="w-6 h-6 text-green-400" />,
  },
  {
    id: 2,
    title: "Competitive Programming",
    description:
      "Solved 600+ programming problems across LeetCode (300+), GeeksforGeeks, and Codeforces.",
    icon: <Code className="w-6 h-6 text-blue-400" />,
  },
  {
    id: 3,
    title: "Hackathon Achievement",
    description:
      "Top 10 in CodeLite Hackathon among 50 teams; built a RAG-based AI model to predict crop types and prices using Next.js, ChromaDB, and LLaMA.",
    icon: <Award className="w-6 h-6 text-yellow-400" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ExtraCurricular() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-white ">
      <div className="max-w-3xl sm:w-3/4 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-medium mb-10 bg-gradient-to-r from-blue-400 to-cyan-600 text-transparent bg-clip-text text-center sm:text-left">
          Extra-Curricular / Achievments
        </h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {activities.map((act) => (
            <motion.div
              key={act.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="p-6 rounded-xl bg-[#1a1a1a] border border-white/10 hover:shadow-xl flex gap-4 cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-rose-400/30 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl rounded-xl"></div>
              <div className="flex-shrink-0 z-10">{act.icon}</div>
              <div className="z-10">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {act.title}
                </h3>
                <p className="text-gray-300 mt-1 text-sm sm:text-base">
                  {act.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
