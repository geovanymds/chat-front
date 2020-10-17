import React from "react";
import ProfilePicture from "./profile.png";
import styles from "./profile.module.css";

function Profile() {
  return (
    <div>
      <div className={styles.container}>
        <img src={ProfilePicture} alt="user profile" />
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>Geovany Carlos Mendes</h2>
          <p className={styles.status}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
