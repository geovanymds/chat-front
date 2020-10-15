import React from "react";
import styles from "./signup.module.css";

function Signup({ state, setState }) {
  function handleSign(state, setState) {
    state === "signin" ? setState("signup") : setState("signin");
  }

  return (
    <div>
      <form className={styles.signupBox}>
        <h2 className={styles.title}>Signup</h2>
        <input
          type="text"
          placeholder={"User Login".toUpperCase()}
          className={styles.userLogin}
        ></input>
        <input
          type="text"
          placeholder={"User Name".toUpperCase()}
          className={styles.userName}
        ></input>
        <input
          type="email"
          placeholder={"Email".toUpperCase()}
          className={styles.email}
        ></input>
        <input
          type="password"
          placeholder={"Password".toUpperCase()}
          className={styles.password}
        ></input>
        <div className={styles.signinCall}>
          <button>
            <span>Signup</span>
          </button>
          <div>
            <p className={styles.signin} onClick={() => setState("signin")}>
              Registered yet?
              <br /> Signin →
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
