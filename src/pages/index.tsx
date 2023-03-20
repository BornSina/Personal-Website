import type { NextPage } from "next";
import styles from "../styles/hero.module.scss";
import Button from "@mui/material/Button";
import { TbCloudDownload } from "react-icons/tb";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    success: {
      main: "rgb(0,250,154)",
    },
  },
});

const Home: NextPage = () => {
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

        <h4 id={styles.greeting}>Hi, my name is</h4>
        <h1 id={styles.name}>Sina Nikmaram.</h1>
        <p className={styles.sentence}>
          I'm a software engineer specializing in the development of scalable
          solutions for complex, real-world problems.
        </p>
        <p className={styles.sentence}>
          Currently, I'm focused on modernizing enterprise sustainability
          solutions with clients at IBM.
        </p>

        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            color="success"
            startIcon={<TbCloudDownload />}
            sx={{
              width: "15rem",
              height: "4rem",
              fontSize: "1.5rem",
              marginTop: "1rem",
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
