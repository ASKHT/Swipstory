import React from 'react'
import styles from "../Header/Header.module.css"
const Header = ({ setShowModal}) => {

  return (
    <div className={styles.container}>
        <div>
            <h1>SwipTory</h1>
        </div>
        <div className={styles.buttons_container}>
            <button className={styles.registerButton} onClick={() => setShowModal("register")}>Register Now</button>
            <button className={styles.signinButton}  onClick={() => setShowModal("login")}>Sign in</button>
        </div>
    </div>
  )
}

export default Header