import React from 'react'
import "./Login.css"
import logo from "../assets/logo.jpg"
import {useHistory} from "react-router-dom"
export default function Login() {
    const history = useHistory();
    return (
        <div>
            <div className="ltdiv1"/>
    <div>
        <div className="logodiv1">
            <img src={logo} alt="logo"/>
            </div>
    </div>
    
        <div className="lh1">
        <h1>Login</h1>
        </div>
        <div className="msglogin">
        <p>Welcome back! Login with Your Credentials</p>
    </div>
    <div className="form1">
        <div>
        <label >Email</label><br/>
        <input type="email" id="uemail" placeholder="Enter your email"/> 
        </div><br/>
        <div>
            <label>Password</label><br/>
            <input type="password" id="password" placeholder="Enter Your password"/> 
            </div>
    </div>
    <div className="logbutton1">
        <button className="hovereff" onClick={()=> history.push("/main")}>Login</button><br/>
        <p>forgot your password?</p>
    </div>
    <div className="dsigndiv">
    
    </div>
    </div>
        
    )
}
