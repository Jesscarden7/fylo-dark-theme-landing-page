import styles from "./FeatureCard.module.css";
import { feature } from "../../../types";

type featureProps = {
  feature: feature;
};

function FeatureCard({ feature }: featureProps) {
  return (
    <div className={styles.featureCard}>
      <img src={feature.icon} />
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
}

export default FeatureCard;
