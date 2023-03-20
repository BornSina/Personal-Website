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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,500;0,700;1,500;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar menuStatus={menuStatus} menu={handlers} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
