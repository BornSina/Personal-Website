import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/hero.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sina Nikmaram</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Your Apps Description" />
      </Head>
      <main className={styles.main}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={"/images/Sina.jpeg"}
            alt="Sina at the Vessel in Hudson Yards, New York."
          />
        </div>
        <section id={styles.aboutMe}>
          <h4 id={styles.greeting}>Hi, my name is</h4>
          <h1 id={styles.name}>Sina Nikmaram.</h1>
          <p className={styles.intro}>
            I'm a software engineer specializing in the development of scalable
            solutions to complex, real-world problems.
          </p>
          <p className={styles.intro}>
            Currently, I'm focused on modernizing enterprise sustainability
            solutions with clients at IBM.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
