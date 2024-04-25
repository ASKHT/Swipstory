import React from 'react'
import styles from "../Storycard/Story.module.css"
import all from "../../assets/category/all.jpg"
const Storycard = ({story}) => {
  console.log(story)
  return (
    
          <div className={styles.container}>
            <div className={styles.wrapper}></div>
            <img src={story?.addstory[0]?.images} alt="" className={styles.image} />
            <div className={styles.content}>
                <h1 className={styles.title}>{story?.addstory[0]?.heading}</h1>
                <p className={styles.desc}>{story?.addstory[0]?.description}</p>
            </div>
        </div>
           
  )
}

export default Storycard