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
    title: "Senior Engineer - Supaclear",
    location: "Remote",
    description:
      "Spearheaded development of Synapse using Next.js v15 and FastAPI. Architected and delivered a robust meeting scheduling infrastructure with Getstream SDK and implemented real-time notification systems with Slack webhooks.",
    icon: React.createElement(FaReact),
    date: "Nov 2024 - Apr 2025",
  },
  {
    title: "Lead Engineer - Heyrocket",
    location: "Remote",
    description:
    "Led development of a mission-critical delivery platform processing 2,000+ daily requests. Designed and implemented security architecture with rate limiting, KYC verification, and tokenized authentication to ensure enterprise-grade security.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - Oct 2024",
  },
  {
    title: "Freelance - FindingAlly",
    location: "Remote",
    description:
      "Architected and implemented a high-precision room-matching algorithm (96% accuracy) and scaled a remote learning platform to handle 5,000+ daily sessions using Jitsi Meet API and Firebase.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Oct 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Buildzero",
    description:
      "Co-founded and architected a SaaS startup featuring conversational AI agents. Designed voice recognition algorithms, NLP processing pipelines, and scalable cloud infrastructure supporting 100+ enterprise clients.",
    tags: ["Next.js", "Voice Agents", "Analytics Integration", "Serverless"],
    imageUrl: "/images/buildzero.png",
  },
  {
    title: "Gatiki.club",
    description:
      "Led technical development of a developer platform with advanced SEO optimization. Implemented dynamic page generation, achieving #1 rank for target keywords. Designed analytics infrastructure that increased user retention by 40%.",
    tags: ["Next.js", "Technical SEO", "Performance Optimization", "Content Delivery"],
    imageUrl: "/images/gatiki.png",
  },
  // {
  //   title: "Enterprise Meeting Infrastructure",
  //   description:
  //     "Architected end-to-end meeting solution handling thousands of concurrent sessions. Designed distributed system with load balancing, failover mechanisms, and real-time webhook integration, reducing system latency by 65%.",
  //   tags: ["System Architecture", "Real-time Processing", "API Design", "Scaling", "Performance Tuning"],
  //   imageUrl: "/images/supaclear.png",
  // },
] as const;

export const skillsData = [
  "System Architecture",
  "Cloud Infrastructure",
  "API Design",
  "Scalability",
  "Next.js",
  "TypeScript",
  "Node.js",
  "AWS (EC2, Lambda)",
  "Docker",
  "Kubernetes",
  "MongoDB",
  "Redis",
  "Firebase",
  "CI/CD",
  "Security Engineering",
  "GraphQL",
  "Serverless",
  "Performance Optimization",
  "DevOps",
  "Distributed Systems",
] as const;
