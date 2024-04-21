import React from 'react'
import styles from "./Form.module.css"
const Form = () => {
  return (
    <div className={styles.wrapper}>
           <div style={{display:"flex",justifyContent:"space-around",width:"32rem",alignItems:"center"}}>
                 <label htmlFor="inputField">Heading:</label>
                <input 
                type="text" 
                id="inputField" 
                className={styles.input}
                />
           </div>
           <div style={{display:"flex",justifyContent:"space-around",width:"31.5rem",alignItems:"center"}}>
                <label htmlFor="description">Description:</label>
                <textarea 
                type="text" 
                id="inputField" 
                className={styles.input1}
                />
           </div>
           <div  style={{display:"flex",justifyContent:"space-around",width:"32.5rem",alignItems:"center"}}>
                <label htmlFor="imageurl">Image:</label>
                <input 
                type="text" 
                id="inputField" 
                className={styles.input}
                />
           </div>
           <div  style={{display:"flex",justifyContent:"space-around",width:"32rem",alignItems:"center"}}>
                <p>Category</p>
                <select className={styles.input}>
                <option value="SelectCategory">SelectCategory</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                </select>
           </div>

    </div>
  )
}

export default Form