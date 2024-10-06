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
      className=" h-fit text-black text-start sm:mb-0 scroll-mt-[100rem] md:p-6 p-2 rounded-lg"
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
              className="md:h-32 md:w-32 w-16 h-16 ms:0 lg:ms-6 rounded-full object-cover border border-gray-600 shadow-lg"
            />
          </motion.div>

          <motion.h1
            className="mb-10 mt-4 px-4 text-3xl text-gray-800 sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href={"/"}
              className="font-bold text-3xl text-gray-900 hover:underline"
            >
              Ayush Vidhale
            </Link>
            <br />
            <p className="mt-2 text-sm text-gray-600">
              Building{" "}
              <span className="font-semibold">
                <span className="">scalable</span> tech solutions
              </span>{" "}
              in public, passionate about the latest <u>technologies</u>, and{" "}
              <span className="font-extrabold">frameworks</span>.
            </p>
          </motion.h1>
        </div>
      </div>

      <motion.div
        className="flex -mt-6 flex-row gap-4 px-4 text-lg font-medium"
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

      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="my-10"
      >
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
          </motion.li> */}
      {/* <motion.li
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
          </motion.li> */}

      {/* <motion.li
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
          </motion.li> */}

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

      {/* <motion.li
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
      </motion.div> */}

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
          <TbMessageDots className="mr-2 my-auto transition-opacity duration-300" />
          Contact
        </Link>
      </motion.div>
    </section>
  );
}
