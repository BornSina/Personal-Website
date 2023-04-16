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
        "From an early age, I have been both aspiring and determined to enrich the lives of people as well as the health of our planet through my work.",
        "Changing the world is a difficult task, but I seek to drive transformational change and innovation through:",
      ],
      skills: [
        "Out of the box thinking",
        "Clearly defined objectives",
        "Measurable results",
        "Scalable Solutions",
      ],
      font: "400 1.55rem Alfa Slab One !important",
    },
    Strategic: {
      color: "rgb(0,130,255)",
      content: [
        "In game theory, strategy is defined as a set of decisions that players make to achieve their goals, while anticipating and influencing others.",
        "My experiences helped me develop a unique set of skills that enable the success through:",
      ],
      skills: [
        "Optimized efficiency",
        "Data-driven decision making",
        "Operational and financial alignment",
        "Competitve and regulatory analyses",
      ],
      font: "500 1.8rem IBM Plex Mono !important",
    },
    Leader: {
      color: "rgb(173,55,239)",
      content: [
        "True leaders provide direction and inspire others to find purpose in their work, and together, achieve greatness.",
        "As a leader, I strive to rally team members around a common cause and ensure everyone is fulfilled by, and invested in, our work through:",
      ],
      skills: [
        "Trust and transparency",
        "People-centric design",
        "Support and development",
        "Vision and perspective",
      ],
      font: "500 2.2rem Playfair Display !important",
    },
    Collaborative: {
      color: "rgb(255,110,175)",
      content: [
        '"Individually, we are one drop. Together, we are an ocean."',
        "As a collaborator, I focus on enhancing a teams dynamic combination of skills and knowledge that surpasses our individual potential through:",
      ],
      skills: [
        "Active listening",
        "Open mindedness",
        "Improved workload management",
        "Empathy and adaptability",
      ],
      font: "400 1.8rem Open Sans !important",
    },
    Passionate: {
      color: "rgb(255,114,80)",
      content: [
        "Passionate people drive transformative change because of their unwavering commitment to overcoming obstacles in order to achieve their goals.",
        "My passion to help solve some of societies greatest challenges provides me with a:",
      ],
      skills: [
        "Deep curiosity",
        "Growth mindset",
        "Resilient spirit",
        "Inspiring energy",
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
