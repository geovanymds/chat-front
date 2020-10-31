import React from "react";
import axios from "axios";
import styles from "./members.module.css";
import add from "../../assets/icons/add.svg";

function Members({ members }) {
  return (
    <div className={styles.container}>
      <ul className={styles.memberList}>
        {members.map((member) => (
          <li className={styles.box} key={member._id}>
            <img src={member.avatarUrl} alt="profile" />
            <h2 className={styles.name}>{member.userName}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Members;
