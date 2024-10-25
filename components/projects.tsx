"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className=" mb-28 mt-8 md:mt-0">
      {/* <SectionHeading>Passion Projects [3]</SectionHeading> */}
      {/* <p className="text-md opacity-80 mb-12 -mt-6 w-fit">
        Here are a few of my passion projects that evolved into thriving SaaS
        businesses
      </p> */}
      <div className="grid xl:grid-cols-2 grid-cols-1 w-full gap-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="group"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://heyrocket.in/"
          >
            <div className="bg-white hover:bg-gray-100 h-full w-full text-start rounded-xl border border-gray-500 shadow-sm lg:p-6 p-4">
              <div className="flex space-x-4 mb-4">
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  src="https://heyrocket.in/assets/images/favicon.ico"
                />
                <div className="flex justify-between w-full">
                  <h1 className="md:text-lg text-base text-gray-800 font-semibold ">
                    {" "}
                    HeyRocket
                  </h1>
                  <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 h-fit md:text-[12px] text-[10px] whitespace-nowrap font-semibold text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                    on-going
                  </span>
                </div>
              </div>
              <p className="md:text-sm text-[12px] text-gray-800">
                {" "}
                Ready for Rocket Speed Deliveries
              </p>
            </div>
          </a>
        </motion.div>
        {/* <div /> */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="group"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://windcraftui.shop/"
          >
            <div className="bg-white hover:bg-gray-100 h-full w-full text-start rounded-xl border border-gray-500 shadow-sm lg:p-6 p-4">
              <div className="flex space-x-4 mb-4">
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-NCONl9jSvVEtzY1sHVexfLgIEsKXs6umg&s"
                />
                <div className="flex justify-between w-full">
                  <h1 className="md:text-lg text-base text-gray-800 font-semibold ">
                    {" "}
                    WindCraftUI
                  </h1>
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 h-fit md:text-[12px] text-[10px] whitespace-nowrap font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">
                    50+ active users
                  </span>
                </div>
              </div>
              <p className="md:text-sm text-[12px] text-gray-800">
                {" "}
                Beautifully crafted Tailwind CSS components, ready for your next
                project
              </p>
            </div>
          </a>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="group"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://quizmasterai.vercel.app/"
          >
            <div className="bg-white hover:bg-gray-100 h-full w-full text-start rounded-xl border border-gray-500 shadow-sm lg:p-6 p-4">
              <div className="flex space-x-4 mb-4">
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  src="./quizmasterai.png"
                />
                <div className="flex justify-between w-full">
                  <h1 className="md:text-lg text-base text-gray-800 font-semibold ">
                    {" "}
                    Quiz Master AI
                  </h1>
                  <span className="inline-flex items-center rounded-full bg-pink-50 px-2 py-1 h-fit md:text-[12px] text-[10px] whitespace-nowrap font-semibold text-pink-700 ring-1 ring-inset ring-pink-600/20">
                    Hackathon Project
                  </span>
                </div>
              </div>
              <p className="md:text-sm text-[12px] text-gray-800">
                {" "}
                Get Job-Ready with AI-Powered Questions
              </p>
            </div>
          </a>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="group"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gatiki.club/join"
          >
            <div className="bg-white hover:bg-gray-100 h-full w-full text-start rounded-xl border border-gray-500 shadow-sm lg:p-6 p-4">
              <div className="flex space-x-2 md:space-x-4 mb-4">
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  src="https://gatiki.club/favicon.ico"
                />
                <div className="flex justify-between w-full">
                  <h1 className="md:text-lg text-base text-gray-800 font-semibold ">
                    {" "}
                    GatiKi Club
                  </h1>
                  <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 h-fit md:text-[12px] text-[10px] whitespace-nowrap font-semibold text-purple-700 ring-1 ring-inset ring-purple-600/20">
                    Building
                  </span>
                </div>
              </div>
              <p className="md:text-sm text-[12px] text-gray-800">
                {" "}
                Source code management tool for startups and open-source
                community
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
