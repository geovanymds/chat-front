import React from "react";
import styles from "./button.module.css";

function Button({ type, icon, iconAlt, text, height, width, onclick }) {
  if (type === "icon") {
    return (
      <div className={styles.container}>
        <img
          className={styles.icon}
          src={icon}
          alt={iconAlt}
          style={{ width, height }}
        />
      </div>
    );
  } else if (type === "both") {
    return (
      <div className={styles.both}>
        <img
          className={styles.icon}
          src={icon}
          alt={iconAlt}
        />
        <span className={styles.text}>{text.toUpperCase()}</span>
      </div>
    );
  } else {
    return <div>{text.toUpperCase()}</div>;
  }
}

export default Button;
