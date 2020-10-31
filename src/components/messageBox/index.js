import React from "react";
import Balloon from "../balloon";
import styles from "./messageBox.module.css"

function MessageBox({ messages, user }) {
  return (
    <div className={styles.container}>
      <ul className={styles.messageList}>
        {messages.length>0&&messages.map((message, index) => (
          <li key={index} className={message.sender === user ? styles.isSender : styles.notSender}>
            <Balloon className={styles.balloon} message={message.content} isSender={message.sender === user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageBox;
