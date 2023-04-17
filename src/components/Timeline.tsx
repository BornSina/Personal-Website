import React from "react";
import SectionHead from "./SectionHead";
import styles from "../styles/timeline.module.scss";

const Timeline = () => {
  return (
    <section id={styles.timeline}>
      <SectionHead title={"My Timeline"} />
    </section>
  );
};

export default Timeline;
