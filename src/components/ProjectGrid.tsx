import { useEffect, useState } from "react";
import Project from "./Project";
import { SimpleGrid } from "@mantine/core";
import axios from "axios";
import { Repo } from "../types";

const ProjectGrid = () => {
  const [projects, setProjects] = useState<Repo[]>([]);

  useEffect(() => {
    axios
      .get("/api/projects")
      .then(({ data }) => {
        setProjects(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: "75rem", cols: 3, spacing: "md" },
        { maxWidth: "67.5rem", cols: 2, spacing: "sm" },
        { maxWidth: "42.5rem", cols: 1, spacing: "sm" },
      ]}
      sx={{ padding: "0rem 7.5vw" }}
    >
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
