import React from "react";
import styles from "./Modal.module.css";
import { IoClose } from "react-icons/io5";
const Modal = ({ children, Setshowmodal }) => {
  return (
    <div className={styles.container}onClick={() => Setshowmodal("")}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
             <IoClose className={styles.close}  onClick={() => Setshowmodal("")} />
                {children}
        </div>
    </div>
  );
};

export default Modal;