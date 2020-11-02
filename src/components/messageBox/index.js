import React, {useState } from "react";
import axios from "axios";
import Balloon from "../balloon";
import styles from "./messageBox.module.css";

function MessageBox({
  messages,
  user,
  page,
  setPage,
  setMessages,
  chatId,
  totalMessages,
}) {

  const[total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  async function handleScroll() {

    if(loading) {
      return;
    }

    if(total>0 && totalMessages===total) {
      return;
    }

    setLoading(true);

    const el = document.querySelector("#scrollBox");

    if (((el.scrollTop>=0)&&(el.scrollTop < 50))||(el.scrollHeight-(-1*el.scrollTop)<500)) {
      console.log(el.scrollTop);
      const { data } = await axios.get(
        `http://localhost:8080/chats/messages?chatId=${chatId}&page=${page}`
      );
      setMessages([...data.pagination, ...messages]);
      setTotal(total+data.pagination.length);
      el.scrollTop+=100;
      setPage(page+1);
    }

    setLoading(false);
    
  }

  return (
    <div className={styles.container} id="scrollBox" onScroll={handleScroll}>
      <ul className={styles.messageList}>
        {messages.length > 0 &&
          messages.map((message, index) => (
            <li
              key={index}
              className={
                message.sender === user ? styles.isSender : styles.notSender
              }
            >
              <Balloon
                className={styles.balloon}
                message={message}
                isSender={message.sender === user}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MessageBox;
