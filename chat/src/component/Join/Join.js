import React, { useState } from 'react'
import {Link} from "react-router-dom";
import "./Join.css"
let user={name1:"",year1:""};


const Join = () => {
   
 const [name,setname]=useState("");
 const [year,setyear]=useState("");
 


const senduser=()=>{
    user.name1=document.getElementById("nameinput").value;
    user.year1=document.getElementById("yearinput").value;
    document.getElementById("nameinput").value="";
    document.getElementById("yearinput").value="";
}

  return (


    <div className="Joinmain">
        <div className="JoinContainer">
             <h1>Connect</h1>
             <input type="text" onChange={(e)=>setname(e.target.value)} id="nameinput" placeholder="Enter Your name" />
             <input type="text" onChange={(e)=>setyear(e.target.value)} id="yearinput" placeholder="Enter Your year" />
            <Link onClick={(e)=>(!name,!year)?e.preventDefault() :null } to="/main"><button onClick={senduser} >Logn in</button></Link>
        </div>
    </div>
  )
}

export default Join
export {user}


