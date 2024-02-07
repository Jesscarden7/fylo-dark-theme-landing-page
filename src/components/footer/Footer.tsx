import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
import location from "../../assets/images/icon-location.svg";
import phone from "../../assets/images/icon-phone.svg";
import email from "../../assets/images/icon-email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoWrapper}>
        <img src={logo} />
      </div>
      <div className={styles.bottomInfo}>
        <div className={styles.location}>
          <img src={location} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className={styles.contact}>
          <div className={styles.phone}>
            <img src={phone} />
            <p>+1-543-123-4567</p>
          </div>
          <div className={styles.email}>
            <img src={email} />
            <p>example@fylo.com</p>
          </div>
        </div>
        <div className={styles.links}>
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon
              icon={faFacebookF}
              size='xs'
              className={styles.icons}
            />
          </div>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon
              icon={faTwitter}
              size='xs'
              className={styles.icons}
            />
          </div>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon
              icon={faInstagram}
              size='sm'
              className={styles.icons}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
