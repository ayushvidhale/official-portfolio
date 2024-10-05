"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-white max-w-[46rem] border border-gray-200 rounded-xl overflow-hidden relative p-5 shadow-md hover:bg-gray-50 transition">
        <div className="flex items-start">
          {/* Left section with logo/image */}
          <div className="mr-4">
            <img
              src={imageUrl}
              alt="Project Logo"
              // width={60}
              // height={60}
              className="rounded-lg border w-40 h-40 object-cover"
            />
          </div>
          {/* Main Content */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>
          {/* Price or Additional Tag */}
          <div className="ml-auto flex items-center">
            <span className="text-sm font-semibold bg-blue-100 text-blue-600 py-1 px-3 rounded-full">
              $173/mo
            </span>
          </div>
        </div>

        {/* Graph/Visualization at the bottom */}
        <div className="mt-6">
          <div className="relative h-24 w-full bg-gray-100 rounded-lg p-2">
            {/* Placeholder for the chart (simple illustration) */}
            <svg viewBox="0 0 100 30" className="w-full h-full text-rose-400">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                points="0,30 10,25 20,20 30,10 40,12 50,18 60,8 70,2 80,5 90,25 100,10"
              />
            </svg>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
