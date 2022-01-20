import React from 'react'
import "./Emergency.css"
import bgimage1 from "../assets/bgimage1.jpg"
import logo from "../assets/logo.jpg"
import call from "../assets/call.jpg"
import friend3 from "../assets/friend3.jpg"
import friend2 from "../assets/friend2.jpg"
import friend3f from "../assets/friend3f.jpg"
import setting from "../assets/settings.png"
import home from "../assets/home.png"
import logout from "../assets/logout.png"
import { useHistory } from 'react-router-dom'

export default function Emergency() {
    const history = useHistory();
    return (
        <div>
            <div className="hdiv1">
           <img src={bgimage1} className="bgclass" alt="background"/>
           <div className="hdiv1i">
               <img src={logo} className="imgcur"/>
           </div>
       </div>
       <div className="hdiv2">
           <div className="hdiv2t">
               </div>
               {/* <div className="hdiv2tl">
                   <div className="emercall1">
                    <a href="tel:+91 7868866728"> <img src={call} id="imgicon" className="img1cls imgcur imghover aimgicon"/></a>
                <h3 className="h3cls1 h3cls11 ah3cls">Friend1</h3>
                </div>
               </div> */}
               
               <div>
                  <a href="tel:+91 7868866728"> <img src={call} id="imgicon" className="img1cls imgcur imghover aimgicon"/></a>
                <h3 className="fri1">Friend1</h3>
               </div>
               {/* <div className="hdiv2tr">
                   <div className="emercall2">
                    <a href="tel:+91 9361647915"> <img src={friend3} id="imgicon" className="img2cls imgcur aimgicon" /></a>
                <h3 className="h3cls2 dh3cls2 ah3cls">Friend2</h3>
                </div>
               </div> */}
               <div>
                 <a href="tel:+91 9361647915"> <img src={friend3} id="imgicon" className="imgpos3 imgcur aimgicon" /></a>
                <h3 className="fri2">Friend2</h3>
               </div>

           
           {/* <div className="hdiv2t">
               <div className="hdiv2tl">
                <a href="tel:+91 7339661090">  <img src={friend2} id="imgicon" className="img3cls imgcur dimg3cls aimgicon" /></a>
                <h3 className="h3cls3 dh3cls3 ah3cls">Friend3</h3>

                </div>
                 
            </div> */}
            <div>
             <a href="tel:+91 7339661090">  <img src={friend2} id="imgicon" className="img3cls imgcur dimg3cls aimgicon" /></a>
                <h3 className="fri3">Friend3</h3>
            </div>
            </div>

       <div className="footdivh">
        <img src={bgimage1} className="imgfoot"/>  
       </div>
     {/* <div className="footdivh1">
        <img src={setting} className="seticon bottomimgsize imgcur aimgicon"/>
        <a href="home1.html"><img src={home} className="homeicon bottomimgsize imgcur aimgicon" /></a>
       <a href  ="index.html"> <img src={logout} className="logicon bottomimgsize imgcur aimgicon"/></a>

        </div> */}
         <div>
        <img src={setting} alt='image'  className="seticon bottomimgsize imgcur aimgicon"/>
        <img src={home} alt='image' onClick={ ()=>history.push("/main")} className="homeicon bottomimgsize imgcur aimgicon"/>
        <img src={logout} alt='image' onClick={()=> history.push("/")} className="logicon bottomimgsize imgcur aimgicon"/>
        </div>
        </div>
    )
}
 
        
    
