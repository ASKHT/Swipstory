import { FaBookmark, FaHeart } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from "./Viewstory.module.css";
import education from "../../assets/category/education.jpg"
import food from "../../assets/category/food.jpg"
import health from "../../assets/category/health.jpg"
import movie from "../../assets/category/movie.jpg"
import travel from "../../assets/category/travel.jpg"
import { useEffect, useState, useRef,useContext } from "react";
import { getsinglepost } from "../../api/storyapi";
import { IoMdClose } from "react-icons/io";
import shareicon from "../../assets/Vector.png"
import { toast } from "react-toastify";
import {bookmarkpost,likepost} from "../../api/useractionapi.js"
import { getuserslice } from "../../redux/features/AuthSlice.js";
import { useSelector, useDispatch } from "react-redux";
import Usercontext from "../../Context/Usercontext.js";
import { useNavigate} from "react-router-dom";
const Viewstory = ({postid}) => {
    // console.log(postid)
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const userdetails = useSelector((state) => state.auth.data);
const category = [
  { id:1,name: "Food", image: food },
  {id:2, name: "Health and Fitness", image: health },
  {id:3, name: "Travel", image:travel },
  {id:4, name: "Movie", image: movie },
  {id:5, name: "Education", image:education }
];
   const {Setshowmodal,Setviewstory}=useContext(Usercontext)
    const [currentstoryindex, setcurrentstoryindex] = useState(0);
    const [slidepost,Setslidepost]=useState([])
    let clearstory = useRef(null);
    const backstory = () => {
        clearTimeout(clearstory.current);
        setcurrentstoryindex(currentstoryindex > 0 ? currentstoryindex - 1 : 0);
    };

    const nextstory = () => {
        clearTimeout(clearstory.current);
        setcurrentstoryindex(currentstoryindex < slidepost.length-1 ? currentstoryindex + 1 : currentstoryindex);
    };

    useEffect(() => {
        clearTimeout(clearstory.current);
        clearstory.current = setTimeout(() => {
            currentstoryindex < slidepost.length-1 && setcurrentstoryindex(currentstoryindex + 1);
        }, 3000);

        return () => {
            clearTimeout(clearstory);
        };
    }, [currentstoryindex,slidepost?.length]);

       useEffect(() => {
        getsinglepost(postid)
            .then((res) =>Setslidepost(res.post.addstory))
            .catch((error) => console.log(error));
    }, [userdetails]);
    // console.log(slidepost)
     const createsharelink = (postid) => {
        toast.success("Link copied to clipboard");
        window.navigator.clipboard.writeText(`http://localhost:5173/share/${postid}`);
    };

  const handlebookmarkpost = async () => {
    console.log(postid)
    try {
        if (userdetails) {
              await bookmarkpost(postid);
              dispatch(getuserslice());
        } else {
            Setshowmodal("login");
            Setviewstory(false);
            navigate("/")
        }
    } catch (error) {
        console.log(error);
    }
};

  const handlelikepost = async (slideid) => {
    try {
        if (userdetails) {
             await likepost({ postid, slideid });
            dispatch(getuserslice());
        } else {
             Setshowmodal("login");
            Setviewstory(false);
            navigate("/")
            
            
        }
    } catch (error) {
        console.log(error);
    }
};



    return (
        <div className={styles.storymodal}>
            <div className={styles.storycontainer}>
                <MdOutlineKeyboardArrowLeft
                    className={styles.lefticon}
                    onClick={currentstoryindex === 0 ? null : backstory}
                />
                  <span className={styles.check1}  onClick={currentstoryindex === 0 ? null : backstory}></span>
                <div className={styles.storyCard}>
                    <div className={styles.progressContainer}>
                        {slidepost.map((item, idx) => (
                            <div
                                key={item._id}
                                className={`${styles.progressBar} ${
                                    currentstoryindex > idx ? styles.final : currentstoryindex === idx ? styles.currentstoryindex : null
                                }`}
                            ></div>
                        ))}
                    </div>
                    <div className={styles.share}>
                        <IoMdClose  className={styles.close} onClick={()=>Setviewstory(false)} />
                        <img src={shareicon} alt="" className={styles.shareIcon} onClick={()=>createsharelink(postid)} />
                    </div>
                    <div className={styles.topwrapper}></div>
                    <img
                        src={currentstoryindex === slidepost?.length ? slidepost[currentstoryindex - 1]?.images : slidepost[currentstoryindex]?.images}
                        alt=""
                        className={styles.image}
                    />
                    <div className={styles.content}>
                        <h1 className={styles.title}> {currentstoryindex === slidepost?.length ? slidepost[currentstoryindex - 1]?.heading : slidepost[currentstoryindex]?.heading}</h1>
                        <p className={styles.desc}>
                           {currentstoryindex === slidepost?.length ? slidepost[currentstoryindex - 1]?.description : slidepost[currentstoryindex]?.description}
                        </p>
                        <div className={styles.userselect}>
                            <FaBookmark className={`${styles.bookmark} ${
                                    userdetails?.bookmarks.includes(postid) && styles.bookmarkiconcolor
                                }`}  onClick={() => handlebookmarkpost()}/>
                            <div className={styles.like}>
                                <FaHeart  className={`${styles.heart} ${
                                        userdetails?.likes.includes(slidepost[currentstoryindex]?._id) && styles.changelikecolor
                                    }`}onClick={() => handlelikepost(slidepost[currentstoryindex]?._id)}/>
                                <span className={styles.heart}>{slidepost[currentstoryindex]?.totallikes}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <span className={styles.check2}  onClick={nextstory}></span>
                <MdOutlineKeyboardArrowRight className={styles.righticon} onClick={nextstory} />
               
            </div>
        </div>
    );
};
export default Viewstory;