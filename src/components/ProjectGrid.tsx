import { useEffect, useState } from "react";
import Project from "./Project";
import { SimpleGrid } from "@mantine/core";
import axios from "axios";

const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/api/projects")
      .then(({ data }) => {
        console.log(data);
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
        { maxWidth: "62rem", cols: 3, spacing: "md" },
        { maxWidth: "48rem", cols: 2, spacing: "sm" },
        { maxWidth: "36rem", cols: 1, spacing: "sm" },
      ]}
      sx={{ padding: "0rem 7.5vw" }}
    >
      <Project />
    </SimpleGrid>
  );
};

export default ProjectGrid;
