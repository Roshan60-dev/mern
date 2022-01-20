import React from 'react'
import "./Signup.css"
import logo from "../assets/logo.jpg"
import { useHistory } from 'react-router-dom'
export default function Signup() {
    const history = useHistory();
    return (
        <div>
        <div class="ltdiv1"/>
<div>
    <div className="logodiv1">
        <img src={logo} alt="logo"/>
        </div>
</div>

    <div class="lh1">
    <h1>Sign Up</h1>
    </div>
    <div class="msglogin">
    <p>Create an account,it's Free</p>
</div>
<div className="form1">
    <div>
    <label for="uemail">Email</label><br/>
    <input type="email" id="uemail" placeholder="Enter your email"/> 
    </div><br/>
    <div>
        <label for="uemail">Password</label><br/>
        <input type="password" id="upassword" placeholder="Enter Your password"/> 
        </div><br></br>
        <div>
        <label for="uemail">Confirm Password</label><br/>
        <input type="password" id="upassword" placeholder="Enter Your password"/> 
        </div>
</div><br></br>
<div class="signupbtn">
    <button class="hovereff" onClick={()=>history.push("/login")}>Sign up</button>
    <p>Already have account? Login</p>
</div>
<div class="dsigndiv">

</div>
</div>
    
            
    )
}

