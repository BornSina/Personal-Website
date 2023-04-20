import { useState } from "react";
import { Timeline, Text } from "@mantine/core";
import SectionHead from "./SectionHead";
import styles from "../styles/timeline.module.scss";

interface timelineItem {
  role: string;
  organization: string;
  Achievements: string[];
}

let timelineItems: timelineItem[] = [
  {
    role: "Technology Engineer",
    organization: "IBM",
    Achievements: [],
  },
  {
    role: "Associate Cloud Engineer",
    organization: "IBM",
    Achievements: [],
  },
  {
    role: "Software Engineering Resident",
    organization: "Hack Reactor",
    Achievements: [],
  },
  {
    role: "Software Engineering Student",
    organization: "Hack Reactor",
    Achievements: [],
  },
  {
    role: "Undergraduate Student",
    organization: "Fairleigh Dickinson University",
    Achievements: [
      "B.S. in Marketing",
      "Minor in Communications",
      "Communications National Honor Society",
    ],
  },
];

const MyTimeline = () => {
  const [active, setActive] = useState<number>(2);

  return (
    <section id={styles.timeline}>
      <SectionHead title={"My Timeline"} />
      <Timeline
        active={active}
        styles={{
          root: {
            marginLeft: "2rem",
            paddingTop: "2rem",
          },
          itemContent: {
            marginLeft: "3rem",
          },
        }}
      >
        {timelineItems.map((item) => {
          return (
            <Timeline.Item bulletSize={75}>
              <Text
                italic
                color={"white"}
                size={30}
                sx={{ marginBottom: "0rem" }}
              >
                {item.role}
              </Text>
              <Text size={27.5} fw={700} sx={{ color: "mediumspringgreen" }}>
                {item.organization}
              </Text>
              <ul
                style={{
                  paddingTop: "1rem",
                  color: "white",
                  marginLeft: "2.25rem",
                  fontSize: "1.5rem",
                }}
              >
                {item.Achievements.map((achievement) => {
                  return <li>{achievement}</li>;
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
