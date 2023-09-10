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
    👨‍💻 Passionate full-stack developer pursuing a B.Tech in Information Technology at VIT'25, Pune, India. 🚀
  
     Founder & CEO of GatiKi.Club, empowering open-source projects with collaborative tools, issue tracking, and hiring solutions. Freelance full-stack developer for global clients. 🌎
  </p>
  <p className="mb-3">
    🛠️ Core tech stack: React, Next.js, Node.js, MongoDB. Proficient in TypeScript and Prisma. Eager to explore new technologies.
    🎮 When not coding, I enjoy gaming, watching movies, and quality time with my cat. 🐶 Curious learner interested in history, philosophy, and guitar. 🎸
  </p>
</motion.section>


  );
}
