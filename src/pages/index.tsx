import type { NextPage } from "next";
import styles from "../styles/hero.module.scss";
import Button from "@mui/material/Button";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    success: {
      main: "rgb(0,250,154)",
    },
  },
});

const Home: NextPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slideUp");
        } else {
          entry.target.classList.remove("slideUp");
        }
      });
    });

    let hiddenLeft = document.querySelectorAll(".hidden");
    hiddenLeft.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={"/images/Sina.jpeg"}
            alt="Sina at the Vessel in Hudson Yards, New York."
          />
        </div>

        <h4 id={styles.greeting} className="hidden">
          Hi, my name is
        </h4>
        <h1 id={styles.name} className="hidden">
          Sina Nikmaram.
        </h1>
        <p className={`${styles.sentence} ${styles.sentence1} hidden`}>
          I'm a software engineer specializing in the development of scalable
          solutions for complex, real-world problems.
        </p>
        <p className={`${styles.sentence} ${styles.sentence2} hidden`}>
          Currently, I'm focused on modernizing enterprise sustainability
          solutions with clients at IBM.
        </p>

        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            color="success"
            startIcon={<HiOutlineDocumentMagnifyingGlass size={25} />}
            className={`${styles.resume} hidden`}
            sx={{
              width: "15rem",
              height: "5rem",
              fontSize: "1.75rem",
              margin: "0rem 0rem 5rem 0rem",
              transitionDelay: "450ms !important",
            }}
          >
            Resume
          </Button>
        </ThemeProvider>
      </section>
    </>
  );
};

export default Home;
