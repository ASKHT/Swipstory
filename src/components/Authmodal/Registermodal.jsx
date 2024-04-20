import styles from "./common.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";

import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Register = ({ setShowModal }) => {
    const [password,Setshowpassword] = useState(false);

    const [formvalue, Setformvalue] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        Setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Modal setShowModal={setShowModal}>
            <h1 className={styles.heading}>Register to SwipTory</h1>
            <form className={styles.form} onClick={handleSubmit}>
                <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>
                        Username
                    </label>
                    <div className={styles.inputcontainer}>
                        <input
                            type="text"
                            id="email"
                            placeholder="Enter username"
                            name="email"
                            value={formvalue.email}
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
                <button type="submit" className={styles.button}>
                    Register
                </button>
            </form>
        </Modal>
    );
};
export default Register;