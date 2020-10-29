import React, { useState, useEffect } from "react";
import styles from "./modal.module.css";
import axios from "axios";
import Button from "../button";
import closeIcon from "../../assets/icons/reject.svg";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Dropzone from "react-dropzone";
import addPicture from "../../assets/icons/portrait.svg";

function ModalCreateChat({ setShow }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [isPrivate, setIsPrivate] = useState(false);
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [picture, setPicture] = useState();
  const [url, setUrl] = useState("");
  const [tag, setTag] = useState("");

  const handleUpload = (file) => {
    setPicture(file[0]);
  };

  useEffect(() => {
    console.log(picture);
    if (!!picture) {
      setUrl(URL.createObjectURL(picture));
    }
  }, [picture]);

  const handleTag = () => {
    if (!tag) return;
    else if (!tags.includes(tag)) {
      setTags([...tags, tag]);
      setTag("");
    }
  };

  const handleChangeName = () => {
    setName(name.toLowerCase());
  }

  const handleCreate = async (event) => {
    event.preventDefault();

    const chat = {
      name,
      admin: localStorage.getItem("userLogin"),
      description,
      tags,
      isPrivate,
      password,
      members: [],
      messages: [],
    };

    try {

      const dataPicture = new FormData();

      dataPicture.append("file", picture, picture.name);

      const upload  = await axios.post(
        `http://localhost:8080/picture/post`,
        dataPicture
      );
      console.log(upload.data);

      chat.avatarUrl = upload.data.url;

      await axios.post(
        `http://localhost:8080/chats/create`,
        chat
      );

      setOpen(true);

      setTag("");
      setName("");
      setDescription("");
      setIsPrivate(false);
      setPassword("");
      setTags([]);

      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={3}>
        <Alert severity="success">This is a success message!</Alert>
      </Snackbar>
      <form onSubmit={handleCreate}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Create Chat</h1>
            <div className={styles.exit} onClick={() => setShow(false)}>
              <Button type="icon" icon={closeIcon} />
            </div>
          </div>
          <Dropzone accept="image/*" onDropAccepted={handleUpload}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) =>
              !!url ? (
                <div className={styles.dropContainerImage} {...getRootProps()}>
                  <input type="file" {...getInputProps()} />
                  <img className={styles.newPicture} src={url} alt="profile"/>
                </div>
              ) : (
                <div className={styles.dropContainer} {...getRootProps()}>
                  <input type="file" {...getInputProps()} />
                  <img className={styles.picture} src={addPicture} alt="void-profile"/>
                </div>
              )
            }
          </Dropzone>

          <div className={styles.body}>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleChangeName}
              placeholder="Nome"
            />
            <input
              type="text"
              id="description"
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <div className={styles.tagadd}>
              <input
                type="text"
                id="tagAdd"
                value={tag}
                onChange={(event) => {
                  setTag(event.target.value);
                }}
                placeholder="New Tag"
              />
              <button
                type="button"
                className={styles.addbutton}
                onClick={handleTag}
              >
                {" "}
                add{" "}
              </button>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
            <div className={styles.checkContainer}>
              <label className={styles.switch}>
                <input
                  id="private"
                  type="checkbox"
                  checked={isPrivate}
                  onChange={(event) => setIsPrivate(!isPrivate)}
                  className={styles.checkPrivate}
                />
                Private
              </label>
            </div>
          </div>
          <div className={styles.footer}>
            <ul className={styles.tagList}>
              {tags.map((tag) => (
                <li className={styles.block} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
            <button type="submit">Create</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ModalCreateChat;
