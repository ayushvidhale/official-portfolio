import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Engineer",
    location: "HeyRocket",
    description:
      "Engineered a full-stack solution using Next.js, Node.js, and Docker. Led the implementation of KYC, tokenized authentication, and task automation to enhance platform efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Jun 2024",
  },
  {
    title: "Software Development Intern",
    location: "WaveMaxx",
    description:
      "Contributed to a large-scale real-time data platform supporting 15,000 IoT devices with MQTT and WebSockets. Integrated Google Maps API for dynamic device state visualization.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Mar 2024",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    description:
      "Provided full-stack development services to global clients, delivering customized web applications and technical solutions across diverse industries.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "WindCraftUI",
    description:
      "A full-stack project using Next.js, MongoDB, and Stripe for payment checkouts. Optimized for SEO with server response time below 700ms.",
    tags: ["Founder", "Next.js", "MongoDB", "TailwindCSS", "Stripe"],
    imageUrl: rmtdevImg,
  },
  {
    title: "GatiKi.Club",
    description:
      "A real-time collaboration platform with GitHub integration. Achieved rank #1 on Google search for dynamic page building and SEO optimization.",
    tags: ["Next.js", "Firebase", "NextUI", "Razorpay"],
    imageUrl: corpcommentImg,
  },

  // {
  //   title: "Artos.live",
  //   description:
  //     "A Web3 project enabling users to create, assign, and monitor webpage walls with MetaMask and Phantom wallet integration.",
  //   tags: ["React", "Express.js", "MetaMask", "Phantom Wallet"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "Next.js",
  "React",
  "Node.js",
  "Express.js",
  "TypeScript",
  "Git",
  "Redis",
  "Docker",
  "Kubernetes",
  "TailwindCSS",
  "Prisma",
  "MongoDB",
  "MySQL",
  "Figma",
  "GraphQL",
  "Solidity",
  "Third Web",
  "AWS EC2",
  "Firebase",
  // "GCP",
] as const;
