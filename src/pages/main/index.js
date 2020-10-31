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

function Main() {
  const socket = socketIOClient(ENDPOINT);
  const [globalUser, setGlobalUser] = useState({});
  const [chats, setChats] = useState([]);
  const [openChat, setOpenChat] = useState(0);
  const [members, setMembers] = useState([]);
  const [show, setShow] = useState(false);
  const [showChats, setShowChats] = useState(false);
  const [option, setOption] = useState("chats");
  const [resultChats, setResultChats] = useState([]);
  const [response, setResponse] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const userLogin = localStorage.getItem("userLogin");
      const { data } = await axios.get(
        `http://localhost:8080/users/${userLogin}`
      );

      setGlobalUser({ ...data });

      const userChats = await axios.get(
        `http://localhost:8080/chats/${userLogin}`
      );

      setChats([...userChats.data.chats]);

      // const chatsMensagens = []
      // userChats.data.chats.forEach((chat) => {
      //   chatsMensagens.push({chatId: chat._id, messages: [], page: 0})
      // });
 
      if(!!userChats.data.chats[0]){
      const newMensagens = await axios.get(
        `http://localhost:8080/chats/messages` , {chatId: userChats.data.chats[0]._id,
        page: 0}
      );
      setMessages([...newMensagens]);
      }

      if(!!userChats.data.chats[0]) {
        setMembers([...userChats.data.chats[0].members]);
      }
     
    }

    socket.on("connection", data => {
      setResponse(data);
    });

    fetchData();

  }, []);

  useEffect(()=>{
    socket.on("send", data=> {
      const {chatId, sender, date, content} = data
      const newMessage = {
        sender,
        date,
        content,
      }
      if((chats.length > 0) && chatId === chats[openChat]._id)
      setMessages([...messages, newMessage])
    });
  });


  useEffect(()=>{
    socket.emit("enter", (chats));
  },[chats]);

  useEffect(() => {
    async function fetchData(){
      setMembers(chats.length > 0 ? chats[openChat].members : []);
      
      if(!!messages[openChat]){
      const newMensagens = await axios.post(
        `http://localhost:8080/chats/messages` , { chatId: messages[openChat].chatId,
        page: 0}
      );
      setMessages([...newMensagens]);
      }
    }
    fetchData();
  }, [openChat]);


  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

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
        {(option === "chats")&&<ChatList chats={chats} setChat={setOpenChat} />}
        <div className={styles.chats}></div>
      </div>
      <div className={styles.messagesAndSend}>
        {chats.length > 0 && <ChatTop chat={chats[openChat]} />}
        <Members members={!!members ? members : []} />
        <MessageBox messages={messages} user={globalUser.login}/>
        <TextInput chatId={chats.length > 0 ? chats[openChat]._id : null} sender={globalUser.login}/>
      </div>
    </div>
  );
}

export default Main;
