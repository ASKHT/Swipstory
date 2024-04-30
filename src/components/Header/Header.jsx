import React from 'react'
import styles from "../Header/Header.module.css"
import { useSelector } from 'react-redux'
import Usercontext from "../../Context/Usercontext.js"
import { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBookmark } from "react-icons/fa";
import profileimage from "../../assets/profileimage.png"
import { RxHamburgerMenu } from "react-icons/rx";
import {logout} from "../../redux/features/AuthSlice.js"
import { useDispatch } from 'react-redux'
const Header = ({Setshowmodal}) => {
  const dispatch=useDispatch()
  const userdetails=useSelector((state)=>state?.auth?.data)
  const name= JSON.parse(localStorage.getItem("userdetails"));
  const {Setmakestory,Setloggedinstate}=useContext(Usercontext)
  const logouthandler=()=>{
      dispatch(logout())
  }
  const [dropdown,Setdropdown]=useState(false)
  const navigate = useNavigate()
  // const isloggedin=useSelector((state)=>state?.auth?.data)
  const handleaddstory=()=>{
          //  alert("i am clicked")
         Setshowmodal("addstory")
           Setmakestory(false);
  }
  const navigatetobookmark=()=>{
         navigate("/bookmark")
  }
  const navigatetohomepage=()=>{
        navigate("/")
  }
   const toggleDropdown = () => {
        Setdropdown(!dropdown); // Toggle dropdown state
    };
  return (
    <div className={styles.container}>
        <div>
            <h1 onClick={navigatetohomepage} style={{cursor:"pointer"}}>SwipTory</h1>
        </div>
        {userdetails?(  <div className={styles.buttons_container}>
            {/* <button className={styles.registerButton} onClick={navigatetobookmark}>Bookmark</button> */}
             <div className={styles.registerButton}  onClick={navigatetobookmark}>
                  <FaBookmark />
                 <span >Bookmark</span>
             </div>
             <button className={styles.signinButton}  onClick={handleaddstory}>Add Story</button>
             <img src={profileimage} />
             <RxHamburgerMenu  style={{fontSize:"2rem"}} onClick={toggleDropdown}/>
             {dropdown?( <div className={styles.hanburgerdropdown}>
                   <p style={{fontSize:"1.5rem",fontWeight:"bold"}}>{userdetails?.username}</p>
                   <button className={styles.signinButton} onClick={()=>logouthandler()}>Logout</button>
             </div>):(null)}
            
        </div>):(  <div className={styles.buttons_container}>
            <button className={styles.registerButton} onClick={() =>Setshowmodal("register")}>Register Now</button>
            <button className={styles.signinButton1}  onClick={() =>Setshowmodal("login")}>Sign in</button>
          
        </div>)}
      
      
    </div>
  )
}

export default Header

