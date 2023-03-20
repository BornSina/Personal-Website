import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { useDisclosure } from "@mantine/hooks";

function MyApp({ Component, pageProps }: AppProps) {
  const [menuStatus, handlers] = useDisclosure(false);

  return (
    <>
      <Head>
        <title>Sina Nikmaram</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Your Apps Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar menuStatus={menuStatus} menu={handlers} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
