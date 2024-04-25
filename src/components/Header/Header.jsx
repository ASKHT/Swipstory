import React from 'react'
import styles from "../Header/Header.module.css"
import { useSelector } from 'react-redux'
const Header = ({ setShowModal}) => {
  const isloggedin=useSelector((state)=>state?.auth?.data)
  return (
    <div className={styles.container}>
        <div>
            <h1>SwipTory</h1>
        </div>
        {isloggedin?(  <div className={styles.buttons_container}>
            <button className={styles.registerButton} >Bookmark</button>
             <button className={styles.signinButton}  onClick={() => setShowModal("addstory")}>Add Story</button>
        </div>):(  <div className={styles.buttons_container}>
            <button className={styles.registerButton} onClick={() => setShowModal("register")}>Register Now</button>
            <button className={styles.signinButton}  onClick={() => setShowModal("login")}>Sign in</button>
          
        </div>)}
      
      
    </div>
  )
}

export default Header

