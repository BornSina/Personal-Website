import type { NextPage } from "next";
import Hero from "../components/Hero";
import { useEffect } from "react";
import AboutMe from "../components/About";

const Home: NextPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slideUp");
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
      <Hero />
      <AboutMe />
    </>
  );
};

export default Home;
