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
      className="mb-28 max-w-[45rem] text-start text-lg leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I’m a software engineer with a deep passion for building startups from
        the ground up. I’ve co-founded{" "}
        <span className="font-medium">two startups</span> and have worked
        closely with early-stage teams to take products from{" "}
        <span className="italic">0 → 1</span>, wearing multiple hats across
        product, engineering, and growth. My core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        , and I’m experienced with tools like TypeScript, Supabase, Docker, and
        AWS.
      </p>
      <br />
      <p className="mb-3">
        <span className="italic">What drives me</span> is solving meaningful
        problems, shipping fast, and iterating based on user feedback. Whether
        it’s building AI voice agents, scalable infra, or crafting delightful
        UIs—I thrive in fast-paced, product-focused environments.
      </p>
    </motion.section>
  );
}
