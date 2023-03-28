import type { NextPage } from "next";
import Hero from "../components/HeroSection";
import { useEffect } from "react";

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
    </>
  );
};

export default Home;
