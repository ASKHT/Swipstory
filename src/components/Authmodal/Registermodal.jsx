import styles from "./common.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { registeruserslice } from "../../redux/features/AuthSlice";
const Register = ({ Setshowmodal }) => {
    const [password,Setshowpassword] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.data);
    const  [showerror,Setshowerror]=useState("")
    const [formvalue, Setformvalue] = useState({
        username:'',
        password:''
    });

    const handleChange = (e) => {
        Setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    };

    const registeruser = async (e) => {
        e.preventDefault()
        if (!formvalue.username||!formvalue.password) {
           Setshowerror('mandatory field missing')
        } else {
            await dispatch(registeruserslice(formvalue))
            if(showerror) {
               Setshowerror(error)
            }
        }
    }

    return (
        <Modal Setshowmodal={Setshowmodal}>
            <h1 className={styles.heading}>Register to SwipTory</h1>
            <form className={styles.form} >
                <div className={styles.field}>
                    <label htmlFor="username" className={styles.label}>
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
                            value={formvalue.password}
                            className={styles.input}
                            onChange={handleChange}
                        />
                        {password ? (
                            <IoIosEyeOff
                              
                                onClick={() => Setshowpassword(!password)}
                            />
                        ) : (
                            <IoIosEye
                               
                                onClick={() => Setshowpassword(!password)}
                            />
                        )}
                    </div>
                </div>
                <p>{showerror}</p>
                <button type="submit" className={styles.button} onClick={registeruser}>
                 Register
                </button>
            </form>
        </Modal>
    );
};
export default Register;