import React from 'react'
import styles from "./Bookmark.module.css"
import Login from "../Authmodal/Loginmodal.jsx"
import Register from "../Authmodal/Registermodal"
import Storyform from '../Storyform/Storyform'
import Viewstory from '../Viewstory/Viewstory.jsx'
import { useContext,useState,useEffect } from 'react'
import Usercontext from '../../Context/Usercontext'
import { getallbookmarkposts } from '../../api/useractionapi.js'
import Storycard from '../Storycard/Storycard.jsx'
import { useSelector } from 'react-redux'
const Bookmark = () => {
    const [bookmarkdata,Setbookmarkdata]=useState([]);
    const {showmodal,Setshowmodal,Setviewstory,viewstory,activepost}=useContext(Usercontext)
    const userdetails=useSelector((state)=>state.auth.data)
  useEffect(() => {
    const fetchBookmarks = async () => {
        try {
            const res = await getallbookmarkposts();
            Setbookmarkdata(res.bookmarks);
        } catch (error) {
            console.log(error);
        }
    };

    if (userdetails) {
        fetchBookmarks();
    }

}, [userdetails]);
  return (
    <div className={styles.container}>
           <div className={styles.text}>
              <p>Your Bookmarks</p>
           </div>
           <div className={styles.bookmarklayout}>
                   {
                    bookmarkdata.map((item,index)=>(
                        <Storycard key={item._id} post={item}/>
                    ))
                   }
           </div>
            {showmodal === "register" && <Register />}
            {showmodal === "login" && <Login />}
            {showmodal === "addstory" && <Storyform Setshowmodal={Setshowmodal} />}
            {viewstory === true && <Viewstory Setviewstory={Setviewstory} postid={activepost}/>}
    </div>
  )
}

export default Bookmark