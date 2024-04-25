import React, { useState } from 'react'
import Mainpage from './pages/Mainpage.jsx'
// import {BrowserRouter,Routes,Route} from './components/BrowserRouter'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Storycard from "../src/components/Storycard/Storycard.jsx"
const App = () => {

  return (
    <div>
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
        <Mainpage/>
        {/* <Storycard/> */}
    </div>
  )
}

export default App