import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";

const menuItems: string[] = ["Home", "About", "Timeline", "Portfolio"];

function MyApp({ Component, pageProps }: AppProps) {
  const [menuStatus, handlers] = useDisclosure(false);

  return (
    <>
      <Head>
        <title>Sina Nikmaram</title>
        <meta name="description" content="Sina Nikmaram's Portfolio" />
        <meta name="keywords" content="keyword1, keyword2, keyword3"></meta>
        <meta name="author" content="Your Name or Company Name"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Fondamento&family=IBM+Plex+Mono:wght@500&family=Open+Sans&family=Playfair+Display&family=Shantell+Sans&display=swap"
          rel="stylesheet"
        />
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
      >
        <div className="menuContainer">
          {menuItems.map((item) => {
            return (
              <button
                key={item}
                className="menuItem"
                onClick={() => {
                  const targetElement = document.getElementById(item);
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                  handlers.close();
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </Drawer>
    </>
  );
}

export default MyApp;
