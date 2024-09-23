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
    title: "Full-Stack Developer",
    location: "Shipping Aggregator",
    description:
      "Joined as a Full-Stack Developer to build a solution using Next.js, Node.js, and Redis. Implemented KYC APIs, tokenized authentication, and task automation with Docker, running on AWS EC2, enhancing platform security and efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Aug 2024",
  },
  {
    title: "Software Development Intern",
    location: "WaveMaxx",
    description:
      "Collaborated on a real-time data platform supporting 15,000 IoT devices using MQTT and WebSockets. Integrated Google Maps API for device state visualization and developed a super admin panel for device management.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Mar 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "FindingAlly",
    description:
      "Developed a remote study system integrating Jitsi Meet and Alby Chat APIs. Built a room-matching algorithm for connecting users based on shared interests and behavior.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Aug 2023",
  },
] as const;

export const projectsData = [
  {
    title: "WindCraftUI",
    description:
      "A full-stack project using Next.js, MongoDB, and Stripe for payment checkouts. Optimized for SEO with server response time below 700ms.",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "Stripe"],
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
