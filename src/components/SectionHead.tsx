import styles from "../styles/sectionHead.module.scss";

interface SectionHeadProps {
  title: string;
}

const SectionHead = ({ title }: SectionHeadProps) => {
  return (
    <div className={styles.sectionHead}>
      <span></span>
      <h2>{title}</h2>
      <span></span>
    </div>
  );
};

export default SectionHead;
