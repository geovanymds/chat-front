import React from "react";
import ResultCard from "../../components/resultCard";
import styles from "./resultList.module.css";

function ResultList({ chats }) {
  return (
    <>
        <div className={styles.header}>
          <h1 className={styles.title}>Result</h1>
        </div>
        <div className={styles.chats}>
          <ul>
            {chats.map((chat) => (
              <li key={chat._id}>
                <ResultCard
                  chat={chat}
                />
              </li>
            ))}
          </ul>
        </div>
    </>
  );
}

export default ResultList;
