import React, {useState} from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import styles from "./signup.module.css";

function Signup({ state, setState }) {

  const [login, setLogin] = useState('');
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleSignup(event) {

    event.preventDefault(event);

    try {

      const user = {
        login,
        userName,
        email,
        password
      }

      const {data} = await axios.post(`http://localhost:8080/users/signup`, user);

      localStorage.setItem('userId',data.id);
      localStorage.setItem('userName',data.userName);
      localStorage.setItem('userToken',data.token);

      navigate('/main');

    } catch(error) {

      console.log(error);
      alert(error);

    }

  }

  return (
    <div>
      <form className={styles.signupBox} onSubmit={handleSignup}>
        <h2 className={styles.title}>Signup</h2>
        <input
          type="text"
          placeholder={"User Login".toUpperCase()}
          className={styles.userLogin}
          value={login}
          onChange={event => setLogin(event.target.value)}
          required
        ></input>
        <input
          type="text"
          placeholder={"User Name".toUpperCase()}
          className={styles.userName}
          value={userName}
          onChange={event => setName(event.target.value)}
          required
        ></input>
        <input
          type="email"
          placeholder={"Email".toUpperCase()}
          className={styles.email}
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        ></input>
        <input
          type="password"
          placeholder={"Password".toUpperCase()}
          className={styles.password}
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        ></input>
        <div className={styles.signinCall}>
          <button type="submit">
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
