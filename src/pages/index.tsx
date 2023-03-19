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
      <main className={styles.main}></main>
    </>
  );
};

export default Home;
