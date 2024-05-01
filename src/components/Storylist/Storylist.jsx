import { useEffect, useState, useContext } from "react";
import Storycard from "../Storycard/Storycard";
import styles from "./Storylist.module.css";
import { getallpostbycategory } from "../../api/storyapi";
import Usercontext from "../../Context/Usercontext";

const Storylist = ({ category }) => {
    const [post, setPost] = useState([]);
    // const [loading, setLoading] = useState(true); // Add loading state
    const [visiblePostsCount, setVisiblePostsCount] = useState(4); // Number of posts to display initially
    const { makestory,loading,setLoading } = useContext(Usercontext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getallpostbycategory(category);
                setPost(res.post);
                setLoading(false); // Set loading to false when data is fetched
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
            {loading ? ( 
                <div className={styles.loader}></div>
            ) : (
                <div className={styles.wrapper}>
                    {post.length > 0 ? (
                        post.slice(0, visiblePostsCount).map(post => (
                            <Storycard key={post._id} post={post} />
                        ))
                    ) : (
                        <p className={styles.nostory}>No Stories Available</p>
                    )}
                </div>
            )}
            {post.length > visiblePostsCount && (
                <button className={styles.loadmore} onClick={handleSeeMore}>
                    See More
                </button>
            )}
        </div>
    );
};

export default Storylist;
