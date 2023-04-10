import styles from "../styles/about.module.scss";
import SectionHead from "./SectionHead";
import { SimpleGrid } from "@mantine/core";
import TraitModal from "./TraitModal";

interface traitsObj {
  [key: string]: {
    color: string;
    content: string[];
    skills: string[];
    font?: string;
  };
}

const About = () => {
  let traits: traitsObj = {
    Ambitious: {
      color: "rgb(255, 191, 0)",
      content: [
        "From an early age, I have aspired and been determined to improve our world and change how we live through my work.",
        "Changing the world is a difficult task, but I strive to make transformational change and drive innovation through:",
      ],
      skills: [
        "Out of the box thinking",
        "Clearly defined objectives",
        "Measurable results",
        "Optimized efficiency",
      ],
      font: "400 1.55rem Alfa Slab One !important",
    },
    Strategic: {
      color: "rgb(0,130,255)",
      content: [
        "In game theory, strategy is defined as a set of decisions that players make to achieve their goals, while anticipating and influencing others.",
        "My experiences helped me develop a unique set of skills that enable the success of businesses through:",
      ],
      skills: [
        "Customer-centric design",
        "Data-driven decision making",
        "Operational and financial alignment",
        "Competitve and Regulatory analyses",
      ],
      font: "500 1.8rem IBM Plex Mono !important",
    },
    Leader: {
      color: "rgb(173,55,239)",
      content: ["I am a leader"],
      skills: [
        "Understand a businesses competitve landscape",
        "Understand the regulatroy Landscape",
        "Improve Customer Satisfaction",
        "Optimize decision making and ROI",
      ],
      font: "500 2.2rem Playfair Display !important",
    },
    Collaborative: {
      color: "rgb(255,110,175)",
      content: ["I am collaborative"],
      skills: [
        "Understand a businesses competitve landscape",
        "Understand the regulatroy Landscape",
        "Improve Customer Satisfaction",
        "Optimize decision making and ROI",
      ],
      font: "400 1.8rem Open Sans !important",
    },
    Passionate: {
      color: "rgb(255,114,80)",
      content: ["I am passionate"],
      skills: [
        "Understand a businesses competitve landscape",
        "Understand the regulatroy Landscape",
        "Improve Customer Satisfaction",
        "Optimize decision making and ROI",
      ],
      font: "400 2rem Fondamento !important",
    },
    Creative: {
      color: "rgb(0,250,154)",
      content: ["I am creative"],
      skills: [
        "Understand a businesses competitve landscape",
        "Understand the regulatroy Landscape",
        "Improve Customer Satisfaction",
        "Optimize decision making and ROI",
      ],
      font: "400 1.85rem Shantell Sans !important",
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
              skills={traits[trait].skills}
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
