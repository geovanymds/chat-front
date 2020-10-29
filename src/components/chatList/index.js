import React from "react";
import ChatCard from "../../components/chatCard"
import styles from "./chatList.module.css"

function ChatList({chats, setChat}) {

  return (
    <div className={styles.chats}>
      <ul>
        {chats.map((chat, index) => (
          <li key={index} onClick={()=>{setChat(index)}}>
            <ChatCard chat={chat} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;