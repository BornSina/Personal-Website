import { Timeline, Text } from "@mantine/core";
import SectionHead from "./SectionHead";
import styles from "../styles/timeline.module.scss";
import { timelineItem } from "../types";

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
    timePeriod: "June 2020 - September 2020",
    Achievements: [
      "Provided technical mentorship to 100+ students nationally, and guided them through learning technologies such as JavaScript, React, Express.js, MySQL, and MongoDB.",
      "Organized 3+ tutoring sessions with students weekly. These sessions covered a range of full-stack web development concepts from primitive data types to integrations with 3rd party API’s.",
    ],
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
  return (
    <section id="Timeline" className={styles.timeline}>
      <SectionHead title={"Timeline"} />
      <Timeline
        active={4}
        lineWidth={12}
        styles={{
          root: {
            margin: "1.5rem 9vw 0rem 9vw",
          },
          item: {
            "::before": {
              borderColor: "rgb(30, 144, 255) !important",
            },
          },
          itemContent: {
            marginLeft: "2rem",
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
              <Text italic color={"white"} size={32}>
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
              <ul className={styles.achievements}>
                {item.Achievements.map((achievement, i) => {
                  return (
                    <li key={i} className={styles.achievement}>
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
