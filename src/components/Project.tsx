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

const Project = ({ project }: ProjectProps) => {
  return <div className={styles.projectCard}>Project</div>;
};

export default Project;
