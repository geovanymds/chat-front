import React from "react";
import Balloon from "../balloon";
import styles from "./messageBox.module.css"

function MessageBox({ messages }) {
  return (
    <div className={styles.container}>
      <ul className={styles.messageList}>
        {messages.map((message) => (
          <li key={message.id} className={message.sender.id === 4 ? styles.isSender : styles.notSender}>
            <Balloon className={styles.balloon} message={message} isSender={message.sender.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageBox;
