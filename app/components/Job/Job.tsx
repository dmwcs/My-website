"use client";
import React, { useState, useEffect, useRef } from "react";
import useIndicator from "@/app/utils/useIndicator";
import CardTitle from "@/app/components/CardTitle";
import { BsFillCaretRightFill } from "react-icons/bs";

const tabs = ["Upstatement", "Apple"];

const experiences = [
  {
    company: "Upstatement",
    position: "Lead Engineer",
    duration: "May 2018 - Present",
    details: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
      "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
    ],
  },
  {
    company: "Apple",
    position: "UI Engineer Co-op",
    duration: "July - December 2017",
    details: [
      "Developed and styled interactive web applications for Apple Music using Ember and SCSS",
      "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
      "Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback",
      "Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications",
    ],
  },
];
const Job = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { indicatorStyle, tabRefs } = useIndicator(selectedTab);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 每次 selectedTab 变化时重新触发动画
    if (contentRef.current) {
      contentRef.current.classList.remove("animate-fadeIn");
      void contentRef.current.offsetWidth; // 触发重排以重新开始动画
      contentRef.current.classList.add("animate-fadeIn");
    }
  }, [selectedTab]);

  return (
    <div className="mx-auto max-w-[700px] relative pt-[25%]" id="Experience">
      {/*<h2 className="pb-8">02. Where I&apos;ve Worked</h2>*/}
      <CardTitle index={2} title="Where I've Worked" />
      <div className="flex">
        <div className="relative flex flex-col gap-4">
          <div
            className="absolute left-0 w-[2px] bg-second transition-all duration-300"
            style={indicatorStyle}
          />
          {tabs.map((tab, index) => (
            <div
              key={index}
              ref={(el) => {
                tabRefs.current[index] = el as HTMLDivElement;
              }}
              className={`cursor-pointer pl-4 ${selectedTab === index ? "text-second" : "text-gray-400"}`}
              onClick={() => setSelectedTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div ref={contentRef} className="pl-8 animate-fadeIn ">
          <h2 className="text-xl font-bold">
            {experiences[selectedTab].position} @{" "}
            {experiences[selectedTab].company}
          </h2>
          <p className="text-sm text-gray-500">
            {experiences[selectedTab].duration}
          </p>
          <ul className="mt-4 space-y-2 ">
            {experiences[selectedTab].details.map((detail, index) => (
              <li key={index} className="flex gap-2">
                <BsFillCaretRightFill
                  size={15}
                  className="text-second flex-shrink-0 mt-1"
                />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Job;
