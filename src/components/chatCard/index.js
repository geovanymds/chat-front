import React from "react";
import ChatProfile from "./bghome.png";
import styles from "./chatCard.module.css";

function ChatCard({chatName, chatDesc}) {
  return (
    <div>
      <div className={styles.container}>
        <img src={ChatProfile} alt="Chat profile" />
        <div className={styles.infoContainer}>
  <h2 className={styles.name}>{chatName}</h2>
          <p className={styles.status}>
            {chatDesc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
