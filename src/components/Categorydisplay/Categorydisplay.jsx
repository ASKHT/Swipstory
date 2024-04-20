import React from 'react'
import styles from "../Categorydisplay/Categorydisplay.module.css"
import Storycard from "../Storycard/Storycard.jsx"
import testimg from "../../assets/category/food.jpg"
const Categorydisplay = ({input}) => {
    const arr=[1,2,3,4]
  return (
    <div>
        {input==="all"?(
            <div className={styles.container}>
                  <div className={styles.storytext}>
                       <p>Top Stories from Health and Fitness</p>
                        <div className={styles.cardalignment}>
                       {arr.map((item)=>(
                      <Storycard img={testimg}/>
                   ))}
                  </div>
                  <button className={styles.seemorebtn}>See more</button>
                  </div>
         
                <div className={styles.storytext}>
                       <p>top Stories from Education</p>
                        <div className={styles.cardalignment}>
                       {arr.map((item)=>(
                      <Storycard img={testimg}/>
                   ))}
                  </div>
                   <button className={styles.seemorebtn}>See more</button>
                  </div>
               
                 <div className={styles.storytext}>
                        <p>top Stories from Food</p>
                        <div className={styles.cardalignment}>
                       {arr.map((item)=>(
                      <Storycard img={testimg}/>
                   ))}
                  </div>
                   <button className={styles.seemorebtn}>See more</button>
                  </div>
               
                <div className={styles.storytext}>
                     <p>top Stories from Health</p>
                        <div className={styles.cardalignment}>
                       {arr.map((item)=>(
                      <Storycard img={testimg}/>
                   ))}
                  </div>
                   <button className={styles.seemorebtn}>See more</button>
                  </div>
               
                   <div className={styles.storytext}>
                    <p>top Stories from Travel</p>
                        <div className={styles.cardalignment}>
                       {arr.map((item)=>(
                      <Storycard img={testimg}/>
                   ))}
                  </div>
                   <button className={styles.seemorebtn}>See more</button>
                  </div>
            </div>
        ):(
            <div>
                  <div className={styles.storytext}>
                       <p>Top Stories from {input}</p>
                        <div className={styles.cardalignment}>
                       {arr.map((item)=>(
                      <Storycard img={testimg}/>
                   ))}
                  </div>
                   <button className={styles.seemorebtn}>See more</button>
                  </div>
               
            </div>
        )}
    </div>
  )
}

export default Categorydisplay