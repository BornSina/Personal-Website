import Image from "next/image";
import styles from "../styles/hero.module.scss";
import Button from "@mui/material/Button";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    success: {
      main: "rgb(0,250,154)",
    },
  },
});

const HeroSection = () => {
  return (
    <section id="Home" className={styles.hero}>
      <div className={styles.avatarContainer}>
        <Image
          className={styles.avatar}
          alt="Sina at the Vessel in Hudson Yards, New York."
          src={"/assets/images/Sina.webp"}
          width={2000}
          height={2000}
          priority
        />
      </div>

      <h4 id={styles.greeting} className="hiddenBottom">
        Hi, my name is
      </h4>
      <h1 id={styles.name} className="hiddenBottom">
        Sina Nikmaram.
      </h1>
      <p className={`${styles.sentence} ${styles.sentence1} hiddenBottom`}>
        I'm a software engineer specializing in the development of scalable
        solutions for complex, real-world problems.
      </p>
      <p className={`${styles.sentence} ${styles.sentence2} hiddenBottom`}>
        Currently, I'm focused on modernizing enterprise sustainability
        operations with clients at IBM.
      </p>

      <ThemeProvider theme={theme}>
        <Button
          variant="outlined"
          color="success"
          startIcon={<HiOutlineDocumentMagnifyingGlass size={25} />}
          className={`${styles.resume}`}
          onClick={() => {
            window.open("/assets/Sina-Resume.pdf", "_blank");
          }}
          sx={{
            width: "15rem",
            height: "4rem",
            fontSize: "1.6rem",
          }}
        >
          Resume
        </Button>
      </ThemeProvider>
    </section>
  );
};

export default HeroSection;
