import { useEffect, useState, useContext } from "react";
import Storycard from "../Storycard/Storycard";
import styles from "./Storylist.module.css";
import { getallpostbycategory } from "../../api/storyapi";
const Storylist = ({ category }) => {
    const [post, Setpost] = useState();
    useEffect(() => {
        getallpostbycategory(category)
            .then((res) => Setpost(res.post))
            .catch((error) => console.log(error));
    }, [ category]);
    // console.log(category)
    // console.log(post)
    return (
        <div className={styles.container}>
            <h2>{`Top Stories about ${category}`}</h2>
            <div className={styles.wrapper}>
                {post?.length > 0 ? (
                    post?.map((story) => <Storycard key={story._id} story={story} />)
                ) : (
                    <p className={styles.nostory}>No Stories Available</p>
                )}
            </div>
            <button className={styles.loadmore}>See More</button>
        </div>
    );
};
export default Storylist;