import { useEffect, useState, useContext } from "react";
import Storycard from "../Storycard/Storycard";
import styles from "./Storylist.module.css";
import { getallpostbycategory } from "../../api/storyapi";
import Usercontext from "../../Context/Usercontext";
const Storylist = ({ category }) => {
    const [post, Setpost] = useState();
    const {makestory}=useContext(Usercontext);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await getallpostbycategory(category);
            Setpost(res.post);
        } catch (error) {
            console.log(error);
        }
    };

    fetchData();

}, [category, makestory]);

    // console.log(category)
    // console.log(post)
    return (
        <div className={styles.container}>
            <h2>{`Top Stories about ${category}`}</h2>
            <div className={styles.wrapper}>
                {post?.length > 0 ? (
                    post?.map((post) => <Storycard key={post._id} post={post}   />)
                ) : (
                    <p className={styles.nostory}>No Stories Available</p>
                )}
            </div>
            <button className={styles.loadmore}>See More</button>
        </div>
    );
};
export default Storylist;