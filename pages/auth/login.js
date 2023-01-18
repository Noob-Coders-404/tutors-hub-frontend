import styles from "./ilogin.module.css";
import Link from "next/link";
import { useState } from "react";
import { getCsrfToken, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login({csrfToken}) {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: creds.email,
      password: creds.password,
      redirect: false,
      callbackUrl:'/dashboard'
    });
    if(res?.error){
      setError(true)
    }else{
      router.push('/dashboard')
    }
  };
  return (
    <>
      <section className={styles.login}>
        <div></div>
        <div className={styles.fields}>
          {error && <div><h2>Wrong email or password</h2></div>}
          <form noValidate onSubmit={handleSubmit}>
            <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
            <div className={styles.heading}>
              <div className={styles.image}></div>
              <div>
                <h1>ELITE TUTION</h1>
                <p>District, Kerala</p>
              </div>
            </div>
            <div className={styles.subhead}>
              <h3>Welcome Elite Student!</h3>
              <p>Enter your email and password</p>
            </div>
            <div className={styles.inputs}>
              <div>
                <label htmlFor="email">email</label>
                <input
                  value={creds.email}
                  onChange={({ target }) =>
                    setCreds({ ...creds, email: target.value })
                  }
                  type="text"
                  name="email"
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
export const getStaticProps = async (context) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
};
