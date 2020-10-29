import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";
import styles from "./signup.module.css";
import addPicture from "../../assets/icons/portrait.svg";

function Signup({ state, setState }) {
  const [login, setLogin] = useState("");
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState();
  const [url, setUrl] = useState("");

  const navigate = useNavigate();
  const handleUpload = (file) => {
    setPicture(file[0]);
  };

  useEffect(() => {
    console.log(picture);
    if (!!picture) {
      setUrl(URL.createObjectURL(picture));
    }
  }, [picture]);

  async function handleSignup(event) {
    event.preventDefault(event);

    try {
      const dataPicture = new FormData();

      const user = {
        login,
        userName,
        email,
        password,
      };

      dataPicture.append("file", picture, picture.name);

      const upload  = await axios.post(
        `http://localhost:8080/picture/post`,
        dataPicture
      );

      user.avatarUrl = upload.data.url;

      const { data } = await axios.post(
        `http://localhost:8080/users/signup`,
        user
      );

      localStorage.setItem("userId", data._id);
      localStorage.setItem("userName", data.userName);
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("userLogin", data.login);

      navigate("/main");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  return (
    <div>
      <form className={styles.signupBox} onSubmit={handleSignup}>
        <h2 className={styles.title}>Signup</h2>
        <Dropzone accept="image/*" onDropAccepted={handleUpload}>
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) =>
            !!url ? (
              <div className={styles.dropContainerImage} {...getRootProps()}>
                <input type="file" {...getInputProps()} />
                <img className={styles.newPicture} src={url} alt="profile"/>
              </div>
            ) : (
              <div className={styles.dropContainer} {...getRootProps()}>
                <input type="file" {...getInputProps()} />
                <img className={styles.picture} src={addPicture} alt="void-profile"/>
              </div>
            )
          }
        </Dropzone>
        <input
          type="text"
          placeholder={"User Login".toUpperCase()}
          className={styles.userLogin}
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          required
        ></input>
        <input
          type="text"
          placeholder={"User Name".toUpperCase()}
          className={styles.userName}
          value={userName}
          onChange={(event) => setName(event.target.value)}
          required
        ></input>
        <input
          type="email"
          placeholder={"Email".toUpperCase()}
          className={styles.email}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        ></input>
        <input
          type="password"
          placeholder={"Password".toUpperCase()}
          className={styles.password}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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

// let newFile = Object.assign({}, fileState.file);
//       newFile.file = URL.createObjectURL(file[0]);
//       return newFile.file;
