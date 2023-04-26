import styles from "../styles/project.module.scss";
import { logoConfigObj, ProjectTech, ProjectProps } from "../types";

let techLogos: logoConfigObj = {
  javascript: {
    height: "2.2rem",
    width: "2.2rem",
    margin: "0rem 1rem 0rem 0rem",
  },
  typescript: {
    height: "2.3rem",
    width: "2.3rem",
    margin: "0rem 1rem 0rem 0rem",
  },
  node: {
    height: "2.4rem",
    width: "2.4rem",
    margin: "0rem 1rem -.2rem 0rem",
  },
  react: {
    height: "2.45rem",
    width: "2.45rem",
    margin: "0rem 1rem -.2rem 0rem",
  },
  next: {
    height: "2.5rem",
    width: "9rem",
    margin: "0rem 1rem -.35rem 0rem",
  },
  sass: {
    height: "3rem",
    width: "3rem",
    margin: "0rem 1rem -.3rem 0rem",
  },
  mantine: {
    height: "2.35rem",
    width: "2.35rem",
    margin: "0rem 1rem 0rem 0rem",
  },
  "material-ui": {
    height: "2.65rem",
    width: "2.65rem",
    margin: "0rem 1rem -.25rem 0rem",
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
  mongo: {
    height: "3rem",
    width: "8rem",
    margin: "-.75rem 1rem -.6rem 0rem",
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
  "google-cloud": {
    height: "5.5rem",
    width: "5.5rem",
    margin: "0rem 1.5rem -.25rem 1.5rem",
  },
};

const projectTech: ProjectTech = {
  "Personal-Website": ["typescript", "next", "sass", "mantine", "material-ui"],
  "Circuit-Breaker-Simulator": ["python"],
  "Holy-Sheet": ["javascript", "react", "sass", "node", "mongo"],
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
              alt={tech}
            />
          ))}
      </div>
    </div>
  );
};

export default Project;
