import React from 'react'
import Login from "../components/Authmodal/Loginmodal"
import Register from "../components/Authmodal/Registermodal"
import Category from '../components/Category/Category'
import { useState,useEffect,useContext } from 'react'
import Storyform from '../components/Storyform/Storyform'
import { categories} from '../constants/category'
import Storylist from '../components/Storylist/Storylist'
import { getallpost } from '../api/storyapi'
import Userstory from '../components/userstory/Userstory'
import Usercontext from '../Context/Usercontext'
import Viewstory from '../components/Viewstory/Viewstory'
import { useSelector } from 'react-redux'
const Mainpage = () => {
      //  const [showModal, setShowModal] = useState("");
   const userdetails = useSelector((state) => state.auth.data);
  const [category, setCategory] = useState("All");
 const {postdata,showmodal,Setshowmodal,viewstory,activepost} = useContext(Usercontext);
  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <div>
          {/* <Header setShowModal={setShowModal} /> */}
            <Category
            categories={categories}
            handleCategoryClick={handleCategoryClick}
             selectedCategory={category}
           />
        {userdetails && category==="All"?<Userstory Setshowmodal={Setshowmodal}/>:""}
           {category=== "All" ? (
                categories.map((item) => <Storylist key={item} category={item} />)
               
            ) : (
                <Storylist category={category} />
            )}
            {showmodal === "register" && <Register Setshowmodal={Setshowmodal} />}
            {showmodal === "login" && <Login Setshowmodal={Setshowmodal} />}
            {showmodal==="addstory" && <Storyform Setshowmodal={Setshowmodal} />}
            {showmodal==="updatepost" && <Storyform Setshowmodal={Setshowmodal} postdata={postdata}/>}
            {viewstory===true && <Viewstory postid={activepost}/>}

    </div>
  )
}

export default Mainpage