import styles from "./Main.module.css";
import MainBanner from "./mainBanner/MainBanner";
import FeatureCard from "./featureCard/FeatureCard";
import ProductiveSection from "./productiveSection/ProductiveSection";
import TestimonialCard from "./testimonialCard/testimonialCard";
import AccessForm from "./accessForm/AccessForm";
import { features } from "../../utils/dataFeatures";
import { testimonials } from "../../utils/dataTestimonials";
import quote from "../../assets/images/bg-quotes.png";

function Main() {
  return (
    <div className={styles.main}>
      <MainBanner />
      <div className={styles.featureCardWrapper}>
        {features.map((feature) => (
          <FeatureCard feature={feature} />
        ))}
      </div>
      <ProductiveSection />
      <img className={styles.quote} src={quote} />
      <div className={styles.testimonialsCardsWrapper}>
        {testimonials.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} />
        ))}
      </div>
      <AccessForm />
    </div>
  );
}

export default Main;
