import styles from "./AccessForm.module.css";
import { useState } from "react";

function AccessForm() {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (email === "" || !emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email adress");
      return;
    }
    setEmail("")
  };

  return (
    <div className={styles.accessForm}>
      <h3>Get early access today</h3>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form>
        <input
          type='text'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errorMsg !== "") {
              setErrorMsg("");
            }
          }}
          placeholder='email@example.com'
        />
        {errorMsg && <span className={styles.errorMsg}>{errorMsg}</span>}
        <button onClick={handleClick}>Get Started For Free</button>
      </form>
    </div>
  );
}

export default AccessForm;
