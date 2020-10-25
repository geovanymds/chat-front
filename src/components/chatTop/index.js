import React from "react";
import { useNavigate } from 'react-router-dom'
import chatPicture from "../../assets/images/profile.png";
import styles from "./chatTop.module.css";

function ChatTop({ chat }) {

  const navigate = useNavigate();

  function handleClick(){
    localStorage.removeItem('userToken')
    navigate('/login');
  }
  
  return (
    <div className={styles.container}>
      <img className={styles.picture} src={chatPicture} alt="chat" />
      <div className={styles.info}>
        <h2>{chat.name}</h2>
        <p className={styles.desc}>{chat.desc}</p>
      </div>
      <button onClick={handleClick}><span>Sair</span></button>
    </div>
  );
}

export default ChatTop;
