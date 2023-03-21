import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  const [menuStatus, handlers] = useDisclosure(false);

  return (
    <>
      <Head>
        <title>Sina Nikmaram</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Sina Nikmaram's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar menuStatus={menuStatus} menu={handlers} />
      <Component {...pageProps} />
      <Drawer
        opened={menuStatus}
        onClose={() => {}}
        zIndex={5}
        withCloseButton={false}
        size={"100%"}
        transitionProps={{ duration: 250, transition: "slide-left" }}
      ></Drawer>
    </>
  );
}

export default MyApp;
