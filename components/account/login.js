import styles from "./ilogin.module.css";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Ilogin() {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await signIn('credentials',{
      email:creds.email,
      password:creds.password,
      redirect:false
    })
    console.log(res);
  };
  return (
    <>
      <section className={styles.login}>
        <div></div>
        <div className={styles.fields}>
          <form action="" onSubmit={handleSubmit}>
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
                <input
                  value={creds.username}
                  onChange={({target}) =>
                    setCreds({ ...creds, username: target.value })
                  }
                  type="text"
                  name="username"
                />
              </div>
              <div>
                <label htmlFor="pwd">Password</label>
                <input
                  value={creds.password}
                  onChange={({ target }) =>
                    setCreds({ ...creds, password: target.value })
                  }
                  type="password"
                  name="pwd"
                />
                <p>Forgot Password?</p>
              </div>
              <div>
                {/* <Link href='/dashboard'> */}
                <button
                  // onClick={() => {
                  //   signIn();
                  // }}
                  type="submit"
                  className={styles.button}
                >
                  Login
                </button>
                {/* </Link> */}
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
