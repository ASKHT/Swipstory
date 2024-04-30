import React, { useContext, useState } from 'react'
import Mainpage from './showswrapper/Mainpage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header.jsx"
import Usercontext from './Context/Usercontext.js';
import Postshare from './components/postshare/Postshare.jsx';
import Bookmark from './components/Bookmark/Bookmark.jsx';
import Notfound from './components/pages/Notfound.jsx';
const App = () => {
 const {Setshowmodal}=useContext(Usercontext)
  return (
    <BrowserRouter>
       <ToastContainer
                position="bottom-center"
                autoClose={1000}
                limit={1}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition:Slide
            />
            <Header Setshowmodal={Setshowmodal}/>
                <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/bookmark" element={<Bookmark />} />
                <Route path="/share/:postid" element={<Postshare/>} />
                <Route path="*" element={<Notfound/>}/>
                </Routes>
       
        {/* <Storycard/> */}
    </BrowserRouter>
  )
}

export default App