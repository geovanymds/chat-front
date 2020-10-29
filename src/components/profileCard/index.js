import React from "react";
import styles from "./profile.module.css";

function Profile({name, status, pictureURL}) {
  return (
    <div>
      <div className={styles.container}>
        <img src={pictureURL} alt="user profile" />
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.status}>{status}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
