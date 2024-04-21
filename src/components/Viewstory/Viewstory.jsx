import { FaBookmark, FaHeart } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import styles from "./Viewstory.module.css";
import education from "../../assets/category/education.jpg"
import food from "../../assets/category/food.jpg"
import health from "../../assets/category/health.jpg"
import movie from "../../assets/category/movie.jpg"
import travel from "../../assets/category/travel.jpg"
import { useEffect, useState, useRef } from "react";

const Viewstory = () => {
const category = [
  { id:1,name: "Food", image: food },
  {id:2, name: "Health and Fitness", image: health },
  {id:3, name: "Travel", image:travel },
  {id:4, name: "Movie", image: movie },
  {id:5, name: "Education", image:education }
];
    const [currentstoryindex, setcurrentstoryindex] = useState(0);

    let clearstory = useRef(null);

    const backstory = () => {
        clearTimeout(clearstory.current);
        setcurrentstoryindex(currentstoryindex > 0 ? currentstoryindex - 1 : 0);
    };

    const nextstory = () => {
        clearTimeout(clearstory.current);
        setcurrentstoryindex(currentstoryindex < category.length ? currentstoryindex + 1 : currentstoryindex);
    };

    useEffect(() => {
        clearTimeout(clearstory.current);
        clearstory.current = setTimeout(() => {
            currentstoryindex < category.length && setcurrentstoryindex(currentstoryindex + 1);
        }, 3000);

        return () => {
            clearTimeout(clearstory);
        };
    }, [currentstoryindex]);

    return (
        <div className={styles.storymodal}>
            <div className={styles.storycontainer}>
                <MdOutlineKeyboardArrowLeft
                    className={styles.lefticon}
                    onClick={currentstoryindex === 0 ? null : backstory}
                />
                <div className={styles.storyCard}>
                    <div className={styles.progressContainer}>
                        {category.map((item, idx) => (
                            <div
                                key={item.id}
                                className={`${styles.progressBar} ${
                                    currentstoryindex > idx ? styles.final : currentstoryindex === idx ? styles.currentstoryindex : null
                                }`}
                            ></div>
                        ))}
                    </div>
                    <div className={styles.share}>
                        <IoClose className={styles.close} />
                        {/* <img src={shareIcon} alt="" className={styles.shareIcon} /> */}
                    </div>
                    <div className={styles.topwrapper}></div>
                    <img
                        src={currentstoryindex === category.length ? category[currentstoryindex - 1]?.image : category[currentstoryindex]?.image}
                        alt=""
                        className={styles.image}
                    />
                    <div className={styles.content}>
                        <h1 className={styles.title}>Heading Comes Here</h1>
                        <p className={styles.desc}>
                            Inspirational designs, illustrations, and graphic elements from the world’s best designers.
                        </p>
                        <div className={styles.userselect}>
                            <FaBookmark className={styles.bookmark} />
                            <div className={styles.like}>
                                <FaHeart className={styles.liked} />
                                <span className={styles.heart}>0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <MdOutlineKeyboardArrowRight className={styles.righticon} onClick={nextstory} />
            </div>
        </div>
    );
};
export default Viewstory;