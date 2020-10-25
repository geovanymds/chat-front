import React from "react";
import Button from "../button";
import styles from "./addFriend.module.css";
import profilePicture from "../../assets/images/profile.png";
import accept from "../../assets/icons/accept.svg";
import reject from "../../assets/icons/reject.svg";

function Friend({ userName }) {
  return (
    <div>
      <div className={styles.container}>
        <img src={profilePicture} alt="Chat profile" />
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>{userName}</h2>
          <div className={styles.buttonContainer}>
            <div className={styles.btn}>
              <Button
                type="icon"
                icon={accept}
                alt="accept"
                width="20px"
                height="20px"
              />
            </div>
            <div className={styles.btn}>
              <Button
                type="icon"
                icon={reject}
                alt="reject"
                width="20px"
                height="20px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friend;
