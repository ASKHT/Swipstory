import styles from "./common.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/features/AuthSlice";
const Register = ({ setShowModal }) => {
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
   const handleLogin = async (e) => {
        e.preventDefault();
        if (!formvalue.username||!formvalue.password) {
           Setshowerror('mandatory field missing')
        } else {
            await dispatch(loginUserAction(formvalue))
             setTimeout(() => {
                 setShowModal("")
             }, 1000);
            if(error) {
               Setshowerror(error)
            }
        }
    }

    return (
        <Modal setShowModal={setShowModal}>
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
                  
                <button type="submit" className={styles.button} onClick={handleLogin}>
                    Login
                </button>
                  <p>{showerror}</p>
            </form>
        </Modal>
    );
};
export default Register;