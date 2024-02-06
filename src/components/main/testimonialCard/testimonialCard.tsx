import styles from './testimonialCard.module.css'
import { testimonial } from '../../../types';

type testimonialProps = {
  testimonial: testimonial
}

function TestimonialCard({testimonial}:testimonialProps ) {
  return ( 
    <div className={styles.testimonialCard}>
      <p>{testimonial.comment}</p>
      <div className={styles.testimonialProfile}>
        <img src={testimonial.picture}/>
        <div className={styles.profileInfo}>
          <p>{testimonial.name}</p>
          <span>{testimonial.position}</span>
        </div>
      </div>
    </div>
   );
}

export default TestimonialCard;