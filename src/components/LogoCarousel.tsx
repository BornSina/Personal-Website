import styles from "../styles/logoCarousel.module.scss";

interface techStackRow {
  [name: string]: {
    height: string;
    width: string;
    margin: string;
  };
}

interface techStackProps {
  row: techStackRow;
}

const LogoCarousel = ({ row }: techStackProps) => {
  return (
    <div className={styles.logos}>
      <div className={styles.logoSlide}>
        {Object.keys(row).map((tech, i) => (
          <img
            src={`/assets/images/logos/${tech}.svg`}
            alt={tech}
            key={i}
            style={{
              margin: row[tech].margin,
              width: row[tech].width,
              height: row[tech].height,
            }}
          />
        ))}
      </div>
      <div className={styles.logoSlide}>
        {Object.keys(row).map((tech, i) => (
          <img
            src={`/assets/images/logos/${tech}.svg`}
            alt={tech}
            key={i}
            style={{
              margin: row[tech].margin,
              width: row[tech].width,
              height: row[tech].height,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
