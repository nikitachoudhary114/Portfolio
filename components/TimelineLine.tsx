"use client";
import { motion } from "framer-motion";

export default function TimelineLine({ height }: { height?: string }) {
  const pathLength = 1; // relative length for framer-motion
  return (
    <motion.svg
      viewBox="0 0 20 3156"
      width="20"
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
          y2="100%"
        >
          <stop stopColor="#18CCFC" stopOpacity="0" />
          <stop stopColor="#18CCFC" />
          <stop offset="0.325" stopColor="#6344F5" />
          <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.path
        d="M 1 0V -36 l 18 24 V 2524.8 l -18 24V 3156"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="1.25"
        strokeDasharray={pathLength}
        strokeDashoffset={pathLength}
        initial={{ strokeDashoffset: pathLength }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
