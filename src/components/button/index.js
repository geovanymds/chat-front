import React from "react";
import styles from "./button.module.css"

function Button({ type, icon, iconAlt, text, height, width }) {
  return type === "icon" ? (
    <div>                                             
      <img className={styles.icon} src={icon} alt={iconAlt} style={{width, height}} />
    </div>
  ) : (
    <div>{text.toUpperCase()}</div>
  );
}

export default Button;
