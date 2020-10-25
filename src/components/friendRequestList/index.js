import React from 'react'
import Friend from '../addFriend'
import styles from './friendRequestList.module.css'

function RequestList({users}) {
  return (
    <div className={styles.friends}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Friend userName={user.name}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RequestList
