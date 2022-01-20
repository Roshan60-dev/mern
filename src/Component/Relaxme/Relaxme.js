import React from 'react'
import  {useState} from 'react';
import YouTube from 'react-youtube';

import "./Relaxme.css"
import bgimage1 from "../assets/bgimage1.jpg"
import logo from "../assets/logo.jpg"
// import video1 from "https://www.youtube.com/embed/dDJNdm6RarQ?controls=0"
// import video2 from "https://www.youtube.com/embed/cyEdZ23Cp1E?controls=0"
// import video3 from "https://www.youtube.com/embed/aIIEI33EUqI?controls=0"
// import video4 from "https://www.youtube.com/embed/zilmlTO5i9Q?controls=0"
import setting from "../assets/settings.png"
import home from "../assets/home.png"
import logout from "../assets/logout.png"
import { useHistory } from 'react-router-dom';
var getYouTubeID = require('get-youtube-id');


export default function Relaxme() {
    const history = useHistory();
    const  [id, setid] = useState("")

    function changeHandler(e){
        // console.log(e.target.value);
        setid(getYouTubeID(e.target.value));
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return (
        <div>
            <div className="hdiv1">
           <img src={bgimage1} className="bgclass" alt="background"/>
           <div className="hdiv1i">
               <img src={logo} className="imgcur" alt='logobg'/>
           </div>
       </div>
     
       <div className="footdivh">
        <img src={bgimage1} className="imgfoot" alt='imagee'/>  
       </div>
       <div className="footdivh1">
        {/* <img src={setting} className="seticon bottomimgsize imgcur aimgicon" alt={'imagee' }></img>
        <a href="home1.html"><img src={home} className="homeicon bottomimgsize imgcur aimgicon" alt='imagee'/></a>
       <a href="index.html"> <img src={logout} className="logicon bottomimgsize imgcur aimgicon" alt='imagee'/></a> */}

        </div>
        <div>
        <input type="text" onChange={changeHandler} required placeholder='copy and paste url...' className='searchbar'></input>
        <YouTube videoId={id} opts={opts}  />
         </div>
         <div className='listurl'>
             <ul>
                 <li><h3>https://www.youtube.com/watch?v=dDJNdm6RarQ</h3></li>
                <li><h3>https://www.youtube.com/watch?v=6oAdJjzXQS8</h3></li>
                <li><h3>https://www.youtube.com/watch?v=4T_3izBt5XM</h3></li>
                <li><h3>https://www.youtube.com/watch?v=79kpoGF8KWU</h3></li>
                <li><h3>https://www.youtube.com/watch?v=O-6f5wQXSu8</h3></li>
             </ul>
         </div>
        <div>
        <img src={setting} className="seticon bottomimgsize imgcur aimgicon img1r" alt={'imagee' }></img>
        <img src={home} className="homeicon bottomimgsize imgcur aimgicon img2r"  onClick={ ()=>history.push("/main")} alt='imagee'/>
        <img src={logout} className="logicon bottomimgsize imgcur aimgicon img3r" onClick={ ()=>history.push("/")} alt='imagee'/>
        </div>
        </div>
    
    )
}
