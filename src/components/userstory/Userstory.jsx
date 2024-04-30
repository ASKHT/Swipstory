import React, { useEffect, useState, useContext } from "react";
import Storycard from "../Storycard/Storycard";
import styles from "./Userstory.module.css";
import Usercontext from "../../Context/Usercontext";
import { FaRegEdit } from "react-icons/fa";
import { getuserposts } from "../../api/storyapi";
import { useSelector } from "react-redux";

const Userstory = ({ Setshowmodal }) => {
    const { makestory, Setpostdata, Setmakestory } = useContext(Usercontext);
    const [userstory, Setuserstory] = useState([]);
    const userdetails = useSelector((state) => state.auth.data);
    const [visibleUserStories, setVisibleUserStories] = useState(4); // Number of user stories to display initially

    const Editpost = (post) => {
        Setpostdata(post);
        Setshowmodal("updatepost");
        Setmakestory(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getuserposts();
                Setuserstory(res?.posts);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [makestory, userdetails]);

    const handleSeeMore = () => {
        setVisibleUserStories((prevCount) => prevCount + 4); // Increase the number of visible user stories by 4
    };

    return (
        <div className={styles.section}>
            <h2>Your Stories</h2>
            <div className={styles.storyContainer}>
                {userstory?.length > 0 ? (
                    userstory.slice(0, visibleUserStories).map((post) => (
                        <div key={post._id} className={styles.editbuttonposition}>
                            <Storycard post={post} />
                            <div className={styles.editbutton} onClick={() => Editpost(post)}>
                                <FaRegEdit style={{fontSize:"1.5rem"}}/>
                                <p>Edit</p>
                               
                            </div>
                        </div>
                    ))
                ) : (
                    <p className={styles.noStory}>No Stories Available</p>
                )}
            </div>
            {userstory?.length > visibleUserStories && ( // Show "See More" button only if there are more user stories
                <button className={styles.seeMore} onClick={handleSeeMore}>
                    See More
                </button>
            )}
        </div>
    );
};

export default Userstory;
