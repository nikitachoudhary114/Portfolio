"use client";

import { motion } from "framer-motion";
import { Code, Layers, Database, Server, Wrench, Cpu } from "lucide-react";

export const skills = [
  {
    title: "Languages",
    icon: <Code className="w-7 h-7 text-blue-400" />,
    items: [
      "C",
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "Rust",
      "Solidity",
    ],
  },
  {
    title: "Frontend",
    icon: <Layers className="w-7 h-7 text-cyan-400" />,
    items: [
      "HTML",
      "CSS",
      "Bootstrap",
      "React.js",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "ShadCN / Radix UI",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-7 h-7 text-purple-400" />,
    items: [
      "Node.js",
      "Express.js",
      "Next.js",
      "JWT",
      "OAuth",
      "Socket.io",
      "WebRTC",
      "GraphQL",
      "REST API Design",
      "Microservices Architecture",
      "Razorpay",
      "Stripe",
      "Google APIs",
      "Spring Boot",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-7 h-7 text-green-400" />,
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Firebase / Firestore",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-7 h-7 text-pink-400" />,
    items: [
      "Git",
      "GitHub",
      "Cloudinary",
      "MongoDB Atlas",
      "Render",
      "Vercel",
      "Docker",
      "Kubernetes",
      "Postman",
      "VS Code / JetBrains IDEs",
      "Prisma Studio / GraphQL Playground",
      "AWS / Azure",
    ],
  },
  {
    title: "Web3 & Blockchain",
    icon: <Cpu className="w-7 h-7 text-yellow-400" />,
    items: [
      "Solidity",
      "Rust",
      "Ethereum",
      "Smart Contracts",
      "Metamask",
      "Blockchain Development",
    ],
  },
];

export default function TechStack() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="text-white mb-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl sm:w-3/4 mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-medium mb-4 mt-28 text-center sm:text-left text-blue-400"
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-slate-400 mb-12 text-base sm:text-lg text-center sm:text-left"
        >
          A curated toolkit of technologies I use to build{" "}
          <span className="text-cyan-400">scalable</span>,{" "}
          <span className="text-purple-400">modern</span> applications.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              transition={{ duration: 1, ease: "easeOut", delay: idx * 0.25 }}
              className="relative p-6 rounded-xl border border-neutral-700 bg-neutral-900/70 group"
            >
              {/* Title Row */}
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <ul className="grid grid-cols-2 gap-2">
                {category.items.map((skill, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-300 bg-neutral-800/60 px-3 py-1 rounded-md border border-gray-700 hover:text-white hover:border-white transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
