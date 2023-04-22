import SectionHead from "./SectionHead";
import LogoCarousel from "./LogoCarousel";
import ProjectGrid from "./ProjectGrid";

interface techStackRow {
  [name: string]: {
    height: string;
    width: string;
    margin: string;
  };
}

let techStack: techStackRow = {
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
  js: {
    height: "4.5rem",
    width: "4.5rem",
    margin: "-.1rem 1.5rem 0rem 0rem",
  },
  ts: {
    height: "4.6rem",
    width: "4.6rem",
    margin: "0rem 1.2rem -.1rem 1rem",
  },
  nodejs: {
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
  mui: {
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
  db2: {
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
  redHat: {
    height: "6rem",
    width: "6rem",
    margin: "0rem 1.5rem -.65rem 1.6rem",
  },
  ocp: {
    height: "5.5rem",
    width: "5.5rem",
    margin: "0rem 1.4rem -.3rem 1rem",
  },
  ibmCloud: {
    height: "6.25rem",
    width: "6.25rem",
    margin: "0rem 1.1rem -.5rem 1.1rem",
  },
  gcp: {
    height: "5.5rem",
    width: "5.5rem",
    margin: "0rem 1.5rem -.25rem 1.5rem",
  },
};

const TechPortfolio = () => {
  return (
    <section>
      <SectionHead title="Tech Portfolio" />;
      <LogoCarousel row={techStack} />
      <ProjectGrid />
    </section>
  );
};

export default TechPortfolio;
