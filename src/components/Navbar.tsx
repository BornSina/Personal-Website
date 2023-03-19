import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <div id={styles.navbar}>
      <div className={styles.logo}>Sina</div>
    </div>
  );
};

export default Navbar;
