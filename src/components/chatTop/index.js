import React from "react";
import chatPicture from "../../assets/images/profile.png";
import styles from "./chatTop.module.css";

function ChatTop({ chat }) {
  return (
    <div className={styles.container}>
      <img className={styles.picture} src={chatPicture} alt="chat" />
      <div className={styles.info}>
        <h2>{chat.name}</h2>
        <p className={styles.desc}>{chat.desc}</p>
      </div>
    </div>
  );
}

export default ChatTop;
