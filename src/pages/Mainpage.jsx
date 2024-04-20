import React from 'react'
import Login from "../components/Authmodal/Loginmodal"
import Register from "../components/Authmodal/Registermodal"
import Header from "../components/Header/Header"
import Category from '../components/Category/Category'
import { useState } from 'react'
const Mainpage = () => {
       const [showModal, setShowModal] = useState("");
  return (
    <div>
          <Header setShowModal={setShowModal} />
            <Category />
            {showModal === "register" && <Register setShowModal={setShowModal} />}
            {showModal === "login" && <Login setShowModal={setShowModal} />}
    </div>
  )
}

export default Mainpage