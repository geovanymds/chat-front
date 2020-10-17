import React from "react";
import ChatCard from "../../components/chatCard"
import styles from "./chatList.module.css"

function ChatList({chats}) {
  return (
    <div className={styles.chats}>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <ChatCard chatName={chat.name} chatDesc={chat.desc}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;