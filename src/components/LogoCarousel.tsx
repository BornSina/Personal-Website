import styles from "../styles/logoCarousel.module.scss";
import { techStackProps } from "../types";

const LogoCarousel = ({ techStack = {} }: techStackProps) => {
  return (
    <div className={styles.logos}>
      <div className={styles.logoSlide}>
        {Object.entries(techStack).map(
          ([tech, { margin, width, height }], i) => (
            <img
              src={`/assets/images/logos/${tech}.svg`}
              alt={tech}
              key={i}
              style={{
                margin: margin,
                width: width,
                height: height,
              }}
            />
          )
        )}
      </div>
      <div className={styles.logoSlide}>
        {Object.entries(techStack).map(
          ([tech, { margin, width, height }], i) => (
            <img
              src={`/assets/images/logos/${tech}.svg`}
              alt={tech}
              key={i}
              style={{
                margin: margin,
                width: width,
                height: height,
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default LogoCarousel;
