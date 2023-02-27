import Link from "next/link";
import styles from "./Form.module.css";
export default function LoginForm() {
  return (
    <main className={styles.Main}>
      <header className={styles.Header}>
        <Link href="/">Home</Link>
      </header>
      <div className={styles.Wrapper}>
        <h1 className={styles.FormTitle}>Sign In</h1>
        <form className={styles.Form}>
          <div>
            <div className={styles.Label_div}>
              <label>Username</label>
            </div>
            <input type="text" />
          </div>
          <div>
            <div className={styles.Label_div}>
              <label>Password</label>
            </div>
            <input type="password" />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <Link className={styles.Link} href="join">
          Create Account
        </Link>
      </div>
    </main>
  );
}
