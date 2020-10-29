import React from "react";
import styles from "./chatCard.module.css";

function ChatCard({ chat }) {

  return (
    <div >
      <div className={styles.container}>
        <img src={chat.avatarUrl} alt="Chat profile" />
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>{chat.name}</h2>
          <p className={styles.status}>{chat.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
