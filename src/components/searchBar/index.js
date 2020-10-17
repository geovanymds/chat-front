import React from 'react'
import styles from './search.module.css'
import searchIcon from '../../assets/icons/search.svg'

function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.barContainer}>
        <img className={styles.icon} src={searchIcon} alt="search"/>
        <input className={styles.search} placeholder={"Search chat...".toLocaleLowerCase()}></input>
      </div>
    </div>
  )
}

export default Search
