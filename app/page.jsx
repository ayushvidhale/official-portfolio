"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // CRISP Chat Integration
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://client.crisp.chat/l.js";
    document.head.appendChild(script);

    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "ed4311f9-696e-41ad-9a46-609692acf82b";
  }, []);

  return (
    <main className="flex flex-col items-start md:px-4 px-2">
      {/* <Intro /> */}
      {/* <About /> */}
      {/* <SectionDivider /> */}
      <Projects />
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
    </main>
  );
}
