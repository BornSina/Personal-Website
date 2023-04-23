import type { NextPage } from "next";
import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import MyTimeline from "../components/Timeline";
import TechPortfolio from "../components/TechPortfolio";

const Home: NextPage = () => {
  // Intersection Observer SlideUp Animations
  useEffect(() => {
    let hiddenBottomElements = document.querySelectorAll(".hiddenBottom");
    hiddenBottomElements.forEach((element) => {
      element.classList.add("slideUp");
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <MyTimeline />
      <TechPortfolio />
    </>
  );
};

export default Home;
