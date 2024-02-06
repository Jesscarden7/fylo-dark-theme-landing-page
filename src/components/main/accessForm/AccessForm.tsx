import styles from "./AccessForm.module.css";

function AccessForm() {
  return (
    <div className={styles.accessForm}>
      <h3>Get early access today</h3>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form>
        <input type='text' placeholder='email@example.com' />
        <button>Get Started For Free</button>
      </form>
    </div>
  );
}

export default AccessForm;
