import React from 'react'
import styles from "./Storyform.module.css"
import Form from "../Storyform/Form.jsx"
import { useState } from 'react'
import Modal from "../Modal/Modal.jsx"
const Storyform = () => {
    const [addstory,Setaddstory]=useState({headig:"",description:"",category:"",images:[]})
    const [slides,Setslides]=useState([{id:1,content:"slide1"},{id:2,content:"slide2"},{id:2,content:"slide3"}])
     const handleaddslide=()=>{

     }
  return (
  
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <div className={styles.layout}>
              {slides.map((slide, index) => (
                        <div key={slide.id} className={styles.slidenumber}>
                            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                <p>{slide.content}</p>
                                {slides.length > 3 && (
                                    <div className={styles.crossbtn} onClick={() => handleRemoveSlide(slide.id)}>
                                        <p>X</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

           
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