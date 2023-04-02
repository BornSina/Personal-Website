import styles from "../styles/about.module.scss";
import SectionHead from "./SectionHead";
import { SimpleGrid } from "@mantine/core";
import TraitModal from "./TraitModal";

interface traitsObj {
  [key: string]: {
    color: string;
    content: string;
    font?: string;
  };
}

const About = () => {
  let traits: traitsObj = {
    Strategic: {
      color: "rgb(0,130,255)",
      content: "I am strategic",
      font: "500 1.75rem IBM Plex Mono !important",
    },
    Leader: {
      color: "rgb(173,55,239)",
      content: "I am a leader",
      font: "500 2.1rem Playfair Display !important",
    },
    Creative: {
      color: "rgb(0,250,154)",
      content: "I am creative",
      font: "400 1.85rem Shantell Sans !important",
    },
    Ambitious: {
      color: "rgb(255, 191, 0)",
      content: "I am ambitious",
      font: "400 1.6rem Alfa Slab One !important",
    },
    Passionate: {
      color: "rgb(255,114,80)",
      content: "I am passionate",
      font: "400 2rem Fondamento !important",
    },
    Collaborative: {
      color: "rgb(255,110,175)",
      content: "I am collaborative",
      font: "400 1.8rem Open Sans !important",
    },
  };

  return (
    <section id={styles.about}>
      <SectionHead title={"About Me"} />
      <SimpleGrid
        cols={2}
        spacing={"xl"}
        breakpoints={[{ minWidth: "40rem", cols: 3 }]}
      >
        {Object.keys(traits).map((trait, i) => {
          return (
            <TraitModal
              title={trait}
              content={traits[trait].content}
              color={traits[trait].color}
              font={traits[trait].font ? traits[trait].font : "inherit"}
              key={i}
            />
          );
        })}
      </SimpleGrid>
    </section>
  );
};

export default About;
