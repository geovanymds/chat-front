import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styles from "./login.module.css";

function Login({ state, setState }) {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleLogin(event) {

    event.preventDefault(event);

    try {

      const user = {
        login,
        password
      }

      const {data} = await axios.post(`http://localhost:8080/users/login`, user);

      localStorage.setItem('userLogin',data.login);
      localStorage.setItem('userName',data.user);
      localStorage.setItem('userToken',data.token);
      localStorage.setItem('userId',data.id);

      console.log(data);

      navigate('/main');

    } catch(error) {

      console.log(error);
      alert(error);

    }

  }

  return (
    <div>
      <form className={styles.loginBox} onSubmit={handleLogin}>
        <h2 className={styles.title}>Login</h2>
        <input
          type="text"
          placeholder={"login".toUpperCase()}
          className={styles.login}
          value={login}
          onChange={event => setLogin(event.target.value)}
          required
        ></input>
        <input
          type="password"
          placeholder={"password".toUpperCase()}
          className={styles.password}
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        ></input>
        <div className={styles.signupCall}>
          <button type="submit">
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
