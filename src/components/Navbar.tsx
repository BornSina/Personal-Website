import styles from "../styles/navbar.module.scss";
import { Burger } from "@mantine/core";

type navBarProps = {
  menuStatus: boolean;
  menu: {
    open: Function;
    close: Function;
    toggle: Function;
  };
};

const Navbar = ({ menu, menuStatus }: navBarProps) => {
  return (
    <div id={styles.navbar}>
      <div className={styles.logo}>Sina</div>
      <Burger
        opened={menuStatus}
        onClick={() => {
          menu.toggle();
        }}
        size={50}
        color={"mediumspringgreen"}
        sx={{
          marginRight: "2.5rem",
        }}
      />
    </div>
  );
};

export default Navbar;
