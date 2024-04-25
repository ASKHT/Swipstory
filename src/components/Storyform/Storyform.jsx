// import React, { useEffect } from 'react'
import styles from "./Storyform.module.css"
import Form from "../Storyform/Form.jsx"
import { useState } from 'react'
import Modal from "../Modal/Modal.jsx"
import {createpost} from "../../api/storyapi.js"
const Storyform = ({setShowModal}) => {
const [addstory, Setaddstory] = useState([
         { id: 1, heading: '', description: '',  images: '' },
         { id: 2, heading: '', description: '',  images: '' },
         { id: 3, heading: '', description: '',  images: '' }
    ]);
    const [activeslide,Setactiveslide]=useState(0)
    const [category,Setcategory]=useState("")
    const [error,Seterror]=useState("")
  const handleaddslide = () => {
       Seterror("")
       const newslide=  { id: addstory.length+1,heading: "", description: "",images:""}
       Setaddstory([
            ...addstory,
             newslide
        ]);
        Setactiveslide(addstory.length);
};
   const removeslide = (id, idx, e) => {
    e.stopPropagation();
    Setaddstory(addstory.filter((item) => item.id !== id));
    Setactiveslide(idx);
};

  const handleFormChange = (e) => {
    Seterror("")
    const {name,value}=e.target;
    Setaddstory((prev) => {
        const newstory = [...prev];
         newstory[activeslide] = { ...newstory[activeslide],[name]: value };
        return newstory;
        });
    };
       const handlepost = async () => {
        addstory.map((post) => {
            if (!post.heading || !post.images || !post.description||!category) {
                Seterror("Please fill out all the fields");
            }
        });
        if (error.length === 0) {
           await createpost(addstory,category);
        }
    };

  return (
   
       <Modal setShowModal={setShowModal}>
        <div className={styles.layout}>
              {addstory.map((slide, index) => (
                       <div key={slide.id} className={`${styles.slidenumber} ${index === activeslide ? styles.activeSlide : ''}`}
                          onClick={() => Setactiveslide(index)}>

                            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                <p>slide {index+1}</p>
                                {index > 2 && (
                                    <div className={styles.crossbtn} >
                                        <p onClick={(e) => removeslide(slide.id,index-1,e)}>X</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

           
               {addstory.length>=6?(""):(
                     <div className={styles.slidenumber}>
                <div style={{display:"flex",alignItems: "center",gap:"15px",cursor:"pointer"}}  onClick={()=>handleaddslide()}>
                    <p>Add+</p>
                </div>
            </div>
               )}
            <div>
                <p>Add up to 6 Slides</p>
            </div>
        </div>
             <div>
                <Form handleFormChange={handleFormChange} addstory={addstory[activeslide]} category={category} Setcategory={Setcategory}/>
             </div>
        <div style={{display: 'flex',justifyContent: 'space-between',width:"80%"}}>
            <div style={{display: 'flex',gap:"1rem"}}>
                <button className={styles.btn1}>previous</button>
                <button className={styles.btn2}>Next</button>
            </div>
             <div>
                <button className={styles.btn3} onClick={handlepost}>Post</button>
             </div>
         </div>
            {error.length > 0 && <div style={{color:"red"}}>{error}</div>}

     </Modal>
  )
}

export default Storyform