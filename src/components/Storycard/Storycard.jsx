import React from 'react'
import styles from "../Storycard/Story.module.css"
import all from "../../assets/category/all.jpg"
import Viewstory from "../Viewstory/Viewstory.jsx"
import {useContext } from 'react'
import Usercontext from '../../Context/Usercontext.js'
const Storycard = ({post}) => {
  // const [viewstory,Setviewstory]=useState(false)
  const {Setviewstory,Setactivepost}=useContext(Usercontext)
  const handlepost=(postid)=>{
    // console.log(post._id)
       Setactivepost(postid)
       Setviewstory(true)
  }
  return (
          <>
          <div className={styles.container}onClick={()=>handlepost(post._id)}>
            <div className={styles.wrapper}></div>
            <img src={post?.addstory[0]?.images} className={styles.image} />
            <div className={styles.content}>
                <h1 className={styles.title}>{post?.addstory[0]?.heading}</h1>
                <p className={styles.subcontent}>{post?.addstory[0]?.description}</p>
            </div>
        </div>
         {/* {viewstory?<Viewstory postid={story._id} key={story._id} />:""} sending multiple id's change the postion of that to mainpage */}
      </> 
  )
}

export default Storycard