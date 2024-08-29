"use client";

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
    <VerticalTimeline>
      {approachSteps.map(({ Icon, title, description }, index) => (
        <VerticalTimelineElement
          key={index}
          className={`vertical-timeline-element--work`}
          visible
          iconStyle={{ background: themeColor, color: "#fff" }}
          icon={<Icon />}
          contentStyle={{ background: contentBackgroundColor, color: "#fff" }}
          contentArrowStyle={{
            borderRight: `7px solid ${contentBackgroundColor}`,
          }}
        >
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <p>{description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default WorkApproach;
