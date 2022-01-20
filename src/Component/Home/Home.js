import React from 'react'
// import { browserhistroy } from 'react-router';
 import "./Home.css"
 import logo from "../assets/logo.jpg"
 import { useHistory } from 'react-router-dom'
export default function Home() {
    // navigateLogin(){
    //     browserhistroy.push("./Login/Login");
    // }
    const history = useHistory();
    return(
        <div>
            <div class="tdiv">
    <div className="logodiv">
    <img src={logo} alt="logo"/>
    </div>
    <div class="headpro"> 
    <h1 class="ah3cls1">SUCIDE PREVENTION</h1>
    </div>
    <div class="logbutton">
    <button class="hovereff" onClick={()=> history.push("/login")}>Login</button>
    </div>
    <div class="signupbtn">
    <button className="hovereff" onClick={()=> history.push("/signup")}>Signup</button>
    </div>
    <div className="termc">
    <h3 className="hovterms">terms and conditions</h3>
    </div>
    </div>

        </div>
    )
}
    

    
