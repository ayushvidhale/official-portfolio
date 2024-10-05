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

export default function Intro() {
  const { ref } = useSectionInView("Skills", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      className=" h-screen text-black text-start sm:mb-0 scroll-mt-[100rem] bg-gray-50 p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center justify-start">
        <div className="relative">
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
              className="h-32 w-32 rounded-2xl object-cover border border-gray-600 shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-3xl font-semibold text-gray-800 sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-2xl text-gray-900">Ayush Vidhale</span>
        <br />
        <p className="mt-2 text-sm text-gray-600">
          Building{" "}
          <span className="font-semibold">
            <span className="font-extrabold text-green-800">scalable</span> tech
            solutions
          </span>{" "}
          in public, passionate about the latest <u>technologies</u>,{" "}
          <i>frameworks</i>, and driving{" "}
          <span className="font-extrabold">innovation</span>.
        </p>
      </motion.h1>

      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row items-center gap-4 my-10"
      >
        <a
          href="https://your-startup-2.com"
          className="inline-flex whitespace-nowrap items-center justify-center p-2 text-base font-medium text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 bg-gray-100 border border-gray-300"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-NCONl9jSvVEtzY1sHVexfLgIEsKXs6umg&s"
            alt="Startup 2 Logo"
            className="w-8 h-8 rounded-full border me-3"
          />
          <span className="w-full">WindCraftUI</span>
          <svg
            className="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>

        <a
          href="https://your-startup-2.com"
          className="inline-flex whitespace-nowrap items-center justify-center p-2 text-base font-medium text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 bg-gray-100 border border-gray-300"
        >
          <img
            src="https://yt3.googleusercontent.com/Zu-Q5JdaiT6qM53zk80_15YSXMw5xUqHO2532hbU9WNCx3vIaak0gTg_UW9mcZ77GdAteEyoVg=s900-c-k-c0x00ffffff-no-rj"
            alt="Startup 2 Logo"
            className="w-8 h-8 rounded-full border me-3"
          />
          <span className="w-full">Gatiki Club</span>
          <svg
            className="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="my-10"
      >
        {/* Unordered list of links */}
        <ul className="flex flex-col gap-4 text-md">
          <motion.li
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/"
              className="flex items-center text-gray-500 hover:text-gray-900 group"
            >
              <FaProjectDiagram className="w-5 h-5 mr-2 group-hover:text-green-500 transition-colors" />
              <span className="underline group-hover:no-underline">Home</span>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/experience"
              className="flex items-center text-gray-500 hover:text-gray-900 group"
            >
              <FaLaptopCode className="w-5 h-5 mr-2 group-hover:text-blue-500 transition-colors" />
              <span className="underline group-hover:no-underline">
                Experience
              </span>
            </Link>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/events"
              className="flex items-center text-gray-500 hover:text-gray-900 group"
            >
              <FaUsers className="w-5 h-5 mr-2 group-hover:text-pink-500 transition-colors" />
              <span className="underline group-hover:no-underline">
                Public Events
              </span>
            </Link>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="https://medium.com/@ayushvidhale"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-gray-500 hover:text-gray-900 group"
            >
              <BsMedium className="w-5 h-5 mr-2 group-hover:text-yellow-500 transition-colors" />
              <span className="underline group-hover:no-underline">Blogs</span>
            </a>
          </motion.li>

          {/* <motion.li
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="#contact"
              className="flex items-center text-gray-500 hover:text-gray-900 group"
            >
              <FaEnvelope className="w-5 h-5 mr-2 group-hover:text-red-500 transition-colors" />
              <span className="underline group-hover:no-underline">
                Contact
              </span>
            </a>
          </motion.li> */}

          <motion.li
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/podcasts"
              className="flex items-center text-gray-500 hover:text-gray-900 group"
            >
              <FaPodcast className="w-5 h-5 mr-2 group-hover:text-purple-500 transition-colors" />
              <span className="underline group-hover:no-underline">
                Podcasts (Coming Soon)
              </span>
            </Link>
          </motion.li>
        </ul>
      </motion.div>

      <motion.div
        className="flex mt-10 flex-row gap-4 px-4 text-lg font-medium"
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
          <BsLinkedin className="text-2xl" />
        </a>

        <a
          className="flex items-center gap-2 px-2 py-2 bg-white text-gray-700 border rounded-full shadow-md hover:bg-gray-100 transition"
          href="https://github.com/ayushvidhale"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="text-3xl" />
        </a>

        <a
          className="flex items-center gap-2 px-2 py-2 bg-white text-gray-700 border rounded-full shadow-md hover:bg-gray-100 transition"
          href="https://x.com/ayushvidh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare className="text-3xl" />
        </a>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center mt-10 gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="/contact"
          className="group bg-rose-600 whitespace-nowrap flex text-gray-100 text-base px-4 py-2 rounded-lg  outline-none hover:bg-rose-500 transition shadow-md hover:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get in touch
          <BsArrowRight className="ml-2 my-auto transition-opacity duration-300" />
        </Link>
      </motion.div>
    </section>
  );
}
