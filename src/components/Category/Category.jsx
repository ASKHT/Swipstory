import React from 'react'
import all from "../../assets/category/all.jpg"
import education from "../../assets/category/education.jpg"
import food from "../../assets/category/food.jpg"
import health from "../../assets/category/health.jpg"
import movie from "../../assets/category/movie.jpg"
import travel from "../../assets/category/travel.jpg"
import styles from "../Category/Category.module.css"
import Categorydisplay from '../Categorydisplay/Categorydisplay'
import { useState } from 'react'
const Category = () => {
 const [categorytype,Setcategorytype]=useState("all")
const categories = [
  { name: "Food", image: food },
  { name: "Health and Fitness", image: health },
  { name: "Travel", image:travel },
  { name: "Movie", image: movie },
  { name: "Education", image:education }
];
  return (
      <div className={styles.container}>
         <div className={styles.categories}>
       <div
        className={styles.category}
        style={{
          backgroundImage: `url(${all})`,
         
        }}
         onClick={()=>Setcategorytype("all")}
      >
        <h3 className={styles.categoryName}>ALL</h3>
      </div>
      {categories.map((category, index) => (
        <div
          key={index}
            className={styles.category}
          style={{
            backgroundImage: `linear-gradient(#00000099, #00000099), url(${category.image})`
          }}
           onClick={()=>Setcategorytype(category.name)}
        >
          <h3 className={styles.categoryName}>{category.name.toUpperCase()}</h3>
        </div>
      ))}
    </div>
            <Categorydisplay input={categorytype}/>
      </div>
  )
}

export default Category