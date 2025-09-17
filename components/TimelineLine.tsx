"use client";

import { motion } from "framer-motion";

export default function TimelineLine({ height }: { height?: string }) {
  const pathLength = 1;

  return (
    <motion.svg
      viewBox="0 0 40 3156"
      width="40"
      height={height || "100%"}
      className="ml-4 block"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="gradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="0"
          y1="0"
          y2="3156"
        >
          <stop stopColor="#18CCFC" stopOpacity="0" />
          <stop offset="0.15" stopColor="#18CCFC" />
          <stop offset="0.4" stopColor="#6344F5" />
          <stop offset="0.7" stopColor="#AE48FF" />
          <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background faint line */}
      <path
        d="M 20 0 V 3156"
        fill="none"
        stroke="#9091A0"
        strokeOpacity="0.2"
        strokeWidth="3"
      />

      {/* Animated gradient line */}
      <motion.path
        d="M 20 0 V 3156"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={pathLength}
        strokeDashoffset={pathLength}
        initial={{ strokeDashoffset: pathLength }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />

      {/* Glow effect */}
      <motion.path
        d="M 20 0 V 3156"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="10"
        strokeOpacity="0.3"
        filter="blur(8px)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.svg>
  );
}
