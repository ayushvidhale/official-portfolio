"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@/context/theme-context";

export default function Podcasts() {
  const { theme } = useTheme();

  // Placeholder data for podcasts
  const podcastsData: any[] = [
    // Add your podcast data here in the format:
    // {
    //   date: "Date of Podcast",
    //   title: "Podcast Title",
    //   description: "Brief description of the podcast.",
    //   link: "Link to podcast", // Link to listen to the podcast
    //   icon: "Your Icon", // You can use an icon component or an image URL
    // },
  ];

  return (
    <section id="podcasts" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Podcasts</SectionHeading>
      {podcastsData.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-500">
            No Upcoming Podcasts
          </h2>
          <p className="text-gray-400">Stay tuned for future episodes!</p>
        </div>
      ) : (
        <VerticalTimeline lineColor="">
          {podcastsData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!mt-1 !font-normal text-gray-700 light:text-white/75">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="text-blue-500 underline mt-1 block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen Now
                </a>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      )}
    </section>
  );
}
