"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaUsers } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  websiteUrl,
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
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      className="group"
    >
      <a target="_blank" rel="noopener noreferrer" href={websiteUrl}>
        <div className="bg-white hover:bg-gray-50 h-full w-full text-start rounded-3xl border shadow-sm p-10">
          <div className="flex space-x-4 mb-4">
            <img className="w-8 h-8" src={imageUrl} />
            <div className="flex justify-between w-full">
              <h1 className="text-lg text-gray-700 font-semibold ">
                {" "}
                {title}{" "}
              </h1>
              <h3 className="flex whitespace-nowrap font-bold text-green-600">
                {" "}
                50+ active users
              </h3>
            </div>
          </div>
          <p className="text-sm text-gray-400"> {description}</p>
        </div>
      </a>
    </motion.div>
  );
}
