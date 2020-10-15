import React, { useState } from "react";
import Login from "../../components/loginBox";
import Signup from "../../components/signupBox";
import styles from "./loginPage.module.css";

function LoginPage() {

  const [useSign, setSign] = useState("signin");

  return useSign === "signin" ? (
    <Login state={useSign} setState={setSign} />
  ) : (
    <Signup state={useSign} setState={setSign} />
  );
}

export default LoginPage;
