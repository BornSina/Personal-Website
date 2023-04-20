import { useState } from "react";
import { Timeline, Text } from "@mantine/core";
import SectionHead from "./SectionHead";
import styles from "../styles/timeline.module.scss";

interface timelineItem {
  role: string;
  organization: string;
  timePeriod: string;
  Achievements: string[];
}

let timelineItems: timelineItem[] = [
  {
    role: "Technology Engineer",
    organization: "IBM",
    timePeriod: "June 2022 - Present",
    Achievements: [
      "Lead Engineer on a collaboration with IBM Research to dynamically graph weighted industry relationships, over time, for a multi-national financial client.",
      "Co-led an engagement with a public utility provider to leverage IBM's Maximo Asset Performance Monitoring (APM) solution to reduce service down-time by using real-time sensor data to predict circuit breaker failures.",
      "Awarded Star Performer for the Client Engineering team at IBM's Technology Academy for Sustainability 2022.",
    ],
  },
  {
    role: "Associate Cloud Engineer",
    organization: "IBM",
    timePeriod: "March 2021 - June 2022",
    Achievements: [
      "Deployed IBM MQ managers on an internet deprived Google GKE cluster for a global financial client modernizing messaging workloads to boost service resiliency.",
      "Spoke at several virtual events to up-skill dozens of engineers on the technical deployment, and business value, of IBM's Maximo Application Suite.",
      "Refactored a CLI tool with Python, shell scripts, and Docker for IBM Cloud Pak for Data installations on OpenShift.",
    ],
  },
  {
    role: "Software Engineering Resident",
    organization: "Hack Reactor",
    timePeriod: "July 2020 - September 2020",
    Achievements: [],
  },
  {
    role: "Software Engineering Student",
    organization: "Hack Reactor",
    timePeriod: "March 2020 - June 2020",
    Achievements: [],
  },
  {
    role: "Undergraduate Student",
    organization: "Fairleigh Dickinson University",
    timePeriod: "August 2014 - May 2019",
    Achievements: [
      "B.S. in Marketing",
      "Minor in Communications",
      "Communications National Honor Society",
    ],
  },
];

const MyTimeline = () => {
  const [active, setActive] = useState<number>(4);

  return (
    <section id={styles.timeline}>
      <SectionHead title={"My Timeline"} />
      <Timeline
        active={active}
        lineWidth={12}
        styles={{
          root: {
            marginLeft: "1rem",
            paddingTop: "1.5rem",
          },
          item: {
            "::before": {
              borderColor: "rgb(30, 144, 255) !important",
            },
          },
          itemContent: {
            marginLeft: "3rem",
          },
          itemBullet: {
            borderColor: "rgb(30, 144, 255) !important",
            background: "rgb(16, 26, 44) !important",
          },
        }}
      >
        {timelineItems.map((item, i) => {
          return (
            <Timeline.Item bulletSize={50} key={i}>
              <Text italic color={"white"} size={31}>
                {item.role}
              </Text>
              <Text size={30} fw={700} sx={{ color: "mediumspringgreen" }}>
                {item.organization}
              </Text>
              <Text
                size={25}
                fw={500}
                sx={{ color: "RGB(128, 191, 164)", marginBottom: ".2rem" }}
              >
                {item.timePeriod}
              </Text>
              <ul
                style={{
                  paddingTop: "1rem",
                  color: "white",
                  marginLeft: "2.25rem",
                  paddingBottom: "1rem",
                  fontSize: "1.75rem",
                }}
              >
                {item.Achievements.map((achievement, i) => {
                  return (
                    <li
                      key={i}
                      style={{
                        marginBottom: "1.5rem",
                        fontSize: "1.55rem",
                      }}
                    >
                      {achievement}
                    </li>
                  );
                })}
              </ul>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </section>
  );
};

export default MyTimeline;
