import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  // {
  //   name: "Home",
  //   hash: "#home",
  // },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/experience",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Contact",
    hash: "/contact",
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
    title: "DevOpsDevelopment Intern",
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
      "Beautifully crafted UI components, ready for your next projects.",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "Stripe"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-NCONl9jSvVEtzY1sHVexfLgIEsKXs6umg&s",
    websiteUrl: "https://windcraft-production/vercel.app/",
  },
  {
    title: "GatiKi.Club",
    description:
      "Empowering open-source projects with collaborative tools, issue tracking, and hiring.",
    tags: ["Next.js", "Firebase", "NextUI", "Razorpay"],
    imageUrl:
      "https://yt3.googleusercontent.com/Zu-Q5JdaiT6qM53zk80_15YSXMw5xUqHO2532hbU9WNCx3vIaak0gTg_UW9mcZ77GdAteEyoVg=s900-c-k-c0x00ffffff-no-rj",
    websiteUrl: "https://gatiki.club/join",
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
