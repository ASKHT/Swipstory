import React from 'react'
import notfound from "../../assets/notfound.gif"
import { useNavigate } from 'react-router-dom'
const Notfound = () => {
    const navigate = useNavigate()
    const navigatetohome=()=>{
            navigate("/")
    }
  return (
    <div style={{display:"flex",justifyContent:"center", marginTop:"1rem",alignItems:"center",textAlign:"center",flexDirection:"column"}}>
        <p style={{fontSize:"2rem",fontWeight:"bold"}}>Not Found</p>
        <img src={notfound} style={{width:"28rem",height:"28rem"}}/>
        <button style={{width:"5rem",height:"2rem",backgroundColor:"#FF7373",border:"none",borderRadius:"1rem",color:"white",fontWeight:"bold",cursor:"pointer"}}
        onClick={navigatetohome}
        >Home</button>
    </div>
  )
}

export default Notfound