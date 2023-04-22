import Project from "./Project";
import { SimpleGrid } from "@mantine/core";

const ProjectGrid = () => {
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: "62rem", cols: 3, spacing: "md" },
        { maxWidth: "48rem", cols: 2, spacing: "sm" },
        { maxWidth: "36rem", cols: 1, spacing: "sm" },
      ]}
      sx={{ padding: "1rem" }}
    >
      <Project />
    </SimpleGrid>
  );
};

export default ProjectGrid;
