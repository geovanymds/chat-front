import React from "react";
import styles from "./balloon.module.css"

function Balloon({message, isSender}) {
  return (
    <React.StrictMode className={isSender ? styles.sender : styles.receiver}>
      <h2 className={styles.sender}>{message.sender}</h2>
      <p>{message.content}</p>
    </React.StrictMode>
  ); 
}
export default Balloon;