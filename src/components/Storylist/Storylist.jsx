import { useEffect, useState, useContext } from "react";
import Storycard from "../Storycard/Storycard";
import styles from "./Storylist.module.css";
import { getallpostbycategory } from "../../api/storyapi";
import Usercontext from "../../Context/Usercontext";

const Storylist = ({ category }) => {
    const [post, Setpost] = useState([]);
    const [visiblePostsCount, setVisiblePostsCount] = useState(4); // Number of posts to display initially
    const { makestory } = useContext(Usercontext);

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

    const handleSeeMore = () => {
        setVisiblePostsCount(prevCount => prevCount + 4); // Increase the number of visible posts by 4
    };

    return (
        <div className={styles.container}>
            <h2>{`Top Stories about ${category}`}</h2>
            <div className={styles.wrapper}>
                {post.length > 0 ? (
                    post.slice(0, visiblePostsCount).map(post => (
                        <Storycard key={post._id} post={post} />
                    ))
                ) : (
                    <p className={styles.nostory}>No Stories Available</p>
                )}
            </div>
            {post.length > visiblePostsCount && ( // Show "See More" button only if there are more posts
                <button className={styles.loadmore} onClick={handleSeeMore}>
                    See More
                </button>
            )}
        </div>
    );
};

export default Storylist;
