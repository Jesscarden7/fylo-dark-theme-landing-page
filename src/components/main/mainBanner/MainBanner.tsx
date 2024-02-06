import styles from "./MainBanner.module.css";
import illustrationIntro from "../../../assets/images/illustration-intro.png";

function MainBanner() {
  return (
    <div className={styles.mainBanner}>
      <div className={styles.imgWrapper}>
        <img src={illustrationIntro} />
      </div>
      <div className={styles.infoWrapper}>
        <h2>All your files in one secure location, accessible anywhere.</h2>
        <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default MainBanner;
