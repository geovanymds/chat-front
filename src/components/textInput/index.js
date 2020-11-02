import React, { useState } from "react";
import axios from "axios";
import Button from "../button";
import sendIcon from "../../assets/icons/send.svg";
import styles from "./textInput.module.css";

function TextInput({ chatId, sender }) {
  const [content, setContent] = useState("");

  const messageSender = async (event) => {
    try {
      if (content.length > 0) {
        const message = {
          chatId,
          sender,
          content,
        };

        await axios.post(
          `http://localhost:8080/chats/send`,
          message
        );

        setContent("");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
        className={styles.sendbar}
      />
      <div onClick={messageSender}>
        <Button type="icon" icon={sendIcon} />
      </div>
    </div>
  );
}

export default TextInput;
