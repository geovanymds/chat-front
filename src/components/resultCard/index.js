import React, {useState} from "react";
import Button from "../button";
import axios from "axios";
import styles from "./resultCard.module.css";

function ResultCard({ chat }) {

  const [password, setPassword] = useState("");

  const handleClick = async (event) => {

    event.preventDefault();
    const body = {
      chatId: chat._id,
      userId: localStorage.getItem('userId'),
      password
    }

    try {
      const { data } = axios.post('http://localhost:8080/chats/enter', body);

      console.log(data);
    } catch(error) {
      console.log(error);
    }
 
  }

  const handleChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      <div className={styles.container}>
        <img src={chat.avatarUrl} alt="Chat profile" />
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>{chat.name}</h2>
          <p className={styles.status}>{chat.description}</p>
        </div>
        {chat.password.length>0 && (
          <input placeholder={"password".toLocaleUpperCase()} value={password} onChange={handleChange} required />
        )}
        <div className={styles.enter} onClick={handleClick}>
          <Button type="text" text="enter" width="30px" height="30px"/>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
