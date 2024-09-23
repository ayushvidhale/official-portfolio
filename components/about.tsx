"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Home");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Full-Stack Developer with expertise in building scalable SaaS solutions
        using technologies like Next.js, Node.js, and Docker. Experienced in
        leading teams, optimizing performance, and integrating advanced APIs.
      </p>
      <p className="mb-3">
        Actively involved in contributing to open-source projects and
        participating in hackathons, where I continuously improve my skills and
        collaborate with talented developers. Passionate about solving complex
        problems and delivering high-quality software.
      </p>
    </motion.section>
  );
}
