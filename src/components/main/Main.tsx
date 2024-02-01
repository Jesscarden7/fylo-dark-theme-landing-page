import styles from './Main.module.css'
import MainBanner from './mainBanner/MainBanner';
import FeatureCard from './featureCard/FeatureCard';
import ProductiveSection from './productiveSection/ProductiveSection';
import CommentCard from './commentCard/CommentCard';
import AccessForm from './accessForm/AccessForm';

function Main() {
  return ( 
    <div className={styles.main}>
      <MainBanner/>
      <FeatureCard/>
      <ProductiveSection/>
      <CommentCard/>
      <AccessForm/>
    </div>
   );
}

export default Main;