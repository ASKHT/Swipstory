import React from 'react'
import Login from "../components/Authmodal/Loginmodal"
import Register from "../components/Authmodal/Registermodal"
import Header from "../components/Header/Header"
import Category from '../components/Category/Category'
import { useState,useEffect } from 'react'
import Storyform from '../components/Storyform/Storyform'
import { categories} from '../constants/category'
import Storylist from '../components/Storylist/Storylist'
import { getallpost } from '../api/storyapi'
const Mainpage = () => {
       const [showModal, setShowModal] = useState("");
       const [category, setCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <div>
          <Header setShowModal={setShowModal} />
            <Category
            categories={categories}
            handleCategoryClick={handleCategoryClick}
             selectedCategory={category}
           />
           {category=== "All" ? (
                categories.map((item) => <Storylist key={item} category={item} />)
               
            ) : (
                <Storylist category={category} />
            )}
            {showModal === "register" && <Register setShowModal={setShowModal} />}
            {showModal === "login" && <Login setShowModal={setShowModal} />}
            {showModal==="addstory" && <Storyform setShowModal={setShowModal} />}
    </div>
  )
}

export default Mainpage