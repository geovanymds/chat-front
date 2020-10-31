import React from "react";
import styles from "./balloon.module.css"

function Balloon({message, isSender}) {
  return (
    <React.StrictMode className={isSender ? styles.sender : styles.receiver}>
      <p>{message}</p>
    </React.StrictMode>
  ); 
}
export default Balloon;