import React, { useState } from "react";
import styles from "./modal.module.css";

function ModalCreateChat() {
  const [form, setForm] = React.useState({
    name: '',
    admin: '',
    description: '',
    tags: [],
    private: false,
    password: '',
    members: [],
    messages: '',
  });

  const [tag, setTag] = useState('');

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }


  function handleTag(){
    if(!tag) return
    else{ 
      const newTags = [ ...form.tag, tag];
      setForm({ ...form, tags: newTags});
    }
  }
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Creat Chat</h1>
          <button className={styles.exit}>[X]</button>
        </div>
        <div className={styles.body}>
          <input type="text" id="name" value={form.nome} onChange={handleChange} placeholder="Nome"/>
          <textarea id="description"  value={form.description} onChange={handleChange} rows="3" cols="37">Description</textarea>
          <div className={styles.tagadd}>
            <input type="text" id="tagAdd" value={form.tags} onChange={function changeTag ({ target }){const {value} = target; setTag(value);}} placeholder="New Tag"/>
            <button className={styles.addbutton} onClick={handleTag}> add </button>
          </div>
          <input type="password" id="password" value={form.password} onChange={handleChange} placeholder="Password"/>
          <label className={styles.switch}> <input id="private" type="checkbox" checked={form.private} onChange={handleChange}/> <span className={[styles.slider, styles.round]}></span> </label>
        </div> 
        <div className={styles.footer}>
          <ul className={styles.tagList}>
            {form.tags.map((tag) => (
            <li key={tag}>
              <p className={styles.block}>{tag}</p>
            </li>
            ))}
          </ul>
          <button variant="secondary">
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalCreateChat;
