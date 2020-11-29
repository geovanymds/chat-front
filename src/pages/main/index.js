import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";
import Profile from "../../components/profileCard";
import Search from "../../components/searchBar";
import Options from "../../components/options";
import styles from "./main.module.css";
import ChatList from "../../components/chatList";
import Members from "../../components/members";
import ChatTop from "../../components/chatTop/index";
import MessageBox from "../../components/messageBox";
import TextInput from "../../components/textInput";
import ModalCreateChat from "../../components/modal";
import ResultList from "../../components/resultList";
import { Modal } from "@material-ui/core";
const ENDPOINT = "http://localhost:8080";
const socket = socketIOClient(ENDPOINT);

function Main() {
  const [globalUser, setGlobalUser] = useState({});
  const [chats, setChats] = useState([]);
  const [openChat, setOpenChat] = useState(0);
  const [show, setShow] = useState(false);
  const [showChats, setShowChats] = useState(false);
  const [option, setOption] = useState("chats");
  const [resultChats, setResultChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const userLogin = localStorage.getItem("userLogin");
      const { data } = await axios.get(
        `http://localhost:8080/users/${userLogin}`
      );

      setGlobalUser({ ...data });

      const userChats = await axios.get(
        `http://localhost:8080/chats/user/${userLogin}`
      );

      setChats([...userChats.data.chats]);



      // const chatsMensagens = []
      // userChats.data.chats.forEach((chat) => {
      //   chatsMensagens.push({chatId: chat._id, messages: [], page: 0})
      // });
 
      if(!!userChats.data.chats[0]){
      const newMessages = await axios.get(
        `http://localhost:8080/chats/messages` , {chatId: userChats.data.chats[0]._id,
        page: 0}
      );
      setMessages([...newMessages]);
      }


      if (userChats.data.chats.length > 0) {
        const newMessages = await axios.get(
          `http://localhost:8080/chats/messages?chatId=${userChats.data.chats[0]._id}&page=${page}`
        );
        setMessages([...newMessages.data.pagination]);
      }
    }

    socket.on("connection", (data) => {
      console.log(data);
    });

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    socket.emit("enter", chats);
  }, [chats]);

  useEffect(()=> {
    socket.on("send", (data) => {

      const { chatId, sender, date, content } = data;

      const newMessage = {
        sender,
        date,
        content,
      }
      if((chats.length > 0) && chatId === chats[openChat]._id)
      setMessages([...messages, newMessage])
    });
  });

      // if (!!chats[openChat]&&chatId === chats[openChat]._id) {

      //   setMessages([...messages, newMessage]);

    

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    async function fetchData() {
      if (chats.length > 0) {
        const { data } = await axios.get(
          `http://localhost:8080/chats/messages?chatId=${chats[openChat]._id}&page=${page}`
        );
        console.log("Page:", page);
        setMessages([...data.pagination]);
        setPage(1);
      }
    }

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [openChat]);

  return (
    <div className={styles.box}>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalCreateChat setShow={setShow} chats={chats} setChats={setChats} />
      </Modal>
      <Modal
        open={showChats}
        onClose={() => {
          setShowChats(false);
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={styles.searchResult}>
          <ResultList chats={resultChats} setShowChats={setShowChats} />
        </div>
      </Modal>
      <div className={styles.profileAndChats}>
        <Profile
          name={globalUser.userName}
          status={globalUser.status}
          pictureURL={globalUser.avatarUrl}
        />
        <Search setShowChats={setShowChats} setResultChats={setResultChats} />
        <Options
          show={show}
          setShow={handleShow}
          option={option}
          setOption={setOption}
        />
        {option === "chats" && <ChatList chats={chats} setChat={setOpenChat} />}
        <div className={styles.chats}></div>
      </div>
      <div className={styles.messagesAndSend}>
        {chats.length > 0 && <ChatTop chat={chats[openChat]} />}
        {chats.length > 0 && chats[openChat].members && (
          <Members members={chats[openChat] ? chats[openChat].members : []} />
        )}
        <MessageBox
          messages={messages}
          user={globalUser.login}
          page={page}
          setPage={setPage}
          setMessages={setMessages}
          chatId={chats.length > 0 ? chats[openChat]._id : 0}
          totalMessages={chats.length > 0 ? chats[openChat].totalMessages : 0}
          chats
        />
        <TextInput
          chatId={chats.length > 0 ? chats[openChat]._id : null}
          sender={globalUser.login}
        />
      </div>
    </div>
  );
}

export default Main;
