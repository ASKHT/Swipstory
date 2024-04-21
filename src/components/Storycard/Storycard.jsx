import React from 'react'
import styles from "../Storycard/Story.module.css"
const Storycard = ({img}) => {
//   const arr=[1,2,3,4,5]
  return (
    
         <div className={styles.wrapper}>
                <div className={styles.storycard} style=                 {{backgroundImage:`url(${img}) `}}>
                      <div className={styles.content}>
                          <p>Text story</p>
                          <p>why are we texting like we all are </p>
                      </div>
                </div>
            </div>
           
  )
}

export default Storycard