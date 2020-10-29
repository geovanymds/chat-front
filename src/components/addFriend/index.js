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
                type="both"
                icon={accept}
                alt="accept"
                width="8px"
                height="8px"
                text="accept"
              />
            </div>
            <div className={styles.btn}>
              <Button
                type="both"
                icon={reject}
                alt="reject"
                width="8px"
                height="8px"
                text="reject"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friend;
