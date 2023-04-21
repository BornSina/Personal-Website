import SectionHead from "./SectionHead";
import styles from "../styles/techPortfolio.module.scss";
import LogoCarousel from "./LogoCarousel";

const TechPortfolio = () => {
  return (
    <section id={styles.techPortfolio}>
      <SectionHead title="Tech Portfolio" />;
      <LogoCarousel />
    </section>
  );
};

export default TechPortfolio;
