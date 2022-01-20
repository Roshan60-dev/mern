import React from 'react'
import "./Main.css"
import bgimage1 from "../assets/bgimage1.jpg"
import logo from "../assets/logo.jpg"
import emer from "../assets/emercontact.jpg"
import relax from "../assets/relaximg.jfif"
import game from "../assets/gaming-2_orig.jpg"
import motivate from "../assets/motivation1.jpg"
import setting from "../assets/settings.png"
import home from "../assets/home.png"
import logout from "../assets/logout.png"
import { useHistory } from 'react-router-dom'
export default function Main() {
    const history = useHistory();
    return (
        <div>
            <div className="hdiv1">
           <img src={bgimage1} className="bgclass" alt="background"/>
           <div className="hdiv1i">
               <img src={logo} alt='image'  className="imgcur"/>
           </div>
       </div>
        {/* <div className="hdiv2">
           <div className="hdiv2t">
               <div className="hdiv2tl">
                 <img src={emer} alt='image'  id="imgicon" className="img1cls imgcur imghover aimgicon"/>
                <h3 className="h3cls1 ah3cls">Emergency</h3>
               </div>
               <div className="hdiv2tr">
                <img src={relax} alt='image'  id="imgicon" className="img2cls imgcur aimgicon" />
                <h3 className="h3cls2 ah3cls">Relax Me</h3>
               </div>

           </div>
           <div className="hdiv2t">
               <div className="hdiv2tl">
                  <img src={game} alt='image'  id="imgicon" className="img3cls imgcur aimgicon" />
                <h3 className="h3cls3 ah3cls">Entertain Me</h3>

                </div>
                  <div className="hdiv2tr">
                    <img src={motivate} alt='image'  id="imgicon" className="img4cls imgcur aimgicon"/>
                    <h3 className="h3cls4 ah3cls">Motivate Me</h3>

                 </div>
            </div>
            </div>  */}
            <div>
                <div>
                <img src={emer} alt='image' onClick={()=> history.push("/emergency")} id="imgicon" className="img1cls imgcur imghover aimgicon heightcls"/> 
                <h3 className="h3cls1 ah3cls">Emergency</h3>
                </div>
                <div>
                <img src={relax} alt='image' onClick={()=> history.push("/relaxme")}  id="imgicon" className="img2cls imgcur aimgicon" />   
                <h3 className="h3cls2 ah3cls">Relax Me</h3>

                </div>
                <div>
                <img src={game} alt='image'  id="imgicon" className="img3cls imgcur aimgicon" />   
                <h3 className="h3cls3 ah3cls">Entertain Me</h3>
                </div>
                <div>
                <img src={motivate} alt='image'  id="imgicon" className="img4cls imgcur aimgicon"/> 
                <h3 className="h3cls4 ah3cls">Motivate Me</h3>  
                </div>
            </div>
            
       <div className="footdivh">
        <img src={bgimage1} alt='image'  className="imgfoot"/>  
       </div>
       {/* <div className="footdivh1">
        <img src={setting} alt='image'  className="seticon bottomimgsize imgcur aimgicon"/>
        <img src={home} alt='image'  className="homeicon bottomimgsize imgcur aimgicon"/>
       <img src={logout} alt='image' className="logicon bottomimgsize imgcur aimgicon"/>

        </div> */}
        <div>
        <img src={setting} alt='image'  className="seticon bottomimgsize imgcur aimgicon"/>
        <img src={home} alt='image'  className="homeicon bottomimgsize imgcur aimgicon"/>
        <img src={logout} alt='image' onClick={()=> history.push("/")} className="logicon bottomimgsize imgcur aimgicon"/>
        </div>
        </div>
    )
}