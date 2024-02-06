import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logo} />
      </div>
      <div className={styles.navbar}>
        <nav>Features</nav>
        <nav>Team</nav>
        <nav>Sign In</nav>
      </div>
    </div>
  );
}

export default Header;
