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
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "HeyRocket",
    description:
      "Developed a full-stack application with Next.js, Node.js, and Docker. Implemented KYC, tokenized authentication, and automated tasks.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Jun 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "WaveMaxx",
    description:
      "Collaborated on a real-time data platform for 15,000 IoT devices using MQTT and web sockets. Integrated Google Maps API for device state visualization.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Mar 2024",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    description:
      "Freelanced as a full-stack developer, building various web applications and solutions for global clients.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "GatiKi.Club",
    description:
      "A real-time collaboration platform with GitHub integration. Achieved rank #1 on Google search for dynamic page building and SEO optimization.",
    tags: ["Next.js", "Firebase", "NextUI", "Razorpay"],
    imageUrl: corpcommentImg,
  },
  {
    title: "WindCraftUI",
    description:
      "A full-stack project using Next.js, MongoDB, and Stripe for payment checkouts. Optimized for SEO with server response time below 700ms.",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "Stripe"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Artos.live",
    description:
      "A Web3 project enabling users to create, assign, and monitor webpage walls with MetaMask and Phantom wallet integration.",
    tags: ["React", "Express.js", "MetaMask", "Phantom Wallet"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express.js",
  "AWS",
  "Docker",
  "Firebase",
  "GCP",
  "Azure",
] as const;
