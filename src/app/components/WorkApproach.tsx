"use client";

import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { approachSteps } from "../lib/constants";

const WorkApproach = () => {
  const themeColor = "#050112";
  const contentBackgroundColor = "#0A0B20";

  return (
    <div className="flex items-center flex-col justify-center gap-5">
      <p className="text-blue-500 ">how I approach my design</p>
      <h1 className="md:tracking-wider mb-4 font-heading lg:text-3xl text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-t from-indigo-900 via-blue-500 to-neutral-200 bg-opacity-60">
        Design Approach
      </h1>
      <VerticalTimeline
      >
        {approachSteps.map(({ Icon, title, description }, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--work`}
            iconStyle={{ background: themeColor, color: "#fff" }}
            visible
            icon={<Icon />}
            contentStyle={{
              background: contentBackgroundColor,
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${contentBackgroundColor}`,
            }}
          >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <p>{description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkApproach;
