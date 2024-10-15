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
import { AiOutlineUsergroupAdd } from "react-icons/ai";

// Assuming your project structure is using the public directory to store images
export default function Intro() {
  const { ref } = useSectionInView("Skills", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      className="h-fit text-black text-start sm:mb-0 md:p-6 p-2 rounded-lg"
    >
      <div className="">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          {/* Assuming the image is placed in the public folder */}
          <img
            src="/ayush.jpeg" // Use the correct path based on your image location
            alt="Ayush's profile"
            className="w-16 h-16 md:w-32 md:h-32 lg:ms-6 rounded-full object-cover border border-gray-800 shadow-lg"
          />
        </motion.div>
        <div className="flex lg:grid w-full">
          <motion.h1
            className="md:pt-4 pt-0  px-2 md:px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800"
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
            <p className="md:pt-4 pt-0 text-xs sm:text-sm md:text-base">
              Ayush is a software engineer, actively working on SaaS products in
              industry in <b>Node.js</b> and <b>Next.js</b> environments, and
              creating <b>scalable</b> tech solutions using technologies like{" "}
              <b>
                <i>Docker, Kubernetes, and Redis.</i>
              </b>
            </p>
          </motion.h1>
        </div>
      </div>

      <motion.div
        className="flex justify-between md:pt-8 pt-4 flex-row gap-4 px-2 md:px-4 text-base md:text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="bg-gray-800 text-white hover:bg-white hover:text-black border border-black transition px-2 py-1 md:px-4 md:py-2 rounded-md text-sm flex items-center"
          href="https://cal.com/connect-ayush/15min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineUsergroupAdd className="mr-2" /> Book a Call
        </a>

        <div className="flex space-x-2">
          <a
            className="text-gray-700 hover:text-gray-800 transition"
            href="https://www.linkedin.com/in/ayushvidhale/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="text-2xl md:text-3xl" />
          </a>

          <a
            className="text-gray-700 hover:text-gray-800 transition"
            href="https://github.com/ayushvidhale"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="text-2xl md:text-3xl" />
          </a>

          <a
            className="text-gray-700 hover:text-gray-800 transition"
            href="https://x.com/ayushvidh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare className="text-2xl md:text-3xl" />
          </a>
        </div>
      </motion.div>
      <hr className="block md:hidden w-full border-gray-600 mt-4" />
    </section>
  );
}
