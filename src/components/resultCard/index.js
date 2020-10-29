import React from "react";
import ChatProfile from "./bghome.png";
import styles from "./resultCard.module.css";

function ResultCard({ avatarUrl, chatName, chatDesc, passRequired }) {
  return (
    <div>
      <div className={styles.container}>
        <img src={avatarUrl} alt="Chat profile" />
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>{chatName}</h2>
          <p className={styles.status}>{chatDesc}</p>
        </div>
        {passRequired&&<input placeholder={"password".toLocaleUpperCase()} required/>}
      </div>
    </div>
  );
}

export default ResultCard;