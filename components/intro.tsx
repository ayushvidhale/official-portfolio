"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsMedium } from "react-icons/bs";
import { FaGithubSquare, FaMedium, FaTwitterSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaBlog,
  FaEnvelope,
  FaPodcast,
  FaUsers,
} from "react-icons/fa"; // Import icons from react-icons
import { TbMessageDots } from "react-icons/tb";

export default function Intro() {
  const { ref } = useSectionInView("Skills", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      className="h-fit text-black text-start sm:mb-0 scroll-mt-[100rem] md:p-6 p-2 rounded-lg"
    >
      <div className="flex items-center justify-start">
        <div className="flex lg:grid w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <img
              src="./ayush.jpeg"
              alt="Ayush's profile"
              className="w-16 h-16 md:w-32 md:h-32 lg:ms-6 rounded-full object-cover border border-gray-600 shadow-lg"
            />
          </motion.div>

          <motion.h1
            className="mt-4 px-2 md:px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href={"/"}
              className="font-bold hover:underline text-gray-900"
            >
              Ayush Vidhale
            </Link>
            <br />
            <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600">
              Building{" "}
              <span className="font-semibold">scalable tech solutions</span> in
              public, passionate about the latest <u>technologies</u>, and{" "}
              <span className="font-extrabold">frameworks</span>.
            </p>
          </motion.h1>
        </div>
      </div>

      <motion.div
        className="flex pt-4 xs:pt-0 flex-row gap-4 px-2 md:px-4 text-base md:text-lg font-medium justify-start"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="flex items-center gap-2 px-2 py-2 bg-white text-gray-700 border rounded-full shadow-md hover:bg-gray-100 transition"
          href="https://www.linkedin.com/in/ayushvidhale/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="text-xl md:text-2xl" />
        </a>

        <a
          className="flex items-center gap-2 px-2 py-2 bg-white text-gray-700 border rounded-full shadow-md hover:bg-gray-100 transition"
          href="https://github.com/ayushvidhale"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="text-xl md:text-3xl" />
        </a>

        <a
          className="flex items-center gap-2 px-2 py-2 bg-white text-gray-700 border rounded-full shadow-md hover:bg-gray-100 transition"
          href="https://x.com/ayushvidh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare className="text-xl md:text-3xl" />
        </a>
      </motion.div>
    </section>
  );
}
