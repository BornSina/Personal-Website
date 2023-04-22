import styles from "../styles/navbar.module.scss";
import { Burger } from "@mantine/core";
import { useEffect, useState } from "react";

type navBarProps = {
  menuStatus: boolean;
  menu: {
    open: Function;
    close: Function;
    toggle: Function;
  };
};

const Navbar = ({ menu, menuStatus }: navBarProps) => {
  const [showNavbar, setShowNavbar] = useState(true);

  // Hide navbar on scroll down
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const difference = prevScrollPos - currentScrollPos;

      if (currentScrollPos > 30 && difference < 0) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id={styles.navbar}
      style={{
        transform: showNavbar ? "translateY(0)" : "translateY(-7.5rem)",
      }}
    >
      <div className={styles.logo}>Sina</div>
      <Burger
        opened={menuStatus}
        onClick={() => {
          menu.toggle();
        }}
        size={"3.5rem"}
        color={"mediumspringgreen"}
        sx={{
          marginRight: "2.5rem",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default Navbar;
