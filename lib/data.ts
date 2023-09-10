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
    title: "Founder & CEO",
    location: "GatiKi.Club",
    description:
    "I'm the founder and CEO of GatiKi.Club, a platform to empower open-source projects with collaborative tools, issue tracking, and hiring.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "VIT'25 (B.Tech)",
    location: "Pune, India",
    description:
      "I'm currently pursuing my B.Tech in Information Technology from VIT'25, Pune.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    description:
      "I'm a freelance full-stack developer, working with clients from all over the world.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "GatiKi.Club",
    description:
      "Empowering open-source projects with collaborative tools, issue tracking, and hiring.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Artos.live",
    description:
      "A web3 project to bring NFTs to, and empower, the art of creating value.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "FindAlly.com",
    description:
      "A public web app to collaborate remotely, with FindAlly.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
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
  // "Redux",
  "Chart.js",
  "GraphQL",
  "Express",
  "Flutter",
  "Block Chain",
  "Solidity",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;
