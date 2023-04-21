import styles from "../styles/logoCarousel.module.scss";

interface techStackType {
  [name: string]: {
    height: string;
    width: string;
    margin?: string;
  };
}

let techStack: techStackType = {
  js: {
    height: "6rem",
    width: "6rem",
    margin: "-.1rem 1.5rem 0rem 1rem",
  },
  ts: {
    height: "6.2rem",
    width: "6.2rem",
    margin: "0rem 1.25rem -.1rem 1.5rem",
  },
  python: {
    height: "7.2rem",
    width: "7.2rem",
    margin: "0rem 1.25rem -1rem 1.25rem",
  },
  go: {
    height: "12.5rem",
    width: "12.5rem",
    margin: "0rem 1.75rem -3.4rem 0rem",
  },
  html: {
    height: "7.5rem",
    width: "7.5rem",
    margin: "0rem .25rem -.2rem 0rem",
  },
  css: {
    height: "7.5rem",
    width: "7.5rem",
    margin: "0rem 0rem -.4rem .5rem",
  },
  sass: {
    height: "8rem",
    width: "8rem",
    margin: "0rem 1.4rem -.9rem 1.75rem",
  },
};

const LogoCarousel = () => {
  return (
    <div className={styles.logos}>
      <div className={styles.logoSlide}>
        {Object.keys(techStack).map((tech, i) => (
          <img
            src={`/assets/images/logos/${tech}.svg`}
            alt={tech}
            key={i}
            style={{
              margin: techStack[tech].margin || "0rem 2rem",
              width: techStack[tech].width,
              height: techStack[tech].height,
              // border: "1px solid white",
            }}
          />
        ))}
      </div>
      <div className={styles.logoSlide}>
        {Object.keys(techStack).map((tech, i) => (
          <img
            src={`/assets/images/logos/${tech}.svg`}
            alt={tech}
            key={i}
            style={{
              margin: techStack[tech].margin || "0rem 2rem",
              width: techStack[tech].width,
              height: techStack[tech].height,
              // border: "1px solid white",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
