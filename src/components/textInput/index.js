import React from "react";
import Button from "../button"
import sendIcon from "../../assets/icons/send.svg"
import styles from "./textInput.module.css"

function TextInput() {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.sendbar}/>
      <Button type="icon" icon={sendIcon}/>
    </div>
  );
}

export default TextInput;
