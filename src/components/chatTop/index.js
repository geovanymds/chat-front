import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./chatTop.module.css";

function ChatTop({ chat }) {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/login');
    localStorage.removeItem('userToken');
  }
  
  return (
    <div className={styles.container}>
      <img className={styles.picture} src={chat.avatarUrl} alt="chat" />
      <div className={styles.info}>
        <h2>{chat.name}</h2>
        <p className={styles.desc}>{chat.description}</p>
      </div>
      <button onClick={handleClick}><span>Sair</span></button>
    </div>
  );
}

export default ChatTop;
