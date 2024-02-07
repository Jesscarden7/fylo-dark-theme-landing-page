import styles from "./ProductiveSection.module.css";
import stayProductive from "../../../assets/images/illustration-stay-productive.png";
import arrow from "../../../assets/images/icon-arrow.svg";

function ProductiveSection() {
  return (
    <div className={styles.productiveSection}>
      <img src={stayProductive} />
      <div className={styles.stayProductive}>
        <h3>Stay productive, <br /> wherever you are</h3>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues for
          live collaboration. No email attachments required.
        </p>
        <div className={styles.howItWorks}>
          <p>See how Fylo works</p>
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
}

export default ProductiveSection;
