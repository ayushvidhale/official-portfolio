"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

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
        I am a dedicated full-stack developer with expertise in scalable web
        applications and SaaS solutions. As Founder & CEO of GatiKi.Club, I
        empower open-source projects with advanced tools. I also provide
        freelance development services globally.
      </p>
      <p className="mb-3">
        My technical skills include React, Next.js, Node.js, MongoDB,
        TypeScript, and Prisma. I am passionate about exploring new
        technologies. Outside of work, I enjoy gaming, films, and spending time
        with my pet. I also have interests in history, philosophy, and playing
        the guitar.
      </p>
    </motion.section>
  );
}
