import styles from "../styles/about.module.scss";
import SectionHead from "./SectionHead";

const AboutMe = () => {
  return (
    <section id={styles.about}>
      <SectionHead title={"About Me"} />
    </section>
  );
};

export default AboutMe;
