import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./search.module.css";
import searchIcon from "../../assets/icons/search.svg";

function Search({ setShowChats, setResultChats }) {
  const [search, setSearch] = useState("");
  const [sendSearch, setSendSearch] = useState("");

  const handleSearch = async (event) => {
    if (event.key === "Enter" && search.length > 0) {
      const login = localStorage.getItem("userLogin");
      const { data } = await axios.get(
        `http://localhost:8080/chats/search?keyWord=${sendSearch}&login=${login}`
      );
      console.log(data);
      setResultChats([...data.chats]);
      setShowChats(true);
    }
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setSendSearch(search.trim().split(" ").join("+"));
  }, [search]);

  return (
    <div className={styles.container}>
      <div className={styles.barContainer}>
        <img className={styles.icon} src={searchIcon} alt="search" />
        <input
          className={styles.search}
          placeholder={"Search chat...".toLocaleLowerCase()}
          onKeyPress={handleSearch}
          value={search}
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
}

export default Search;
