import { useState } from "react";
import Usercontext from "./Usercontext.js";

const Usercontextprovider = ({ children }) => {
    const [makestory, Setmakestory] = useState(false);
    const [showslidepost,Setshowslidepost] = useState(false);
    const [viewstory,Setviewstory]=useState(false)
    const [postdata,Setpostdata] = useState("");
    const [showmodal,Setshowmodal] = useState("")
    const [activepost,Setactivepost]=useState("")
    const [loggedinstate,Setloggedinstate] = useState(true)
      const [loading, setLoading] = useState(true);
    return (
        <Usercontext.Provider
            value={{
               makestory,
               Setmakestory,
               showslidepost,
               Setshowslidepost,
                postdata,
                Setpostdata,
                showmodal,
                Setshowmodal,
                viewstory
                ,Setviewstory,
                activepost,
                Setactivepost,
                loggedinstate,
                Setloggedinstate,
                loading,
                setLoading
            }}
        >
            {children}
        </Usercontext.Provider>
    );
};

export default Usercontextprovider;