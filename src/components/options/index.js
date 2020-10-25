import React, { useState } from "react";
import chatIcon from "../../assets/icons/chat.svg";
import createChatIcon from "../../assets/icons/create-chat.svg";
import requestIcon from "../../assets/icons/friend-request.svg";
import Button from "../button";
import Login from "../loginBox";
import styles from "./options.module.css";

function Options({ show, setShow, option, setOption }) {

  const handleOpen = () => {
    setShow(true);
  };

  const handleChats = () =>{
    setOption("chats")
  }

  const handleRequests = () =>{
    setOption("requests")
  }

  return (
    <div className={styles.container}>
      <div onClick={handleChats}>
        <Button
          type="icon"
          icon={chatIcon}
          iconAlt="chat"
          height="35px"
          width="35px"
        />
      </div>
      <div onClick={handleOpen}>
      <Button
        type="icon"
        icon={createChatIcon}
        iconAlt="create-chat"
        height="35px"
        width="35px"
      />
      </div>
      <div onClick={handleRequests}>
      <Button
        type="icon"
        icon={requestIcon}
        iconAlt="friend-request"
        height="35px"
        width="35px"
      />
      </div>
    </div>
  );
}

export default Options;
