import type { NextPage } from "next";
import Hero from "../components/Hero";
import { useEffect } from "react";
import AboutMe from "../components/About";

const Home: NextPage = () => {
  useEffect(() => {
    let hiddenBottomElements = document.querySelectorAll(".hiddenBottom");
    hiddenBottomElements.forEach((element) => {
      element.classList.add("slideUp");
    });
  }, []);

  // Intersection Observer SlideRIght Animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slideRight");
        }
      });
    });

    let hiddenLeft = document.querySelectorAll(".hiddenLeft");
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
