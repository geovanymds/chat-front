import React from "react";
import styles from "./login.module.css";

function Login({ state, setState }) {
  return (
    <div>
      <form className={styles.loginBox}>
        <h2 className={styles.title}>Login</h2>
        <input
          type="text"
          placeholder={"login".toUpperCase()}
          className={styles.login}
        ></input>
        <input
          type="password"
          placeholder={"password".toUpperCase()}
          className={styles.password}
        ></input>
        <div className={styles.signupCall}>
          <button>
            <span>Sign In</span>
          </button>
          <div>
            <p className={styles.signup} onClick={() => setState("signup")}>
              Not registered yet?
              <br /> Sign up →
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
