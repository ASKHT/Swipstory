import styles from "./common.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { loginuserslice } from "../../redux/features/AuthSlice";
const Login = ({ Setshowmodal }) => {
    const [password,Setshowpassword] = useState(false);
   const  [showerror,Setshowerror]=useState("")
 const dispatch = useDispatch();
    const user = useSelector((state) => state?.auth?.data);
    const [formvalue, Setformvalue] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        Setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    };

    
    //handle Login
   const loginuser = async (e) => {
        e.preventDefault();
        if (!formvalue.username||!formvalue.password) {
           Setshowerror('mandatory field missing')
        } else {
            await dispatch(loginuserslice(formvalue))
             setTimeout(() => {
                 Setshowmodal("")
             }, 1000);
            if(showerror) {
               Setshowerror(error)
            }
        }
    }

    return (
        <Modal Setshowmodal={Setshowmodal}>
            <h1 className={styles.heading}>Login to SwipTory</h1>
            <form className={styles.form} >
                <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>
                        Username
                    </label>
                    <div className={styles.inputcontainer}>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter username"
                            name="username"
                            value={formvalue?.username}
                            className={styles.input}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles.field}>
                    <label htmlFor="password" className={styles.label}>
                        Password
                    </label>
                    <div className={styles.inputcontainer}>
                        <input
                            type={password ? "text" : "password"}
                            id="password"
                            placeholder="Password"
                            name="password"
                            value={formvalue?.password}
                            className={styles.input}
                            onChange={handleChange}
                        />
                        {password ? (
                            <IoIosEyeOff
                                className={styles.eye}
                                onClick={() => Setshowpassword(!password)}
                            />
                        ) : (
                            <IoIosEye
                               className={styles.eye}
                                onClick={() => Setshowpassword(!password)}
                            />
                        )}
                    </div>
                </div>
                  
                <button type="submit" className={styles.button} onClick={loginuser}>
                    Login
                </button>
                  <p>{showerror}</p>
            </form>
        </Modal>
    );
};
export default Login;