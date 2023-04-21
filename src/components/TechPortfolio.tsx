import SectionHead from "./SectionHead";
import styles from "../styles/techPortfolio.module.scss";
import LogoCarousel from "./LogoCarousel";

interface techStackRow {
  [name: string]: {
    height: string;
    width: string;
    margin?: string;
  };
}

let techStack1: techStackRow = {
  js: {
    height: "4.1rem",
    width: "4.1rem",
    margin: "-.1rem 1rem 0rem 0rem",
  },
  ts: {
    height: "4.2rem",
    width: "4.2rem",
    margin: "0rem .75rem -.1rem 1rem",
  },
  python: {
    height: "5.2rem",
    width: "5.2rem",
    margin: "0rem 1.25rem -1rem 1.25rem",
  },
  go: {
    height: "10.5rem",
    width: "10.5rem",
    margin: "0rem 1.2rem -3.4rem -.25rem",
  },
  html: {
    height: "5.5rem",
    width: "5.5rem",
    margin: "0rem .25rem -.2rem 0rem",
  },
  css: {
    height: "5.5rem",
    width: "5.5rem",
    margin: "0rem 0rem -.4rem .6rem",
  },
  sass: {
    height: "6rem",
    width: "6rem",
    margin: "0rem 1.25rem -.9rem 1.5rem",
  },
  react: {
    height: "6rem",
    width: "6rem",
    margin: "0rem 1.25rem -1rem .5rem",
  },
  mui: {
    height: "6rem",
    width: "6rem",
    margin: "0rem 2rem -1rem .5rem",
  },
};

const TechPortfolio = () => {
  return (
    <section id={styles.techPortfolio}>
      <SectionHead title="Tech Portfolio" />;
      <LogoCarousel row={techStack1} />
    </section>
  );
};

export default TechPortfolio;
