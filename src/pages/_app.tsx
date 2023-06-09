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
        <meta
          name="keywords"
          content="Sina Nikmaram, Software Engineer, Personal Portfolio"
        />
        <meta name="author" content="Your Name or Company Name" />
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
