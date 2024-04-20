import React from 'react'
import styles from "./Storyform.module.css"
import Form from "../Storyform/Form.jsx"
import { useState } from 'react'
const Storyform = () => {
    const [addstory,Setaddstory]=useState({headig:"",description:"",category:"",images:[]})
  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <div className={styles.layout}>
            <div className={styles.slidenumber}>
                <div style={{display:"flex",alignItems: "center",gap:"15px"}}>
                    <p>Slide1</p>
                    <div className={styles.crossbtn}>
                        <p>X</p>
                    </div>
                </div>
            </div>
            <div className={styles.slidenumber}>
                <div style={{display:"flex",alignItems: "center",gap:"15px"}}>
                    <p>Slide1</p>
                    <div className={styles.crossbtn}>
                        <p>X</p>
                    </div>
                </div>
            </div>
            <div className={styles.slidenumber}>
                <div style={{display:"flex",alignItems: "center",gap:"15px"}}>
                    <p>Slide1</p>
                    <div className={styles.crossbtn}>
                        <p>X</p>
                    </div>
                </div>
            </div>
            <div className={styles.slidenumber}>
                <div style={{display:"flex",alignItems: "center",gap:"15px"}}>
                    <p>Add+</p>
                    
                </div>
            </div>
            <div>
                <p>Add up to 6 Slides</p>
            </div>
        </div>
                <div>
                    <Form/>
                </div>
         <div style={{display: 'flex',justifyContent: 'space-between'}}>
            <div style={{display: 'flex',gap:"1rem"}}>
                <button className={styles.btn1}>previous</button>
                <button className={styles.btn2}>Next</button>
            </div>
             <div>
                <button className={styles.btn3}>Post</button>
             </div>
         </div>
        </div>
    </div>
  )
}

export default Storyform