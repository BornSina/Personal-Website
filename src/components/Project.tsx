import styles from "../styles/project.module.scss";

interface Repo {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
}

interface ProjectProps {
  project: Repo;
}

interface TechLogosType {
  [name: string]: {
    height: string;
    width: string;
    margin: string;
  };
}

let techLogos: TechLogosType = {
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
    height: "2.2rem",
    width: "2.2rem",
    margin: "0rem 1rem 0rem 0rem",
  },
  ts: {
    height: "2.3rem",
    width: "2.3rem",
    margin: "0rem 1rem 0rem 0rem",
  },
  nodejs: {
    height: "2.45rem",
    width: "2.45rem",
    margin: "0rem 1rem -.2rem 0rem",
  },
  react: {
    height: "2.45rem",
    width: "2.45rem",
    margin: "0rem 1rem -.2rem 0rem",
  },
  sass: {
    height: "2.8rem",
    width: "2.8rem",
    margin: "0rem 1rem -.35rem 0rem",
  },
  mui: {
    height: "2.65rem",
    width: "2.65rem",
    margin: "0rem 1rem -.3rem 0rem",
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
    height: "2.75rem",
    width: "2.75rem",
    margin: ".25rem 0rem 0rem 0rem",
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
    height: "3rem",
    width: "8rem",
    margin: "-.75rem 1rem -.6rem 0rem",
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
interface ProjectTech {
  [project: string]: string[];
}

const projectTech: ProjectTech = {
  "Personal-Website": ["ts", "react", "sass", "mui"],
  "Circuit-Breaker-Simulator": ["python"],
  "Holy-Sheet": ["js", "react", "sass", "nodejs", "mongo"],
};

const Project = ({ project }: ProjectProps) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectName}>
        {project.name.split("-").join(" ")}
      </div>
      <div className={styles.description}>{project.description}</div>
      <div className={styles.techList}>
        {projectTech[project.name] &&
          projectTech[project.name].map((tech, i) => (
            <img
              src={`/assets/images/logos/${tech}.svg`}
              style={{
                height: techLogos[tech].height,
                width: techLogos[tech].width,
                margin: techLogos[tech].margin,
              }}
              key={i}
            />
          ))}
      </div>
    </div>
  );
};

export default Project;
