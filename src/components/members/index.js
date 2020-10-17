import React from "react";
import styles from "./members.module.css";
import profilePicture from "../../assets/images/profile.png";
import add from "../../assets/icons/add.svg"

function Members({ members }) {
  return (
    <div className={styles.container}>
      <ul className={styles.memberList}>
        {members.map((member) => (
          <li className={styles.box} key={member.id}>
            <img src={profilePicture} alt="profile" />
            <div className={styles.memberInfo}>
              <h2 className={styles.name}>{member.name}</h2>
              <img className={styles.icon} src={add} alt="add friend"/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Members;
