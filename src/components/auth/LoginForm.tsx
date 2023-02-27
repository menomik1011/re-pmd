import Link from "next/link";
import styles from "./LoginForm.module.css";
export default function LoginForm() {
  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.FormTitle}>Sign In</h1>
      <form className={styles.Form}>
        <div className={styles.Label_div}>
          <label>Username</label>
        </div>
        <input type="text" />
        <div>
          <div className={styles.Label_div}>
            <label>Password</label>
          </div>
          <input type="password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <Link className={styles.link} href="join">Create Account</Link>
    </div>
  );
}
