"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative lg:w-[60%] w-[90%] mx-auto pt-10"
    >
      

      <div ref={ref} className="relative space-y-20 pb-20">
        {data.map((item, index) => (
          <div key={index} className="relative">
            {/* Animated dot */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 top-0 h-3 w-3 bg-black dark:bg-white rounded-full shadow-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Card */}
            <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 mt-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                {item.title}
              </h3>
              <div className="text-neutral-700 dark:text-neutral-300">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[2px] bg-neutral-200 dark:bg-neutral-800">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
