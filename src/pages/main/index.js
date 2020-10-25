import React, {useState} from "react";
import Profile from "../../components/profileCard";
import Search from "../../components/searchBar"
import Options from "../../components/options"
import styles from "./main.module.css";
import ChatList from "../../components/chatList"
import Members from "../../components/members"
import ChatTop from "../../components/chatTop/index"
import MessageBox from "../../components/messageBox"
import TextInput from "../../components/textInput"
import ModalCreateChat from "../../components/modal"
import RequestList from "../../components/friendRequestList"
import { Modal } from '@material-ui/core';

function Main() {

  const chats = [
    { id: "1", name: "chat 01", desc: "esse é o chat 01"},
    { id: "2", name: "chat 02", desc: "esse é o chat 02"},
    { id: "3", name: "chat 03", desc: "esse é o chat 03"},
    { id: "4", name: "chat 04", desc: "esse é o chat 04"},
    { id: "5", name: "chat 05", desc: "esse é o chat 05"},
    { id: "6", name: "chat 06", desc: "esse é o chat 06"},
    { id: "7", name: "chat 07", desc: "esse é o chat 07"}
  ];

  const members = [
    { id: "1", name: "member 01"},
    { id: "2", name: "member 02"},
    { id: "3", name: "member 03"},
    { id: "4", name: "member 04"},
    { id: "5", name: "member 05"},
    { id: "6", name: "member 06"},
    { id: "8", name: "member 08"},
    { id: "9", name: "member 09"},
    { id: "10", name: "member 10"},
    { id: "11", name: "member 11"},
    { id: "12", name: "member 12"},
    { id: "13", name: "member 13"}
];

const users = [
  { id: "1", name: "member 01"},
  { id: "2", name: "member 02"},
  { id: "3", name: "member 03"},
  { id: "4", name: "member 04"},
  { id: "5", name: "member 05"},
  { id: "6", name: "member 06"},
  { id: "8", name: "member 08"},
  { id: "9", name: "member 09"},
  { id: "10", name: "member 10"},
  { id: "11", name: "member 11"},
  { id: "12", name: "member 12"},
  { id: "13", name: "member 13"}
];

const messages = [
  { id: 1, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", sender: { id: 1, nome: 'Geovany' }},
  { id: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", sender: { id: 1, nome: 'Geovany' }},
  { id: 3, content: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", sender: { id: 1, nome: 'Geovany' }},
  { id: 4, content: "mensagem 04", sender: { id: 4, nome: 'Thiago' }},
];

  const [show,setShow] = useState(false);
  const handleShow = () => {setShow(true)}
  const handleClose= () => {setShow(false)}
  const [option, setOption] = useState("chats");

  return (
    
    <div className={styles.box}>
        <Modal 
        open={show}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        ><ModalCreateChat/></Modal>
      <div className={styles.profileAndChats}>
        <Profile/>
        <Search/>
        <Options show={show} setShow={handleShow} option={option} setOption={setOption}/>
        {option==="chats" ? <ChatList chats={chats}/> : <RequestList users={users}/>}
        <div className={styles.chats}></div>
      </div>
      <div className={styles.messagesAndSend}>
        <ChatTop chat={chats[0]}/>
        <Members members={members}/>
        <MessageBox messages={messages}/>
        <TextInput />
      </div>
    </div>
  );
}

export default Main;
