import type { NextPage } from "next";
import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import MyTimeline from "../components/Timeline";

const Home: NextPage = () => {
  // Intersection Observer SlideUp Animations
  useEffect(() => {
    let hiddenBottomElements = document.querySelectorAll(".hiddenBottom");
    hiddenBottomElements.forEach((element) => {
      element.classList.add("slideUp");
    });
  }, []);
  // Intersection Observer SlideRight Animations
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
      <About />
      <MyTimeline />
    </>
  );
};

export default Home;
