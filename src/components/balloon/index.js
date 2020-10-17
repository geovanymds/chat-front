import React from "react";
import styles from "./balloon.module.css"

function Balloon({ message, isSender}) {
  return (
    <React.StrictMode className={isSender === 4 ? styles.sender : styles.receiver}>
      <p>{message.content}</p>
    </React.StrictMode>
  ); 
}
export default Balloon;