import SectionHead from "./SectionHead";
import LogoCarousel from "./LogoCarousel";
import ProjectGrid from "./ProjectGrid";
import { logoConfigObj } from "../types";

let techStack: logoConfigObj = {
  html: {
    height: "6rem",
    width: "6rem",
    margin: "0rem 0.5rem -.2rem 0rem",
  },
  css: {
    height: "6rem",
    width: "6rem",
    margin: "0rem 1.75rem -.4rem .25rem",
  },
  javascript: {
    height: "4.5rem",
    width: "4.5rem",
    margin: "-.1rem 1.5rem 0rem 0rem",
  },
  typescript: {
    height: "4.6rem",
    width: "4.6rem",
    margin: "0rem 1.2rem -.1rem 1rem",
  },
  node: {
    height: "4.75rem",
    width: "4.75rem",
    margin: "0rem 1.2rem -.15rem 1.2rem",
  },
  react: {
    height: "5.25rem",
    width: "5.25rem",
    margin: "0rem .5rem -.5rem .4rem",
  },
  sass: {
    height: "6.25rem",
    width: "6.25rem",
    margin: "0rem .75rem -1rem 1.5rem",
  },
  "material-ui": {
    height: "5.5rem",
    width: "5.5rem",
    margin: "0rem 1.4rem -.9rem 1rem",
  },
  tailwind: {
    height: "7rem",
    width: "7rem",
    margin: "0rem .5rem -1.5rem 0rem",
  },
  bootstrap: {
    height: "4.5rem",
    width: "6.5rem",
    margin: "0rem 1.1rem -.25rem .75rem",
  },
  python: {
    height: "5.5rem",
    width: "5.5rem",
    margin: "0rem 1.2rem -1rem 1rem",
  },
  go: {
    height: "10.25rem",
    width: "10.25rem",
    margin: "0rem .7rem -3.2rem 0rem",
  },
  mysql: {
    height: "5rem",
    width: "12.5rem",
    margin: "0rem 1.25rem -.75rem 1.25rem",
  },
  postgres: {
    height: "5.5rem",
    width: "5.5rem",
    margin: "0rem 1.25rem -.6rem .25rem",
  },
  mongo: {
    height: "5rem",
    width: "17.5rem",
    margin: "0rem 1rem -.15rem .8rem",
  },
  "ibm-db2": {
    height: "5rem",
    width: "11.5rem",
    margin: "0rem 1.45rem -.25rem .65rem",
  },
  neo4j: {
    height: "5.5rem",
    width: "5.5rem",
    margin: "0rem .75rem -.5rem 1rem",
  },
  docker: {
    height: "9rem",
    width: "9rem",
    margin: "0rem 1.35rem -2.45rem .7rem",
  },
  kubernetes: {
    height: "5.5rem",
    width: "5.5rem",
    margin: "0rem 1rem -.5rem .5rem",
  },
  "red-hat": {
    height: "6rem",
    width: "6rem",
    margin: "0rem 1.5rem -.65rem 1.6rem",
  },
  openshift: {
    height: "5.5rem",
    width: "5.5rem",
    margin: "0rem 1.4rem -.3rem 1rem",
  },
  "ibm-cloud": {
    height: "6.25rem",
    width: "6.25rem",
    margin: "0rem 1.1rem -.5rem 1.1rem",
  },
  "google-cloud": {
    height: "5.5rem",
    width: "5.5rem",
    margin: "0rem 1.5rem -.25rem 1.5rem",
  },
};

const TechPortfolio = () => {
  return (
    <section id="Portfolio" style={{ paddingTop: "8rem", marginTop: "2rem" }}>
      <SectionHead title="Tech Portfolio" />;
      <LogoCarousel techStack={techStack} />
      <ProjectGrid />
    </section>
  );
};

export default TechPortfolio;
