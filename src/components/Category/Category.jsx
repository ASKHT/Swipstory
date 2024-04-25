import React from "react";
import styles from "./Category.module.css";
import food from "../../assets/category/food.jpg"
import health from "../../assets/category/health.jpg"
import travel from "../../assets/category/travel.jpg"
import movies from "../../assets/category/movie.jpg"
import education from "../../assets/category/education.jpg"
import all from "../../assets/category/all.jpg"
const Category = ({ handleCategoryClick, categories, selectedCategory }) => {
  const images = {
    food: food,
    health: health,
    travel: travel,
    movie: movies,
    education: education,
  };

  return (
    <div className={styles.categories}>
      <div
        className={styles.category}
        onClick={() => handleCategoryClick("All")}
        style={{
          backgroundImage: `url(${all})`,
          border: "All" === selectedCategory ? "0.3rem solid #73abff" : "none",
        }}
      >
        <h3 className={styles.categoryName}>ALL</h3>
      </div>

      {categories &&
        categories.map((category, index) => (
          <div
            className={styles.category}
            key={index}
            onClick={() => handleCategoryClick(category)}
            style={{
              backgroundImage: `linear-gradient(#00000099, #00000099),
              ${
                category === "food"
                  ? `url(${images.food})`
                  : category === "travel"
                  ? `url(${images.travel})`
                  : category === "movie"
                  ? `url(${images.movie})`
                  : category === "education"
                  ? `url(${images.education})`
                  : `url(${images.health})`
              }`,
              border:
                category === selectedCategory ? "0.3rem solid #73abff" : "none",
            }}
          >
            <h3 className={styles.categoryName}>
                {category[0].toUpperCase()+ category.slice(1)}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default Category;