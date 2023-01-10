import styles from "./ilogin.module.css";
import Link from "next/link";

export default function Ilogin() {
  return (
    <>
      <section className={styles.login}>
        <div></div>
        <div className={styles.fields}>
          <form action="">
            <div className={styles.heading}>
              <div className={styles.image}></div>
              <div>
                <h1>ELITE TUTION</h1>
                <p>District, Kerala</p>
              </div>
            </div>
            <div className={styles.subhead}>
              <h3>Welcome Elite Student!</h3>
              <p>Enter your username and password</p>
            </div>
            <div className={styles.inputs}>
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
              </div>
              <div>
                <label htmlFor="pwd">Password</label>
                <input type="password" name="pwd" />
                <p>Forgot Password?</p>
              </div>
              <div>
                <Link href='/dashboard'>
                <button className={styles.button}>Login</button>
                </Link>
                <p>
                  Don&apos;t have an account? <span>Sign Up</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
