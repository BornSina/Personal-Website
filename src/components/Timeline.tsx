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
    Achievements: [],
  },
  {
    role: "Associate Cloud Engineer",
    organization: "IBM",
    timePeriod: "March 2021 - June 2022",
    Achievements: [],
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
          itemContent: {
            marginLeft: "3rem",
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
              <Text size={25} fw={500} sx={{ color: "RGB(145, 195, 172)" }}>
                {item.timePeriod}
              </Text>
              <ul
                style={{
                  paddingTop: "1rem",
                  color: "white",
                  marginLeft: "2.25rem",
                  fontSize: "1.75rem",
                }}
              >
                {item.Achievements.map((achievement, i) => {
                  return (
                    <li key={i} style={{ marginBottom: "1rem" }}>
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
