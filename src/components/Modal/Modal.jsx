import React from "react";
import styles from "./Modal.module.css";
import { IoClose } from "react-icons/io5";
const Modal = ({ children, setShowModal }) => {
  return (
    <div className={styles.container}onClick={() => setShowModal("")}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
             <IoClose className={styles.close}  onClick={() => setShowModal("")} />
                {children}
        </div>
    </div>
  );
};

export default Modal;